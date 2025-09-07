   
   //alternar entre menu e x
   menu.addEventListener('click', alternar)
   
   function alternar() {
  const img = document.getElementById("menu");
  if (img.src.includes("imagens/menu.svg")) {
    img.src = "imagens/x.svg";
  } else {
    img.src = "imagens/menu.svg";
  }
} 
     
       
       //Função do menu
       menu.addEventListener('click', mostrar)
       
       function mostrar(){
         if(itens.style.display == 'block'){
           itens.style.display = 'none'
         } else {
           itens.style.display = 'block'
         }
       }
       
       
        // Slideshow
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slide-nav-item');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // Mudar slide a cada 5 segundos
        setInterval(nextSlide, 3000);
        
        // Navegação por dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Smooth scrolling para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        
        
        
        
        document.getElementById('tourForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Coletar todos os dados do formulário
    const formData = {
        // Informações Pessoais
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('phone').value,
        pais: document.getElementById('country').value,
        
        // Preferências de Viagem
        destino: document.getElementById('destination').value,
        dataViagem: document.getElementById('travel-date').value,
        duracao: document.getElementById('duration').value,
        interesses: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value),
        orcamento: document.getElementById('budget').value,
        
        // Informações Adicionais
        acompanhantes: document.getElementById('companions').value,
        acomodacao: document.getElementById('accommodation').value,
        requisitosEspeciais: document.getElementById('special-requirements').value,
        comoEncontrou: document.getElementById('how-found').value
    };
    
    // Criar uma nova janela/página para exibir os dados
    const summaryWindow = window.open('', '_blank');
    summaryWindow.document.write(`
        <html>
        <head>
            <title>Resumo do Formulário</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 800px; margin: 0 auto; }
                h1 { color: #CC092F; text-align: center; }
                h2 { color: #CC092F; border-bottom: 1px solid #eee; padding-bottom: 5px; }
                .section { margin-bottom: 30px; }
                .field { margin-bottom: 10px; }
                .field label { font-weight: bold; display: inline-block; min-width: 200px; }
                .interests-list { list-style-type: none; padding: 0; }
                .interests-list li { display: inline-block; margin-right: 10px; background: #f0f0f0; padding: 5px 10px; border-radius: 3px; }
            </style>
        </head>
        <body>
            <h1>Resumo do Seu Formulário</h1>
            
            <div class="section">
                <h2>Informações Pessoais</h2>
                <div class="field"><label>Nome Completo:</label> ${formData.nome}</div>
                <div class="field"><label>E-mail:</label> ${formData.email}</div>
                <div class="field"><label>Telefone:</label> ${formData.telefone || 'Não informado'}</div>
                <div class="field"><label>País de Origem:</label> ${formData.pais}</div>
            </div>
            
            <div class="section">
                <h2>Preferências de Viagem</h2>
                <div class="field"><label>Destino de Interesse:</label> ${formData.destino}</div>
                <div class="field"><label>Data Prevista para Viagem:</label> ${formData.dataViagem || 'Não definida'}</div>
                <div class="field"><label>Duração da Viagem:</label> ${formData.duracao.replace('-', ' ').replace('week', 'semana').replace('month', 'mês')}</div>
                <div class="field">
                    <label>Interesses:</label>
                    <ul class="interests-list">
                        ${formData.interesses.length > 0 
                            ? formData.interesses.map(int => `<li>${getInterestLabel(int)}</li>`).join('')
                            : '<li>Nenhum interesse selecionado</li>'}
                    </ul>
                </div>
                <div class="field"><label>Orçamento Aproximado:</label> ${formData.orcamento.replace('economico', 'Econômico').replace('medio', 'Médio').replace('alto', 'Alto').replace('luxo', 'Luxo')}</div>
            </div>
            
            <div class="section">
                <h2>Informações Adicionais</h2>
                <div class="field"><label>Número de Acompanhantes:</label> ${formData.acompanhantes || '0'}</div>
                <div class="field"><label>Tipo de Acomodação Preferida:</label> ${formData.acomodacao}</div>
                <div class="field"><label>Requisitos Especiais:</label> ${formData.requisitosEspeciais || 'Nenhum'}</div>
                <div class="field"><label>Como nos encontrou?</label> ${formData.comoEncontrou.replace('-', ' ')}</div>
            </div>
        </body>
        </html>
    `);
    
    // Fechar o documento para que ele seja renderizado
    summaryWindow.document.close();
});

// Função auxiliar para traduzir os valores dos interesses
function getInterestLabel(value) {
    const interestsMap = {
        'cultura': 'Cultura e História',
        'natureza': 'Natureza e Aventura',
        'praias': 'Praias',
        'gastronomia': 'Gastronomia',
        'compras': 'Compras',
        'noite': 'Vida Noturna'
    };
    return interestsMap[value] || value;
}