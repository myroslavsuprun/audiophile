const IconButton = ({ Icon, btnType = 'button', children }) => {
  return (
    <button type={btnType}>
      {children}
      <Icon />
    </button>
  );
};

export default IconButton;
