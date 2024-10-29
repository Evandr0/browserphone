let audioContext;
let audioElement = new Audio('media/Ringtone_1.mp3');

function handleUserInteraction() {
    // Criar o AudioContext após a interação do usuário
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    // Tentar reproduzir o áudio
    audioContext.resume().then(() => {
        return audioElement.play();
    }).then(() => {
        console.log("Áudio reproduzido com sucesso após interação.");
        document.getElementById('audioModal').style.display = 'none'; // Fechar o modal
    }).catch(error => {
        console.error("Erro ao reproduzir áudio:", error);
    });
}
