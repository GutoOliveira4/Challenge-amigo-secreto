// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.

// Declara um array vazio para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para adicionar um amigo à lista
 */
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Verifica se o nome não está vazio
    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de input
    input.value = "";

    // Atualiza a lista exibida na tela
    atualizarLista();
}

/**
 * Função para atualizar a lista de amigos na interface
 */
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

/**
 * Função para sortear um amigo aleatoriamente
 */
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo foi adicionado ainda.</li>";
        return;
    }

    // Gera um índice aleatório baseado no tamanho do array
    const indice = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const nomeSorteado = amigos[indice];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${nomeSorteado}</strong></li>`;
}

/**
 * Função para reiniciar o sorteio
 */
function novoSorteio() {
    amigos = []; // Zera o array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a lista de nomes
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
    document.getElementById("amigo").value = ""; // Limpa o campo de input
}