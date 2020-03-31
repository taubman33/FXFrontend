import React from 'react';


export default (props) => {
  
  return (
    <div className = "searchbar-container">
      <form action="">
        <input id = "searchBar" type="text" placeholder="Search Pedals"
          onChange={props.handleSearchInput}
          value={props.searchFormData}
        />
 
         <button id = "button" onClick={props.handleSearchSubmit}> <h4>Go</h4></button>
        
      </form>
    
    </div>
    
  )
}