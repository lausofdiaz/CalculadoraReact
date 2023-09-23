import Image from 'next/image'
import styles from './page.module.css'
"use client";
import { useState } from 'react';

function Mensaje({texto}: any){
  return(
    <h3>{texto}</h3>
  )
}

function Par({numero}:any){
  return(
    <li>{numero} es par</li>
  )
}


function Impar({numero}:any){
  return(
    <li>{numero} es impar</li>
  )
}

export default function Home() {

const numeros:Array<number> = [
  0,1,2,3,4,5,6,7,8,9,10
];

  const lista = numeros.map(numero=>{
    const mod = numero %2;
   // if (mod==0){
     /// return <li>{numero} es par</li>
    ///}else{
     // return <li>{numero} es impar</li>
   // }
   return mod==0?<Par numero={numero}/>
    :<Impar numero={numero}/>

  });

  const listaPares = numeros.filter(numero =>{
    const mod = numero %2;
    return mod==0;
  });

  const [nombre, setNombre] = useState('Sofia');
  const test = () =>{
    setNombre('Laura');
  };

  return (
    <section>
      <h1>Hola</h1>
      <h2>{nombre}</h2>
      <button onClick={test}>Cambiar nombre</button>
      <ul>{lista}</ul>
      <ul>{listaPares} </ul>
      <Mensaje texto="mensaje"/>
      <Mensaje texto="mensaje A"/>
      <Mensaje texto="mensaje B"/>

      <Mensaje texto={nombre}/>

    </section>
  )
}
