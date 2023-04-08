import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight, Player, Header } from "../../components";
import Login from "./Signin";
import Contacts from "./Example";

const Public = () => {
  const isLoggedin = false
  if (isLoggedin) {
    return (
      <div className="w-full h-screen relative flex flex-col bg-main-300 text-white overflow-x-hidden">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] h-full flex-none">
          <SidebarLeft />
        </div>
        <div className="flex-auto">
          <div className='h-[70px] px-[59px] flex items-center'>
            <Header />
          </div>
          <Outlet />
        </div>
        <div className="w-[329px] hidden 1600:flex flex-none animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[90px]">
        <Player />
      </div>
    </div>
    )
  } else {
    return (
      <Login />
      // <Contacts />
    );
  }
  
};

export default Public;
