import React from 'react';

import Greeting from '../components/Greeting';


function Home(props) {
    return (
        <div className="p-5 bg-light text-dark hero">
            <div className="container d-block h-100">
                <h1 className='display-5'><Greeting></Greeting></h1>
                <p className='lead mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim possimus recusandae nulla labore quo quia, maxime deserunt error adipisci dolorem nemo vel maiores incidunt accusantium velit ab expedita animi facere.</p>
            </div>
        </div>
    );
}

export default Home;