// App.jsx
// ══════════════════════════════════════════════════════
//  ROOT APP — Lắp ráp toàn bộ sections + Modal
// ══════════════════════════════════════════════════════
import { useState } from 'react';

import Header      from './components/Header.jsx';
import Hero        from './components/Hero.jsx';
import Catalog     from './components/Catalog.jsx';
import Process     from './components/Process.jsx';
import Testimonial from './components/Testimonial.jsx';
import CtaSection  from './components/CtaSection.jsx';
import Footer      from './components/Footer.jsx';
import Modal       from './components/Modal.jsx';

import { useSanity } from './hooks/useSanity.js';

export default function App() {
  const { products, loading } = useSanity();
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleOpenModal(id) {
    const p = products.find(x => x._id === id);
    if (p) setSelectedProduct(p);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
  }

  return (
    <>
      <Header />
      <Hero />
      <Catalog
        products={loading ? [] : products}
        onOpenModal={handleOpenModal}
      />
      <Process />
      <Testimonial />
      <CtaSection />
      <Footer />

      {/* Modal — chỉ render khi có sản phẩm được chọn */}
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}