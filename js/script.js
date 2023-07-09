// Verifique se o navegador suporta a API Web Share
if (navigator.share) {
    // Adicione o evento de clique ao botão de compartilhamento
    const enviar = document.getElementById('btnimp')
    enviar.addEventListener('click', function() {
      // Use a API Web Share para compartilhar o conteúdo
      
      const conteudo = document.getElementById('container')

      const options = {
          margin: [10, 10, 10, 10],
          filename: "dados de reserva.pdf",
          html2canvas: {scale: 1},
          jsPDF: {unit: "mm", format: "A4", orientation: "portrait"}
      };
  
      const pdf = html2pdf().set(options).from(conteudo).save();

      navigator.share({
        title: 'Dados da Reserva',
        text: 'Reserva efetuada',
        url: pdf // URL a ser compartilhada
      })
      .then(function() {
        console.log('Conteúdo compartilhado com sucesso!');
      })
      .catch(function(error) {
        console.error('Erro ao compartilhar:', error);
      });
    });
  } else {
    // Caso o navegador não suporte a API Web Share, exiba uma mensagem alternativa
    var btnShare = document.getElementById('btnimp');
    btnShare.style.display = 'none';
    var message = document.createElement('p');
    message.textContent = 'Compartilhamento não suportado neste navegador.';
    document.body.appendChild(message);
  }
  
