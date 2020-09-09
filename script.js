//FLIP CARDS

const inner = document.getElementById('inner');

function flipMe(){
    inner.classList.toggle('turnMe');
}

//CHANGE CARDS
const count = document.getElementById('count');

var imageList = [
    "archery.jpg",
    "badminton.jpg",
    "basketball.jpg",
    "boxing.jpg",
    "climbing.jpg",
    "diving.jpg",
    "driving.jpg",
    "football.jpg",
    "golf.jpg",
    "gymnastics.jpg",
    "hang-gliding.jpg",
    "hiking.jpg",
    "hockey.jpg",
    "horse-riding.jpg",
    "ice-skating.jpg",
    "karate.jpg",
    "paddle-surf.jpg",
    "rugby.jpg",
    "running.jpg",
    "sailing.jpg",
    "skiing.jpg",
    "surfing.jpg",
    "swimming.jpg",
    "table-tennis.jpg",
    "tennis.jpg",
    "weight-lifting.jpg",
    "windsurfing.jpg",
    "yoga.jpg"
];


let y = flashcard__text.innerHTML;
let z = y.concat('.png');
let x = imageList.indexOf(z);

function goForwards() {

    if (x < (imageList.length-1)) {
        x++;
            document.getElementById('art').src = ` img/${imageList[x]}`;
    document.getElementById('flashcard__text').textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x+1}/${imageList.length}`;
         return x;
    } else {
    
        document.getElementById('art').src = ` img/${imageList[imageList.length-1]}`;
        document.getElementById('flashcard__text').textContent = `${imageList[imageList.length-1].slice(0, -4)}`;
        count.innerHTML = `${imageList.length}/${imageList.length}`;
                 x = 0;
        x = imageList.length;
        return x;
    }
}

function goBackwards() {
        if (x > 0) {
            x--;
                document.getElementById('art').src = ` img/${imageList[x]}`;
    document.getElementById('flashcard__text').textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x+1}/${imageList.length}`;
            return x;
        } else {
            document.getElementById('art').src = ` img/${imageList[0]}`;
    document.getElementById('flashcard__text').textContent = `${imageList[0].slice(0, -4)}`;
    count.innerHTML = `${1}/${imageList.length}`;
             x = 0;
             return x;
        }
    }
    


goForwards();
goBackwards();
  
  