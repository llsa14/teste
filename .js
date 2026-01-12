function navegar(elemento, targetId) {
    const itens = document.querySelectorAll('.menu-item');
    itens.forEach(item => item.classList.remove('active'));
    elemento.classList.add('active');

    const views = document.querySelectorAll('.view-section');
    views.forEach(view => view.style.display = 'none');
    
    const targetView = document.getElementById(`view-${targetId}`);
    if (targetView) targetView.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Feedback de Salvar
    const form = document.getElementById('profileForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const btnSalvar = form.querySelector('.btn-primary');
            const originalText = btnSalvar.innerHTML;
            const nome = document.getElementById('nome').value;

            btnSalvar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Salvando...';
            btnSalvar.style.opacity = '0.8';

            setTimeout(() => {
                btnSalvar.innerHTML = '<i class="fa-solid fa-check"></i> Salvo!';
                btnSalvar.style.backgroundColor = '#27ae60';
                btnSalvar.style.opacity = '1';
                
                alert(`Dados de ${nome} salvos com sucesso!`);

                setTimeout(() => {
                    btnSalvar.innerHTML = originalText;
                    btnSalvar.style.backgroundColor = ''; 
                }, 2000);
            }, 1000);
        });
    }

    const inputTelefone = document.getElementById('telefone');
    if(inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }
});

function toggleMobileMenu() {
    alert("Menu mobile aberto!");
}