import React from 'react'
import "./SearchBar.css"

const SearchBar = (props) => {
    
    return (
        <form>
            <div className="container">
            <div className="row">
            <div className="col-sm-12">
            <input className="m-3 " id="text" type="text" name="search" 
            placeholder="search product" 
            value={props.search} 
            onChange={props.searchChange}
            />
            </div>
            </div>
            </div>
        </form>
    )
}

export default SearchBar