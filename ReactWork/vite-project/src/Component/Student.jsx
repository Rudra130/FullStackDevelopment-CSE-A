import React from 'react'
import './student.css';
export default function Student(props) {
  return (
    <div className='Icard'>
        <table>
            <tbody>
               <tr>
                    <td>
                        {props.pic}
                    </td>
                </tr>
               <tr>
                    <td>Name</td><td>{props.name}</td>
                </tr>
                <tr style={{backgroundColor:'skyblue',color:'darkblue'}}>
                    <td colSpan={2}>{props.college}</td>
                </tr>
                <tr>
                    <td>Rollno</td> <td>{props.roll}</td>
                </tr>
                <tr>
                    <td>Branch:</td><td>{props.branch}</td>
                </tr>
                <tr>
                    <td>Name</td><td>{props.name}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}