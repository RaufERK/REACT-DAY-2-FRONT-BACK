import { useState, useContext } from "react";
import { TodoContext } from "../App";

const TheInput = () => {
  const { setList } = useContext(TodoContext);

  const [title, setTitle] = useState("");

  const onChangeHandler = ({ target }) => {
    setTitle(target.value);
  };

  const clickHandler = () => {
    setList((pre) => [...pre, { title, id: Math.random() }]);
    setTitle("");
  };

  return (
    <div className="comp">
      <input onChange={onChangeHandler} value={title} />
      <button onClick={clickHandler}>ADD</button>
    </div>
  );
};

export default TheInput;
