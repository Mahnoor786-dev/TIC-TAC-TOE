import React from 'react'
import './/GameBoard.css'



function GameBoard() {
    function handleClick(num) {
        //if ( symbol === 'X') {
        //setState('o')

    }

    const Cell = (props) => {
        return (
            <td onClick={handleClick(props.num)}></td>
        );
    }

    return (
        <div className='container my-5'>
            <table>
                <tr>
                    <Cell num="1" />
                    <Cell num="2" />
                    <Cell num="3" />
                </tr>
                <tr>
                    <Cell num="4" />
                    <Cell num="5" />
                    <Cell num="6" />

                </tr>
                <tr>
                    <Cell num="7" />
                    <Cell num="8" />
                    <Cell num="9" />
                </tr>
            </table>
        </div>
    );
}

export default GameBoard;