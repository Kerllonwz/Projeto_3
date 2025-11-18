// Aguarda SweetAlert2 carregar
const loadSweetAlert = () => {
    return new Promise((resolve) => {
        if (typeof Swal !== 'undefined') {
            resolve();
        } else {
            const checkInterval = setInterval(() => {
                if (typeof Swal !== 'undefined') {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        }
    });
};

$(document).ready(function() {
    
    // ===========================
    // Máscaras de Entrada
    // ===========================
    if ($.fn.mask) {
        $('#telefone').mask('(00) 00000-0000', {
            placeholder: '(00) 00000-0000'
        });
    }

    // ===========================
    // Validação do Formulário
    // ===========================
    $('#formContato').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                maxlength: 500
            }
        },
        messages: {
            nome: {
                required: 'Por favor, informe seu nome',
                minlength: 'O nome deve ter no mínimo 3 caracteres'
            },
            telefone: {
                required: 'Por favor, informe seu telefone'
            },
            email: {
                required: 'Por favor, informe seu e-mail',
                email: 'Por favor, informe um e-mail válido'
            },
            mensagem: {
                maxlength: 'A mensagem deve ter no máximo 500 caracteres'
            }
        },
        errorClass: 'error',
        validClass: 'success',
        errorElement: 'small',
        errorPlacement: function(error, element) {
            error.addClass('d-block mt-1');
            error.insertAfter(element);
        },
        highlight: function(element) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function(element) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        },
        submitHandler: function(form) {
            // Aguarda SweetAlert carregar
            loadSweetAlert().then(() => {
                // Simula envio do formulário
                const nome = $('#nome').val();
                const plano = $('#plano option:selected').text() || 'Não especificado';
                
                // Exibe mensagem de sucesso
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensagem Enviada!',
                        html: `<p>Obrigado, <strong>${nome}</strong>!</p>
                               <p>Recebemos sua solicitação para o <strong>${plano}</strong>.</p>
                               <p>Entraremos em contato em até 24 horas!</p>`,
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ffc107',
                        customClass: {
                            confirmButton: 'btn btn-warning'
                        }
                    });
                } else {
                    alert(`Obrigado, ${nome}! Recebemos sua solicitação. Entraremos em contato em até 24 horas!`);
                }
                
                // Limpa o formulário
                form.reset();
                $('.form-control').removeClass('is-valid is-invalid');
            });
        }
    });

    // ===========================
    // Scroll Suave ao Clicar nos Links
    // ===========================
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            e.preventDefault();
            
            // Fecha o menu mobile se estiver aberto
            $('.navbar-collapse').collapse('hide');
            
            // Scroll suave
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800, 'swing');
        }
    });

    // ===========================
    // Efeito de Fade In ao Scroll
    // ===========================
    function checkFadeIn() {
        const elements = $('.fade-in');
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();
        
        elements.each(function() {
            const element = $(this);
            const elementTop = element.offset().top;
            
            if (elementTop < scrollTop + windowHeight - 100) {
                element.addClass('visible');
            }
        });
    }

    // Adiciona classe fade-in aos elementos
    $('.card, .sobre-grid > div, #aulas .col-md-6, #aulas .col-lg-3').addClass('fade-in');
    
    // Verifica ao carregar e ao rolar
    checkFadeIn();
    $(window).on('scroll', checkFadeIn);

    // ===========================
    // Navbar Transparente ao Scroll
    // ===========================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('shadow-lg');
        } else {
            $('.navbar').removeClass('shadow-lg');
        }
    });

    // ===========================
    // Contador de Caracteres
    // ===========================
    $('#mensagem').on('keyup', function() {
        const maxLength = 500;
        const currentLength = $(this).val().length;
        const remaining = maxLength - currentLength;
        
        // Remove contador existente
        $(this).siblings('.char-counter').remove();
        
        // Adiciona novo contador
        if (currentLength > 0) {
            $(`<small class="char-counter text-muted d-block mt-1">${remaining} caracteres restantes</small>`)
                .insertAfter($(this));
        }
        
        // Alerta se estiver próximo do limite
        if (remaining < 50 && remaining > 0) {
            $('.char-counter').removeClass('text-muted').addClass('text-warning');
        } else if (remaining <= 0) {
            $('.char-counter').removeClass('text-warning').addClass('text-danger');
        }
    });

    // ===========================
    // Animação dos Cards de Planos
    // ===========================
    $('.hover-card').on('mouseenter', function() {
        $(this).find('.btn').addClass('pulse-animation');
    }).on('mouseleave', function() {
        $(this).find('.btn').removeClass('pulse-animation');
    });

    // Adiciona CSS para animação pulse
    $('<style>')
        .text(`
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            .pulse-animation {
                animation: pulse 0.5s ease;
            }
        `)
        .appendTo('head');

    // ===========================
    // Tooltip Bootstrap
    // ===========================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ===========================
    // Preloader (Opcional)
    // ===========================
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

    // ===========================
    // Easter Egg - Confete ao clicar no logo
    // ===========================
    let clickCount = 0;
    $('.navbar-brand').on('click', function(e) {
        clickCount++;
        if (clickCount >= 5) {
            loadSweetAlert().then(() => {
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        icon: 'success',
                        title: '🎉 Você descobriu um segredo!',
                        text: 'Parabéns! Você é persistente igual um verdadeiro atleta!',
                        confirmButtonText: 'Vamos treinar!',
                        confirmButtonColor: '#ffc107'
                    });
                }
            });
            clickCount = 0;
        }
    });

    // ===========================
    // Console Message
    // ===========================
    console.log('%c💪 FitZone Academia', 'font-size: 24px; color: #ffc107; font-weight: bold;');
    console.log('%cTransforme seu corpo e mente conosco!', 'font-size: 14px; color: #333;');
    console.log('%cVisite: www.fitzone.com.br', 'font-size: 12px; color: #666;');
});

// ===========================
// SweetAlert2 CDN
// ===========================
// Adiciona SweetAlert2 dinamicamente
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(sweetAlertScript);
