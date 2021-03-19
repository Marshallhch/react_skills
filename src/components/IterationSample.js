import React from "react";

const IterationSample = () => {
  const names = ["Snow Man", "Ice", "Snow", "Wind"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
