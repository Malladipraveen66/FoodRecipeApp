// import React from "react";
// import React2 from "./Routing/React2"
// import Home1 from "./Routing/Home1";
// import About2 from "./Routing/About2";
// import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
// // import About2 from "./Routing/About2";
// import './App.css'
// import useRef from "./Routing/Useref";
// function Errorpage()
// {
//   return(
//     <>
//     <h1>Errorpage</h1>
//     </>
//   )
// }
// function App()
// {
//   return(
//     <>
//     <h1>This is standard heading</h1>

//     {/* <Firstcomp/> */}
//     <BrowserRouter>
//     <UseRef/>
//     <div className="abc">
//       <li><Link to="/">Home1</Link> </li>
//       <li><Link to="/About2">About</Link></li>
//       <li><Link to="/Reactjs">Reactjs</Link></li>
//       </div>
//     <Routes>
//       <Route path="/" element={<About2/>}></Route>
//       <Route path="/About2" element={<About2/>}  />
//       <Route path="/Reactjs" element={<React2/>} />
//       <Route path="/" element={<About2/>} >
//       <Route path="/" element={<About2/>} />
//       <Route path="*" element={<Errorpage/>}/>
//         </Route>
//     </Routes>
//     </BrowserRouter>

//     </>
//   )
// }

// export default App;
// usecontext,usememo>>Is also same as like a function but it checks the previous value
// import React, { createContext, useMemo, useState } from "react";
// import Method1 from "./prop/Method1";
// export let context=createContext()
// function App(){
//   let [initial,final]=useState(1);
// let n1=2;
// let n2=5;
//  let output = useMemo(()=>{
//       return n1+n2;
//   },[n1,n2]
//   )
//   // function sum(n1,n2){
//   //   return n1+n2;
//   // }

//   let isval=10
//   let p={
//     name:"AbortConr",
//     price:"$560"
//   }
//   return(
//     <>
//     <h1>Heading tag</h1>
//     <context.Provider value={isval}>
//     <Method1/>
//     </context.Provider>
//     <button onClick={()=>{
//       final(initial+1)
//     }}>click me</button>
//     <h1>
//       count={initial}
//     </h1>
//    <h1>
//     sum:{output}
//    </h1>
//     </>
//   )
// }
// export default App

// import React from "react";
// import LoginForm from './Task/LoginForm'
// function App(){
//   return(
//     <>
//    <LoginForm/>
//     </>
//   )
// }
// export default App
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeTable from "./Task/RecipeTable";
import Pagination from "./Task/Pagination";
import SearchAndFilter from "./Task/SearchAndFilter";
import LoginForm from "./Task/LoginForm";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Task/RegisterForm";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  // Other state variables for registration form fields and validation

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('API_URL');
  //       setRecipes(response.data);
  //     } catch (error) {
  //       console.error('Error fetching recipes:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Pagination
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Search and Filter
  const filteredRecipes = currentRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      recipe.category.includes(filterCriteria)
  );

  // Pagination Change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Bookmark
  const handleBookmark = (recipeId) => {
    // Add or remove recipe from bookmarks based on current state
  };

  // Handle Form Submission and Validation
  const handleSubmit = (formData) => {
    // Validate form data and submit if valid
  };

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/home" element={<SearchAndFilter />} />
      
    </Routes>

    // <div>
    //   <h1>Recipe App</h1>
    //   <SearchAndFilter
    //     searchTerm={searchTerm}
    //     setSearchTerm={setSearchTerm}
    //     filterCriteria={filterCriteria}
    //     setFilterCriteria={setFilterCriteria}
    //   />
    //   <RecipeTable
    //     recipes={filteredRecipes}
    //     handleBookmark={handleBookmark}
    //     bookmarks={bookmarks}
    //   />
    //   <Pagination
    //     recipesPerPage={recipesPerPage}
    //     totalRecipes={recipes.length}
    //     paginate={paginate}
    //   />
    //   {/* <RegisterForm handleSubmit={handleSubmit} /> */}
    //   <LoginForm/>
    // </div>
  );
}

export default App;
