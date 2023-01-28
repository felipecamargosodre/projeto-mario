/*

OBJETIVO 1 - Quando o usuário clicar no botão "Veja o trailer", devemos abrir a modal com o vídeo do trailer.
- Passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando JS;
- Passo 2: dar um jeito de pegar o elemento da modal no JS;
- Passo 3: dar um jeito de identificar quando o usuário clicar no botão;
- Passo 4: abrir a modal na tela.

OBJETIVO 2 - Quando o usuário clicar no "X" devemos fechar o modal.
- Passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o JS;
- Passo 2 - dar um jeito de identificar quando o usuário clicar no "X";
- Passo 3 - fechar o modal.

*/

//OBJETIVO 1

// Passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando JS;

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo = video.src;

// Passo 2: dar um jeito de pegar o elemento da modal no JS;

const modal = document.querySelector(".modal");

// Passo 3: dar um jeito de identificar quando o usuário clicar no botão;

botaoTrailer.addEventListener("click", () => {
    video.setAttribute("src", linkDoVideo);
    alternarModal();
});

//OBJETIVO 2

const botaoFecharModal = document.querySelector(".fechar-modal");

// Passo 2 - dar um jeito de identificar quando o usuário clicar no "X";

botaoFecharModal.addEventListener("click", () => {
    // Passo 3 - fechar o modal.
    alternarModal();
    video.setAttribute("src", "")
});

function alternarModal() {
    modal.classList.toggle("aberto")
}