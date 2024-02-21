import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {

    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    const handleSelectedSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {
                            row.map((playerSymbol, colIndex) => <li key={colIndex}>
                                <button
                                    onClick={() => handleSelectedSquare(rowIndex, colIndex)}
                                >
                                    {playerSymbol}
                                </button>
                            </li>)
                        }
                    </ol>
                </li>)
            }
        </ol>
    )
}
