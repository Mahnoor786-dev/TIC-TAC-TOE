import React, {useState} from 'react'
import './/GameBoard.css'

function GameBoard() {
    function handleClick(num) {
        symbol==='X' ? setSymbol('O') : setSymbol('X');
        let cell = document.createTextNode(symbol);
        document.getElementById(num).appendChild(cell);
    }

    const Cell = (props) => {
        return (
            <td onClick={handleClick.bind(props.num)} id={props.num} ></td>
        );
    }

    const [symbol, setSymbol]= useState('X');

    return (
        <>
        <h3>Player {symbol} turn </h3>
        <div className='container'>
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
    </>
    );
}

export default GameBoard;