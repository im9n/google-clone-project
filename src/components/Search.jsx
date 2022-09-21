import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search"
import MicIcon from "@mui/icons-material/Mic"
import { Button } from "@mui/material";

const Search = () => {
 const [input, setInput] = useState("");

  const search = e => {
  e.preventDefault()
  }

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <MicIcon className="search__input--icon"/>
      </div>

      <div className="search__buttons">
        <Button variant='outlined' onClick={search}>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Search;
