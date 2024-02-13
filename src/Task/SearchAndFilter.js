import React, { useState } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [recipeItems, setReceipeItems] = useState([]);
  const [isLogout, setIsLogout] = useState(false);

  console.log({ recipeItems });

  const handleSearch = () => {
    // onSearch(searchTerm);
    Axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=78bab802&app_key=44f6d0946aa3d09048ab6a140397ac70`
    ).then((response) => setReceipeItems(response?.data?.hits));
  };

  const handleFilter = () => {
    // onFilter(filterTerm);
  };

  const handleLogout = () => {
    setIsLogout(true);
  };

  return (
    <>
      {isLogout ? (
        <Navigate to="/" replace={true} />
      ) : (
        <div>
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => handleSearch()}>Search</button>
            <input
              type="text"
              placeholder="Filter"
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
            />
            <button onClick={handleFilter}>Filter</button>
          </div>
          {recipeItems && (
            <div className="container">
              <div className="row">
                {recipeItems.map((item, index) => (
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={item?.recipe?.image}
                      className="card-img-top"
                      alt={item?.recipe?.label}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item?.recipe?.label}</h5>
                      <p className="card-text">{item?.recipe?.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchAndFilter;
