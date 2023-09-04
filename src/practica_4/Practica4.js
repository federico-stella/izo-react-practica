import { useRef, useState } from "react";

export default function Practica4 () {
    return (
        <div className="App">
            <div>
                <label htmlFor="input1">Entrada 1:</label>
                <input 
                    id="input1"
                    type="number"
                />
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                    /> Entrada 2
                </label>
            </div>
                <div>
                <label htmlFor="selectGate">Compuerta lógica</label>
                <select 
                    id="selectGate"
                >
                </select>
            </div>
            <div><span>Salida: { /* acá va la salida */ }</span></div>
        </div>
    );
}