// components/ProductCard.jsx
// ══════════════════════════════════════════════════════
//  PRODUCT CARD
// ══════════════════════════════════════════════════════
import { getCatLabel, formatPrice, getSVG, getSVGKeyForCategory } from '../utils/helpers.js';

export default function ProductCard({ product, onOpen }) {
  const p = product;
  const priceText  = p.price ? formatPrice(p.price) : 'Liên hệ';
  const shortDesc  = p.description ? p.description.substring(0, 60) + '...' : '';
  const catLabel   = getCatLabel(p.category);
  const svgKey     = getSVGKeyForCategory(p.category);

  return (
    <div className="prod-card" data-id={p._id}>
      {p.isNew        && <span className="badge-new">Mới</span>}
      {p.isCustomizable && <span className="badge-custom">Custom</span>}

      <div className="prod-img">
        {/* SVG placeholder */}
        <div dangerouslySetInnerHTML={{ __html: getSVG(svgKey, 120) }} />

        {/* Ảnh từ Sanity (nếu có) */}
        {p.imageUrl && (
          <img
            className="sanity-img"
            src={p.imageUrl}
            alt={p.name}
            onLoad={e => e.target.classList.add('loaded')}
          />
        )}

        <div className="prod-hover-overlay">
          <button
            className="quick-view-btn"
            onClick={e => { e.stopPropagation(); onOpen(p._id); }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>

      <div className="prod-body" onClick={() => onOpen(p._id)}>
        <div className="prod-cat-tag">{catLabel}</div>
        <div className="prod-name">{p.name || 'Sản phẩm không tên'}</div>
        <div className="prod-desc-short">{shortDesc}</div>
        <div className="prod-footer">
          <div className="prod-price">Từ {priceText}</div>
          <button className="prod-wishlist" onClick={e => e.stopPropagation()} title="Yêu thích">♡</button>
        </div>
      </div>
    </div>
  );
}