if(localStorage.getItem('theme') === 'dark')
{
    document.body.classList.add('dark');
}
document.getElementById('darkmode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isdark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isdark ? 'dark' : 'light');
});