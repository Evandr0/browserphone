let audioContext;
let audioElement;

window.onload = function() {
    // Criar o AudioContext após a página carregar
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioElement = new Audio('media/Ringtone_1.mp3');

    // Tentar reproduzir o áudio
    playAudio();
};

function playAudio() {
    // Tentar reproduzir o áudio
    audioElement.play().then(() => {
        console.log("Áudio reproduzido com sucesso.");
    }).catch(error => {
        console.error("Erro ao reproduzir áudio:", error);
        // Se falhar, talvez você queira exibir uma mensagem para o usuário.
        alert("Não foi possível reproduzir o áudio automaticamente. Por favor, interaja com a página.");
    });
}