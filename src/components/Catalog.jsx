// components/Catalog.jsx
// ══════════════════════════════════════════════════════
//  CATALOG + FILTER BAR + PRODUCT GRID
// ══════════════════════════════════════════════════════
import { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import { filterCategories } from '../data/products.js';

export default function Catalog({ products, onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="catalog" id="catalog">
      <div className="catalog-header">
        <div>
          <div className="section-label">Bộ sưu tập</div>
          <h2 className="section-title">Tất cả sản phẩm <em>thủ công</em></h2>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar">
          {filterCategories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn${activeFilter === cat.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filtered.length === 0 ? (
          <div className="empty-state">Không có sản phẩm trong danh mục này.</div>
        ) : (
          filtered.map(p => (
            <ProductCard key={p._id} product={p} onOpen={onOpenModal} />
          ))
        )}
      </div>
    </section>
  );
}