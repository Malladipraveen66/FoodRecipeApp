import React from 'react'

const Apple2=()=>{
   return(
    <h2>These are apples</h2>
   )
}
// For component creation the name must be with capital letter
const Banana=()=>{
    return(
         <h3>Ths siinssnjkd jdjd</h3>
    )
}
function Sample() {
  return (
    <div>
        <Apple2/> 
        {/*  component rendering <tagname/> */}
        <Banana/>
    </div>
  )
}

export default Sample

// component name must be capital
// function return content is in b/w div's
// return(
//   {
      //  <div>hjfkf</div>
      // <sjak/>
//   }
// )
// import functtion is in start ctrl+c to terminate project
// for css files we dont have to export we have to import only
// Jsx->javascript xml(used to write html elemnts in javascript file)
// to write xml the elemts must be in parent elements like div or section etc.
//we can also declare variables like assign some value to it to get the output.
// for storng the images we have to do it in the public folder
// props->properties to communicate between the components
// props are used to pass the data from one component from one component(parent) to another component(child).
// 1st component->parent and 2nd component->child
// oneway   and 2nd component props are read only.
// in props we mostly use arrow functions
// rfce and rafce
// props acn be declare in the last of rendering


