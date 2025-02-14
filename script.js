document.addEventListener('DOMContentLoaded', () => {
    // Navbar - Destacar o link ativo
    const navLinks = document.querySelector('.nav-links');

    // Delegação de evento para links da navegação
    navLinks.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A') {
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => link.classList.remove('active')); // Remove 'active' de todos
            event.target.classList.add('active'); // Adiciona 'active' ao link clicado
        }
    });

    // Carrossel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const slideInterval = 3000; // Intervalo de 3 segundos
    const carouselContainer = document.querySelector('.carousel-container');

    // Função para mostrar o slide atual
    function showSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides; // Garante que o índice seja válido

        // Oculta todos os slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Mostra o slide atual
        slides[currentSlide].classList.add('active');
    }

    // Avançar para o próximo slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Retroceder para o slide anterior
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Inicia o carrossel automaticamente
    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval); // Passa os slides a cada 3 segundos

    // Acessibilidade - Marcar o carrossel como área interativa para leitores de tela
    if (carouselContainer) {
        carouselContainer.setAttribute('aria-live', 'polite'); // Importante para leitores de tela
    }

    // Configuração dos botões de navegação do carrossel (se houver)
    const nextButton = document.getElementById('nextSlide');
    const prevButton = document.getElementById('prevSlide');

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    // Configuração do botão "Adquira já" para redirecionamento
    const adButton = document.getElementById('adButton');
    if (adButton) {
        adButton.addEventListener('click', () => {
            window.location.href = 'contato.html'; // Redireciona para a página de contato
        });
    }

    // Exibir o ano atual no rodapé
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Função para validação e envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validação simples para garantir que os campos obrigatórios não estão vazios
    if (!name || !email || !subject || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação básica de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Cria o link 'mailto' com os dados do formulário
    const mailtoLink = `mailto:codesoluctioncontato@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nome: " + name + "\nEmail: " + email + "\n\n" + message)}`;

    // Abre o cliente de e-mail com os dados preenchidos
    window.location.href = mailtoLink;
}

// Exibe o ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
