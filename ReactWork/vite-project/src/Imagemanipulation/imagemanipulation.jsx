import React, { useState } from 'react'
import cat from './cat.jpeg'
function ImageManipulation() {


const [height,setHeight]=useState(140);
const [width,setWidth] = useState(140);



function increaseHeight(){
    if(height>=400){
        setHeight(140)
    }else{
   setHeight(height+30);
    }
}

function increaseWidth() {
    if(width>=400){
        setWidth(140)
    }else{
   setWidth(width+30)
    }
}


  return (
    <div style={{height:'400px', width:'400px',border:'2px solid red',marginLeft:'200px'
     ,justifyContent:'center',alignItems:'center'}}>
        <p>height:{height}</p>
      <div>
        <div style={{height:'auto',width:'400px', backgroundColor:'red'}}>
          <img src={cat} height={height} width={width} />
      </div>
      </div>
      <div style={{marginTop:'150px',display:'flex', gap:'8px'}}>
    <button onClick={increaseHeight}>enhanceHeight</button>
    <button onClick={increaseWidth}>enhanceWidth</button>
    <button>rotate</button>
    <button>backgroundColor change</button>
      </div>


    </div>
  )
}

export default ImageManipulation