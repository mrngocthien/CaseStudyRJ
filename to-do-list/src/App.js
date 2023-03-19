import {useState} from 'react'

function App() {
const [works, setWorks] = useState('')

const handleChange = (event) => {
  setWorks(event.target.value)
  console.log(works)
}


  return (
    <div className="flex gap-8 h-screen justify-center items-center border border-red-500">
      <input 
        type="text"
        className="outline-none px-4 py-2 border border-blue-600 rounded-md w-[400px]"
        onChange={handleChange} 
      />
      <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        Add
      </button>
    </div>
  );
}

export default App;
