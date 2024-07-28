export const formatPrice = (price) => {
  if (price === '') return '';
  if (typeof price === 'string') price = parseInt(price);
  return price.toLocaleString('ko-KR');
};