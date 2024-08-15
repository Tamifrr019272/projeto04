let palavra;
let som;
let imagem;


function setup() {
  createCanvas(600, 600);
  palavra = connor();
som.loop();




}

function preload(){
  imagem = loadImage("imagem.jpeg")
  som = loadSound("som.mp3");

}






function draw() {
  

  batata();
  connor();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX, 0, width,1, palavra.length);
  let inicio = palavra.substring(0, aparecer);
  text(inicio, 300,300);
}

function batata(){
   background("black");
  image(imagem,0,0,600,600);
  fill("green");
  textSize(80);
  textAlign(CENTER,CENTER);
}

function connor(){
   let palavras = ["gato","cachorro","coelho","vaca"];
  return random(palavras);

}