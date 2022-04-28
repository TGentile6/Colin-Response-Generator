var files = new Array;
files[0] = "based.gif";
files[1] = "lmao.gif";
files[2] = "Lol.gif";
files[3] = "True-and-real.gif"

const div = document.getElementById("container")

function newImage(){
    var rng = Math.floor(Math.random() * 4)
    const img = document.createElement("img");
    img.id = "image"
    img.src = "Colin/" + files[rng];
    div.appendChild(img);
}

function removeImage(){
    const imgRef = document.getElementById("image")
    imgRef.remove();
}

newImage()

var button = document.getElementById('button');
button.onclick = function(){
    removeImage()
    newImage()
}