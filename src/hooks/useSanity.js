// src/hooks/useSanity.js
// ══════════════════════════════════════════════════════
//  CUSTOM HOOK — Fetch sản phẩm từ Sanity CMS
// ══════════════════════════════════════════════════════
import { useState, useEffect } from 'react';
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VER, mockProducts } from '../data/products.js';

export function useSanity() {
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // 1. Phải có từ khóa 'async' trước định nghĩa hàm
    async function fetchProducts() {
      // Nếu ID chưa được cấu hình hoặc là placeholder thì dùng mock data
      if (!SANITY_PROJECT_ID || SANITY_PROJECT_ID === 'YOUR_PROJECT_ID') {
        setLoading(false);
        return;
      }

      const query = encodeURIComponent(
        `*[_type == "product"] | order(_createdAt desc) {
          _id, name, "slug": slug.current, category, price,
          description, isNew, isCustomizable,
          "imageUrl": image.asset->url,
          "images": images[].asset->url
        }`
      );
      
      const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VER}/data/query/${SANITY_DATASET}?query=${query}`;

      try {
        const res = await fetch(url); // Bây giờ await đã hợp lệ
        const data = await res.json();
        
        if (data.result && data.result.length > 0) {
          setProducts(data.result);
          setConnected(true);
        }
      } catch (err) {
        console.error('Sanity Error:', err.message);
        // Tự động giữ nguyên mockProducts đã set mặc định ở useState
      } finally {
        setLoading(false);
      }
    } // Kết thúc hàm fetchProducts

    fetchProducts();
  }, []); // Kết thúc useEffect

  return { products, loading, connected };
}