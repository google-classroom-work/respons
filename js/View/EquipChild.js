function EquipChild()
{var Event=Laya.Event;EquipChild.super(this);var index;var config;this.OpenPanel=function(extra)
{index=extra;var config=knifeConfig[extra];this.txtName.text=config.name;this.txtDes.text=config.des;this.txtEff.text=config.eff;this.imgShow.skin=config.image;this.btnClose.on(Event.CLICK,this,this.onClose);this.btnUnlock.on(Event.CLICK,this,this.onUnlock);this.btnEquip.on(Event.CLICK,this,this.onEquip);this.btnRandom.visible=false;this.btnRandom={}
g_EventMgr.On(Notifition.SetKnife,this,this.setState);g_EventMgr.On(Notifition.UpdateKnife,this,this.setState)
this.txtUnlock.visible=this.btnRandom.visible=false
this.setState();}
this.onRandom=function()
{PlatformAPI.createVideoAd("Knife",function(){var num=Math.random();if(num<0.001)
{MessageBox("Unlock success!");g_NetWorkMgr.AddKnife(index);}else{num=parseInt(Math.random()*40+10);g_NetWorkMgr.AddItem(1,num);MessageBox("Unlock failed, but you got "+num+" gold coins！");}});}
this.onUnlock=function()
{var bUnlock=true;var str="Need ";var con=knifeConfig[index].condition;if(con.money)
{str="Gold coins inadequate";if(g_PlayerData.money<con.money)
bUnlock=false;}
if(con.diamond)
{str+="钻石"+con.diamond;if(g_PlayerData.diamond<con.diamond)
bUnlock=false;}
if(bUnlock)
{g_NetWorkMgr.AddItem(1,-con.money);g_NetWorkMgr.AddItem(2,-con.diamond);g_NetWorkMgr.AddKnife(index);}
else
{Laya.SoundManager.playSound("sound/nomoney.mp3",1);MessageBox(str);}}
this.onEquip=function()
{g_NetWorkMgr.SetKnife(index);}
this.setState=function()
{if(g_PlayerData.knifeList[index])
{this.btnEquip.visible=true;this.btnEquip.disabled=g_PlayerData.knife==index;this.txtUnlock.visible=this.btnUnlock.visible=this.btnRandom.visible=false;this.txtCondition.text="";}else{this.btnEquip.visible=false;this.txtUnlock.visible=this.btnUnlock.visible=this.btnRandom.visible=true;var str="Need ";var con=knifeConfig[index].condition;if(con.money)
{str+=(con.money+" gold coins");}
if(con.diamond)
{str+="钻石"+con.diamond;}
this.txtCondition.text=str;}}
function onUpdate()
{}
this.ClosePanel=function()
{g_EventMgr.Off(Notifition.SetKnife,this,this.setState);g_EventMgr.Off(Notifition.UpdateKnife,this,this.setState);}
this.onClose=function()
{g_SceneMgr.ChangeScene("EquipPanel");}}
Laya.class(EquipChild,"EquipChild",EquipChildUI);