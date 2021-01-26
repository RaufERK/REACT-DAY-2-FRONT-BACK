import { useRef, useContext } from "react";
import { TodoContext } from "../App";

const UseRefExpl = () => {
  const { setList } = useContext(TodoContext);
  const inputRef = useRef();

  const addItem = async () => {
    await setList((pre) => [
      ...pre,
      { title: inputRef.current.value, id: Math.random() },
    ]);
    inputRef.current.value = "";
  };
  return (
    <div className="comp">
      <input ref={inputRef} />
      <button onClick={addItem}>ADD with REF</button>
    </div>
  );
};

export default UseRefExpl;
