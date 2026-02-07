
import { useState } from 'react';



function Counter() {

  const [count, setCount] = useState(0);

  function AddOne(){
   setCount(count + 1) 
;  }
console.log(count)
  return (
    <div className="App">
      <button onClick={AddOne}> Incriment</button>
      <h1> The count is {count} </h1>
    </div>
  );
}


function NameList(){
  const [list, setList] = useState(['Alice', 'Bob', 'Charlie']);
const [name, setName] = useState('');

const AddName = () => {
  setList([...list,name])
  setName('');
}
  return(
    <div>
      <ul>
      {list.map((name) => (
        <li key={name}>{name}</li>
      ))}
    
      </ul>
      <input type="text" placeholder="Enter a name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={AddName}>Add Name</button>
    </div>
  )
  
}
function App() {
  return(
    <>
    <h1 style={{textAlign:'center'}}>UseState</h1>
<Counter />
<Counter />
<NameList />
</>
  )
}
export default App;
