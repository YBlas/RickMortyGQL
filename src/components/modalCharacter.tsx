import { FC } from "react";
import { CharacterType, ModalCharacterProps } from "../types";
import "../styles/ModalCharacter.css";


const ModalCharacter: FC<ModalCharacterProps> = ({ character, show }) => {

    if(!show) return null;

    return (
        <div className="ModalCharacter">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title"></h4>
                </div>
                <div className="modal-body">
                    <h1>{character.name}</h1>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Type: {character.type}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Current Location: {character.location.name}</p>
                    <p>Origin Location: {character.origin.name}</p>
                    <img src={character.image}></img>
                </div>
            </div>
        </div>
    );
}
export default ModalCharacter;