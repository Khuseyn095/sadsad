 let elem = document.querySelector('.wrap')

 elem.addEventListener('click', (event) => {
     let target = event.target;
     if (target.classList.contains('card')){
         target.classList.add('new')
     }
 })

 let text = document.querySelector('.card__title')
 text.addEventListener('click', (event) => {
     let target = event.target;
     if (target.classList.contains('card__text')){
         target.outerHTML = `<input class="card__text" value = ${target.innerHTML}`>
         console.log(target.innerHTML)
     }
 })

 elem.addEventListener(`dblclick`, (event) => {
     let target = event.target
     if (target.classList.contains(`card__text`) && target.tagName == 'INPUT'){
        target.outerHTML = `<p class="card__text">${target.value}</p>`
         console.log(target.innerHTML)
     }
 })

document.addEventListener("DOMContentLoaded", function() {
    const field = document.querySelector('.field');
    const ball = document.querySelector('.ball');
    
    field.addEventListener('click', function(event) {
        const ballRadius = ball.offsetWidth / 2;
        const fieldRect = field.getBoundingClientRect();
        
        const ballX = event.clientX - fieldRect.left - ballRadius;
        const ballY = event.clientY - fieldRect.top - ballRadius;
        
        const maxX = field.offsetWidth - ball.offsetWidth;
        const maxY = field.offsetHeight - ball.offsetHeight;
        
        const limitedX = Math.min(Math.max(ballX, 0), maxX);
        const limitedY = Math.min(Math.max(ballY, 0), maxY);
        
        ball.style.left = limitedX + 'px';
        ball.style.top = limitedY + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let messages = document.getElementById('messages');
    
    messages.addEventListener('click', function(event) {
        if (event.target.classList.contains('closeBtn')) {
            let messageItem = event.target.parentElement;
            messages.removeChild(messageItem);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let messages2 = document.getElementById('messages__2');
    
    messages2.addEventListener('click', function(event) {
        if (event.target.classList.contains('closeBtn')) {
            let messageItem = event.target.parentElement;
            messages2.removeChild(messageItem);
        }
    });
});