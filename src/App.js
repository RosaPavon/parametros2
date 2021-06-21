import './App.css';
import {useParams} from 'react-router-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react';

function App() {
  let [numero1, setNumero1]=useState(0)
  let [numero2, setNumero2]=useState(0)


  return (
<BrowserRouter>
       <Route exact path='/'>
       <h2>Elige el número</h2>
           
       <div>
       <h2>{numero1}</h2>
       <button onClick={()=>{setNumero1(numero1 +1)}}>Sumar</button>
       <button onClick={()=>{setNumero1(numero1 -1)}}>Restar</button>
       </div>     
       <div>
       <h2>{numero2}</h2>
       <button onClick={()=>{setNumero2(numero2 +1)}}>Sumar</button>
       <button onClick={()=>{setNumero2(numero2 -1)}}>Restar</button>
       </div>
       <Link to={`calculando`}>Calcula!</Link>
      
        </Route>
      <Route exact path='/calculando'>
      <h2>Elige el número</h2>
           
           <div>
           <h2>{numero1}</h2>
           <button onClick={()=>{setNumero1(numero1 +1)}}>Sumar</button>
           <button onClick={()=>{setNumero1(numero1 -1)}}>Restar</button>
           </div>     
           <div>
           <h2>{numero2}</h2>
           <button onClick={()=>{setNumero2(numero2 +1)}}>Sumar</button>
           <button onClick={()=>{setNumero2(numero2 -1)}}>Restar</button>
           </div>
        <p>Suma: {numero1+numero2}</p>
        <p>Resta: {numero1-numero2}</p>
        <p>Multiplicación: {numero1*numero2}</p>
        <p>División: {numero1/numero2}</p>
        <p>Resto: {numero1%numero2}</p>

      
        <Link to={`/`}>Reset</Link>
        <div>
        <button onClick={()=>{setNumero1(numero1=0)}}>resetea numero1</button>
        <button onClick={()=>{setNumero2(numero2=0)}}>resetea numero2</button>

        </div>

      
   
        </Route>
</BrowserRouter>
  );
}

export default App;
