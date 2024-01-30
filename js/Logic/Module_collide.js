(function(){collide=new FruitGame.Collide();var rotation=new Laya.Vector2(0,0);collideTest=function()
{if(g_GameData.gameState==GAME_END)return;var fruits=fruitSystem.getParticles();var fruit;var bombs=bombSystem.getParticles();var bomb;var blade=bladeSystem.getParticles();var l=blade.length;var p1,p2;while(l-->1)
{p1=blade[l];p2=blade[l-1];for(var i in fruits)
{fruit=fruits[i];if(fruit.life>0)
{if(fruit.bCut>0)
fruit.bCut--;else{var isCut=collide.lineInEllipse
([p1.position.x,p1.position.y],[p2.position.x,p2.position.y],[fruit.position.x,fruit.position.y],fruit.radius);if(isCut)
{cutFruit(fruit,getAngle(p1.position.x,p1.position.y,p2.position.x,p2.position.y));};}}}
for(var j in bombs)
{bomb=bombs[j];if(bomb.life>0)
{var p1=blade[l];var p2=blade[l-1];var isCut=collide.lineInEllipse
([p1.position.x,p1.position.y],[p2.position.x,p2.position.y],[bomb.position.x,bomb.position.y],bomb.radius);if(isCut)
{cutBomb(bomb);};}}};};function getAngle(px,py,mx,my){var x=Math.abs(px-mx);var y=Math.abs(py-my);var z=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));var cos=y/z;var radina=Math.acos(cos);var angle=Math.floor(180/(Math.PI/radina));return angle;}}());