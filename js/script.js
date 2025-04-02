const sounds = {
    cat: new Audio('audio/cat.wav'),
    dog: new Audio('audio/dogs.wav'),
    Bird: new Audio('audio/bird.wav'),
    rooster: new Audio('audio/rooster.wav'),
    wolves: new Audio('audio/wolves.wav')
};

let droppedAnimals = [];

document.querySelectorAll('.animal').forEach(animal => {
    animal.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
    });
});

document.getElementById('dropbox').addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.getElementById('dropbox').addEventListener('drop', (e) => {
    e.preventDefault();
    let animal = e.dataTransfer.getData('text');
    
    if (!droppedAnimals.includes(animal)) {
        droppedAnimals.push(animal);
        sounds[animal].play();

        if (droppedAnimals.length === 2) {
            mixSounds();
        }
    }
});

function mixSounds() {
    let [sound1, sound2] = droppedAnimals.map(animal => sounds[animal]);
    sound1.play();
    setTimeout(() => sound2.play(), 500); 
    droppedAnimals = []; 
}