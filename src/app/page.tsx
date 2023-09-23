"use client";
import React, { useState } from 'react';
import "./estilos.css";
export default function App() {

  const [valor, setValor] = useState([]);
  const handleClick = (val) =>{
    setValor(val);
  };

  
  return (
    <section>
      <div  className="calculadora">
      <div className="pantalla">
        {valor}
      </div>
      <div className="numeros">
      <button className="siete" onClick={() => handleClick('7')}>7</button>
      <button className="ocho" onClick={() => handleClick('8')}>8</button>
      <button className="nueve" onClick={() => handleClick('9')}>9</button>
      <button className="cuatro" onClick={() => handleClick('4')}>4</button>
      <button className="cinco" onClick={() => handleClick('5')}>5</button>
      <button className="seis" onClick={() => handleClick('6')}>6</button>
      <button className="uno" onClick={() => handleClick('1')}>1</button>
      <button className="dos" onClick={() => handleClick('2')}>2</button>
      <button className="tres" onClick={() => handleClick('3')}>3</button>
      <button className="cero" onClick={() => handleClick('0')}>0</button>
      </div>
      <div className="operacion">
      <button className="c" onClick={() => handleClick('')}>C</button>
      <button className="porcentaje" onClick={() => handleClick('%')}>%</button>
      <button className="mas" onClick={() => handleClick('+')}>+</button>
      <button className="menos" onClick={() => handleClick('-')}>-</button>
      <button className="division" onClick={() => handleClick('/')}>/</button>
      <button className="multiplicacion" onClick={() => handleClick('X')}>X</button>
      <button className="igual" onClick={() => handleClick('=')}>=</button>
      </div>
      </div>
    </section>
  );
}