const btn = document.getElementById('btn');
const box = document.getElementById('hex-code')

function random () {
    let letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters [Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    box.innerHTML = color;
    box.style.color = color;
}



btn.addEventListener('click', random)

