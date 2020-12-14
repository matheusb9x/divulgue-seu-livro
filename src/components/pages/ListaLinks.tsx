import React from "react";
import {
    Link
} from "react-router-dom";

export const ListaLinks = () => {
    return (
        <div>
            <ul>
                <li><Link to="/escritor/home">Escritor/Home</Link></li>
                <li><Link to="/escritor/contato">/escritor/contato</Link></li>
                <li><Link to="/editora/home">/editora/home</Link></li>
                <li><Link to="/editora/list">/editora/list</Link></li>
                <li><Link to="/editora/read">/editora/read</Link></li>
            </ul>
        </div>
    );
};