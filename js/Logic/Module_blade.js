(function(){bladeColor="#00ff00";bladeWidth=10;var buildBlade=function(width){var i=bladeSystem.getParticles().length;var lineWidth=width;var step=width/(i-1);while(i-->1)
{if(i==1)
topContext.lineWidth=1;else
topContext.lineWidth=lineWidth;var p=bladeSystem.getParticles()[i];var next=bladeSystem.getParticles()[i-1];topContext.drawLine(p.position.x,p.position.y,next.position.x,next.position.y,bladeColor,lineWidth);lineWidth-=step;if(lineWidth<=0)
lineWidth=1;};};buildColorBlade=function(color,width){topContext.strokeStyle=color;buildBlade(width);topContext.strokeStyle="#ff0000";buildBlade(width*0.6);};buildBladeParticle=function(x,y){var p=bladeSystem.createParticle(SPP.Particle);p.init(x,y,0.2);};}());