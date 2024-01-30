function EquipPanel()
{EquipPanel.super(this);var Tween=Laya.Tween;var Ease=Laya.Ease;var Event=Laya.Event;var closeType=0;this.equipIndex=0;this.OpenPanel=function(extra)
{closeType=extra;this.btnClose.on(Event.CLICK,this,onClose);g_EventMgr.On(Notifition.UpdateMoney,this,this.updateMoney);g_EventMgr.On(Notifition.SetKnife,this,this.setKnife);this.btnBgL.visible=this.btnBgR.visible=this.bgList.visible=false;this.equipList.hScrollBarSkin="";this.equipList.selectEnable=true;this.equipList.selectHandler=new Handler(this,onSelectEquip);this.equipList.renderHandler=new Handler(this,updateItemEquip);var data=[];for(var key in knifeConfig)
{data.push(knifeConfig[key]);}
this.equipList.array=data;this.btnEquipL.on(Event.CLICK,this,this.onEquipL);this.btnEquipR.on(Event.CLICK,this,this.onEquipR);this.equipList.scrollTo(this.equipIndex);this.equipMaxIndex=this.equipList.length-this.equipList.repeatX;this.updateMoney();}
this.updateMoney=function()
{this.txtMoney.text=parseInt(g_PlayerData.money)+"";this.txtDiamond.text=parseInt(g_PlayerData.diamond)+"";}
this.onEquipL=function()
{if(this.equipIndex>0)
{this.equipIndex--;this.equipList.scrollTo(this.equipIndex);}
Laya.SoundManager.playSound("sound/clickbtn.mp3",1)}
this.onEquipR=function()
{if(this.equipIndex<this.equipMaxIndex)
{this.equipIndex++;this.equipList.scrollTo(this.equipIndex);}
Laya.SoundManager.playSound("sound/clickbtn.mp3",1)}
this.onUpdate=function()
{}
var onClose=function()
{g_SceneMgr.ChangeScene(closeType==1?"StartPanel":"PreparePanel");g_EventMgr.Off(Notifition.UpdateMoney,this,this.updateMoney);g_EventMgr.Off(Notifition.SetKnife,this,this.setKnife);}
this.ClosePanel=function()
{}
function updateItemEquip(item,index)
{var data=item.dataSource;var txtName=item.getChildByName("txtName");txtName.text=data.name;var imgShow=item.getChildByName("imgShow");imgShow.skin=data.image;var imgUse=item.getChildByName("imgUse");imgUse.visible=g_PlayerData.knife==index;item.gray=!g_PlayerData.knifeList[index];}
function onSelectEquip(index)
{if(index>=0)
g_SceneMgr.ChangeScene("EquipChild",index);this.equipList.selectedIndex=-1;}}
Laya.class(EquipPanel,"EquipPanel",EquipUI);