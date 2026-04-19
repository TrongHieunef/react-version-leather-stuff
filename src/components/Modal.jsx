// components/Modal.jsx
// ══════════════════════════════════════════════════════
//  PRODUCT DETAIL MODAL
// ══════════════════════════════════════════════════════
import { useState, useEffect } from 'react';
import { getCatLabel, formatPrice, getSVG, getSVGKeyForCategory } from '../utils/helpers.js';

export default function Modal({ product, onClose }) {
  const [activeThumb, setActiveThumb] = useState(0);

  // Reset ảnh mỗi khi mở sản phẩm mới
  useEffect(() => { setActiveThumb(0); }, [product]);

  // Đóng khi nhấn Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Khoá scroll body khi modal mở
  useEffect(() => {
    document.body.style.overflow = product ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  if (!product) return null;

  const p = product;
  const allImages = [p.imageUrl, ...(p.images || [])].filter(Boolean);
  const currentImg = allImages[activeThumb];
  const svgKey = getSVGKeyForCategory(p.category);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleOrder() {
    onClose();
    window.open('https://zalo.me/0382152305', '_blank');
  }

  function handleCustom() {
    onClose();
    alert('Yêu cầu cá nhân hoá cho sản phẩm: ' + p.name + ' đã được ghi nhận.');
  }

  return (
    <div className="modal-backdrop open" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* ── PANEL ẢNH ── */}
        <div className="modal-img-panel">
          {/* SVG placeholder */}
          <div dangerouslySetInnerHTML={{ __html: getSVG(svgKey, 180) }} />

          {/* Ảnh Sanity */}
          {currentImg && (
            <img
              className="sanity-img"
              src={currentImg}
              alt={p.name}
              onLoad={e => e.target.classList.add('loaded')}
            />
          )}

          {/* Thumbnails (chỉ hiện khi có > 1 ảnh) */}
          {allImages.length > 1 && (
            <div className="modal-thumbs">
              {allImages.map((_, i) => (
                <div
                  key={i}
                  className={`modal-thumb${i === activeThumb ? ' active' : ''}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <div className="modal-thumb-dot" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── PANEL THÔNG TIN ── */}
        <div className="modal-info">
          {/* Eyebrow */}
          <div className="modal-eyebrow">
            <span className="modal-cat">{getCatLabel(p.category)}</span>
            {p.isNew          && <span className="modal-badge-new">Mới</span>}
            {p.isCustomizable && <span className="modal-badge-custom">Custom</span>}
          </div>

          {/* Tên */}
          <div className="modal-title">{p.name}</div>

          {/* Giá */}
          <div className="modal-price-block">
            <span className="modal-price-from">Từ</span>
            <span className="modal-price-main">{p.price ? formatPrice(p.price) : 'Liên hệ'}</span>
            <span className="modal-price-note">Giá có thể thay đổi theo tuỳ chỉnh</span>
          </div>

          <div className="modal-divider" />

          {/* Mô tả */}
          <p className="modal-desc">{p.description || ''}</p>

          {/* Thông số */}
          {p.specs && (
            <div className="modal-specs">
              {p.specs.map((s, i) => (
                <div className="spec-row" key={i}>
                  <span className="spec-label">{s.label}</span>
                  <span className="spec-val">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Màu */}
          {p.colors && p.colors.length > 0 && (
            <div>
              <div className="modal-colors-label">Màu da có sẵn</div>
              <div className="modal-colors">
                {p.colors.map((c, i) => (
                  <div
                    key={i}
                    className="color-swatch"
                    style={{ background: c.hex }}
                    data-name={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Feature badges */}
          <div className="modal-features">
            <div className="feat-item"><div className="feat-icon" />Da thật 100%</div>
            <div className="feat-item"><div className="feat-icon" />Khâu tay</div>
            <div className="feat-item"><div className="feat-icon" />Bảo hành 12 tháng</div>
            <div className="feat-item"><div className="feat-icon" />Giao toàn quốc</div>
          </div>

          {/* CTA buttons */}
          <div className="modal-ctas">
            <button className="modal-btn-order" onClick={handleOrder}>Đặt hàng ngay</button>
            <button className="modal-btn-custom" onClick={handleCustom}>Yêu cầu cá nhân hoá</button>
          </div>
        </div>
      </div>
    </div>
  );
}