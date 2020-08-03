import React from "react";
import "./style.css";

function Search(props){
    return(
        <div className="searchBar text-center">
            <input type="search" onKeyUp={props.filterTableBySearch} ref={props.inputValueRef}></input>
            <br></br>
            <i>Click on carrots to filter by categories or Use search bar above.</i>
        </div>
    );
}

export default Search;