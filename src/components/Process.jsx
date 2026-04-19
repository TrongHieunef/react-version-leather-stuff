// components/Process.jsx
// ══════════════════════════════════════════════════════
//  PROCESS SECTION — Quy trình 4 bước
// ══════════════════════════════════════════════════════
const steps = [
  { num: '01', title: 'Chọn da',        desc: 'Da bò full-grain, chọn lọc về độ dày, màu và vân da tự nhiên.' },
  { num: '02', title: 'Thiết kế & cắt', desc: 'Mỗi mẫu vẽ tay, phiên bản riêng theo yêu cầu. Cắt chính xác từng mm.' },
  { num: '03', title: 'Khâu tay',        desc: 'Saddle stitch truyền thống — bền gấp đôi máy khâu, đẹp theo năm tháng.' },
  { num: '04', title: 'Hoàn thiện',      desc: 'Đánh cạnh, burnish và dưỡng ẩm tự nhiên. Đóng gói thủ công tỉ mỉ.' },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-inner">
        <div className="process-header">
          <div className="section-label">Quy trình</div>
          <h2 className="section-title">Từ nguyên liệu đến <em>tuyệt tác</em></h2>
        </div>
        <div className="process-steps">
          {steps.map(s => (
            <div className="process-step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}