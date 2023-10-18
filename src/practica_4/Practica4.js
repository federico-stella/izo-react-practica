import { useRef, useState } from "react";
import LogicGates from "./components/LogicGates";
import Input1 from "./components/Input1";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Range from "./components/Range";

export default function Practica4 () {
    const [num,setNum] = useState(Math.round(Math.random()));
    const [checked, setChecked] = useState(0);
    const [comp,setComp] = useState();
    const [rad, setRad] = useState(0);
    const [rang, setRang] = useState(1);
    const [comp1, setComp1] = useState();
    const [comp2, setComp2] = useState();

    return (
        <div className="App">
            <div className="content1">
                <Input1 num={num} setNum={setNum}></Input1>
                <Checkbox checked={checked} setChecked={setChecked}></Checkbox>
                <LogicGates valor1={num} valor2={checked} funcion={setComp}></LogicGates>
                <div><span>Salida 1: <b>{comp}</b></span></div>
            </div>
            <hr className="hr"></hr>
            <div className="content2">
                <Radio setRad={setRad} rad={rad}></Radio>
                <Range rang={rang} setRang={setRang}></Range>
                <LogicGates valor1={rad} valor2={rang} funcion={setComp1}></LogicGates>
                <div><span>Salida 2: <b>{comp1}</b></span></div>
            </div>
            <hr></hr>
            <div className="content3">
                <LogicGates valor1={comp} valor2={comp1} funcion={setComp2}></LogicGates>
                <div><span>Salida total: <b>{comp2}</b></span></div>
            </div>
        </div>
    );
}