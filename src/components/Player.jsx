import {useState} from "react";

export const Player = ({ initialName, symbol, isActive }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);

    const handleClick = () => {
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className="player-name">{name}</span>;
    let btnLbl = <p>Edit</p>;

    if(isEditing){
        playerName = <input type="text" required value={name} onChange={ev => setName(ev.target.value)} />
        btnLbl = <p>Save</p>;
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnLbl}</button>
        </li>
    )
}
