import { Router } from "express";

const suspeitosRoutes = Router();

// Array com os suspeitos
let suspeitos = [
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Matuê",
    idade: 30,
    envolvimento: false,
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Travis Scott",
    idade: 33,
    envolvimento: false,
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Wiu",
    idade: 22,
    envolvimento: true,
},
];

