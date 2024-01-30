function RankPanel()
{RankPanel.super(this);var Tween=Laya.Tween;var Ease=Laya.Ease;var Event=Laya.Event;var closeType=0;var btnClose;var btnShare;var sprite;let nowPage=1;const eachPageCount=5;let canNext=true;let canSwitch=true;let rankType=RankType.GLOBAL;this.OpenPanel=function(extra)
{closeType=extra;btnClose=CreateFruitButton(this.posClose,g_AssetsMgr.zihuan,g_AssetsMgr.fanhuizhuye,onClose,topContext);btnClose.Show();btnShare=CreateFruitButton(this.posShare,g_AssetsMgr.lvhuan,g_AssetsMgr.xianyaofenxiang,this.onShare,topContext);btnShare.Show();g_WxMgr.PostMessage({cmd:RankType.Friend},null,()=>{this.DrawRank();})
this.btnPrep.on(Event.CLICK,this,this.onPrep);this.btnNext.on(Event.CLICK,this,this.onNext);nowPage=1;canNext=true;canSwitch=true;rankType=RankType.GLOBAL;ShowRender([]);goToPage(0);}
const setCanNext=(can)=>{canSwitch=true;canNext=can;}
var goPage=(rankType,eachPageCount,nowPage,setCanNext,toBeforePage)=>{let isGlobalRank=true
FBInstant.getLeaderboardAsync("globalRank").then((leaderboard)=>{const getFunc=isGlobalRank?leaderboard.getEntriesAsync:leaderboard.getConnectedPlayerEntriesAsync;return getFunc.call(leaderboard,eachPageCount,(nowPage-1)*eachPageCount)}).then((playerEntrys)=>{setCanNext(playerEntrys.length===eachPageCount);ShowRender(playerEntrys.map(dealPlayerInfo));}).catch((err)=>{console.error(err);toBeforePage();setCanNext(true);PlatformAPI.showModal({title:"RATE_LIMITED",content:"Too frequently! Try again later!"})});}
const goToPage=(pageChange)=>{if(!canSwitch)return;canSwitch=false;canNext=false;goPage(rankType,eachPageCount,nowPage,setCanNext,()=>{nowPage+=pageChange;});}
this.onPrep=function()
{Laya.SoundManager.playSound("sound/clickbtn.mp3",1)
const oldPage=nowPage;nowPage=Math.max(1,nowPage-1);if(nowPage!=oldPage){goToPage(1);}}
this.onNext=function()
{Laya.SoundManager.playSound("sound/clickbtn.mp3",1)
if(canNext){nowPage++;goToPage(-1);}}
this.onUpdate=function()
{}
this.ClosePanel=function()
{btnClose.Hide();btnShare.Hide();}
this.DrawRank=function()
{}
this.updateRank=function()
{onListRender();}
this.gameOverComplete=function()
{g_SceneMgr.ChangeScene("StartPanel");};var onClose=function()
{g_SceneMgr.ChangeScene(closeType==1?"StartPanel":"ResultPanel");}
this.onShare=function()
{g_WxMgr.ShareGame();btnShare.ResetFruit();}
function replay(e)
{};const dealPlayerInfo=(playerEntry)=>{const rank=playerEntry.getRank();const player=playerEntry.getPlayer()
const nickname=player.getName();const score=playerEntry.getScore();const avatarUrl=player.getPhoto();return{nickname,score,rank,avatarUrl,}}
this.index=0;this.maxIndex=0;var ShowRender=(data)=>{this.list.vScrollBarSkin="";this.list.renderHandler=new Handler(this,onListRender);this.list.array=data;this.list.scrollTo(this.index*this.list.repeatX);this.maxIndex=(this.list.length-this.list.repeatX)/this.list.repeatX+1;};function onListRender(item)
{var data=item.dataSource;var txtScore=item.getChildByName("txtScore");txtScore.text=data.score;var txtName=item.getChildByName("txtName");txtName.text=data.nickname;var imgHead=item.getChildByName("imgHead");imgHead.skin=data.avatarUrl;var txtRank=item.getChildByName("txtRank");txtRank.text=data.rank>3?data.rank:"";var imgRank=item.getChildByName("imgRank");imgRank.skin=data.rank<=3?"ui1/rank"+data.rank+".png":"";}}
Laya.class(RankPanel,"RankPanel",RankUI);