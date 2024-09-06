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

export const prettyDate = (date) => {
  const dateObject = new Date(date);

  // 한국시간 (KST)으로 변환합니다.
  const options = {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  // 변환된 시간을 포맷팅합니다.
  const formatter = new Intl.DateTimeFormat('ko-KR', options);
  const formattedTime = formatter.format(dateObject);

  return formattedTime;
};

export const prettyPhoneNum = (phoneNum) => {
  if (phoneNum === '') return;
  return phoneNum.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
};
