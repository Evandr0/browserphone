let audioContext;
let audioElement = new Audio('media/Ringtone_1.mp3');

window.onload = function() {
    // Exibir uma mensagem visual ou prompt para que o usuário clique na página
    alert("Clique em qualquer lugar da página para iniciar o áudio.");

    // Adicionar um evento de clique para criar e iniciar o áudio com interação do usuário
    document.addEventListener('click', handleUserInteraction, { once: true });
};

function handleUserInteraction() {
    // Criar o AudioContext após a interação do usuário
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    // Iniciar o AudioContext e tocar o áudio
    audioContext.resume().then(() => {
        return audioElement.play();
    }).then(() => {
        console.log("Áudio reproduzido com sucesso após interação.");
    }).catch(error => {
        console.error("Erro ao reproduzir áudio após interação:", error);
    });
}
