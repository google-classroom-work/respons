function StartPanel()
{var Event=laya.events.Event;StartPanel.super(this);var btnClassic;var btnArcade;var btnRank;var btnChallenge;var btnEquip;var imgTitle;var imgCollect;this.OpenPanel=function()
{this.btnSetting.visible=false;if(g_WxMgr.bWx){SSSGameConfig.createBrandSprite(this,150,Laya.stage.height-30);SSSGameConfig.setSSSmoregameBtn(this);}
g_EventMgr.On(Notifition.UpdateScore,this,this.onUpdate);g_EventMgr.On(Notifition.updateMoney,this,this.updateMoney);this.btnSetting.on(Event.CLICK,this,this.onSetting);this.showStartGameUI();this.updateMoney();Laya.timer.loop(1000,this,this.playFingerAni);LastTime=new Date().getTime();if(bgMusic)
{console.log("恢复")}else{bgMusic=SoundManager.playMusic("sound/menu.mp3");console.log("开始")}
g_WxMgr.bWx&&(innerWidth/innerHeight<17/9)&&PlatformAPI.createBannerAd("Start");const c=new Laya.Image("fbcdn/crazygames.png");c.scaleX=c.scaleY=.1
c.x=900
c.y=600
this.addChild(c);}
this.createCollect=function()
{if(imgCollect==null)
{imgCollect=new Laya.Image("ui3/tianjiaxiaochengxu.png");}
imgCollect.anchorX=0.5;Laya.stage.addChild(imgCollect);imgCollect.x=Laya.stage.width-360;imgCollect.y=25;this.aniLeft();}
this.aniLeft=function()
{Laya.Tween.to(imgCollect,{x:Laya.stage.width-360},500,null,Laya.Handler.create(this,this.aniRight));}
this.aniRight=function()
{Laya.Tween.to(imgCollect,{x:Laya.stage.width-390},500,null,Laya.Handler.create(this,this.aniLeft));}
this.playFingerAni=function()
{if(new Date().getTime()-LastTime>5000)
{if(!imgFinger)
imgFinger=new Laya.Image("ui/finger.png");if(!imgFinger.parent)
{Laya.stage.addChild(imgFinger);imgFinger.pos(360,300);imgFinger.visible=true;this.up();}}else{if(imgFinger&&imgFinger.parent)
imgFinger.parent.removeChild(imgFinger);Laya.Tween.clearAll(imgFinger);}}
this.up=function()
{Laya.Tween.to(imgFinger,{x:560,y:200},1000,null,Laya.Handler.create(this,this.down));}
this.down=function()
{Laya.Tween.to(imgFinger,{x:360,y:300},700,null,Laya.Handler.create(this,this.up));}
this.onUpdate=function(e)
{}
this.ClosePanel=function()
{Laya.timer.clearAll(this);if(imgFinger&&imgFinger.parent)
imgFinger.parent.removeChild(imgFinger);Laya.Tween.clearAll(imgFinger);if(imgCollect&&imgCollect.parent)
imgCollect.parent.removeChild(imgCollect);Laya.Tween.clearAll(imgCollect);this.hideStartGameUI();g_EventMgr.Off(Notifition.UpdateScore,this,this.onUpdate);g_EventMgr.Off(Notifition.updateMoney,this,this.updateMoney);g_WxMgr.bWx&&PlatformAPI.closeCurrentBannerAd();}
this.startGame=function(){g_GameData.model=GameModel.CLASSIC;g_SceneMgr.ChangeScene("PreparePanel");}
this.onArcade=function()
{g_GameData.model=GameModel.ARCADE;g_SceneMgr.ChangeScene("PreparePanel");}
this.onChallenge=function()
{MessageBox("该功能暂未开放!")
btnChallenge.ResetFruit();}
this.onShare=function()
{g_WxMgr.ShareGame();btnChallenge.ResetFruit();}
this.onRank=function()
{g_SceneMgr.ChangeScene("RankPanel",1);}
this.onSetting=function()
{g_SceneMgr.ChangeScene("SettingPanel");}
this.onEquip=function()
{g_SceneMgr.ChangeScene("EquipPanel",1);}
this.updateMoney=function()
{this.txtMoney.text=parseInt(g_PlayerData.money)+"";this.txtDiamond.text=parseInt(g_PlayerData.diamond)+"";}
this.showStartGameUI=function()
{g_GameData.gameState=GAME_READY;btnClassic=CreateFruitButton(this.posClassic,g_AssetsMgr.huanghuan,Laya.loader.getRes("ui3/kaishi.png"),this.startGame,topContext);btnClassic.Show();btnArcade=CreateFruitButton(this.posRank,g_AssetsMgr.huanghuan,g_AssetsMgr.jieji,this.onArcade,topContext);btnArcade.Show();btnEquip=CreateFruitButton(this.posChallenge,g_AssetsMgr.honghuan,g_AssetsMgr.zhuangbei,this.onEquip,topContext);btnEquip.Show();};this.hideStartGameUI=function()
{btnArcade.Hide();btnClassic.Hide();btnEquip.Hide();};}
Laya.class(StartPanel,"StartPanel",StartUI);