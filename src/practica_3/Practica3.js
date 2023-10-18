import { useState } from "react";
import './Practica3.css';
import BtnAdd from "./components/BtnAdd";
import DeleteList from "./components/DeleteList";
import Input from "./components/Input";
import List from "./components/List";

export default function Practica3 ({ props }) {
    const [items,setItems] = useState([]);
    const [item, setItem] = useState(undefined);
    
    return (
        <>
            <h3 className="title">Práctica 3</h3>
            <div className="container">
                <h3 className="title">Lista</h3>
                <Input setItem={setItem}></Input>
                <BtnAdd item={item} setItems={setItems} items={items} setItem={setItem}></BtnAdd>
                <DeleteList setItems={setItems}></DeleteList>
                <List items={items} setItems={setItems}></List>
            </div>
        </>
    );
}