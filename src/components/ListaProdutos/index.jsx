import React from 'react';
import CartaoProduto from '../CartaoProdutos';

import "./style.css"

export default function ListaProdutos() {
    const produtos = [
        {
            nome: "Tênis de Corrida",
            descricao: "Tênis confortável para corridas diárias.",
            preco: "R$ 299,90",
            imagem: "https://imgcentauro-a.akamaihd.net/1366x1366/M112TD01.jpg"
        },
        {
            nome: "Camisa de Ciclismo",
            descricao: "Camisa respirável para ciclistas.",
            preco: "R$ 129,90",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36XZto5VX7L5mDGgkkrZILNfrdWbni82eSA&s"
        },
        {
            nome: "Boné Esportivo",
            descricao: "Boné ajustável para proteção solar.",
            preco: "R$ 59,90",
            imagem: "data:image/jpeg;base64,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"
        }
        ];
    
    return (
        <div className="lista-produtos">
            {produtos.map((produto, index) => (
            <CartaoProduto key={index} produto={produto} />
            ))}
        </div>
    );
}