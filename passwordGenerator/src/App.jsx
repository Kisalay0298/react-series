import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [string, setString] = useState(true)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const [isClicked, setIsClicked] = useState(false);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "zxcvbnmlkjhgfdsaqwertyuiopPOIUYTREWQASDFGHJKLMNBVCXZ";
    if(!string){
      str=""
    }
    if(num){
      str+="0987654321"
    }
    if(char){
      str+="!@#$%^&*()_+";
    }

    for(let inded=1; inded <= length; inded++){
      let temp=Math.floor(Math.random() * str.length +1 )
      pass+=str.charAt(temp)
    }
    setPassword(pass);

  },[length, string, num, char, setPassword])

  useEffect(() => {
    passwordGen();
  }, [length, string, num, char, passwordGen])

  return ( 
  <>
    <div className='flex w-full h-screen bg-slate-700 text-white justify-center'>
      <div className='mt-5 flex flex-col w-5/12 border-2 border-black h-40 items-center rounded-xl bg-slate-100 text-black'>
        <h1 className='text-3xl font-semibold text-orange-600 mb-5'>Password Generator</h1>
        <div className='flex flex-row w-full px-6 justify-center'>
          <input className='border-blue-600 border-2 w-full rounded-l-xl px-3 font-semibold outline-none' type="text" value={password} />
          <button className='text-white font-medium rounded-r-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-violet-700 dark:focus:ring-orange-800' onClick={() => navigator.clipboard.writeText(password)}>copy</button>
        </div>
        <div className='flex w-full m-4 px-7 justify-between'>
          <div className='flex'>
            <input type="range" 
              className='cursor-pointer mx-2 w-20'
              min={4}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            /><label>Length: {length}</label>
          </div>
          <div className='flex'>
            <input type="checkbox" 
              checked={string}
              className='mr-1'
              onChange={() => setString(!string)}
            />
            <label>String</label>
          </div>
          <div className='flex'>
            <input type="checkbox" 
              checked={num}
              className='mr-1'
              onChange={() => setNum(!num)}
            />
            <label>Number</label>
          </div>
          <div className='flex'>
            <input type="checkbox" 
              className='mr-1'
              checked={char}
              onChange={() => setChar(!char)}
            />
            <label>Char</label>
          </div>
        </div>
      </div>
    </div>
    <div className="flex h-screen justify-center items-center bg-gray-100">
      {/* Text with transition */}
      <span
        onClick={() => setIsClicked(!isClicked)}
        className={`text-2xl font-bold cursor-pointer transition-transform duration-500 ${
          isClicked ? "text-red-600 scale-125" : "text-blue-600 scale-100"
        }`}
      >
        Click Me!
      </span>
    </div>
  </>
  )
}

export default App


// import React, { useState } from "react";

// function MultipleChoiceButtons() {
//   // State to track selected options
//   const [selectedOptions, setSelectedOptions] = useState(["String"]);

//   // Function to handle button click
//   const toggleOption = (option) => {
//     setSelectedOptions((prevSelected) =>
//       prevSelected.includes(option)
//         ? prevSelected.filter((item) => item !== option) // Deselect if already selected
//         : [...prevSelected, option] // Add to selection otherwise
//     );
//   };

//   // Check if an option is selected
//   const isSelected = (option) => selectedOptions.includes(option);

//   return (
//     <div className="flex gap-4">
//       <button
//         onClick={() => toggleOption("String")}
//         className={`px-4 py-2 rounded-lg ${
//           isSelected("String") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
//         }`}
//       >
//         String
//       </button>
//       <button
//         onClick={() => toggleOption("Number")}
//         className={`px-4 py-2 rounded-lg ${
//           isSelected("Number") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
//         }`}
//       >
//         Number
//       </button>
//       <button
//         onClick={() => toggleOption("Spcl Char")}
//         className={`px-4 py-2 rounded-lg ${
//           isSelected("Spcl Char") ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
//         }`}
//       >
//         Spcl Char
//       </button>
//     </div>
//   );
// }

// export default MultipleChoiceButtons;