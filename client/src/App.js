import {useEffect, useState} from "react";
import './App.css';


function App() {

  const [count , setCount] = useState(0);
  const [log , setLog] = useState([]);

 useEffect(()=>{
        
    setLog((log)=>[...log , "Component has been Updated "])
    fetch("http://localhost:8787/api").then(res => res.text())
    .then(res=>{
    setLog((log)=>[...log ,res])
           
    })

  },[count])
  return (
    <div className="App">
      <header className="App-header">
      </header>

  <button onClick={()=>{ setCount((count)=>count += 1)   }}>Click me</button>
   
  <b>{count}</b> 

  
  <div><h2>Log Render Time</h2>{
      log.map((element , key)=>{
            return(
                
                <p key={key}>{element}</p>
                
            );
      })
  }</div>    
    </div>
  );
}


export default App;
