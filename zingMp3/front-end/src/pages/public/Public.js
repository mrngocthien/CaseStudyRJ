import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, Player, Header, Loading, SidebarRight } from "../../components";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import SignIn from "./SignIn";

const Public = () => {
  const [loggedInUser, loading, error] = useAuthState(auth);
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false)

  if (loading) return <Loading />

  if (!loggedInUser) return <SignIn />

  if (error) return console.log(error);

  return (
    <div className="w-full h-screen relative flex flex-col bg-main-300 text-white overflow-x-hidden">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] h-full flex-none">
          <SidebarLeft />
        </div>
        <div className="flex-auto">
          <div className='h-[70px] px-[59px] flex items-center z-10'>
            <Header />
          </div>
            <Outlet />
        </div>
        <div className={`w-[320px] h-full flex fixed right-0 z-20 ${isShowRightSidebar ? 'animate-slide-left' : 'hidden'}`}>
          <SidebarRight />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[90px] fixed z-30">
        <Player setIsShowRightSidebar = {setIsShowRightSidebar} isShowRightSidebar = {isShowRightSidebar} />
      </div>
    </div>
  )
  
};

export default Public;
