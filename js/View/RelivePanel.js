function RelivePanel()
{var Event=Laya.Event;RelivePanel.super(this);var btnReturn;var btnRelive;this.OpenPanel=function()
{btnRelive=CreateFruitButton(this.posRelive,g_AssetsMgr.juhuan,g_AssetsMgr.fuhuo,onRelive,topContext);btnRelive.Show();btnReturn=CreateFruitButton(this.posReturn,g_AssetsMgr.honghuan,g_AssetsMgr.fanhui,onReturn,topContext);btnReturn.Show();PlatformAPI.createBannerAd("Relive");}
function onReturn()
{if(g_PlayerData.hasGift){g_SceneMgr.ChangeScene("GiftPanel");}else{g_SceneMgr.ChangeScene("EndPanel");}}
function onRelive()
{PlatformAPI.createVideoAd("Relive",g_GameMgr.gameRelive.bind(g_GameMgr));}
this.ClosePanel=function()
{btnRelive.Hide();btnReturn.Hide();g_WxMgr.bWx&&PlatformAPI.closeCurrentBannerAd();}}
Laya.class(RelivePanel,"RelivePanel",ReliveUI);