import React from 'react';

function HomePage( {name, role}) {
    return (
    <div>
        <h1>Hi 👋, My name is {name}</h1>
        <h1>I build things for {role}</h1>
    </div>
    );
}

export default HomePage;
