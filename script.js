const personagens = [
    { nome: "Chrono", habilidade: "Cria uma área de proteção que reduz o dano." },
    { nome: "Kla", habilidade: "Aumenta o dano corpo a corpo." },
    { nome: "A124", habilidade: "Remove HP de inimigos e recupera seu próprio." }
];

const armas = [
    { nome: "AK47", tipo: "Rifle de Assalto", dano: 47 },
    { nome: "M1014", tipo: "Shotgun", dano: 25 },
    { nome: "MP5", tipo: "Submetralhadora", dano: 28 }
];

const eventos = [
    "Evento de Aniversário: Celebração com missões e recompensas.",
    "Festival de Verão: Atividades temáticas e novos skins.",
    "Campeonato Mundial: Confraternização de equipes de todo o mundo."
];

const campeonatos = [
    "Copa Free Fire: Um dos maiores torneios do Brasil.",
    "Liga Brasileira de Free Fire: Campeonato regular com equipes profissionais.",
    "Copa Nobru: Organizada pelo jogador Nobru, destacando grandes equipes."
];

const dicas = [
    "Use fones de ouvido para ouvir passos.",
    "Escolha bem sua posição no mapa.",
    "Trabalhe em equipe para melhor desempenho."
];

function mostrarPersonagens() {
    const lista = document.getElementById("lista-personagens");
    lista.innerHTML = '';
    personagens.forEach(personagem => {
        lista.innerHTML += `<div>${personagem.nome} - ${personagem.habilidade}</div>`;
    });
}

function mostrarArmas() {
    const lista = document.getElementById("lista-armas");
    lista.innerHTML = '';
    armas.forEach(arma => {
        lista.innerHTML += `<div>${arma.nome} - ${arma.tipo} - Dano: ${arma.dano}</div>`;
    });
}

function mostrarEventos() {
    const lista = document.getElementById("lista-eventos");
    lista.innerHTML = '';
    eventos.forEach(evento => {
        lista.innerHTML += `<li>${evento}</li>`;
    });
}

function mostrarCampeonatos() {
    const lista = document.getElementById("lista-campeonatos");
    lista.innerHTML = '';
    campeonatos.forEach(campeonato => {
        lista.innerHTML += `<li>${campeonato}</li>`;
    });
}

function mostrarDicas() {
    const lista = document.getElementById("lista-dicas");
    lista.innerHTML = '';
    dicas.forEach(dica => {
        lista.innerHTML += `<div>${dica}</div>`;
    });
}
