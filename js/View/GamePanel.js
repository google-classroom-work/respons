function GamePanel()
{GamePanel.super(this);var imgScore;var imgLife;var texLife;var liftList;var buffList=[this.imgFire,this.imgIce,this.imgDouble];this.btnPause.visible=false;this.OpenPanel=function()
{this.txtTip.visible=false;this.updateScore();g_EventMgr.On(Notifition.UpdateScore,this,this.updateScore);g_EventMgr.On(Notifition.UpdateLife,this,this.updateLife);g_EventMgr.On(Notifition.UpdateBuff,this,this.updateBuff);liftList=[this.life3,this.life2,this.life1,this.life0];this.updateLife();if(g_GameData.model==GameModel.ARCADE)
{this.updateTime();Laya.timer.frameLoop(10,this,this.updateTime);}else{Laya.timer.clearAll(this);this.txtCountdown.text="";}
this.updateBuff();bgMusic&&bgMusic.stop();SoundManager.playSound("sound/start.mp3",1);}
this.updateBuff=function()
{buffList[1].visible=slowdown!=1;buffList[0].visible=wThrowFruit>0;buffList[2].visible=bDoublescore>0;var list=[];for(var i=0;i<3;i++)
{if(buffList[i].visible)
list.push(buffList[i]);}
var begin=Laya.stage.width/2-buffList[0].width/2*list.length;for(var i=0;i<list.length;i++)
{list[i].x=begin+buffList[0].width*i;}}
this.updateTime=function()
{var time=g_GameData.countdown-spacing;this.txtCountdown.text=(time<10?(time>0?"0"+parseInt(time):"00"):(parseInt(time)));}
function onUpdate()
{}
this.ClosePanel=function()
{Laya.timer.clearAll(this);g_EventMgr.Off(Notifition.UpdateScore,this,this.updateScore);g_EventMgr.Off(Notifition.UpdateLife,this,this.updateLife);g_EventMgr.Off(Notifition.UpdateItem,this,this.updateBuff);}
this.updateLife=function()
{if(g_GameData.model==GameModel.ARCADE){for(var i=0;i<liftList.length;i++)
{liftList[i].visible=false;}}else{for(var i=0;i<liftList.length;i++)
{liftList[i].visible=g_PlayerData.Hp==i;}}}
this.updateScore=function()
{if(g_GameData.gameState!=GAME_PLAYING)
{return;}
this.curScore.text=parseInt(g_PlayerData.curScore)+"";this.highScore.text=parseInt(g_PlayerData.highScore)+"";};}
Laya.class(GamePanel,"GamePanel",GameUI);