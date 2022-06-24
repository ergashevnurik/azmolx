const ali1 = document.querySelector('.ali_1')
ali1.onclick = function() {
    ali2.classList.remove('active');
    ali3.classList.remove('active');
    ali1.classList.add('active');
    
}


const ali2 = document.querySelector('.ali_2')
ali2.onclick = function() {
    ali1.classList.remove('active');
    ali3.classList.remove('active');
    ali2.classList.add('active');
}


const ali3 = document.querySelector('.ali_3')
ali3.onclick = function() {
    ali2.classList.remove('active');
    ali1.classList.remove('active');
    ali3.classList.add('active');
}