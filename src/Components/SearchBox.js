import React from "react";
import './SearchBox.css';

const SearchBox = (props) => {
    return (
            <input type="search" 
            placeholder="Search Robots"
            onChange={props.searchChange}       //Event listener for searchbox. call search-change
            ></input>
    );
}

export default SearchBox;