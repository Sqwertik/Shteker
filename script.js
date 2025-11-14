const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById('menu');
const changeItem = document.getElementById('changeItem');
const placeholder = document.getElementById('placeholder');

burgerBtn.addEventListener('click', () =>
{
    menu.classList.toggle('open');
    burgerBtn.classList.toggle('open');
});


changeItem.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    changeItem.classList.toggle('dark');
    changeItem.classList.toggle('light');

    placeholder.classList.toggle('dark');
    


    changeItem.textContent = document.body.classList.contains('dark')
    ? 'Light Mode' 
    : 'Dark Mode';
});