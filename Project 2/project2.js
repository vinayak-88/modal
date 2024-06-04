const profile = document.querySelector('.profile')
let share = document.querySelector('.share')
const overlay = document.querySelector('.overlay')
profile.addEventListener('click',function(){
    share.classList.add('active')
    overlay.classList.add('overlayactive')
})
const close = document.querySelector('.close')
close.addEventListener('click',function(){
    share.classList.remove('active')
    overlay.classList.remove('overlayactive')
})
overlay.addEventListener('click',function(){
    share.classList.remove('active')
    overlay.classList.remove('overlayactive')
})