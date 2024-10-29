let audioContext;
let audioElement;

window.onload = function() {
    // Criar o AudioContext após a página carregar
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioElement = new Audio('media/Ringtone_1.mp3');

    // Configurar o AudioContext para se conectar ao áudio
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    // Tentar reproduzir o áudio automaticamente
    playAudio();
};

function playAudio() {
    audioContext.resume().then(() => {
        audioElement.play().then(() => {
            console.log("Áudio reproduzido com sucesso.");
        }).catch(error => {
            console.error("Erro ao reproduzir áudio:", error);
            // Exibir alerta se a reprodução automática falhar
            alert("Não foi possível reproduzir o áudio automaticamente. Clique para permitir a reprodução.");
            // Adicionar um evento de clique para tentar a reprodução novamente
            document.addEventListener('click', handleUserInteraction, { once: true });
        });
    });
}

function handleUserInteraction() {
    // Resumir o contexto de áudio e tentar tocar novamente após interação
    audioContext.resume().then(() => {
        audioElement.play().then(() => {
            console.log("Áudio reproduzido com sucesso após interação.");
        }).catch(error => {
            console.error("Erro ao reproduzir áudio após interação:", error);
        });
    });
}
