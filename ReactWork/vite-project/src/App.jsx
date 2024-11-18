
import React from 'react'
import Student from './Component/Student';


function App() {
//js ka kam ...
let a = 12;
const logo = "./assets/rudra1.jpg"
const mystyle = {
  backgroundColor:'red',
  color:'cyan'
}
  return (//jsx ka kam...
    <div style={mystyle}>ABES ENG CLG
    <div style={mystyle}>{a}
    <div style={{color:'blue',backgroundColor:'cyan',display:'flex',gap:'1px'}}>
      <Student college="ABES Engineering Colege" 
      pic={<img style={{width:"150px"}}  src={logo} alt=''/>}
      name ="Ram" 
      roll="2200320100128" 
      branch="CSE"/>

<Student college="ABES Engineering Colege" 
      pic={<img style={{width:"150px"}}  src={logo} alt=''/>}
      name ="Ram" 
      roll="2200320100128" 
      branch="CSE"/>

      <Student college="ABES Engineering Colege" 
      pic={<img style={{width:"150px"}}  src={logo} alt=''/>}
      name ="Ram" 
      roll="2200320100128" 
      branch="CSE"/>

      <Student college="ABES Engineering Colege" 
      pic={<img style={{width:"150px"}}  src={logo} alt=''/>}
      name ="Ram" 
      roll="2200320100128" 
      branch="CSE"/>      
    </div>
    </div>
    </div>
    
  )
}

export default App

