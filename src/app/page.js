"use client";
import page from "./page.module.css";
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number => number + 3)
        setNumber(number + 2);
      }}>+3</button>
    </>
  )
}
