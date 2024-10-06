// button.js
document.addEventListener('DOMContentLoaded', () => {
    // Создаем кнопку
    const button = document.createElement('button');
    button.innerText = 'Try U-GPT';
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)'; // Центрируем кнопку
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.backgroundColor = '#8312d5';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.opacity = '0'; // Скрываем кнопку изначально
    button.style.transformOrigin = 'center'; // Устанавливаем точку преобразования
    button.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Плавный переход для opacity и transform

    // Добавляем кнопку в body
    document.body.appendChild(button);

    // Показать кнопку через 3 секунды
    setTimeout(() => {
        button.style.opacity = '1'; // Показываем кнопку
        button.style.transform += ' scale(1.1)'; // Увеличиваем кнопку
    }, 3000);

    // Обработчик события клика на кнопку
    button.addEventListener('click', () => {
        alert('Вы нажали на кнопку!'); // Здесь можно добавить нужное действие
    });
});
