import React, {useEffect, useState} from 'react';
import Typewriter from 'typewriter-effect';
import data from '../static/json/hello.json';

function Greeting(props) {

    const [greeting, setGreeting] = useState([]);

    useEffect(() => {
        const stringArray = data.map(item => item.hello);
        setGreeting(stringArray);
    }, []);

    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter.pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
                strings: greeting,
                autoStart: true,
                loop: true
            }}
        />
    );
}

export default Greeting;