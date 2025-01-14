import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

export default function App() {
  return (
    <>
    <div className='p-4 flex flex-col gap-4'>
      <Lago color="blue"/>
      <Lago color="red"/>
      </div>
    </>
  );
}

function Lago(props) {
  let classes = "h-16 w-32"; 

  if (props.color === "blue") {
    classes += " bg-blue-500";
  }

  if (props.color === "red") {
    classes += " bg-red-500";
  }

  return <div className={classes}></div>;
}


