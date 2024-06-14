const Box = (props) => {
  //  Write your code here.
  const { content, sizes } = props.source;
  return <p className={sizes}>{content}</p>;
};

const sourceSmall = {
  content: "Small",
  sizes: "box-sizes-small",
};
const sourceMedium = {
  content: "Medium",
  sizes: "box-sizes-medium",
};
const sourceBig = {
  content: "Big",
  sizes: "box-sizes-big",
};
const element = (
  //  Write your code here.
  <div className="boxesCard">
    <h1 className="main-heading">Boxes</h1>
    <div className="box-container">
      <Box source={sourceSmall} />
      <Box source={sourceMedium} />
      <Box source={sourceBig} />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
