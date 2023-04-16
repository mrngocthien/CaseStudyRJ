import React, { useState } from "react";
import icons from "../ultis/icons";
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux';
import { useNavigate, createSearchParams, Link } from "react-router-dom";
import path from './../ultis/path';

const { IoSearchOutline, AiOutlineClose } = icons;

function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearh = async (e) => { 
    if (e.keyCode === 13) {
      dispatch(actions.search(keyword))
      navigate({
        pathname: `${path.SEARCH}/${path.SEARCH_ALL}`,
        search: createSearchParams({
          q: keyword
        }).toString()
      })
    }
  }

  return (
    <div className="flex items-center relative">
      <Link 
        to={`${path.SEARCH}/${path.SEARCH_ALL}`} 
        className={`h-10 rounded-l-[20px] pl-4 flex items-center justify-center bg-main-100`}
      >
        <IoSearchOutline size={24} />
      </Link>
      <input
        type="text"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        className={`outline-none w-full px-4 py-2 rounded-r-[20px] h-10 bg-main-100`}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onKeyUp={handleSearh}
      />
      {keyword && 
        <span className="absolute right-5 cursor-pointer" onClick={() => setKeyword('')}>
          <AiOutlineClose size={20}/>
        </span>
      }
    </div>
  );
}

export default SearchBar;
