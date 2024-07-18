export const handleStopScroll = (modalstates) => {
  const modalState = modalstates.some((modalState) => modalState);

  if (modalState) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
};
