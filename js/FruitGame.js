var FruitGame=FruitGame||{};const gameWidth=1280;const gameHeight=720;const GameModel={CLASSIC:1,ARCADE:2}
var topCanvas;var topContext;var middleCanvas;var middleContext;var bottomCanvas;var bottomContext;var uiCanvas;var adCanvas;var imgFinger;var LastTime;var eff_bomb;var eff_xing_l;var eff_xing_r;var eff_ice;var eff_fire;var img_ice;var img_fire;var img_double;var img_bomb;var particleSystem;var fruitSystem;var bombSystem;var bladeSystem;var bgMusic;var fruitSize=1.5;var gravity;var gravityL;var gravityR
var timer=0;var interval=2.4;var spacing=6;var totalARCADETime=60
var bladeColor;var bladeWidth;var g_PlayerData;var g_GameData;var isPlaying;var GAME_READY=1,GAME_PLAYING=2,GAME_OVER=3,GAME_END=4;var levelStep=0.0001;var ui_startFruit;var ui_scoreIcon;var ui_gameLife;var ui_gamelifeTexture;var ui_gameover;var collide;var slowdown=1;var bDoublescore=0;var bDoublecombo=0;var doubleComboTimes=0;var doubleScoreTimes=0;var CutNum=0;var CutPoint=null;var LastCutTime=0;var ItemList=null;var BuffList=null;var wThrowFruit=0;var g_GameMgr;var g_AssetsMgr;var g_SceneMgr;var g_NetWorkMgr;var g_EventMgr;var g_WxMgr;var m_tipList=[];function MessageBox(str)
{var onFlyComplete=function(label)
{if(label&&label.parent)
{label.parent.removeChild(label);if(m_tipList.length<10)
m_tipList.push(label);}}
var createLabel=function(str,color="#FFFFFF",strokeColor="#FF0000")
{const STROKE_WIDTH=4;var label=m_tipList.shift()||new Laya.Label();label.font="Microsoft YaHei";label.text=str;label.fontSize=30;label.color=color;if(strokeColor)
{label.stroke=STROKE_WIDTH;label.strokeColor=strokeColor;}
label.alpha=1;label.anchorX=label.anchorY=0.5;Laya.stage.addChild(label);label.pos(Laya.stage.width/2,Laya.stage.height/2);Laya.Tween.to(label,{y:100,alpha:0},1500,Laya.Ease.backInOut,Laya.Handler.create(this,onFlyComplete,[label]),1000);return label;}
createLabel(str);}
function ParseAward(awd)
{}
function CreateFruitButton(position,imageid,imageid2,cutFun,Context)
{console.log("createbtn",imageid.url);var button=particleSystem.createParticle(SPP.SpriteImage);button.init(position.x,position.y,Infinity,imageid,Context);button.scale=3;button.alpha=0;button.onUpdate=function(){this.rotation+=0.01};var image=particleSystem.createParticle(SPP.SpriteImage);image.init(position.x,position.y,Infinity,imageid2,Context);image.scale=3;image.alpha=0;image.onUpdate=function(){this.rotation+=0.01};var fruit=fruitSystem.createParticle(FruitGame.Fruit);var textureObj=g_AssetsMgr.getRandomFruit();fruit.init(position.x,position.y,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);fruit.life=0;var target={buttonself:button,imageself:image,fruitself:fruit,ResetFruit:function(){this.fruitself.removeAllEventListeners();Laya.timer.once(500,this,function(){this.fruitself=fruitSystem.createParticle(FruitGame.Fruit);var textureObj=g_AssetsMgr.getRandomFruit();this.fruitself.init(position.x,position.y,Infinity,textureObj.w,g_AssetsMgr.shadow,middleContext);this.fruitself.rotationStep=-0.02;this.fruitself.scale=0;this.fruitself.alpha=0;this.fruitself.textureObj=textureObj;this.fruitself.config={color:fruitConfig[textureObj.name].color}
this.fruitself.addEventListener("dead",cutFun);TweenLite.to(this.fruitself,1,{scale:1,alpha:1,ease:Back.easeOut});})},Show:function(){Laya.timer.once(200,this,function(){this.ResetFruit();});TweenLite.to(this.buttonself,0.8,{scale:1,alpha:1,ease:Back.easeOut});TweenLite.to(this.imageself,0.8,{scale:1,alpha:1,ease:Back.easeOut});},Hide:function(){this.fruitself.removeAllEventListeners();Laya.timer.clearAll(this);this.buttonself.life=0;this.imageself.life=0;this.fruitself.life=0;}}
return target;}
function deepClone(obj){var result,oClass=isClass(obj);if(oClass==="Object"){result={};}else if(oClass==="Array"){result=[];}else{return obj;}
for(key in obj){var copy=obj[key];if(isClass(copy)=="Object"){result[key]=arguments.callee(copy);}else if(isClass(copy)=="Array"){result[key]=arguments.callee(copy);}else{result[key]=obj[key];}}
return result;}
function isClass(o){if(o===null)return "Null";if(o===undefined)return "Undefined";return Object.prototype.toString.call(o).slice(8,-1);}