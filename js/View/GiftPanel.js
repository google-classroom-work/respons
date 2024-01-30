function GiftPanel()
{var Event=Laya.Event;GiftPanel.super(this);var imgItem;this.OpenPanel=function()
{this.btnGet.skin=(PlatformAPI.createGiftVideoAd&&PlatformAPI.getVideoAdPlayInfoToday("Gift").valid)?"ui/guankanlingqu.png":"ui3/fenxianglingqu.png";this.btnClose.on(Event.CLICK,this,this.onClose);this.btnGet.on(Event.CLICK,this,this.onLottery);g_EventMgr.On(Notifition.GetLottery,this,this.getLottery);Laya.timer.loop(100,this.imgShan,function(){this.rotation+=2});this.imgItem.skin="";this.txtItem.text="";this.btnGet.visible=true;this.imgGift.scaleX=this.imgGift.scaleY=1;this.btnClose.visible=false;Laya.timer.once(3000,this.btnClose,function(){this.visible=true});}
this.onLottery=function()
{Lottery()
if(this.btnGet.skin=="ui/guankanlingqu.png")
{PlatformAPI.createVideoAd("Gift",Lottery);}else{g_WxMgr.ShareGame(2,Lottery);}}
this.getLottery=function(awd)
{this.btnGet.visible=false;var gf;if(awd.money)
gf=["ui/jinbi.png",awd.money];else if(awd.diamond)
gf=["ui/shuijing.png",awd.diamond];else if(awd.item)
{var item=awd.item;var sr="ui/daojutubiao_"+(item[0][0]+1)+".png";gf=[sr,item[0][1]];}
Laya.Tween.to(this.imgGift,{scaleX:0,scaleY:0},500,null,Laya.Handler.create(this,function(){this.imgItem.skin=gf[0];this.txtItem.text=gf[1];this.imgItem.scaleX=this.imgItem.sacleY=0;Laya.Tween.to(this.imgItem,{scaleX:1,scaleY:1},500,null,Laya.Handler.create(this,function(){}))}));}
function onUpdate()
{}
this.ClosePanel=function()
{this.imgItem.skin="";this.txtItem.text="";Laya.timer.clearAll(this.btnClose);}
this.onClose=function()
{Laya.timer.clearAll(this.imgShan);g_EventMgr.Off(Notifition.GetLottery,this,this.getLottery);g_SceneMgr.ChangeScene("EndPanel");}}
Laya.class(GiftPanel,"GiftPanel",GiftUI);