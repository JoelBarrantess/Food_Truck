document.addEventListener('DOMContentLoaded', function () {

    // Inicializar tooltips con data-bs-toggle="tooltip"
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
        el.tooltipInstance = new bootstrap.Tooltip(el);
    });

    // Inicializar tooltips en dropdown-toggle y navbar-toggler (usan title)
    document.querySelectorAll('.dropdown-toggle[title], .navbar-toggler[title]').forEach(function (el) {
        el.tooltipInstance = new bootstrap.Tooltip(el, { trigger: 'hover', placement: 'bottom' });
    });

    // Login / Logout
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const welcomeText = document.getElementById('welcomeText');
    const loginModalEl = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');

    if (loginBtn && loginModalEl) {
        const loginModal = new bootstrap.Modal(loginModalEl);

        loginBtn.addEventListener('click', function () {
            loginModal.show();
        });

        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const username = document.getElementById('username').value.trim();
                if (username) {
                    welcomeText.textContent = 'Bienvenido ' + username;
                    loginModal.hide();
                    loginBtn.classList.add('d-none');
                    logoutBtn.classList.remove('d-none');
                }
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', function () {
                welcomeText.textContent = '';
                logoutBtn.classList.add('d-none');
                loginBtn.classList.remove('d-none');
            });
        }
    }

});
