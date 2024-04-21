import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  //const items = ["Item 1","Item 2","Item 3","Item 4","Item 5"]
  const [items, setItems] = useState(["Item 1","Item 2","Item 3","Item 4","Item 5"]);
  const [value, setValue] = useState("");
function onValueChange(e){
  //console.log(e.target.value);
  setValue(e.target.value);
}
 
function onAdd(){
  console.log(value);
  
  const newItems = [...items, value];

  setItems(newItems);
  setValue("");
}

  return (
    <div className="App">
      <header className="App-header"> 
      <h2>To Do List</h2>
        <input type ="text" placeholder="Enter todo items" value={value} onChange={onValueChange}/>
      <button onClick= {onAdd}>Add </button>
<ol>
   {
    items.map((item,i)=>(<li key={i} style={{ color:"green"}}>{item}</li>))
   }

</ol>

      </header>
    </div>
  );
}

export default App;
