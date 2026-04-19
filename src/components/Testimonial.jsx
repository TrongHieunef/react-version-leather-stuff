// components/Testimonial.jsx
// ══════════════════════════════════════════════════════
//  TESTIMONIAL / QUOTE SECTION
// ══════════════════════════════════════════════════════
import { useState, useEffect } from 'react';
import { quotes } from '../data/products.js';

export default function Testimonial() {
  const [qi, setQi] = useState(0);

  // Auto-rotate mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setQi(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const q = quotes[qi];

  return (
    <section className="testimonial">
      <div className="testimonial-inner">
        <div className="quote-mark">"</div>
        <p className="quote-text">{q.text}</p>
        <div className="quote-author">— <span>{q.author}</span>, TP. Hồ Chí Minh</div>
        <div className="quote-dots">
          {quotes.map((_, i) => (
            <div
              key={i}
              className={`qdot${i === qi ? ' active' : ''}`}
              onClick={() => setQi(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}