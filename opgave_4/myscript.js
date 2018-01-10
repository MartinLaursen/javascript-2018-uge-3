document.addEventListener('DOMContentLoaded', function (event) {
    
    document.querySelector('.button').addEventListener('click', () =>{
        const form = document.querySelector('#kontakt');
        kontakt(form);
    })
});
let span;
let textNode;
    function kontakt (form) {
       let vaildSpan = document.querySelectorAll('.valid');
       vaildSpan.forEach(function(span) {
           span.remove();           
       });

    if (form.name.value == 0) {
    let navn = document.getElementById('navn');
    span = document.createElement('span');
    span.className = 'valid';
    span.appendChild(document.createTextNode('*'));
    navn.appendChild(span);
    event.preventDefault();
    }

    if (form.mail.value == 0) {
        let email = document.getElementById('email');
        span = document.createElement('span');
        span.className = 'valid';
        span.appendChild(document.createTextNode('*'));
        email.appendChild(span);
        event.preventDefault();
    }
    
    if (form.msg.value == 0) {
        let msg = document.getElementById('msg');
        span = document.createElement('span');
        span.className = 'valid';
        span.appendChild(document.createTextNode('*'));
        msg.appendChild(span);
        event.preventDefault();
    }
}