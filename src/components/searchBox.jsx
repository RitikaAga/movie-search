import React from "react";

const SearchBox = (props) => { 
    return (
        <div className="Search-Box">
            <form>
                 <input type="text" className="Search" placeholder="Enter Movie Name Here" value={ props.value} onChange={(event)=>props.setSearchVal(event.target.value)}/>
            {/* <button onClick={}>Search</button> */}
            </form>
           
    </div>
)
}
export default SearchBox;