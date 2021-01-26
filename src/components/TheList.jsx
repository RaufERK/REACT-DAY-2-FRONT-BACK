import { useContext } from "react";
import { TodoContext } from "../App.js";

const TheList = () => {
  const { list, setList, myUrl } = useContext(TodoContext);

  const delHandler = async (idValue) => {
    console.log("--idValue-->", idValue);
    const result = await fetch(myUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idValue }),
    });

    const newItems = await result.json();
    setList(newItems);

    // setList((pre) => {
    //   return pre.filter((item) => item._id !== idValue);
    // });
  };

  return (
    <div className="comp">
      <h1>List</h1>
      {true &&
        list.map(({ title, _id }, index) => (
          <li key={_id}>
            {_id}
            <button onClick={() => delHandler(_id)}>DEL</button>
            {title}
          </li>
        ))}
    </div>
  );
};

export default TheList;
