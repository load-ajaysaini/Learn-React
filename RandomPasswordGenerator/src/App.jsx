import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  const [length, setLenghth] = useState(8)
  const [Number, setNumber] = useState(false)
  const [Char, setChar] = useState(false)
  const [Password, setPassword] = useState("")
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefgijklmnopqrstuvwxyz"
    if(Number) str += "0123456789"
    if(Char) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let port = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(port)
    }

    setPassword(pass)
  }, [length,Number,Char,setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(Password)    
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  

  useEffect(()=> {passwordGenerator()
  },[length,Number,Char,setPassword] )
  
   return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className=" text-white text-3xl px-2 py-2 text-center my-3">Random Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={Password}
        className="outline-none w-full py-1 px-3"
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPassword}
        className="outline-none bg-blue-700 py-0.5 px-3 shrink-0 text-white ">
          Copy
          </button>
      </div>
      <div className="flex text-lg gap-x-2">
        <div className= "flex items-center gap-x-1">
        <input 
        type="range"
        min={6}
        max={50}
        value={length}
        className="cursor-pointer"
        onChange={(e)=> setLenghth(e.target.value)}
        /><label>Lenght: {length}</label>
        <input 
        type="checkbox"
        defaultChecked={Number}
        value={Number} 
        onChange={()=> setNumber((prev) => !prev)}
        /><label>Number</label>
        <input 
        type="checkbox"
        value={Char} 
        onChange={(e)=> setChar(e.target.checked)}
        /><label>Character</label>
        </div>
      </div>
    </div>
    )
  }

export default App
