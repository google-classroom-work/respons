FruitGame.SceneManager=function()
{var stage=Laya.stage;var sceneList;var curScene;var curName;this.Init=function(){if(Laya.Browser.window.sharedCanvas){Laya.Browser.window.sharedCanvas.width=Laya.stage.width,Laya.Browser.window.sharedCanvas.height=Laya.stage.height;g_WxMgr.PostMessage({cmd:RankType.Resize,url:"",data:{width:600,height:480,matrix:Laya.stage._canvasTransform},isLoad:false});}
uiCanvas=new Laya.Sprite();stage.addChild(uiCanvas);bottomCanvas=new Laya.Sprite();bottomCanvas.mouseThrough=true;stage.addChild(bottomCanvas);bottomCanvas.size(gameWidth,gameHeight)
bottomContext=bottomCanvas.graphics;uiScene=Laya.stage.addChild(new Laya.Scene());uiCamera=uiScene.addChild(new Laya.Camera(0,0.1,1000));uiCamera.orthographic=true;uiCamera.orthographicVerticalSize=1;middleCanvas=new Laya.Sprite();middleCanvas.mouseThrough=true;stage.addChild(middleCanvas);middleCanvas.size(gameWidth,gameHeight)
middleContext=middleCanvas.graphics;topCanvas=new Laya.Sprite();topCanvas.mouseThrough=true;stage.addChild(topCanvas);topCanvas.size(gameWidth,gameHeight)
topContext=topCanvas.graphics;adCanvas=new Laya.Sprite();adCanvas.mouseThrough=true;stage.addChild(adCanvas);scene=Laya.stage.addChild(new Laya.Scene());camera=scene.addChild(new Laya.Camera(0,0.1,1000));camera.orthographic=true;camera.orthographicVerticalSize=1;sceneList=[];sceneList["StartPanel"]=new StartPanel();sceneList["GamePanel"]=new GamePanel();sceneList["EndPanel"]=new EndPanel();sceneList["ResultPanel"]=new ResultPanel();sceneList["RankPanel"]=new RankPanel();sceneList["PreparePanel"]=new PreparePanel();sceneList["SettingPanel"]=new SettingPanel();sceneList["EquipPanel"]=new EquipPanel();sceneList["EquipChild"]=new EquipChild();sceneList["RelivePanel"]=new RelivePanel();sceneList["HelpPanel"]=new HelpPanel();sceneList["GiftPanel"]=new GiftPanel();};this.ChangeScene=function(panel,extra)
{if(panel==null){console.error("场景切换失败，切换场景参数为空!")}
if(curName==panel){console.error("场景切换失败，当前已是该场景!");}
if(sceneList&&sceneList[panel])
{if(curScene){curScene.ClosePanel();curScene.parent&&curScene.parent.removeChild(curScene);}
curName=panel;curScene=sceneList[panel];uiCanvas.addChild(curScene);curScene.OpenPanel(extra);console.log("当前面板=",panel);}else{console.error("场景切换失败，未找到该场景!");}};this.AddScene=function(panel,extra)
{if(sceneList&&sceneList[panel])
{uiCanvas.addChild(curScene);curScene.OpenPanel(extra);}else{console.error("场景切换失败，未找到该场景!");}}
this.RemoveScene=function(panel,extra)
{if(sceneList&&sceneList[panel])
{panel.ClosePanel();panel.parent&&panel.parent.removeChild(panel);}else{console.error("场景切换失败，未找到该场景!");}}};