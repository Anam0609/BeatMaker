// getting the class names from the html file
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#272727',
        'pink',
        'orange',
        'purple',
        'green',
        'red',
    ];


    console.log(sounds);

    // playing the sound when the pads are clicked
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){

            // resets the sound everytime a user clicks
            sounds[index].currentTime = 0;

            //plays the sounds
            sounds[index].play();

            // calls the bubble function
            createBubbles(index);
        });
    });

    // function that creates bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        // changes the color of the bubble to the color of the pads
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    };
});
