"use client";
import React, { useState } from 'react';
import "./estilos.css";
export default function App() {

  const [valor, setValor] = useState('');
 
  const borrar = (v)=>{
    setValor('')
  }
  
  const calcular = ()=>{
    setValor(eval(valor).toString());
  }

  
  return (
    <section>
      <div  className="calculadora">
      <div className="pantalla">
      {valor}
      </div>
      <div className="numeros">
      <button className="siete" onClick={() => setValor(valor+'7')}>7</button>
      <button className="ocho" onClick={() => setValor(valor+'8')}>8</button>
      <button className="nueve" onClick={() => setValor(valor+'9')}>9</button>
      <button className="cuatro" onClick={() => setValor(valor+'4')}>4</button>
      <button className="cinco" onClick={() => setValor(valor+'5')}>5</button>
      <button className="seis" onClick={() => setValor(valor+'6')}>6</button>
      <button className="uno" onClick={() => setValor(valor+'1')}>1</button>
      <button className="dos" onClick={() => setValor(valor+'2')}>2</button>
      <button className="tres" onClick={() => setValor(valor+'3')}>3</button>
      <button className="cero" onClick={() => setValor(valor+'0')}>0</button>
      </div>
      <div className="operacion">
      <button className="c" onClick={borrar}>C</button>
      <button className="porcentaje" onClick={() => setValor(valor+'%')}>%</button>
      <button className="mas" onClick={() => setValor(valor+'+')}>+</button>
      <button className="menos" onClick={() => setValor(valor+'-')}>-</button>
      <button className="division" onClick={() => setValor(valor+'/')}>/</button>
      <button className="multiplicacion" onClick={() => setValor(valor+'*')}>X</button>
      <button className="igual" onClick={calcular}>=</button>
      </div>
      </div>
    </section>
  );
}