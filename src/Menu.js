import { useContext } from "react";
import { MenuContext } from "./context/menuContext";

export default function Menu () {

    const {setPracticeFromChild} = useContext(MenuContext);

    const onClickOptionHandler = (event) => {
        event.preventDefault();
        setPracticeFromChild(event.target.title);
    };
    return (
        <div>
            <h1 className="pageTitle">Curso React - IZO - Práctica</h1>
            <div className="menu">
                <button className="botonMenu">
                    <a href="#practica_1" title="Practica 1" onClick={onClickOptionHandler}>Práctica 1</a>
                </button>
                <button className="botonMenu">
                    <a href="#practica_2" title="Practica 2" onClick={onClickOptionHandler}>Práctica 2</a>
                </button>
                <button className="botonMenu">
                    <a href="#practica_3" title="Practica 3" onClick={onClickOptionHandler}>Práctica 3</a>
                </button>
                <button className="botonMenu">
                    <a href="#practica_4" title="Practica 4" onClick={onClickOptionHandler}>Práctica 4</a>
                </button>
            </div>
        </div>
    );
}