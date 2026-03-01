const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`p-6 shadow-md hover:shadow-lg dark:shadow-zinc-400 rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
