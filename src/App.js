
import React from 'react';
import './App.css';
import "./styling/style.css";
import forest1 from './forest.jpg';

function App() {
 
  return (
    <>
    <div   style={{border:"solid 1px black", maxWidth:"100vw"}}>
  
    <h1 className='title red'>Slim-Developper</h1>
    
    <br/>
   
    <img src="/logo512.png" alt="logo512"/>
  
    <br/>
    <div className="forest-container">
            <img src={forest1} alt=""/>
        </div>
    
    </div>
    
    <video width="320" height="240" controls>
    
    <source src="./css.mp4" type="video/mp4" />
    
    </video>
    
</>
    
  );
  
}   
  


export default App;
