import React, { useState } from 'react'
import './/GameBoard.css'

function GameBoard() {

    // let isOk = false;
    const [symbol, setSymbol] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(''));
    const [result, setResult] = useState('.');
    // const [lastChange, setLastChange] = useState(0);
    function checkWinner() {
        //Check vertical win
        for (let i = 0; i < 3; i++) {
            console.log("1:  ");
            console.log(board[0] + ", " + board[1] + ", " + board[2] + ", " + board[3] + ", " + board[4] + " ," + board[5] + ", " + board[6] + ", " + board[7] + ", " + board[8]);
            if (board[i] === board[i + 3] === board[i + 6] === 'X') {
                setResult('X');
                console.log("1");
            }
            else if (board[i] === board[i + 3] === board[i + 6] === 'O') {
                console.log("1.1");
                setResult('O');
            }
        }

        //Check diagnol win
        if ((board[0] === board[4] === board[8] === 'X') || (board[2] === board[4] === board[6] === 'X')) {
            setResult('X');
            console.log("2");
        }
        else if ((board[0] === board[4] === board[8] === 'O') || (board[2] === board[4] === board[6] === 'O')) {
            setResult('O');
            console.log("2.1");
        }

        //Check horizontal win
        for (let i = 0; i < 7; i += 3) {
            console.log("2:  ");
            console.log(board[0] + ", " + board[1] + ", " + board[2] + ", " + board[3] + ", " + board[4] + " ," + board[5] + ", " + board[6] + ", " + board[7] + ", " + board[8]);

            if (board[i] === board[i + 1] === board[i + 2] === 'X') {
                setResult('X');
                console.log("3");
            }
            else if (board[i] === board[i + 1] === board[i + 2] === 'O') {
                setResult('O');
                console.log("3.1");
            }
        }
        console.log("Inside checkWinner " + result);

        if ((!board.includes('')) && (result === '')) {
            setResult('Its Draw!');
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
        // setLastChange(boardCell);
        // setTurns(board.length);
        // setTimeout(() => {
        //     checkWinner();
        // }, 1000);
        // setBoard(newBoard);
         setBoard( (previousBoard) => {previousBoard[boardCell]=newBoard[boardCell]} );
        checkWinner();

        // if (board.length === turns + 1){
        //      isOk = true 
        //     } 

            console.log(board);
            console.log(newBoard);
        }
    
        // useEffect(() => {
        //     if(isOk===true){
        //         checkWinner();
        //     }
        // }, [checkWinner, isOk]);
        

        const Cell = (props) => {
            const val = props.num;
            return (
                <td onClick={() => handleClick(val)} >{board[props.num]}</td>
            );
        }

        const Winner = () => {
            return (
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