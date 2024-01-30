FruitGame.GameManager=function()
{this.Init=function()
{if(g_WxMgr.bWx){g_WxMgr.Init();}
g_GameData=[];g_PlayerData=[];g_SceneMgr=new FruitGame.SceneManager();g_SceneMgr.Init();g_NetWorkMgr=new FruitGame.NetWorkManager();g_NetWorkMgr.GetPlayerData();this.setKnifeEff();createParticle();gravity=new SPP.Force();gravity.init(0,0.27);gravityL=new SPP.Force();gravityL.init(-0.07,0.11);gravityR=new SPP.Force();gravityR.init(0.07,0.11);gravityU=new SPP.Force();gravityU.init(0,0.02);g_GameData.gameState=GAME_READY;g_PlayerData.curMoney=0;g_PlayerData.curScore=0;g_PlayerData.Hp=3;ui_gamelifeTexture=g_AssetsMgr["gamelife-3"];g_GameData.gameLevel=0.1;render();Laya.stage.on(Laya.Event.MOUSE_MOVE,this,mousemove);Laya.stage.on(Laya.Event.MOUSE_DOWN,this,mousedown);Laya.stage.on(Laya.Event.MOUSE_UP,this,mouseup);enterGame();};function createParticle()
{particleSystem=new SPP.ParticleSystem();bladeSystem=new SPP.ParticleSystem();fruitSystem=new SPP.ParticleSystem();bombSystem=new SPP.ParticleSystem();particleSystem.start();bladeSystem.start();fruitSystem.start();bombSystem.start();}
function destroyParticle()
{particleSystem.destroy();bladeSystem.destroy();fruitSystem.destroy();bombSystem.destroy();}
function enterGame()
{g_SceneMgr.ChangeScene("StartPanel");};this.resetGameData=function()
{g_GameData.gameState=GAME_READY;g_GameData.totalTime=0;g_PlayerData.reliveTimes=PlatformAPI.createReliveVideoAd&&PlatformAPI.getVideoAdPlayInfoToday("Relive").valid;g_PlayerData.curMoney=0;g_PlayerData.curDiamond=0;g_PlayerData.curScore=0;g_PlayerData.Hp=3;ui_gamelifeTexture=g_AssetsMgr["gamelife-3"];g_GameData.gameLevel=0.1;slowdown=1;bDoublescore=0;bDoublecombo=0;doubleComboTimes=0;doubleScoreTimes=0;CutNum=0;CutPoint=null;LastCutTime=0;BuffList=[];wThrowFruit=0;curThrowTimes=0;g_PlayerData.hasGift=0;if(false&&g_WxMgr.bWx&&SSSGameConfig.getSwitchState())
{g_GameData.RedbagTime=g_GameData.model==GameModel.ARCADE?(Math.random()*30+20):(Math.random()*55+30);}
else
g_GameData.RedbagTime=0;}
this.saveGameData=function()
{g_PlayerData.money+=parseInt(g_PlayerData.curMoney);localStorage.setItem("money",g_PlayerData.money);g_PlayerData.diamond+=parseInt(g_PlayerData.curDiamond);localStorage.setItem("diamond",g_PlayerData.diamond);if(g_PlayerData.curScore>g_PlayerData.highScore)
{g_PlayerData.highScore=g_PlayerData.curScore;localStorage.setItem("highScore",g_PlayerData.curScore);}
var data=localStorage.getItem("weekScore")?JSON.parse(localStorage.getItem("weekScore")):{score:0,time:new Date().getTime()};function isSameWeek(old,now){var oneDayTime=1000*60*60*24;var old_count=parseInt(old/oneDayTime);var now_other=parseInt(now/oneDayTime);return parseInt((old_count+4)/7)==parseInt((now_other+4)/7);}
function save(){g_WxMgr.SendUserData({score:g_PlayerData.curScore});localStorage.setItem("weekScore",JSON.stringify({score:g_PlayerData.curScore,time:today}));}
var today=new Date().getTime();if(isSameWeek(data.time,today))
{if(g_PlayerData.curScore>data.score)
{save();}}else{save();}}
this.setKnifeEff=function()
{if(knifeConfig[g_PlayerData.knife])
{if(trailing&&trailing.parent)
trailing.parent.removeChild(trailing);bladeColor=knifeConfig[g_PlayerData.knife].color;var src=knifeConfig[g_PlayerData.knife].src;if(src)
{trailing=Laya.Sprite3D.load(src);scene.addChild(trailing);var num=Math.abs(0.1);trailing.transform.localScale=new Laya.Vector3(num,num,num);trailing.acitve=true;}else{}}}
renderTimer=function()
{if(g_GameData.gameState!=GAME_PLAYING)return;if(eff_bomb&&eff_bomb.parent)return;timer+=SPP.frameTime;if(g_GameData.model==GameModel.ARCADE)
{if(slowdown==1)
g_GameData.countdown-=SPP.frameTime;if(g_GameData.countdown>spacing)
{}else if(g_GameData.countdown<=spacing&&g_GameData.countdown>2){if(g_GameData.countdownfruit>0)
{throwFruit(4);g_GameData.countdownfruit=0;}
return;}
else if(g_GameData.countdown<=2&&g_GameData.countdown>1)
{var fruits=fruitSystem.getParticles();var fruit;for(var i in fruits)
{fruit=fruits[i];if(fruit.textureObj&&fruit.textureObj.name=="pomegranate")
{buildHalfPomegranate(fruit);fruit.life=0;g_GameData.countdown=1;}}}
if(g_GameData.countdown<1)
{if(g_GameData.countdown<0)
g_GameMgr.gameOver();return;}
if(g_GameData.countdown<5)return;}
if(g_GameData.RedbagTime>0)
{g_GameData.RedbagTime-=SPP.frameTime;if(g_GameData.RedbagTime<0)
{throwFruit(3);}}
if(maxThrowTimes&&curThrowTimes<maxThrowTimes[g_GameData.model-1])
{if(timer>=intervalThrow[g_GameData.model-1][curThrowTimes])
{timer=0;throwClassicFruitWithTimes(curThrowTimes);curThrowTimes++;}}else
{if(wThrowFruit>0)
{if(timer>=0.2)
{throwFruit(1,wThrowFruit%2+1);wThrowFruit--;timer=0;if(wThrowFruit==0)
{g_EventMgr.Event(Notifition.UpdateBuff);if(eff_xing_r&&eff_xing_r.parent)
eff_xing_r.parent.removeChild(eff_xing_r);if(eff_fire&&eff_fire.parent)
eff_fire.parent.removeChild(eff_fire);}}}else{if(timer>=interval)
{timer=0;throwObject();}}}
if(g_PlayerData.Hp<3)
{g_GameData.totalTime+=SPP.frameTime;if(g_GameData.totalTime>10)
{g_PlayerData.Hp++;g_EventMgr.Event(Notifition.UpdateLife);g_GameData.totalTime=0;}}};function throwObject()
{var n=0;var b=Math.random();if(g_GameData.model==GameModel.CLASSIC)
{if(b<0.4)
{n=Math.random()*3+1;}else if(b>=0.2&&b<0.8){n=Math.random()*4+1;}else{n=Math.random()*6+1;}}else{if(b<0.4)
{n=Math.random()*3+1;}else if(b>=0.4&&b<0.8){n=Math.random()*4+1;}else{n=Math.random()*5+2;}}
var bBomb=1;for(var i=0;i<n;i++)
{if(b<0.4&&isThrowBomb()&&bBomb>0){throwBomb();bBomb--;}else{var m=Math.random()>0.05;throwFruit(m>0?1:2);}};SoundManager.playSound("sound/throw-fruit.mp3",1);}
function isThrowBomb()
{if(g_GameData.model==GameModel.ARCADE){var n=Math.random();if(n<0.1)return true;return false;}else{var cur=0.1+g_GameData.gameLevel*10*0.005;if(cur>0.2)
cur=0.2;var n=Math.random();if(n<cur)return true;}
return false;};function levelUpdate()
{g_GameData.gameLevel+=levelStep;if(g_GameData.model==GameModel.CLASSIC)
{if(interval>1)
interval=2.05-g_GameData.gameLevel*10*0.05;}};this.slowdownFun=function(){slowdown=1;g_EventMgr.Event(Notifition.UpdateBuff);};this.gameRelive=function()
{if(g_GameData.gameState!=GAME_OVER)return;g_PlayerData.reliveTimes=0;if(g_PlayerData.curScore>0)
g_PlayerData.curMoney-=parseInt(g_PlayerData.curScore*.1);g_GameData.gameState=GAME_PLAYING;g_PlayerData.Hp=3;g_EventMgr.Event(Notifition.UpdateLife);g_GameData.totalTime=0;g_SceneMgr.ChangeScene("GamePanel");}
this.gameOver=function()
{if(g_GameData.gameState==GAME_OVER||g_GameData.gameState==GAME_END)return;if(eff_ice&&eff_ice.parent)
{Laya.Tween.clearAll(eff_ice);eff_ice.parent.removeChild(eff_ice);}
if(eff_xing_r&&eff_xing_r.parent)
eff_xing_r.parent.removeChild(eff_xing_r);if(eff_fire&&eff_fire.parent)
eff_fire.parent.removeChild(eff_fire);wThrowFruit=0;var l=fruitSystem.getParticles().length;while(l-->0)
{fruitSystem.getParticles()[l].removeAllEventListeners();}
if(g_PlayerData.curScore>0)
g_PlayerData.curMoney+=parseInt(g_PlayerData.curScore*.1);g_PlayerData.Hp=0;g_EventMgr.Event(Notifition.UpdateLife);g_GameData.totalTime=0;g_GameData.gameState=GAME_OVER;if(g_GameData.model==GameModel.CLASSIC&&g_PlayerData.reliveTimes>0){g_SceneMgr.ChangeScene("RelivePanel");}else{if(g_PlayerData.hasGift){g_SceneMgr.ChangeScene("GiftPanel");}else{g_SceneMgr.ChangeScene("EndPanel");}}};var _position=new Laya.Vector3(0,0,0);var scaleDelta=0;var scaleValue=0;function mousemove(e){if(trailing){var x=e.stageX/Laya.stage.width*Laya.Render.canvas.width;var y=e.stageY/Laya.stage.height*Laya.Render.canvas.height;camera.convertScreenCoordToOrthographicCoord(new Laya.Vector3(x,y,0),_position);trailing.transform.position=_position;trailing.acitve=true;}
buildBladeParticle(e.stageX,e.stageY);LastTime=new Date().getTime();};function mousedown(e){LastTime=new Date().getTime();}
function mouseup(e){LastTime=new Date().getTime();}
var checkFruit=function()
{if(g_GameData.model!=GameModel.ARCADE)return;var h=Laya.stage.height>>1;var fruits=fruitSystem.getParticles();var fruit;for(var i in fruits)
{fruit=fruits[i];if(fruit.textureObj&&fruit.textureObj.name=="pomegranate"&&fruit.position.y<=h)
{fruit.removeAllForces();fruit.velocity.reset(0,0);fruit.velocity.rotate(0);if(fruit.rotationStep<=0)fruit.rotationStep=-0.01;else if(fruit.rotationStep>0)fruit.rotationStep=0.01;}}}
var curFrame=1;function render()
{requestAnimationFrame(render);if(curFrame%parseInt(slowdown)==0)
{curFrame=0;middleContext.clear();fruitSystem&&fruitSystem.render();}
checkFruit();topContext.clear();bottomContext.clear();bombSystem&&bombSystem.render();particleSystem&&particleSystem.render();bladeSystem&&bladeSystem.render();buildColorBlade(bladeColor,bladeWidth);levelUpdate();renderTimer();collideTest();bDoublescore--;if(bDoublescore<=0)
g_EventMgr.Event(Notifition.UpdateBuff);bDoublecombo--;curFrame++;};}