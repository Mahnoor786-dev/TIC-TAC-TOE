import React from 'react'
import './/GameBoard.css'

//hooks
// function handleClick() {
//     //if ( symbol === 'X') {
//         //setState('o')
 
//     }

// const cell = (cellNum) => {
//     return <td onClick={handleClick}></td>
// }

export default function GameBoard() {

   
    return (
        <div className='container my-5'>
            <table>
                <tr>
                    {/* <cell num={1}/>
                    <cell num={2}></cell>
                    <cell num={3}></cell> */}
                    <td></td>
                    <td></td>
                    <td></td>
                    
                </tr>
                <tr>
                    {/* <cell num={4}></cell>
                    <cell num={5}></cell>
                    <cell num={6}></cell> */}
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    {/* <cell num={7}></cell>
                    <cell num={8}></cell>
                    <cell num={9}></cell> */}
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}
