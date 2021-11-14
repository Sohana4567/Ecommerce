import React from 'react'
import '../search/_main.scss';

const Search = ({ searchval, searchVal }) => {
    return (
        <div className="inputareawrap">
            <input type="text" className="searchText" placeholder="Type to search..." onChange={(e) => {
                searchval(e.target.value)
            }} />
            <a href="#" className="searchBtn">
                <i className="fas fa-search fa-2x"></i>
            </a>
        </div>
    )
}
export default Search;