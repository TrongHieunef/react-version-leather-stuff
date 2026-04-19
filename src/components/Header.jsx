// components/Header.jsx
// ══════════════════════════════════════════════════════
//  HEADER / NAV
// ══════════════════════════════════════════════════════
export default function Header() {
  return (
    <nav>
      <a className="nav-logo" href="#">TuaNas</a>
      <ul className="nav-links">
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#catalog">Sản phẩm</a></li>
        <li><a href="#process">Quy trình</a></li>
        <li><a href="https://zalo.me/0382152305" target="_blank" rel="noreferrer">Liên hệ</a></li>
      </ul>
    </nav>
  );
}