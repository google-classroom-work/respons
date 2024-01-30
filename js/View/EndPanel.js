function EndPanel()
{EndPanel.super(this);var Tween=Laya.Tween;var Ease=Laya.Ease;var Event=Laya.Event;this.OpenPanel=function()
{g_GameData.gameState=GAME_END;this.end.scaleX=this.end.scaleY=0;Tween.to(this.end,{scaleX:1,scaleY:1},800,Ease.backOut,Laya.Handler.create(this,this.gameOverComplete));Laya.timer.once(3000,this,this.replay);}
this.onUpdate=function()
{}
this.ClosePanel=function()
{Laya.stage.off(Event.CLICK,this,this.replay);Laya.timer.clearAll(this);}
this.gameOverComplete=function()
{Laya.stage.on(Event.CLICK,this,this.replay);};this.replay=function(e)
{Laya.timer.clearAll(this);g_SceneMgr.ChangeScene("ResultPanel");};}
Laya.class(EndPanel,"EndPanel",EndUI);