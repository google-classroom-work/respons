var Loader=laya.net.Loader;var Handler=laya.utils.Handler;var SoundManager=Laya.SoundManager;var Particle2D=Laya.Particle2D;var Utils3D=Laya.Utils3D;console.log("ttttttsssssssasaaa")
Laya.MiniAdpter.init(true);Laya3D.init(gameWidth,gameHeight);Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_AUTO;Laya.stage.screenMode=Laya.Stage.SCREEN_NONE;Laya.MouseManager.multiTouchEnabled=false;RES_VERSION="1.0";window.onload=loadAssets;var uiScene;var uiCamera;var scene;var camera;var trailing;function loadAssets()
{var loadRes=function()
{Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH;console.log("执行loadRes")
g_AssetsMgr=new FruitGame.AssetsManager();g_AssetsMgr.addEventListener("complete",loadAssetsComplete);g_AssetsMgr.start();}
g_WxMgr=new FruitGame.WxManager();if(Laya.Browser.window.PlatformAPI.platform=="FBInstant"){FBInstant.initializeAsync().then(()=>{}).catch((e)=>{console.log(e);});}
initSSSGameConfig(()=>{loadRes();});};function registerBitmapFont(fontUrl,fontName)
{var bitmapFont=new Laya.BitmapFont()
bitmapFont.loadFont(fontUrl,new Laya.Handler(this,function(){Laya.Text.registerBitmapFont(fontName,bitmapFont);}));}
function loadAssetsComplete()
{console.log("loadAssetsComplete")
g_EventMgr=EventManager;g_GameMgr=new FruitGame.GameManager();g_GameMgr.Init();}