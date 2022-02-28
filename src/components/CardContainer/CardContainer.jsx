const CardContainer = ({ className, children }) => {
  const containerClasses = "card " + className;
  return <section className={containerClasses}>{children}</section>;
};

export default CardContainer;
