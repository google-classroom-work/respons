(function(){var Timer=Laya.timer;var SoundManager=Laya.SoundManager;var colorArr=["red","orange","yellow","green","purple","white","money"];var juiceUpdate=function()
{this.scale-=0.01;if(this.scale<0)
{this.scale=0;this.life=0;}};var juicePomegranateUpdate=function()
{this.scale-=0.007;if(this.scale<0)
{this.scale=0;this.life=0;}};var buildJuice=function(target,juiceCount)
{var url=Laya.loader.getRes("juice/"+colorArr[target.config.color-1]+"-j.png");if(target.config.color==7)
juiceCount=10;if(target.textureObj.name=="pomegranate")
juiceCount=20;for(var i=0;i<juiceCount;i++)
{var juice=particleSystem.createParticle(SPP.SpriteImage);juice.init(target.position.x,target.position.y,Infinity,url,topContext);juice.onUpdate=target.textureObj.name=="pomegranate"?juicePomegranateUpdate:juiceUpdate;juice.scale=Math.random()*0.3+0.4+(target.config.color==7?0.9:0);juice.damp.reset(0,0);juice.velocity.reset(0,-(4+Math.random()*4));juice.velocity.rotate(360*Math.random());juice.addForce("g",gravity);}};var splashUpdate=function()
{this.alpha-=0.01;if(this.alpha<0)
{this.alpha=0;this.life=0;};};var buildSplash=function(target)
{var url=Laya.loader.getRes("juice/"+colorArr[target.config.color-1]+"-u.png");var splash=particleSystem.createParticle(SPP.SpriteImage);splash.init(target.position.x,target.position.y,Infinity,url,bottomContext);splash.onUpdate=splashUpdate;splash.scale=0.5+Math.random()/6;splash.rotation=Math.PI*2*Math.random();splash.alpha=1;};var floorUpdate=function()
{this.alpha-=0.005;if(this.alpha<0)
{this.alpha=0;this.life=0;};};var buildFloor=function(target)
{var url=Laya.loader.getRes("juice/"+colorArr[target.config.color-1]+"-f.png");var floor=particleSystem.createParticle(SPP.SpriteImage);floor.init(target.position.x,target.position.y,Infinity,url,bottomContext);floor.onUpdate=floorUpdate;floor.scale=1+Math.random();floor.rotation=Math.PI*2*Math.random();floor.alpha=1;};var giftExplode=function(target){for(var i=0;i<60;i++)
{var smoke=particleSystem.createParticle(SPP.SpriteImage);smoke.init(target.position.x,target.position.y,Infinity,Laya.loader.getRes("ui3/gift_"+parseInt(Math.random()*7+1)+".png"),topContext);smoke.onUpdate=explodeGiftUpdate;smoke.scale=1.3;smoke.damp.reset(0,0);smoke.velocity.reset(0,-(3+Math.random()*7));smoke.velocity.rotate(360*Math.random());smoke.addForce("g",gravity);}};var explodeGiftUpdate=function(){this.scale-=0.02;if(this.scale<0)
{this.scale=0;this.life=0;}};var buildHalfFruit=function(target)
{var speed=6+Math.random()*3;var right=particleSystem.createParticle(FruitGame.Fruit);right.init(target.position.x,target.position.y,Infinity,target.textureObj.r,g_AssetsMgr.shadow,topContext);right.velocity.reset(0,-speed);right.velocity.rotate(20*Math.random());right.damp.reset(0,0);right.rotation=target.rotation;right.bottomY=gameHeight+target.textureObj.r.height;right.addForce("g",gravity);var left=particleSystem.createParticle(FruitGame.Fruit);left.init(target.position.x,target.position.y,Infinity,target.textureObj.l,g_AssetsMgr.shadow,topContext);left.velocity.reset(0,-(speed));left.velocity.rotate(-20*Math.random());left.damp.reset(0,0);left.rotation=target.rotation;left.bottomY=gameHeight+target.textureObj.l.height;left.addForce("g",gravity);if(g_GameData.gameState==GAME_PLAYING){right.scale=left.scale=fruitSize;}};buildHalfPomegranate=function(target)
{SoundManager.playSound("sound/splatter.mp3",1);var speed=6+Math.random()*3;var right;var url;for(var i=0;i<10;i++)
{url="fruits/pomegranate-"+parseInt(Math.random()*9+1)+".png";right=particleSystem.createParticle(FruitGame.Fruit);right.init(target.position.x,target.position.y,Infinity,Laya.loader.getRes(url),g_AssetsMgr.shadow,topContext);right.velocity.reset(0,-speed);right.velocity.rotate(i*36+20*Math.random());right.damp.reset(0,0);right.rotation=target.rotation;right.bottomY=gameHeight+target.textureObj.r.height;right.addForce("g",gravity);if(g_GameData.gameState==GAME_PLAYING){right.scale=1.2;}}}
var missUpdate=function()
{this.alpha-=0.01;if(this.alpha<0)
{this.alpha=0;this.life=0;}};var missFruit=function(target)
{var lose=particleSystem.createParticle(SPP.SpriteImage);var x=target.position.x;if(x<=0)x=40;if(x>gameWidth)x=gameWidth-40;lose.init(x,gameHeight-g_AssetsMgr.miss.height,Infinity,g_AssetsMgr.miss,topContext);lose.velocity.reset(0,-1);lose.damp.reset(0.01,0.01);lose.onUpdate=missUpdate;};var pos=new Laya.Vector3(0,0,0);playXingEff=function(target){if(!eff_xing_r)
eff_xing_r=Laya.Sprite3D.load("eff/eff_wujiaoxing.lh");uiScene.addChild(eff_xing_r);eff_xing_r.transform.position=pos;}
playFireEff=function(target){if(!img_fire)
{img_fire=new Laya.Image("ui/word_kuangre.png");img_fire.x=Laya.stage.width/2-img_fire.width/2;img_fire.y=Laya.stage.height/2-img_fire.height/2;}
img_fire.alpha=1;Laya.stage.addChild(img_fire);Laya.Tween.to(img_fire,{alpha:0},2000,null,Laya.Handler.create(this,function(){if(img_fire&&img_fire.parent)
img_fire.parent.removeChild(img_fire);}))
if(eff_fire==null)
eff_fire=new Laya.Image("ui/fire.png");bottomCanvas.addChild(eff_fire);eff_fire.width=1280;eff_fire.height=720;eff_fire.alpha=0;Laya.Tween.to(eff_fire,{alpha:1},2000,null,Laya.Handler.create(this,function(e){Laya.timer.once(5000,this,function(){Laya.Tween.to(e,{alpha:0},3000,null,Laya.Handler.create(this,function(e){if(e&&e.parent)
e.parent.removeChild(e);},[e]))})},[eff_fire]))}
playIceEff=function(target){if(!img_ice)
{img_ice=new Laya.Image("ui/word_dongjie.png");img_ice.x=Laya.stage.width/2-img_ice.width/2;img_ice.y=Laya.stage.height/2-img_ice.height/2;}
img_ice.alpha=1;Laya.stage.addChild(img_ice);Laya.Tween.to(img_ice,{alpha:0},2000,null,Laya.Handler.create(this,function(){if(img_ice&&img_ice.parent)
img_ice.parent.removeChild(img_ice);}))
if(eff_ice==null)
eff_ice=new Laya.Image("ui/bingdong.png");bottomCanvas.addChild(eff_ice);eff_ice.width=1280;eff_ice.height=720;eff_ice.alpha=0;Laya.Tween.to(eff_ice,{alpha:1},2000,null,Laya.Handler.create(this,function(e){Laya.timer.once(5000,this,function(){Laya.Tween.to(e,{alpha:0},3000,null,Laya.Handler.create(this,function(e){if(e&&e.parent)
e.parent.removeChild(e);},[e]))})},[eff_ice]))}
throwFruit=function(type=1,fly=0)
{var textureObj=g_AssetsMgr.getRandomFruit(type);var p=fruitSystem.createParticle(FruitGame.Fruit);p.config=null;if(fly==1)
{p.init(-200,gameHeight+textureObj.w.height,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);p.velocity.reset(0,-(10+Math.random()*3));p.velocity.rotate(8)
p.damp.reset(0,0);p.addForce("g",gravityR);}
else if(fly==2)
{p.init(Laya.stage.width+200,gameHeight+textureObj.w.height,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);p.velocity.reset(0,-(10+Math.random()*3));p.velocity.rotate(-8);p.damp.reset(0,0);p.addForce("g",gravityL);}else{p.config=deepClone(fruitConfig[textureObj.name]);if(textureObj.name=="jademelon"||textureObj.name=="icebanana"||textureObj.name=="vitalitybanana"||textureObj.name=="goldpitaya")
{p.init(Laya.stage.width*0.5+(1-Math.random()*2)*200,-textureObj.w.height,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);p.velocity.reset(0,(5+Math.random()*3));p.velocity.rotate(8-Math.random()*16);p.damp.reset(0,0);p.addForce("g",gravityU);}else if(textureObj.name=="pomegranate")
{p.init(Laya.stage.width*0.5,gameHeight+textureObj.w.height,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);p.velocity.reset(0,0);p.damp.reset(0,0);Laya.Tween.to(p.position,{y:Laya.stage.height/2},1000,Laya.Ease.circOut);}
else
{p.init(Laya.stage.width*0.5+(1-Math.random()*2)*200,gameHeight+textureObj.w.height,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);p.velocity.reset(0,-(18+Math.random()*3));p.velocity.rotate(8-Math.random()*16);p.damp.reset(0,0);gravity.y+=Math.random()/(Math.random()>0.5?10:-7);p.addForce("g",gravity);}}
p.addEventListener("dead",missHandler);p.textureObj=textureObj;p.bottomY=gameHeight+textureObj.w.height;p.bCut=0;p.scale=fruitSize;};var cutlineList=[];var pos=new Laya.Vector3(0,0,0);var rot=new Laya.Vector4(0,0,0,0);cutFruit=function(target,rotation)
{if(target==null||target.life<=0)return;if(target.textureObj.name=="pomegranate")
{SoundManager.playSound("sound/1.mp3",1);target.scale=fruitSize*1.1;Laya.timer.once(100,target,function(){this.scale=fruitSize;})}else
{SoundManager.playSound("sound/splatter.mp3",1);}
if(g_GameData.gameState==GAME_PLAYING){var eff_cut=cutlineList.shift()||new Laya.Image("ui2/eff_cut.png");topCanvas.addChild(eff_cut);eff_cut.pos(target.position.x,target.position.y);eff_cut.anchorX=eff_cut.anchorY=0.5;eff_cut.rotation=rotation;eff_cut.scaleX=eff_cut.scaleY=0;Laya.Tween.to(eff_cut,{scaleX:1,scaleY:1.5},100,null,Laya.Handler.create(this,function(eff){Laya.timer.once(100,this,function(e){if(eff&&eff.parent)
eff.parent.removeChild(eff);if(cutlineList.length<15)
cutlineList.push(eff);})},[eff_cut]));}
if(target.config&&target.config.type==3)
{var createGift=function()
{SoundManager.playSound("sound/cutgift.mp3",1);var gift=new Laya.Image("fruits/gift-w.png");gift.x=target.position.x;gift.y=target.position.y;gift.anchorX=gift.anchorY=0.5;gift.scaleX=gift.scaleY=1;topCanvas.addChild(gift);Laya.Tween.to(gift,{scaleX:2,scaleY:2},200,null,Laya.Handler.create(this,function(gift){Laya.Tween.to(gift,{scaleX:1.2,scaleY:1.2},300,null,Laya.Handler.create(this,function(gift){Laya.Tween.to(gift,{x:1,y:Laya.stage.height},1500,null,Laya.Handler.create(this,function(gift){if(gift&&gift.parent)
gift.parent.removeChild(gift);},[gift]));},[gift]));},[gift]));}
g_PlayerData.hasGift=0;createGift();giftExplode(target);}
if(g_GameData.gameState==GAME_PLAYING){if(target.config&&target.config.score)
g_PlayerData.curScore+=target.config.score*(bDoublescore>0?2:1);else
g_PlayerData.curScore+=(bDoublescore>0?2:1);g_EventMgr.Event(Notifition.UpdateScore);var timeoutCut=(CutPoint)=>{if(CutNum<3){CutNum=0;return};var t=CutNum+1;t>6&&(t=6);if(doubleComboTimes>0)
{g_PlayerData.curScore+=t*2;doubleComboTimes--;}
if(g_PlayerData.useBuffList[1]>0)
g_PlayerData.curScore+=1;g_PlayerData.curScore+=t*(bDoublecombo>0?2:1);g_EventMgr.Event(Notifition.UpdateScore);var o=particleSystem.createParticle(SPP.SpriteImage);SoundManager.playSound("sound/Bingo_"+CutNum+".mp3",1);o.init(CutPoint.x,CutPoint.y,1/0,g_AssetsMgr["combo"+CutNum],topContext);o.scale=0,TweenLite.to(o,.2,{scale:1.6,onComplete:function(){Laya.timer.once(500,this,function(){TweenLite.to(o,.2,{scale:0,onComplete:function(){o.life=0;}});});}});CutNum=0;};var time=new Date().getTime();if(time-LastCutTime<300){CutNum||(CutNum=1);CutNum++;SoundManager.playSound("sound/1.mp3",1);const CutPoint={x:target.position.x,y:target.position.y};Laya.timer.once(320,this,timeoutCut,[CutPoint]);}else{LastCutTime=time;}}
if(g_GameData.gameState==GAME_PLAYING&&target.config&&target.config.special)
{var special=target.config.special;if(special["doublescore"]){bDoublescore=350;g_EventMgr.Event(Notifition.UpdateBuff);if(!img_double)
{img_double=new Laya.Image("ui/word_shuangbeidefen.png");img_double.x=Laya.stage.width/2-img_double.width/2;img_double.y=Laya.stage.height/2-img_double.height/2;}
img_double.alpha=1;Laya.stage.addChild(img_double);Laya.Tween.to(img_double,{alpha:0},2000,null,Laya.Handler.create(this,function(){if(img_double&&img_double.parent)
img_double.parent.removeChild(img_double);}))}
if(special["doublecombo"]){bDoublecombo=350;}
if(special["doublecombotimes"]){doubleComboTimes+=special["doublecombotimes"];}
if(special["doublescoretimes"]){doubleScoreTimes+=special["doublescoretimes"];}
if(special["ignorebomb"]){BuffList["ignorebomb"]=special["ignorebomb"];}
if(special["throwfruit"]){wThrowFruit=special["throwfruit"];g_EventMgr.Event(Notifition.UpdateBuff);playXingEff(target);playFireEff(target);}
if(special["addmoney"]){SoundManager.playSound("sound/cutmoney.mp3",1);g_PlayerData.curMoney+=special["addmoney"];}
if(special["adddiamond"]){g_PlayerData.curDiamond+=special["adddiamond"];}}
if(g_GameData.gameState==GAME_PLAYING&&target.config&&target.config.special&&target.config.special["slowdown"])
{playIceEff();slowdown=1/target.config.special["slowdown"];g_EventMgr.Event(Notifition.UpdateBuff);Laya.timer.once(10000,this,function(){g_GameMgr.slowdownFun();});}
if(g_GameData.gameState==GAME_PLAYING&&target.config&&target.config.special&&target.config.special["maxcut"]>0)
{if(target.bCut<=0)
{target.config.special["maxcut"]--;target.bCut+=180;}}else{target.removeEventListener("dead",missHandler);if(target.textureObj)
{if(target.textureObj.r){buildHalfFruit(target);}else if(target.textureObj.name=="money")
{}
else{var bubbles=particleSystem.createParticle(FruitGame.Fruit);bubbles.init(target.position.x,target.position.y,1/0,target.textureObj.w,topContext);bubbles.velocity.reset(0,-(4+Math.random()*4));bubbles.velocity.rotate(360*Math.random());bubbles.addForce("g",gravity);bubbles.bottomY=gameHeight+target.textureObj.w.height;}}
target.life=0;}
if(target.config&&target.config.color>0)
{buildJuice(target,(Math.random()*5>>0)+5);if(g_GameData.gameState==GAME_PLAYING){buildFloor(target);buildSplash(target);}}};missHandler=function(e)
{e.target.removeEventListener("dead",missHandler);if(g_GameData.gameState==GAME_OVER)return;if(e.target.config&&e.target.config.type==3)
{g_GameData.RedbagTime=Math.random()>0.5?(Math.random()*20+10):0;}
if(g_PlayerData.useBuffList[2]>0){g_PlayerData.useBuffList[2]--;}else if(g_GameData.gameState==GAME_PLAYING&&e.target.config&&e.target.config.special&&e.target.config.special["canmiss"]>0){e.target.config.special["canmiss"]--;}else if(g_GameData.model==GameModel.ARCADE){}else{missFruit(e.target);g_PlayerData.Hp--;if(g_PlayerData.Hp==0)
g_GameMgr.gameOver();if(g_PlayerData.Hp<0)g_PlayerData.Hp=0;g_EventMgr.Event(Notifition.UpdateLife);g_GameData.totalTime=0;}};}());