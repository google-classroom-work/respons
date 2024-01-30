function ResultPanel()
{ResultPanel.super(this);var Tween=Laya.Tween;var Ease=Laya.Ease;var Event=Laya.Event;var btnAgain;var btnReturn;this.OpenPanel=function()
{g_GameData.gameState=GAME_READY;this.curScore.text=parseInt(g_PlayerData.curScore);this.highScore.text=parseInt(g_PlayerData.highScore>g_PlayerData.curScore?g_PlayerData.highScore:g_PlayerData.curScore);this.curMoney.text="×"+parseInt(g_PlayerData.curMoney);this.btnDouble.visible=false
this.btnDouble.skin=(PlatformAPI.createResultVideoAd&&PlatformAPI.getVideoAdPlayInfoToday("Result").valid)?"ui/video.png":"ui/share.png";this.btnDouble.on(Event.CLICK,this,this.onDouble);this.showResultUI();PlatformAPI.createBannerAd("Result");bgMusic=SoundManager.playMusic("sound/menu.mp3");PlatformAPI.updateLeaderboard("globalRank",parseInt(g_PlayerData.curScore));}
this.onUpdate=function()
{}
this.ClosePanel=function()
{this.hideResultUI();g_GameMgr.saveGameData();g_WxMgr.bWx&&PlatformAPI.closeCurrentBannerAd();}
this.onAgain=function()
{g_GameMgr.saveGameData();g_SceneMgr.ChangeScene("PreparePanel");}
this.onReturn=function(e)
{g_SceneMgr.ChangeScene("StartPanel");}
this.onShare=function()
{g_WxMgr.ShareGame();btnShare.ResetFruit();}
this.onDouble=function()
{var callback=()=>{g_PlayerData.curMoney*=2;this.curMoney.text="×"+parseInt(g_PlayerData.curMoney);this.btnDouble.visible=false;}
if(g_WxMgr.bWx){PlatformAPI.createVideoAd("Result",callback);}else{callback();}}
this.onRank=function()
{g_SceneMgr.ChangeScene("RankPanel",2);}
this.showResultUI=function()
{btnAgain=CreateFruitButton(this.posAgain,g_AssetsMgr.huanghuan,g_AssetsMgr.zailaiyiju,this.onAgain,topContext);btnAgain.Show();btnReturn=CreateFruitButton(this.posReturn,g_AssetsMgr.zihuan,g_AssetsMgr.fanhuizhuye,this.onReturn,topContext);btnReturn.Show();}
this.hideResultUI=function()
{btnAgain.Hide();btnReturn.Hide();}}
Laya.class(ResultPanel,"ResultPanel",ResultUI);