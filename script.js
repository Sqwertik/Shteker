const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById('menu');
const changeItem = document.getElementById('changeItem');

burgerBtn.addEventListener('click', () =>
{
    menu.classList.toggle('open');
    burgerBtn.classList.toggle('open');
});


changeItem.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    changeItem.classList.toggle('dark');
    changeItem.classList.toggle('light');


    changeItem.textContent = document.body.classList.contains('dark')
    ? 'Light Mode' 
    : 'Dark Mode';
});