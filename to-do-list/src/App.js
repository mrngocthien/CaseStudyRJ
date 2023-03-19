import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [works, setWorks] = useState('');
  const [worksList, setWorksList] = useState([]);

  const handleChange = (event) => {
    setWorks(event.target.value)
    console.log(works);
  }

  const handleAdd = () => {
    if (worksList?.some(item => item.id === works?.replace(/\s/g, ''))) {
      toast.warning('Công việc này đã được thêm vào trước đó !');

    } else {
      setWorksList(prev => [
        ...prev,
        {
          id: works?.replace(/\s/g, ''),
          job: works
        }
      ]);
    }
    setWorks('');
  }

  const handleDelete = (id) => { 
    setWorksList(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <h1 className='text-center text-teal-600 font-bold text-4xl uppercase'>simple to do list</h1>
      <div className="flex flex-col gap-8 h-screen justify-center items-center border border-red-500">
        <div className='flex gap-8'>
          <input 
            type="text"
            className="outline-none px-4 py-2 border border-blue-600 rounded-md w-[400px]"
            value={works}
            onChange={handleChange}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className='font-bold text-xl py-2'>List of your works :</h3>
          <table >
            <thead>
              <tr>
                <th className='border border-blue-600 px-3 py-2' >Jobs</th>
                <th className='border border-blue-600 px-3 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {worksList?.map((item) => (
                  <tr key={item.id} >
                    <td className='border border-blue-600 px-3 py-2 text-center'>{item.job}</td>
                    <td className='border border-blue-600 px-3 py-2 text-center'><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
