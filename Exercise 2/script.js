"use strict";

fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            console.log('SUCCES', response);
        } else(
            console.log('NO SUCCES', response)
        );
        return response.json();
    })
    .then(data => {
        console.log(data);
        let htmlString = `
                <h2>Name: ${data}</h2> 
            `;
        document.getElementById('dataContainer').innerHTML = htmlString;
    });