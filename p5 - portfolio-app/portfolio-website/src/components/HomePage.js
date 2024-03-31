import React from 'react';

function HomePage( {name, role}) {
    return (
    <div className='homepage-box'>
        <div>
            <h1>Hi 👋, I’m {name}, <br />I build things for the {role}.</h1>
            <p>I’m software developer and this is my portfolio.</p>
        </div>
        <div>
            <button className='btn btn-primary'>Check Out My CV</button>
        </div>
    </div>
    );
}

export default HomePage;
