import logo from './logo.svg';
import './App.css';
import { useState, } from 'react';
import News from './components/News';


function App() {
  const[category,setCategory]=useState("general");
  return (
    <div className="App">
      <h1 className='fon'>News Application</h1>
      <div className="categorybuttons">
      <button onClick={()=>setCategory("General")}>General</button>
      <button onClick={()=>setCategory("Technology")}>Techology</button>
      <button onClick={()=>setCategory("Sports")}>Sports</button>

 </div>
 <News category={category}/>
    </div>
  );
}

export default App;
