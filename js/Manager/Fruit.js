FruitGame.Fruit=function()
{SPP.Particle.call(this);this.drawTexture=function(context,texture,x,y)
{context.drawTexture(texture,-texture.width*.5,-texture.height*.5);};};SPP.inherit(FruitGame.Fruit,SPP.Particle);FruitGame.Fruit.prototype.update=function()
{if(this.position==null||(this.position.y>this.bottomY&&this.bottomY!=null))
{this.life=0;return;}
this.rotation+=this.rotationStep;null==this.context||null==this.texture||(this.context.save(),this.context.alpha=this.alpha,this.context.translate(this.position.x,this.position.y),this.context.rotate(this.rotation),this.context.scale(this.scale,this.scale),this.context.drawTexture(this.texture,-this.texture.width/2,-this.texture.height/2,0,0,null,this.alpha),this.context.restore())};FruitGame.Fruit.prototype.init=function(x,y,life,texture,shadow,context)
{SPP.Particle.prototype.init.apply(this,[x,y,life]);this.context=context;this.texture=texture;this.shadow=shadow;this.rotation=0;this.scale=1;this.radius=texture.width>=texture.height?texture.width*0.5:texture.height*0.5;this.radius*=this.scale;this.bottomY=null;this.rotationStep=(1-Math.random()*2)*0.1;if(this.rotationStep<=0)this.rotationStep=-0.07;else if(this.rotationStep>0)this.rotationStep=0.07;if(this.texture&&this.texture.url.indexOf("pomegranate")>-1)
{this.rotationStep=-0.01;}};