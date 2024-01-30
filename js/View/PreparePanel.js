function PreparePanel()
{PreparePanel.super(this);var Tween=Laya.Tween;var Ease=Laya.Ease;var Event=Laya.Event;var btnReturn;var btnHelp;var buffList;var useList;var model=[this.imgModel0,this.imgModel1];var imgGuide;var imgGuideBg;this.OpenPanel=function()
{this.imgModel0.visible=g_GameData.model==GameModel.CLASSIC;this.imgModel1.visible=g_GameData.model==GameModel.ARCADE;g_EventMgr.On(Notifition.SetKnife,this,this.setKnife);g_EventMgr.On(Notifition.UpdateMoney,this,this.updateMoney);btnReturn=CreateFruitButton(this.posReturn,g_AssetsMgr.zihuan,g_AssetsMgr.fanhuizhuye,this.onReturn,topContext);btnReturn.Show();btnHelp=CreateFruitButton(this.posHelp,g_AssetsMgr.qinghuan,g_AssetsMgr.bangzhushuoming,this.onHelp,topContext);btnHelp.Show();g_PlayerData.useBuffList=[0,0,0];useList=[];buffList=[];buffList=[this.item0,this.item1,this.item2];for(var i=0;i<3;i++)
{buffList[i].getChildByName("txtPrice").text=g_PlayerData.buffList[i]?"Free":itemConfig[i].price+"";buffList[i].getChildByName("imgUse").visible=g_PlayerData.buffList[i]?1:0;buffList[i].on(Event.CLICK,buffList[i],onSelect);useList.push(buffList[i].getChildByName("imgUse"));}
this.updateMoney();this.btnStart.on(Event.CLICK,this,this.startGame)
this.btnGet.on(Event.CLICK,this,this.getAwd);this.btnEquip.on(Event.CLICK,this,this.onEquip);this.btnGet.visible=PlatformAPI.createPrepareVideoAd&&PlatformAPI.getVideoAdPlayInfoToday("Prepare").valid;this.setKnife();if(bgMusic&&bgMusic.isStopped)
bgMusic.resume();}
this.setKnife=function()
{if(knifeConfig[g_PlayerData.knife])
this.imgKnife.skin=knifeConfig[g_PlayerData.knife].image;}
this.updateMoney=function()
{this.txtMoney.text=parseInt(g_PlayerData.money)+"";this.txtDiamond.text=parseInt(g_PlayerData.diamond)+"";}
this.onEquip=function()
{g_SceneMgr.ChangeScene("EquipPanel",2);}
var onSelect=function(e){SoundManager.playSound("sound/selectitem.mp3",1);var needMoney=0;var idx=useList.indexOf(e.target.getChildByName("imgUse"));if(!e.target.getChildByName("imgUse").visible&&e.target.getChildByName("txtPrice").text!=="Free")
{var needMoney=0;var idx=useList.indexOf(e.target.getChildByName("imgUse"));needMoney+=itemConfig[idx].price;for(var i=0;i<useList.length;i++)
{if(useList[i].visible)
{if(g_PlayerData.buffList[i])
{}else{needMoney+=itemConfig[i].price;}}else{}}
if(g_PlayerData.money<needMoney)
{MessageBox("Gold  coins inadequate!")
Laya.SoundManager.playSound("sound/nomoney.mp3",1);return;}
e.target.getChildByName("imgUse").visible=!e.target.getChildByName("imgUse").visible;}else{e.target.getChildByName("imgUse").visible=!e.target.getChildByName("imgUse").visible;}}
this.onClick=function(e)
{}
this.onUpdate=function()
{}
this.ClosePanel=function()
{for(var i=0;i<3;i++)
{buffList[i].off(Event.CLICK,buffList[i],onSelect);}
g_EventMgr.Off(Notifition.UpdateMoney,this,this.updateMoney);g_EventMgr.Off(Notifition.SetKnife,this,this.setKnife);btnReturn.Hide();btnHelp.Hide();}
this.updateMoney=function()
{this.txtMoney.text=parseInt(g_PlayerData.money)+"";this.txtDiamond.text=parseInt(g_PlayerData.diamond)+"";}
this.getAwd=function(){PlatformAPI.createVideoAd("Prepare",function(){var index=parseInt(Math.random()*3);g_PlayerData.buffList[index]=1;localStorage.setItem("buffList",JSON.stringify(g_PlayerData.buffList));buffList[index].getChildByName("txtPrice").text=g_PlayerData.buffList[index]?"Free":itemConfig[index].price+"";useList[index].visible=1;})}
this.startGame=function(){var guide=localStorage.getItem("guide");if(!guide||guide.charAt(g_GameData.model-1)!="1")
{if(!imgGuide)
imgGuide=new Laya.Image();if(!imgGuideBg)
imgGuideBg=new Laya.Image();imgGuideBg.skin="ui/bg.jpg";imgGuide.skin="ui/xinshouyindao_"+(g_GameData.model==GameModel.CLASSIC?1:2)+".png";imgGuide.anchorY=0.5;imgGuide.y=Laya.stage.height/2;Laya.stage.addChild(imgGuideBg);Laya.stage.addChild(imgGuide);if(!guide)
guide="00";guide=guide.split('');guide.splice(g_GameData.model-1,1,"1");guide=guide.join('');localStorage.setItem("guide",guide);this.ClosePanel();if(this.parent)
this.parent.removeChild(this);imgGuideBg.on(Event.CLICK,this,this.startGame);imgGuide.on(Event.CLICK,this,this.startGame);return;}
if(imgGuide&&imgGuide.parent)
imgGuide.parent.removeChild(imgGuide);if(imgGuideBg&&imgGuideBg.parent)
imgGuideBg.parent.removeChild(imgGuideBg);if(g_GameData.model==GameModel.ARCADE)
{g_GameData.countdown=totalARCADETime+spacing;g_GameData.countdownfruit=1;}
g_GameMgr.resetGameData();g_GameData.gameState=GAME_PLAYING;g_SceneMgr.ChangeScene("GamePanel");g_EventMgr.Event(Notifition.UpdateScore,[1,2,3]);setUseList();}
this.onReturn=function(){g_SceneMgr.ChangeScene("StartPanel");}
this.onHelp=function(){g_SceneMgr.ChangeScene("HelpPanel");}
function setUseList()
{for(var i=0;i<useList.length;i++)
{if(useList[i].visible)
{if(g_PlayerData.buffList[i])
{g_PlayerData.buffList[i]=0;}else{g_PlayerData.money-=parseInt(itemConfig[i].price);}
if(i==0)
g_PlayerData.useBuffList[i]=3;else if(i==1)
g_PlayerData.useBuffList[i]=1;else if(i==2)
g_PlayerData.useBuffList[i]=3;}else{g_PlayerData.useBuffList[i]=0;}}
localStorage.setItem("buffList",JSON.stringify(g_PlayerData.buffList));localStorage.setItem("money",g_PlayerData.money);}}
Laya.class(PreparePanel,"PreparePanel",PrepareUI);