import React, { useEffect, useState } from "react";
import ".//GameBoard.css";

function GameBoard() {
    const [symbol, setSymbol] = useState("X");
    const [board, setBoard] = useState(Array(9).fill(""));
    const [result, setResult] = useState(".");

    function checkWinner() {
        // if(!result==="") //if there is a winner, no need to check
        
        //Check vertical win
        for (let i = 0; i < 3; i++) {
            // console.log("1:  ");
         
            if ((board[i] === board[i + 3]) && (board[i + 3] === board[i + 6])) {
                setResult(board[i]);
                console.log("vertical");
            }
        }

        //Check diagnol win
        if ((board[0] === board[4]) && (board[4] === board[8])) {
            setResult(board[0]);
            console.log("diagonal");
        } 
        else if((board[2] === board[4]) && (board[4] === board[6]))
        {
            setResult(board[2]);
            console.log("diagonal");
        }

        //Check horizontal win
        for (let i = 0; i < 7; i += 3) {
            // console.log("2:  ");
            //
            if ((board[i] === board[i + 1]) && (board[i + 1] === board[i + 2])) {
                setResult(board[i]);
                console.log("horizontal");
            }
        }
        console.log("Inside checkWinner " + result);

        if (!board.includes("") && result === "") {
            setResult("Its Draw!");
        }
    }

    function handleClick(boardCell) {
        if((board[boardCell]==="")&&(result==="")) //if the cell is empty and there is no winner
        {
        let newBoard = [...board];
        setSymbol(symbol === "X" ? "O" : "X");
        newBoard[boardCell] = symbol;
        setBoard(newBoard);
        console.log(board);
        if(result==="")
        {
        checkWinner();
        }
        }
    }

    useEffect( () => {
        checkWinner();
    }, [board]);

    const Cell = (props) => {
        const val = props.num;
        return <td onClick={() => handleClick(val)}>{board[props.num]}</td>;
    };

    const Winner = () => {
        return <h4>Game Winner: {result} </h4>;
    };

    return (
        <>
            <h3>Player {symbol} turn </h3>
            <div className="container">
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
            <div id="result">
            <Winner />
            </div>
        </>
    );
}

export default GameBoard;
