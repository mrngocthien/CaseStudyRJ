import React from "react";
import icons from "../ultis/icons";

const { IoSearchOutline } = icons;

function Search() {
  return (
    <div className="flex items-center">
      <span className="h-10 rounded-l-[20px] pl-4 flex items-center justify-center bg-main-100">
        <IoSearchOutline size={24} />
      </span>
      <input
        type="text"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        className="outline-none w-full px-4 py-2 rounded-r-[20px] h-10 bg-main-100"
      />
    </div>
  );
}

export default Search;
