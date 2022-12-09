import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElrm, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
    
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To do list</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items to list"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li>{inputList}</li>
             */}
            {Items.map((itemvalues, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemvalues}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
