import { Home, Signin, Signup, Public, Personal, Album, TopMusic } from './pages/public';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route} from 'react-router-dom';
import path from './ultis/path';
import { useEffect } from 'react';
import * as actions from './store/actions'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome())
    dispatch(actions.getTopMusic())
  }, [])
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />
            <Route path={path.TOP_100} element={<TopMusic />} />

            <Route path={path.STAR} element={<Home />} />
          </Route>
          {/* <Route path={path.SIGNIN} element={<Signin />} /> */}
          <Route path={path.SIGNUP} element={<Signup />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
