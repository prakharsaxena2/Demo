import React from 'react'

// function Greet(){
//     return <h1>Hello Prakhar</h1>
// }

 const Greet = props =>{ 
    console.log(props) 
    
   return(
       <div>
   <h1>Hello Prakhar function {props.name}a.k.a {props.superHero} </h1>
{props.children}
       </div>
    )
 }
export default Greet