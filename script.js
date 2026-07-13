function atualizarTodasAsDatas() {
    const dataAtual = new Date();

    const opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    };

    let dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);
    dataFormatada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    const elementosData = document.querySelectorAll('.data-extenso');
    elementosData.forEach(elemento => {
        elemento.textContent = dataFormatada;
    });

}
atualizarTodasAsDatas();