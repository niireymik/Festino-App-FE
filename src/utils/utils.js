export const formatPhoneNum = (phoneNum) => {
  if (phoneNum === '') return '';
  return phoneNum.replace(/-/g, '');
};

export const formatPrice = (price) => {
  if (price === '') return '';
  if (typeof price === 'string') price = parseInt(price);
  return price.toLocaleString('ko-KR');
};

export const formatText = (text) => {
  return text.split('\n');
};

export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};
