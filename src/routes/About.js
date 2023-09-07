import React from 'react';

import ContactSocial from '../components/SocialLinks'

function About(props) {
    return (
        <div className="p-5 bg-light text-dark hero">
            <div className="container">
                <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores cum tempore sequi similique iusto voluptas consectetur officia, sed quam atque deleniti labore fugit aperiam laboriosam nesciunt, ea, harum nostrum aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos itaque sapiente nulla, maiores earum perspiciatis fugiat suscipit similique corporis cupiditate, ducimus qui, dolorum minus minima recusandae dignissimos iusto esse sequi!</p>

                <div className="p-3 rounded-4 mt-5 col col-md-6 col-lg-4 mx-auto" style={{background: "#ecf0f1"}}>
                    <ContactSocial></ContactSocial>
                </div>

                {/* <h1 className='display-5'>About</h1>
                <p className='lead mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim possimus recusandae nulla labore quo quia, maxime deserunt error adipisci dolorem nemo vel maiores incidunt accusantium velit ab expedita animi facere.</p> */}
            </div>
        </div>
    );
}

export default About;