import './App.css';
import {useParams} from 'react-router-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react';

function Operaciones(){

  let num1=parseInt(useParams().numero1)
  let num2=parseInt(useParams().numero2)

  return(
    <div>
       <p>Suma: {num1+num2}</p>
        <p>Resta: {num1-num2}</p>
        <p>Multiplicación: {num1*num2}</p>
        <p>División: {num1/num2}</p>
        <p>Resto: {num1%num2}</p>

    </div>
  )
}

function App() {
  let [numero1, setNumero1]=useState(0)
  let [numero2, setNumero2]=useState(0)


  return (
<BrowserRouter>
       <Route path='/'>
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
       <Link to={`/calculando/${numero1}/${numero2}`}>Calcula!</Link>
      
        </Route>
      <Route exact path='/calculando/:numero1/:numero2'> 
      <Operaciones />    
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
