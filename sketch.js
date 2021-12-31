const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerBase,playerArcher;
var computer,computerBase,computerArcher;
var playerArrows  = [];
var computerArrows = [];
var playerArchersLife = 3;
var computerArcherLife = 3;
var backgroundImg;

function preload () {
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  //Create Player Base and Computer Base Object
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  computerArcher = new ComputerArcher(
    width - 350,
    computerBase.body.position.y - 180,
    120,
    120
  );

}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


  for (var i = 0; i < computerArrows.length; i++) {
    showArrows(i,computerArrows);
  }
  playerBase.display();
  player.display();
  player.life();
  playerArcher.display();

  for (var i = 0; i < computerArrows.length; i++) {
    showArrows(i,computerArrows);
  }
  computerBase.display();
  computer.display();
  computer.life();
  computerArcher.display();
}