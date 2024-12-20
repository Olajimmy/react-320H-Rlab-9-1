import { useState, useEffect } from "react";
function Test() {
  const [list, setList] = useState(["hello, ", "how are you"]);
  const [newlist, setNewList] = useState("");
  const [save, setSave] = useState("");

  //textbox
  function handleChange(event) {
    setNewList(event.target.value);
  }
  //save button
  function handleSave() {
    const updatedList = [save, ...list];
    setList(updatedList);
  }
  //edit button
  function handleClick() {
    const edited = [newlist, ...list];
    setSave(edited);
  }
  return (
    <>
      <h1>test</h1>
      <input onChange={handleChange} value={newlist} type="text" />
      <button onClick={() => handleClick}>edit</button>
      <button onClick={handleSave}>Save</button>
      <h2>{list} </h2>
    </>
  );
}
export default Test;
