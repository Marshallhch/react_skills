import React, { useState } from "react";

const IterationSampleWidthUseState = () => {
  const [names, setNames] = useState([
    { id: 1, text: "Snow Man" },
    { id: 2, text: "Ice" },
    { id: 3, text: "Snow" },
    { id: 4, text: "Wind" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}, {name.id}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
      <ul>{namesList}</ul>
    </div>
  );
};

export default IterationSampleWidthUseState;
