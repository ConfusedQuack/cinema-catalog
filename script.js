function cycleTheme() {
    console.log('theme changed!');
    document.body.classList.toggle('dark-theme');
}

document.querySelector('#btnTheme').addEventListener('click', () => {
    cycleTheme();
});