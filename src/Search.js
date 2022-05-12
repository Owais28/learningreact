import React from "react";

export default function Search(props) {
    

    return <div>
        <div>
        <label htmlFor="search">Search</label>
        <input type="text" value={props.search} name="search" onChange={props.onSearch} id="search" />
        </div>
        <div>
            <h4>showing result for {props.search}...</h4>
        </div>
    </div>
}
