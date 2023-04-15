import { 
  Home, SignIn, SignInClassical, Public, 
  Personal, Album, TopMusic, SignUp, WeekRank, 
  Search, SearchSong, SearchAll, Singer, SearchPlaylist } from './pages/public';

import { ToastContainer } from 'react-toastify';
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
  }, [dispatch])
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
            <Route path={path.WEEK_RANK__TITLE__PID} element={<WeekRank />} />
            <Route path={path.HOME__SINGER} element={<Singer />} />
            <Route path={path.SEARCH} element={<Search />} >
              <Route path={path.SEARCH_ALL} element={<SearchAll />} />
              <Route path={path.SEARCH_SONG} element={<SearchSong />} />
              <Route path={path.SEARCH_PLAYLST} element={<SearchPlaylist />} />
            </Route>

            <Route path={path.STAR} element={<Home />} />
          </Route>
          <Route path={path.SIGNIN} element={<SignIn />} />
          <Route path={path.SIGNIN_CLASSICAL} element={<SignInClassical />} />
          <Route path={path.SIGNUP} element={<SignUp />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={200}
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
