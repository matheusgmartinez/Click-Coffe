import React, { useState } from 'react'

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("")
  return (

    <div>
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {api.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.data.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="produto" key={key}>
            <p> {val.data} </p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBar;