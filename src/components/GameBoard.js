import React, { useState } from 'react'
import './/GameBoard.css'

function GameBoard() {

    const [symbol, setSymbol] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(null));

    function handleClick(boardCell) {
        if (symbol === 'X') {
            setSymbol('O');
            setBoard(board.map((item, index) => {
                if (index === boardCell.val) {
                    return 'X';
                }
                return 'null';
            }));
        }
        else {
            setSymbol('X');
            const updatedBoard = (board.map((item, index) => {
                if (index === boardCell.val) {
                    return 'O';
                }
                return item;
            }));
            setBoard(updatedBoard);
        }
        // console.log(board);
        console.log(boardCell.val);
    }

    const Cell = (props) => {
        const val = props.num;
        return (
            <td onClick={() => handleClick({val})} >{board[props.num]}</td>
        );
    }

    return (
        <>
            <h3>Player {symbol} turn </h3>
            <div className='container'>
                <table>
                    <tbody>
                        <tr>
                            <Cell num="0" />
                            <Cell num="1" />
                            <Cell num="2" />
                        </tr>
                        <tr>
                            <Cell num="3" />
                            <Cell num="4" />
                            <Cell num="5" />

                        </tr>
                        <tr>
                            <Cell num="6" />
                            <Cell num="7" />
                            <Cell num="8" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GameBoard;