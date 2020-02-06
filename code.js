var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["12f8f2ea-8d41-452a-9a6b-295fb5a20057","52d73c12-8f4e-4de6-8216-b9760eb67ae4","5f92ea95-f87c-4c23-8699-a3a3111a1f60","9e4cd413-a855-477a-bf72-c2c2cd414b40","21090a2a-6dfb-4110-92c1-eafe447170a3","e68e460f-0757-4dca-afcc-ab4488ce5288","53337c96-7506-4e58-8c46-3b26d5ebd26a","32d0f26d-edfd-46d5-b942-a1fbc05177bd"],"propsByKey":{"12f8f2ea-8d41-452a-9a6b-295fb5a20057":{"name":"playerShip1_blue_1","sourceUrl":null,"frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"8cjzikdcq9Fc8hlUx5b_P6lRtEwYT_M0","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/12f8f2ea-8d41-452a-9a6b-295fb5a20057.png"},"52d73c12-8f4e-4de6-8216-b9760eb67ae4":{"name":"hi 1","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"VVWp7ExrhekGYEKPAknX6HVxDGKAadrS","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/52d73c12-8f4e-4de6-8216-b9760eb67ae4.png"},"5f92ea95-f87c-4c23-8699-a3a3111a1f60":{"name":"hi 2","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"HJLSbkT6sVo5WrLa5u0CbHThzXDLhrEO","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/5f92ea95-f87c-4c23-8699-a3a3111a1f60.png"},"9e4cd413-a855-477a-bf72-c2c2cd414b40":{"name":"hi 3","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"sdwbYHjFAqiEVzFyMcU6kMCSbV_TBowv","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/9e4cd413-a855-477a-bf72-c2c2cd414b40.png"},"21090a2a-6dfb-4110-92c1-eafe447170a3":{"name":"hi 5","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"FF8c_jTJ0QnFTvUFOqM0P6GJrftTkqrk","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/21090a2a-6dfb-4110-92c1-eafe447170a3.png"},"e68e460f-0757-4dca-afcc-ab4488ce5288":{"name":"hi 4","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"95gqTM2gxTzR6j..f.fIr4Zck1vCAFUp","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/e68e460f-0757-4dca-afcc-ab4488ce5288.png"},"53337c96-7506-4e58-8c46-3b26d5ebd26a":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF/category_backgrounds/background_space.png"},"32d0f26d-edfd-46d5-b942-a1fbc05177bd":{"name":"pieceYellow_single18_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"Radofo0y9u3RrtzMBvaKhNZo5Yk15psy","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/32d0f26d-edfd-46d5-b942-a1fbc05177bd.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the fighter jet
var ftr = createSprite(130, 360, 20, 20);
ftr.setAnimation("playerShip1_blue_1");
ftr.scale = 0.7;

//creating groups for each sprite
var bulletgrp = createGroup();
var greengrp = createGroup();
var orangegrp = createGroup();
var whitegrp = createGroup();
var bluegrp = createGroup();
var blackgrp = createGroup();

var initScrValue = 30;

//creating background
var screen = createSprite(200, 200);
  screen.setAnimation("space_1");

//creating gamestates
var play = 1;
var end = 0;
var gameState = end;

//setting the depth
ftr.depth = screen.depth +1;

//creating score and time
var score = 0;
var time = initScrValue;

function draw() 
{
  background("white");
  drawSprites();
  ftr.x = World.mouseX;
  console.log(World.seconds);
  
  text("Time left: "+ Math.round(time), 20, 20);
  
  //adding functions
  Shoot();
  green();
  white();
  orange();
  blue();
  black();
  
  //adding and subtracting points
  addpoint();
  subtractpoint();
  
  //Things to do in start state
  if(gameState === end)
  {
    fill("orange");
    text("Press space to shoot", 150, 175);
    
    fill("white");
    text("Shoot only the colours of Indian Flag(green, orange and white)", 40, 200);
    text("If you hit any other colour, points will be subtracted", 70, 230);
    
    fill("green");
    text("You have 30sec, press space to start/restart", 100, 260);
  }
  
  //to switch states
  if(keyWentDown("space") && gameState === end)
  {
    gameState = play;
    time = initScrValue;
    console.log("time" + time);
    score = 0;
    
    
    greengrp.setLifetimeEach(0);
    blackgrp.setLifetimeEach(0);
    bluegrp.setLifetimeEach(0);
    whitegrp.setLifetimeEach(0);
    orangegrp.setLifetimeEach(0);
  }
   
  //events to do when time = 0
 
  if(time <  0 && gameState === play)
  {
    gameState = end;
  }
  
  //Things to do in play state
  if(gameState === play)
  {
    text("Score: "+ score, 280, 40);
    time = time - .03;
    
    
  }
  
  //things to do in end state
  if(gameState === end){
    fill("red");
    textSize(30);
    text("Score: " + score, 160, 130);
    
    greengrp.setLifetimeEach(-1);
    blackgrp.setLifetimeEach(-1);
    bluegrp.setLifetimeEach(-1);
    whitegrp.setLifetimeEach(-1);
    orangegrp.setLifetimeEach(-1);
    
    greengrp.setVelocityYEach(0);
    orangegrp.setVelocityYEach(0);
    whitegrp.setVelocityYEach(0);
    blackgrp.setVelocityYEach(0);
    bluegrp.setVelocityYEach(0);
    
    ftr.x = 200;
    
    bulletgrp.setLifetimeEach(0);
  }
}
  
function Shoot(){
  if(keyDown("space")){
  var bullet = createSprite(20, 360, 20, 20);
  bullet.setAnimation("pieceYellow_single18_1");
  
    bullet.x = ftr.x;
    bullet.scale = 0.10;
    bullet.velocityY = -6;
    
    bullet.lifetime =180;
    
    bulletgrp.add(bullet);
  }   
}

//display green drone
function green(){
  if(World.frameCount%90 === 0 && gameState === play){
    var greendrone = createSprite(randomNumber(0, 400), 0, 30, 30);
    greendrone.setAnimation("hi 3");
    greendrone.scale = 0.35;
    
    greendrone.lifetime = 200;
    greendrone.velocityY  = 2;
    
    greengrp.add(greendrone);
  }
  
}

//display white drone
function white(){
  if(World.frameCount%95 === 0 && gameState === play){
    var whitedrone = createSprite(randomNumber(0, 400), 0, 30, 30);
    whitedrone.setAnimation("hi 1");
    whitedrone.scale = 0.35;
    
    whitedrone.velocityY  = 3;
    whitedrone.lifetime = 200;
    
    whitegrp.add(whitedrone);
  }
}

//display orange drone
function orange(){
  if(World.frameCount%100 === 0 && gameState === play){
    var orangedrone = createSprite(randomNumber(0, 400), 0, 30, 30);
    orangedrone.setAnimation("hi 2");
    orangedrone.scale = 0.35;
    
    orangedrone.velocityY  = 5;
    orangedrone.lifetime = 200;
    
    orangegrp.add(orangedrone);
  }
}

//display black drone
function black(){
  if(World.frameCount%100 === 0 && gameState === play){
    var blackdrone = createSprite(randomNumber(0, 400), 0, 30, 30);
    blackdrone.setAnimation("hi 5");
    blackdrone.scale = 0.35;
    
    blackdrone.velocityY  = 2;
    blackdrone.lifetime = 200;
    
    blackgrp.add(blackdrone);
  }
}       

//display blue drone
function blue(){
  if(World.frameCount%100 === 0 && gameState === play){
    var bluedrone = createSprite(randomNumber(0, 400), 0, 30, 30);
    bluedrone.setAnimation("hi 4");
    bluedrone.scale = 0.35;
    
    bluedrone.velocityY  = 3;
    bluedrone.lifetime = 200;
    
    bluegrp.add(bluedrone);
  }
}

function addpoint(){
  if(bulletgrp.isTouching(orangegrp)){
    score = score + 3;
    orangegrp.setLifetimeEach(0);
    bulletgrp.setLifetimeEach(0);
  }
  
  if(bulletgrp.isTouching(whitegrp)){
  score = score + 3;
  whitegrp.setLifetimeEach(0);
  bulletgrp.setLifetimeEach(0);
  }
  
  if(bulletgrp.isTouching(greengrp)){
  score = score + 3;
  greengrp.setLifetimeEach(0);
  bulletgrp.setLifetimeEach(0);
  }
}
function subtractpoint(){
  if(bulletgrp.isTouching(bluegrp)){
    score = score - 1;
    bluegrp.setLifetimeEach(0);
    bulletgrp.setLifetimeEach(0);
  }
  
   if(bulletgrp.isTouching(blackgrp)){
     score = score - 1;
     blackgrp.setLifetimeEach(0);
     bulletgrp.setLifetimeEach(0);
   }
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
