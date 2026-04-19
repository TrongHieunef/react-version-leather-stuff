// components/Hero.jsx
// ══════════════════════════════════════════════════════
//  HERO SECTION
// ══════════════════════════════════════════════════════
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">Thủ công tinh xảo từ 2019</div>
        <h1 className="hero-title">
          Nghệ thuật<br /><em>từ da thật</em>
        </h1>
        <p className="hero-sub">Mỗi đường khâu là một chữ ký</p>
        <p className="hero-desc">
          Sản phẩm da thủ công độc bản — ví, túi xách, ốp điện thoại, ốp camera và hộp AirPods.
          Mỗi chiếc là một tác phẩm riêng biệt.
        </p>
        <div>
          <a href="#catalog" className="btn-primary">Xem bộ sưu tập</a>
          <a href="https://zalo.me/0382152305" target="_blank" rel="noreferrer" className="btn-outline">
            Đặt hàng riêng
          </a>
        </div>
      </div>
    </section>
  );
}