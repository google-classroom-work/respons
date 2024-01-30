(function(){curThrowTimes=0;maxThrowTimes=[15,0];intervalThrow=[[2.8,2.8,2.8,2.8,2.8,2.8,2.8,2.6,2.8,2.6,2.6,2.6,2.6,2.8,3]]
throwArr=[[[1],[1],[2],[2],[[1,2],0],[2],[[1,2],0],[2],[6,0,[-12,6,450]],[[1,3],0],[[2,4]],[[2,4]],[[1,4],0],[8,0,[12,-4,450]]]]
var bb=true;throwClassicFruitWithTimes=function(times){console.log("波次=",times);if(!throwArr){curThrowTimes=maxThrowTimes;console.error("未找到出水果配置");return;}
if(!throwArr[g_GameData.model-1]){curThrowTimes=maxThrowTimes;console.error("未发现模式",g_GameData.model,"配置");return;}
var conf=throwArr[g_GameData.model-1][times];if(!conf){curThrowTimes=maxThrowTimes;console.error("配置异常！","模式=",g_GameData.model,"波次=",times);return;}
console.log("本波配置为",g_GameData.model,times,conf);var num=conf[0];var bomb=conf[1];var angle=conf[2];if(typeof(num)=="number")
{num=num;}else{num=Math.random()*(num[1]-num[0]+1)+num[0];}
throwFruitWithNum(num,bomb,angle);};var throwFruitWithNum=function(num,bombchance=0,angleArr=null)
{var bBomb=Math.random()<bombchance;if(bBomb)
{throwBomb();num--;}
if(angleArr){var beginAngle=angleArr[0];var angle=angleArr[1];var time=angleArr[2];for(var i=0;i<num;i++)
{var t=time*i;var ag=beginAngle+angle*i;Laya.timer.once(t,this,function(ag){if(g_GameData.gameState==GAME_PLAYING)
throwClassicFruit(ag);},[ag])}}else{for(var i=0;i<num;i++)
{throwFruit(1);}}
SoundManager.playSound("sound/throw-fruit.mp3",1);}
var throwClassicFruit=function(angle)
{var textureObj=g_AssetsMgr.getRandomFruit(1);var p=fruitSystem.createParticle(FruitGame.Fruit);p.config=null;p.init(Laya.stage.width*0.5,gameHeight+textureObj.w.height,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);p.velocity.reset(0,-18);p.velocity.rotate(angle);p.damp.reset(0,0);gravity.y+=Math.random()/(Math.random()>0.5?10:-7);p.addForce("g",gravity);p.addEventListener("dead",missHandler);p.textureObj=textureObj;p.bottomY=gameHeight+textureObj.w.height;p.bCut=0;p.scale=fruitSize;};}());