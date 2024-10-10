import { Router } from "express";

const suspeitosRoutes = Router();

// Array com os suspeitos
let suspeitos = [
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Matuê",
    idade: 30,
    envolvimento: "não",
    descricaoFisica: [ "cabelo preto", "pardo", "dread" ],
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Travis Scott",
    idade: 33,
    envolvimento: "não",
    descricaoFisica: [ "cabelo preto", "negro", "cabelo crespo" ],
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Wiu",
    idade: 22,
    envolvimento: "sim",
    descricaoFisica: [ "cabelo loiro", "branco", "dread" ],
},
];

// Rota para buscar todos os suspeitos do array
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos);
});

export default suspeitosRoutes;
