const containerEl = document.querySelector(".container");

roles=["Web Developer", "Full Stack Developer", "Mern Developer"];

let rolesIndex = 0;

let charIndex = 0;

textAnimation();



function textAnimation(){
    charIndex++;
    containerEl.innerHTML = `
    <h1>I am a ${roles[rolesIndex].slice(0, charIndex)}</h1>
    `;
    if(charIndex === roles[rolesIndex].length){
        rolesIndex++;
        charIndex=0;
    }
    if(rolesIndex === roles.length){
        rolesIndex = 0;
    }
    
    setTimeout(textAnimation, 100);
    
}

