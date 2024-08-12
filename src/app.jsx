import React from "react";
import ListaProdutos from "./components/ListaProdutos";

import "./app.css"

export default function App () {
    return (
        <div className="app">
            <h1>Lista de Produtos</h1>
            <ListaProdutos />
        </div>
    )
}