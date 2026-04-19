// ══════════════════════════════════════════════════════
//  SANITY CONFIG — điền thông tin project của bạn
// ══════════════════════════════════════════════════════
export const SANITY_PROJECT_ID = '660r9kf9';
export const SANITY_DATASET    = 'production';
export const SANITY_API_VER    = '2024-01-01';

// ══════════════════════════════════════════════════════
//  DỮ LIỆU MẪU — dùng khi Sanity chưa kết nối
// ══════════════════════════════════════════════════════
export const mockProducts = [
  { _id: 'm1', name: 'Ví Da Nam Basic',      category: 'vi',        price: 450000, isNew: true },
  { _id: 'm2', name: 'Túi Tote Canvas Da',   category: 'tui',       price: 850000 },
  { _id: 'm3', name: 'Ốp Lưng iPhone Da',    category: 'op-lung',   price: 350000 },
  { _id: 'm4', name: 'Ốp Camera Vintage',    category: 'op-camera', price: 250000 },
  { _id: 'm5', name: 'Hộp Đựng AirPods Pro', category: 'airpods',   price: 280000 },
  { _id: 'm6', name: 'Dây Lưng Da Bò Ý',     category: 'day-lung',  price: 650000 },
  { _id: 'm7', name: 'Dây Đồng Hồ 22mm',     category: 'phu-kien',  price: 350000 },
  { _id: 'm8', name: 'Bìa Hộ Chiếu',         category: 'phu-kien',  price: 320000 },
];

// ══════════════════════════════════════════════════════
//  FILTER CATEGORIES
// ══════════════════════════════════════════════════════
export const filterCategories = [
  { key: 'all',      label: 'Tất cả' },
  { key: 'vi',       label: 'Ví da' },
  { key: 'tui',      label: 'Túi xách' },
  { key: 'op-lung',  label: 'Ốp lưng' },
  { key: 'op-camera',label: 'Ốp camera' },
  { key: 'airpods',  label: 'Hộp AirPods' },
  { key: 'day-lung', label: 'Dây lưng' },
  { key: 'phu-kien', label: 'Phụ kiện' },
];

// ══════════════════════════════════════════════════════
//  TESTIMONIALS
// ══════════════════════════════════════════════════════
export const quotes = [
  { text: 'Chiếc ví tôi nhận không chỉ là sản phẩm — đó là tác phẩm. Đường khâu hoàn hảo, da thơm, càng dùng càng đẹp.', author: 'Nguyễn Minh Khoa' },
  { text: 'Tôi đặt hộp AirPods có khắc tên. Khi nhận được, tôi không ngờ nó đẹp đến vậy.', author: 'Trần Thị Lan Anh' },
  { text: 'Đã tặng chồng chiếc ví Bifold. Anh ấy nói đây là món quà ý nghĩa nhất.', author: 'Phạm Thu Hương' },
];