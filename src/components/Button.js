const Button = ({ action, children, text, variant }) => {
  return (
    <button
      onClick={action}
      className={
        "mx-1 bg-orange-600  text-white py-0.5 px-2 rounded font-semibold hover:bg-orange-800  " +
        (variant && variant)
      }
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
