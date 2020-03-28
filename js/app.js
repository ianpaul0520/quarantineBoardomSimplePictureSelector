let fakeCollection = [2,3,1,2];
let imgCollection = [
    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=black-flat-screen-computer-monitor-1714208.jpg&fm=jpg",
    "https://images.pexels.com/photos/1781629/pexels-photo-1781629.jpeg?cs=srgb&dl=turned-on-imac-aluminum-1781629.jpg&fm=jpg",
    "https://images.pexels.com/photos/42408/pexels-photo-42408.jpeg?cs=srgb&dl=silver-laptop-computer-next-to-ceramic-cup-42408.jpg&fm=jpg",
    "https://images.pexels.com/photos/58709/pexels-photo-58709.jpeg?cs=srgb&dl=light-apple-working-designer-58709.jpg&fm=jpg"
];

// This is the Main Functionalities
function createElement(sources) {
    // Creating a thumbnail.
    let miniContainer = document.getElementById('thumbnail-container');
    sources.forEach(ele => {
    let img = document.createElement('IMG');
        img.src = ele;
        img.id = "thumbnail";
        img.className = "column is-one-third"
        img.draggable = false;
        img.alt = "image" + ele;
        img.onclick = function() { 
            let myimg = img.getAttribute('src'); 
            document.getElementById('sample-image').src = myimg;
        };

        miniContainer.appendChild(img);
        console.log(img);
    });
}

function screenPicture(arg) {
    if(Array.isArray(arg)) {
        let random = Math.floor(Math.random()*Math.floor(arg.length))
        let viewImage = document.getElementById('sample-image').src = arg[random];
        console.log(arg)
    } else {
        alert('Wrong Parameters');
        return;
    }
}
screenPicture(imgCollection);
createElement(imgCollection);