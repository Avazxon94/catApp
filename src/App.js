import React, { useState, useEffect } from 'react';
import './App.css'

const apiKey = '2344f037-b866-491b-a0de-c86901bf0723';
const url = 'https://api.thecatapi.com/v1/images/search';

function App() {

    const [catUrl, setCatUrl] = useState('https://cdn2.thecatapi.com/images/alt.jpg');

    useEffect(() => {
        getCat();
    }, []);

    const getCat = () => {
        console.log('Hello Cats');

        fetch(url, {
                headers: {
                    'x-api-key': apiKey
                }
            })
            .then((res) => res.json())
            .then((cats) => {
                console.log('Cats: ', cats);

                const catUrl = cats[0].url;

                setCatUrl(catUrl);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });
    }

    console.log('Cat url: ', catUrl)


    return ( <
        div className = "app" >
        <
        h1 > The best cat app created < /h1> <
        img src = { catUrl }
        /> <
        button type = 'button'
        onClick = { getCat } > Get new random cat < /button> <
        /div>
    );
}

export default App;