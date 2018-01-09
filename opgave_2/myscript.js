document.addEventListener("DOMContentLoaded", event => {
    console.log(document.body);
    let divs = document.querySelectorAll('div');
    let count = divs.length;
    for (let i = 0; i < count; i++) {
        divs[i].remove();
    }

    let ex1 = () => {
        let div = document.createElement('div');
        let textNode = document.createTextNode('Teksten i diven');
        div.appendChild(textNode);
        div.className = 'myDivClass';
        div.id = 'myDivId';
        document.body.appendChild(div);
    }
    let ex2 = () => {
        let h2 = document.createElement('h2');
        let textNode = document.createTextNode('Dette skal være før teskten i diven');
        h2.appendChild(textNode);
        document.body.appendChild(h2);
    }
    let ex3 = () => {
        let ol = document.createElement('ol');
        let firstLi = document.createElement('li');
        let secoundLi = document.createElement('li');
        ol.appendChild(firstLi);
        ol.appendChild(secoundLi);
        let textNodeFirst = document.createTextNode('Dette skal være først');
        let textNodeSecound = document.createTextNode('Dette skal være sidst');
        firstLi.appendChild(textNodeFirst);
        secoundLi.appendChild(textNodeSecound);
        document.body.appendChild(ol);
    }
    let ex4 = () => {
        arr = [
            "hi",
            "hello",
            "hey"
        ];
        console.log(arr);
        let ol = document.createElement('ol');
        arr.forEach(function(element, index) {
            let li = document.createElement('li');
            let textNode = document.createTextNode(arr[index]);
            li.appendChild(textNode);
            ol.appendChild(li);
            
        });
        document.body.appendChild(ol);
    }

    let ex5 = () => {
        let div = document.createElement('div');
        let text = document.createTextNode('Dette skal være inde i diven, ex5');
        div.appendChild(text);
        let clone = div.cloneNode(true);
        clone.textContent = "Denne tekst er blevet klonet";
        
        document.body.appendChild(div);
        document.body.appendChild(clone);
        // console.log(div);
    }

    let ex6 = () => {
        arr = [
            "Home",
            "Our Team",
            "Projects",
            "Contact"
        ];
        console.log(arr);
        let nav = document.createElement('nav');
        let ul = document.createElement('ul');
        arr.forEach(function(element, index) {
            let li = document.createElement('li');
            let textNode = document.createTextNode(arr[index]);
            li.appendChild(textNode);
            ul.appendChild(li);
            nav.appendChild(ul);            
        });
        document.body.appendChild(nav);
    }


    // ex2();
    ex6();
    // ex5();
    // ex4();
    // ex3();
    // ex1();

});