document.addEventListener('DOMContentLoaded', function (event) {
        fetch('https://swapi.co/api/people/')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);

                // Dette er til skuespillerne
                let div = document.createElement('div');
                div.id = 'content';
                let h1 = document.createElement('h1');
                let textHeader = document.createTextNode("Dette er de forskellige skuespillere");
                h1.appendChild(textHeader);
                div.appendChild(h1);
                // her starter forEach med arrayet fra api'en. skuespiller er fra api'en. Index er ikke nødvendigt i det her eksempel.
                json.results.forEach(function(skuespiller, index) {
                    let h2 = document.createElement('h2');
                    let textNode = document.createTextNode(skuespiller.name);
                    h2.appendChild(textNode);
                    div.appendChild(h2);
                    console.log(skuespiller.name);
                    // Dette er til de forskellige film
                    // her starter forEach igen. enFilm er en parameter vi selv har lavet.
                    skuespiller.films.forEach(function (enFilm){                        

                        fetch(enFilm)
                        .then((response) => {
                            return response.json();
                        })
                        .then((json) => {
                            let divFilm = document.createElement('div');
                            let textFilm = document.createTextNode(json.title);
                            divFilm.id = 'Film';
                            divFilm.appendChild(textFilm);
                            h2.after(divFilm);
                            // console.log(results.title);
                        })
                    });           
                });
                document.body.appendChild(div);
            });
        });                