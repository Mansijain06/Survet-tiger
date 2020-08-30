import React from 'react';

const Publish=(props)=>{
    let {options}=props;
    console.log("hana bhai",options[0]);
   return(
       <>
        <h1>hello buddy</h1>
        <ul>
        {options.map(option=>(
              <li key={options.id}>

            <li>{option}</li>
            </li>
        ))}
        </ul>
       </>
   )
}
export default Publish;