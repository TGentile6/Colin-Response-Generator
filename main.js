var files = new Array;
files[0] = "based.gif";
files[1] = "lmao.gif";
files[2] = "Lol.gif";
files[3] = "True-and-real.gif"

rng = Math.floor(Math.random() * 4)

const img = document.createElement("img");
img.src = "Colin/" + files[rng];
console.log(img.src);
document.body.appendChild(img);