import React from 'react';

function About() {
  return (
    <div className='about-page'>
      <h1>About me</h1>
      <p>I’m a software developer and this is my portfolio. <br />
      I’m software developer and this is my portfolio. I’m software developer <br /> 
      and this is my portfolio. I’m software developer and this is my portfolio.</p>
      <div className='tech-stack'> 
        <ul class="bigger-orange-bullets">
          <li> HTML</li>
          <li> CSS</li>
          <li> JS</li>
          <li> React</li>
          <li> Vite</li>
        </ul>
        <ul class="bigger-orange-bullets">
          <li> C</li>
          <li> C++</li>
          <li> Python</li>
          <li> SwiftUI</li>
          <li> Kotlin</li>
        </ul>
      </div>
    </div>
  );
}
  

export default About;
