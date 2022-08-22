import React, { useState } from "react";
import { useDispatch } from "react-redux";
import search from "../assets/search.svg";
import { getAllBlogs, searchText } from "../redux/blogs/action";

const Search = () => {
  const [text,setText]=useState('')

  const dispatch = useDispatch()


  const handleSearch = (e)=>{
    setText(e.target.value)
      setTimeout(() => {     
        dispatch(searchText(text))
      }, 3000);
    
    console.log(text.length);
  }
  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={handleSearch}
        value={text}
      />
      <img className="inline h-6 cursor-pointer" src={search} alt="Search" />
    </div>
  );
};

export default Search;
