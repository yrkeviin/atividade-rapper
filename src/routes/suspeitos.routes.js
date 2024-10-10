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

suspeitosRoutes.post("/", (req, res) => {
    const {
        nome,
        idade,
        envolvimento,
        descricaoFisica
    } = req.body;


    //Validação se a idade é um número inteiro
    if(! Number.isInteger(idade)) {
        return res.status(400).send({ message: "Insira uma idade válida!" });
    }

    //Validação se a pessoa inseriu um nome
    if(!nome || !idade || !envolvimento) {
        return res.status(400).send({ message: "Insira um nome!" });
    }

    //Validação do sim ou não no envolvimento
    if(envolvimento != "sim" && envolvimento != "não") {
        return res.status(400).send({ message: "Digite 'sim' ou 'não'!" });
    }

    const novoSuspeito = {
        id: Number(Math.floor(Math.random() * 999999) + 1),
        nome,
        idade,
        envolvimento,
        descricaoFisica
    };

    suspeitos.push(novoSuspeito);
    return res.status(201).send({ message: "Suspeito cadastrado!", novoSuspeito} );
});

// Rota para buscar uma pessoa específica do array suspeitos
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    const suspeito = suspeitos.find((suspect) =>
        suspect.id === Number(id)
    );

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    };

    return res.status(200).send(suspeito)
});

//Rota para editar um suspeito
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    const suspeito = suspeitos.find((suspect) => suspect.id === Number(id)
    );

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" });
    }

    const { nome, idade, envolvimento, descricaoFisica } = req.body

    if(!nome || !idade || !envolvimento){
        return res.status(400).send({ message: "Preencha todos os campos!" });
    }

    suspeito.nome = nome
    suspeito.idade = idade
    suspeito.envolvimento = envolvimento
    suspeito.descricaoFisica = descricaoFisica

    return res.status(200).send({
        message: "Suspeito atualizado!",
        suspeito,
    })
});

//Rota para deletar um suspeito
suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params
    
    const suspeito = suspeitos.find((suspect) => suspect.id === Number(id))
    
    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    };

    suspeitos = suspeitos.filter((suspect) => suspect.id !== Number(id))

    return res.status(200).send({
        message: "Suspeito deletado!",
        suspeito,
    });
});

export default suspeitosRoutes;
