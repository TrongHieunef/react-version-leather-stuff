// components/CtaSection.jsx
// ══════════════════════════════════════════════════════
//  CTA SECTION — Đặt hàng thủ công
// ══════════════════════════════════════════════════════
export default function CtaSection() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <div className="section-label" style={{ textAlign: 'center' }}>Đặt hàng</div>
        <h2 className="cta-title">
          Tạo ra vật phẩm<br /><em>chỉ dành cho bạn</em>
        </h2>
        <p className="cta-sub">
          Tùy chỉnh màu da, chỉ khâu, khắc tên hoặc initials. Liên hệ để được tư vấn miễn phí.
        </p>
        <a href="https://zalo.me/0382152305" target="_blank" rel="noreferrer" className="btn-primary">
          Đặt hàng thủ công
        </a>
      </div>
    </section>
  );
}