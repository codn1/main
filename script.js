// Получаем кнопку
const themeToggle = document.getElementById('themeToggle');

// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Проверяем, какую тему пользователь выбрал в прошлый раз
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    themeToggle.textContent = '☀️';
} else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    themeToggle.textContent = '🌙';
}

// Назначаем обработчик на кнопку
themeToggle.addEventListener('click', toggleTheme);