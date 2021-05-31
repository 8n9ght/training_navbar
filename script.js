let c_banner = document.getElementById('banner');
let c_close = document.getElementById('close');
let c_title = document.getElementById('cookies_title')
let c_stitle = document.getElementById('cookies_subtitle')
let c_img = document.getElementById('cookies_img')
let c_text = document.getElementById('cookies_text')
let c_link = document.getElementById('cookies_more')

function closing() {
    c_banner.classList.add('minifier');
    c_close.classList.add('frag');
    c_title.classList.add('frag');
    c_stitle.classList.add('frag');
    c_img.classList.add('minifier-img');
    c_text.classList.add('frag');
    c_link.classList.add('frag');
}

function restore() {
    c_banner.classList.remove('minifier');
    c_close.classList.remove('frag');
    c_title.classList.remove('frag');
    c_stitle.classList.remove('frag');
    c_img.classList.remove('minifier-img');
    c_text.classList.remove('frag');
    c_link.classList.remove('frag');
}

c_close.addEventListener('click', closing);
c_img.addEventListener('click', restore);


function spawning(){
    document.querySelector('.navigation_mobile').classList.toggle('spawn');
    document.querySelector('.burger').classList.toggle('crossform');
    document.querySelector('.burger:nth-child(2)').classList.toggle('crossform2');
    document.querySelector('.burger:nth-child(3)').classList.toggle('nothingness');
}

document.querySelector('.navigation_burger').addEventListener('click', spawning);