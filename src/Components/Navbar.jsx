import React from "react";
import {useState} from 'react';
import {evaluate} from 'mathjs';

function Navbar(){
  const[result,setResult]=useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const clearInput = () => {
    setResult("");
  }

  const calculator = () => {
    try {
       const output = evaluate(result);
      setResult(output.toString());
    } catch (error) {
      setResult("Error");
    }
  };


  return(
    <div className="w-72 mx-auto mt-10 bg-gray-800 p-5 rounded-xl text-white shadow-xl">
       <h2 className="text-center text-xl font-bold mb-3">React Calculator</h2>
       <input 
       type="text"
       value={result}
       readOnly
       className="w-full h-12 text-right px-2 text-xl rounded bg-gray-900 mb-4"
       />

       <div className="grid grid-cols-4 gap-4">
        <button onClick={() => handleClick("7")} className="btn">7</button>
        <button onClick={() => handleClick("8")} className="btn">8</button>
        <button onClick={() => handleClick("9")} className="btn">9</button>
        <button onClick={() => handleClick("/")} className="btn bg-orange-500">/</button>


         <button onClick={() => handleClick("4")} className="btn">4</button>
        <button onClick={() => handleClick("5")} className="btn">5</button>
        <button onClick={() => handleClick("6")} className="btn">6</button>
        <button onClick={() => handleClick("*")} className="btn bg-orange-500">*</button>

        <button onClick={() => handleClick("1")} className="btn">1</button>
        <button onClick={() => handleClick("2")} className="btn">2</button>
        <button onClick={() => handleClick("3")} className="btn">3</button>
        <button onClick={() => handleClick("-")} className="btn bg-orange-500">-</button>

        <button onClick={() => handleClick("0")} className="btn col-span-2">0</button>
        <button onClick={() => handleClick(".")} className="btn">.</button>
        <button onClick={() => handleClick("+")} className="btn bg-orange-500">+</button>

        <button onClick={clearInput} className="btn col-span-2 bg-red-500">CLEAR</button>
        <button onClick={calculator} className="btn col-span-2 bg-green-500"> =</button>

       </div>



    </div>

  )
}
export default Navbar