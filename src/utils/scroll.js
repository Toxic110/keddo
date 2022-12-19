export const scrollWindow = ({position}) => {
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
};

export const scrollToBottom = () => {
  const clientHeight = document.body.getBoundingClientRect().height;

  setTimeout(() => {
    scrollWindow({position: clientHeight});
  }, 100);
};
