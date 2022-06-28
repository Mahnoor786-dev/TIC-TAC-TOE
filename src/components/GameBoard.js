import React, { useState } from 'react'
import './/GameBoard.css'

function GameBoard() {

    const [symbol, setSymbol] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(''));
    const [result, setResult] = useState('');

    function checkWinner() {
        //Check vertical win
        for (let i = 0; i < 3; i++) {
            if (board[i] === board[i + 3] === board[i + 6] === 'X') {
                setResult('X');
            }
            else if (board[i] === board[i + 3] === board[i + 6] === 'O') {
                setResult('O');
            }
        }

        //Check diagnol win
        if ((board[0] === board[4] === board[8] === 'X') || (board[2] === board[4] === board[6] === 'X')) {
            setResult('X');
        }
        else if ((board[0] === board[4] === board[8] === 'O') || (board[2] === board[4] === board[6] === 'O')) {
            setResult('O');
        }

        //Check horizontal win
        for (let i = 0; i < 7; i += 6) {
            if (board[i] === board[i + 1] === board[i + 2] === 'X') {
                setResult('X');
            }
            else if (board[i] === board[i + 1] === board[i + 2] === 'O') {
                setResult('O');
            }
        }
    }

    function handleClick(boardCell) {
        let newBoard = [...board];
        if (symbol === 'X') {
            setSymbol('O');
            newBoard[boardCell] = 'X';
        }
        else {
            setSymbol('X');
            newBoard[boardCell] = 'O';
        }
        setBoard(newBoard);
        console.log(newBoard);

        checkWinner();
    }

    const Cell = (props) => {
        const val = props.num;
        return (
            <td onClick={() => handleClick(val)} >{board[props.num]}</td>
        );
    }

    const Winner = () => {
        return(
            <h4>Game Winner: {result} </h4>);
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
            <Winner />
        </>
    );
}

export default GameBoard;