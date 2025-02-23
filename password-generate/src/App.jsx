import { useEffect, useState, useCallback, useRef } from 'react'
import Header from './components/Header';

function App() {
 const [password, setPassword] = useState('');
 const [length, setLength] = useState(8);
 const [charAllowed, setCharAllowed] = useState(false);
 const [numAllowed, setNumAllowed] = useState(false);


 const passwordRef = useRef(null);

 const generatePassword = useCallback(() => {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(charAllowed) str += ' "!@#$%^&*-_+=';
  if(numAllowed) str += '0123456789';
  
  
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
 

  setPassword(pass);

 }, [length, charAllowed, numAllowed, setPassword])


 const copyToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
 }, [password])

 useEffect(() => {
  generatePassword();
 }, [length, numAllowed, charAllowed, generatePassword])

  return (
    <>
    <Header />
    <div className="my-5 shadow-lg mx-auto w-[350px] rounded-lg select-none">        
      <div className="px-5 py-5 ">
        <div className="text-center ">
          <input
            type="text"
            name="password"
            readOnly
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-72 p-4 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md transition-all ease-in-out duration-300"
            ref={passwordRef}
          />
          <button
            type="button"
            className="m-1 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-indigo-700 transition-all ease-in-out duration-200"
            onClick={copyToClipboard}
          >
            Copy
          </button>
          <button
            type="button"
            className="m-1 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-indigo-700 transition-all ease-in-out duration-200"
            onClick={generatePassword}
          >
            ↻
          </button>
        </div>
        <div className="space-y-2 my-4">
          <div className="flex flex-col space-y-2 justify-between">
            <label htmlFor="length" className="text-gray-700 font-semibold">Password Length ({length})</label>
            <input
              type="range"
              name="length"
              min={1}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-gray-300 rounded-full appearance-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="charater"
              name="character"
              value={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="outline-none h-5 w-5 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="charater" className="text-gray-700">Characters</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="number"
              name="number"
              value={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="number" className="text-gray-700">Numbers</label>
          </div>
          </div>
      </div>
    </div>
   


    </>
  )
}

export default App
