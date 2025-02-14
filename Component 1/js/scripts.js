document.querySelectorAll('.faq-toggle').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.parentElement.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        item.textContent = item.textContent === '+' ? '-' : '+';
    });
});