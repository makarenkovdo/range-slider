(()=>{"use strict";var e={147:(e,t,n)=>{n.d(t,{Z:()=>oe});const i=function(e){var t=e.runnersPosition,n=e.isVertical,i=e.minMax,s=e.isRange,r=e.fieldSize,a=e.cursorXY,o=e.runners,u=0;s&&(u=function(e,t,n,i){var s=function(e,t,n){var i=t?1:0;return Math.abs(100*i-e[i]/n[i]*100)}(e,t,n);return function(e,t){return Math.abs(e-t[0])-Math.abs(e-t[1])<0?0:1}(s,i)}(a,n,r,t));var l={cursorXY:a,isVertical:n,minMax:i,isRange:s,fieldSize:r,runners:o,activeRunner:o[u]};o[u].updateRunnerValues(l)},s=function(e,t){this.minMax=[e,t]},r=function(e){this.isVertical="vertical"===e},a=function(e,t){this.class=$("#"+e).attr("class"),this.minMax=[0,100],this.isVertical=!1,this.isRange=!1,this.subscriber=t,this.setIsVertical=r.bind(this),this.setMinMax=s.bind(this),this.prepareDataForRunnerUpdating=i.bind(this)};var o=function(e){this.stepSignAfterComma=e};const u=function(e){return o.call(this,function(e,t){var n=[],i=e.step.toString().split("."),s=t[0].toString().split("."),r=t[1].toString().split(".");return i[1]?n.push(i[1].length):n.push(0),s[1]?n.push(s[1].length):n.push(0),r[1]?n.push(r[1].length):n.push(0),Math.max(n[0],n[1],n[2])}(this,e)),this.stepSignAfterComma},l=function(e,t){this.defineSignAfterComma(e),this.stepInPercent=this.step/(e[1]-e[0])*100,this.setValuesFromInputs.call(this,t,e)},h=function(e,t){this.step=e,this.stepInPercent=100/((t[1]-t[0])/e)},c=function(){this.subscriber.recieveModelLogic(this)},d=function(e){this.subscriber.recieveRebuildData(e)};var p=function(e,t,n){var i=e;Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=n)},f=function(e,t){var n,i=e.positionInPercent,s=e.step,r=e.stepInPercent,a=e.value,o=e.stepSignAfterComma;function u(){return Math.floor((t[1]-t[0])/s)*s==t[1]-t[0]}var l=100/(n=u()?(t[1]-t[0])/s:Math.floor((t[1]-t[0])/s)+1),h=Number((Math.round(i/r)*r).toFixed(o)),c=Math.floor(h/l),d=Number((t[0]+s*c).toFixed(o));return u()||a!==t[1]&&c!==n||(h=100,d=t[1]),{stepPosition:h,stepValue:d}};const v=function(e){var t,n,i=e.cursorXY,s=e.isVertical,r=e.minMax,a=e.isRange,o=e.fieldSize,u=e.runners,l=e.activeRunner;t=l,n=function(e,t,n,i){var s=n[0],r=n[1],a=0;return e?(r<0&&(r=0),a=100*(i[1]-r)/i[1]):(s<0&&(s=0),a=100*s/i[0]),a}(s,0,i,o),p(t,"positionInPercent",n),function(e,t){p(e,"value",t)}(l,function(e,t){var n=e[1]-e[0];return t.positionInPercent*(n/100)+ +e[0]}(r,l)),function(e,t){var n=t.stepPosition,i=t.stepValue;p(e,"stepPosition",n),p(e,"stepValue",i)}(l,a?function(e,t,n,i){var s=e.stepPosition,r=e.stepValue;return!i&&0===n.instance&&s-t[1].stepPosition>=0||i&&0===n.instance&&t[1].stepPosition-s<=0?{stepPosition:t[1].stepPosition,stepValue:t[1].stepValue}:!i&&1===n.instance&&s-t[0].stepPosition<=0||i&&1===n.instance&&t[0].stepPosition-s>=0?{stepPosition:t[0].stepPosition,stepValue:t[0].stepValue}:{stepPosition:s,stepValue:r}}(f(l,r),u,l,s):f(l,r)),l.notifyToUpdate()};var m=function(e,t){this.positionInPercent=e,this.value=t},g=function(e,t){this.stepPosition=e,this.stepValue=t};const _=function(e,t){var n=function(e,t){return 100*Math.abs((e-t[0])/(t[1]-t[0]))}(e,t);m.call(this,n,e);var i=f(this,t),s=i.stepValue,r=i.stepPosition;return g.call(this,r,s),{stepValue:s,stepPosition:r}},b=function(e,t,n){this.instance=t,this.positionInPercent=0,this.value=0,this.step=1,this.stepInPercent=1,this.stepSignAfterComma=0,this.stepPosition=0,this.stepValue=0,this.subscriber=n,this.defineSignAfterComma=u.bind(this),this.notifyToUpdate=c.bind(this),this.notifyToRebuild=d.bind(this),this.setStep=h.bind(this),this.updateRunnerValues=v.bind(this),this.initializeDefaultValues=l.bind(this),this.setValuesFromInputs=_.bind(this)},S=function(e,t,n){var i=this;this.runner.size=e,this.orientation=n,this.isVertical="vertical"===n,$(document).ready((function(){var e=i.$field,n=parseInt(e.css("border-width"),10),s=parseInt(e.parent().css("width"),10),r=parseInt(e.parent().css("height"),10);i.isVertical?(i.fieldSize=[t,r-n-11],e.css("width",t),e.css("height","100%")):(i.fieldSize=[s-n-11,t],e.css("height",t),e.css("width","100%"))})),this.$field.addClass("slider_"+this.orientation+" js-slider_"+this.orientation)},V=function(e,t){this.minMax=[e,t]},P=function(e){e.preventDefault(),e.stopPropagation();var t=e.data,n=function(e,t){var n=[e.pageX-t.$field.position().left-5,e.pageY-t.$field.position().top-5];return n[0]<0&&(n[0]=0),n[0]>t.fieldSize[0]&&(n[0]=t.fieldSize[0]),n}(e,t);t.notifyFieldClick(n)},y=function(){this.$field.on("click",this,P),$(".js-scale-line").on("click",this,P),$(".js-scale-numbers").on("click",this,P)},I=function(e){this.subscriber.recieveClickData(this,e)},x=function(e,t){this.runner.step=e,this.runner.stepSignAfterComma=t,this.lengthInStep=(this.minMax[1]-this.minMax[0])/e},w=function(e){var t,n=this,i=this.parent;t=i.isVertical?"width":"height",$(document).ready((function(){i.$field.append("<div data-testid='test-slider-bar' class='slider__bar slider__bar_"+i.orientation+" js-slider__bar' style='"+t+": "+e+"'></div>")})),$(document).ready((function(){n.$bar=i.$field.children(".js-slider__bar")})),n.fieldThickness=e};var k;!function(e){e[e.zero=0]="zero",e[e.one=1]="one"}(k||(k={}));var C=function(e){return Math.abs(e[1]-e[0])},R=function(e,t,n){n&&$(document).ready((function(){n.css("height",e[0]+"%").css("top",100-e[0]+"%"),n.css("width",t+"px")}))},M=function(e,t,n){n&&$(document).ready((function(){n.css("width",e[0]+"%"),n.css("height",t+"px")}))},T=function(e,t,n,i,s){t&&$(document).ready((function(){var r=[["left","width"],["top","height"]],a=Math.abs(100*e-n[e]);t.css(""+r[e][0],a+"%"),t.css(""+r[e][1],s+"%");var o=1-e;t.css(""+r[o][1],i+"px")}))};const z=function(){var e=this,t=this.parent,n=t.isRange,i=t.isVertical,s=t.runner;$(document).ready((function(){var t=e,r=t.$bar,a=t.fieldThickness;!function(e){var t=e.isRange,n=e.isVertical,i=e.$bar,s=e.runnersPosition,r=e.fieldThickness,a=e.calcLengthOfRangeBar,o=e.updateSingleVerticalBarPosition,u=e.updateSingleHorizontalBarPosition,l=e.updateRangeBarPosition;t&&n&&l(k.one,i,s,r,a(s)),t&&!n&&l(k.zero,i,s,r,a(s)),!t&&n&&o(s,r,i),t||n||u(s,r,i)}({isRange:n,isVertical:i,$bar:r,runnersPosition:s.positions,fieldThickness:a,calcLengthOfRangeBar:C,updateSingleVerticalBarPosition:R,updateSingleHorizontalBarPosition:M,updateRangeBarPosition:T})}))},A=function(e){this.parent=e,this.fieldThickness=6,this.createBar=w.bind(this),this.updateBarPosition=z.bind(this)};var j=function(e,t){this.$elements[e]=this.parent.$field.children(".js-slider__runner_instance-"+e),this.positions[e]=t};const L=function(e,t,n){var i=this;this.stepSignAfterComma=n,$().ready((function(){var n,s,r,a,o,u,l;n=function(e,t,n,i,s){var r=["left","top"],a=[0,1],o=e,u=5-n[0]/2;t&&(r=["top","left"],a=[1,0]);var l=n[a[1]]/2+1;return{instance:o,positioning:r,position:[Math.abs(i[a[0]]*a[0]-s*(i[a[0]]/100))+u,-l+.5*i[a[1]]]}}(e,i.parent.isVertical,i.size,i.parent.fieldSize,t),s=i.parent.$field,r=i.size,a=i.parent.orientation,o=n.instance,u=n.positioning,l=n.position,s.append('<span data-testid="test-runner-'+o+'" class="slider__runner slider__runner_'+a+" js-slider__runner_instance-"+o+'" style="'+u[0]+":"+l[0]+"px; "+u[1]+":"+l[1]+"px; width:"+r[0]+"px; height:"+r[1]+'px"></span>'),j.call(i,e,t)}))},B=function(e){e.preventDefault(),e.stopPropagation();var t=e.data,n=function(e,t){var n=t.thisRunner.parent,i=n.$field,s=n.fieldSize,r=n.isVertical,a=[0,0];e.pageX&&e.pageY&&(a=[e.pageX-i.position().left-5,e.pageY-i.position().top-5]);var o=0;return r&&(o=1),a[o]<0&&(a[o]=0),a[o]>s[o]&&(a[o]=s[o]),a}(e,t);t.thisRunner.notifySliderMoving(n,t.instance)},D=function(e){var t=this,n=this.parent,i=n.$field,s=n.$body;i.on("mousedown",".js-slider__runner_instance-"+e,(function(n){n.preventDefault(),n.stopPropagation(),i.addClass("tap"),s.on("mousemove",{thisRunner:t,instance:e},B)})),i.on("touchstart",".js-slider__runner_instance-"+e,(function(n){n.preventDefault(),n.stopPropagation(),i.addClass("tap"),s.on("touchmove",{thisRunner:t,instance:e},B)}))},E=function(e){if("INPUT"!==e.target.tagName){e.preventDefault(),e.stopPropagation();var t=e.data,n=t.thisView,i=n.$field,s=n.isRange,r=n.$body,a=t.thisView.runner;i.removeClass("tap"),a.$elements[0].removeClass("slider__runner_current"),s&&t.thisView.runner.$elements[1].removeClass("slider__runner_current"),r.off("mousemove touchmove"),t.thisView.runner.updateZIndex(a.activeInstance)}},F=function(){var e=this.parent,t=e.$field,n=e.$body;t.on("mouseup",{thisView:this.parent},E),n.on("mouseup",{thisView:this.parent},E),t.on("touchend",{thisView:this.parent},E),n.on("touchend",{thisView:this.parent},E)},Z=function(e,t){this.parent.subscriber.recieveDragData(this.parent,e,t)};var q=n(290),N=function(e,t){this.positions[t]=e,this.activeInstance=t},O=function(e){var t=e.stepPosition,n=e.instance,i=e.positioning,s=this.parent,r=s.isVertical,a=s.fieldSize,o=this.size,u=this.$elements,l=t*(a[r?1:0]/100),h=r?a[1]-l+5-o[0]/2+"px":l+5-o[0]/2+"px";u[n].css(i[0],h)};const H=function(e,t){N.call(this,e,t),O.call(this,function(e,t,n){var i=[["left","width"],["top","height"]],s={stepPosition:t,instance:n,positioning:i[0]};return e&&(s.positioning=i[1]),s}(this.parent.isVertical,e,t))},X=function(e){var t=this;$(document).ready((function(){t.$elements[e].addClass("slider__runner_current")}))},Y=function(e){this.parent=e,this.$elements=[],this.activeInstance=0,this.positions=[0,100],this.isZIndexUpdated=!1,this.size=[],this.step=1,this.stepSignAfterComma=0,this.cursorXY=[0,0],this.createRunner=L.bind(this),this.handleDrag=D.bind(this),this.handleDrop=F.bind(this),this.notifySliderMoving=Z.bind(this),this.removeDrag=q.Z.bind(this),this.updatePosition=H.bind(this),this.updateZIndex=X.bind(this)},Q=function(e){for(var t=e.$scaleLines,n=e.lineQuantity,i=e.orientation,s=e.minMax,r=e.smallLine,a=e.bigLine,o=e.step,u=e.stepMultiplier,l=e.shouldAddExtraLine,h="vertical"===i?"top":"left",c="vertical"===i?1:0,d=0;d<2*n+1;d+=1){var p=Math.abs(100*c-o/(s[1]-s[0])*u*100*(d/2));p<98&&(d%2&&d!==2*Math.floor(n)+1?t.append('<div \n              class="\n                slider__scale-line\n                slider__scale-line_'+i+'\n                js-slider__scale-line\n                " \n              style="\n              position: absolute;\n              '+r+";\n              "+h+": "+p+'%;"\n            >\n            </div>'):d%2||t.append('<div\n              class="\n                slider__scale-line\n                slider__scale-line_'+i+'\n                js-slider__scale-line\n              "\n              style="'+a+";\n              position: absolute;\n              "+h+": "+p+'%;"\n            ></div>'))}l&&(t.append('<div\n            class="\n              slider__scale-line\n              slider__scale-line_'+i+'\n              js-slider__scale-line\n            "\n            style="'+a+";\n            position: absolute;\n            "+h+': 100%;"\n          ></div>'),t.append('<div\n            class="\n              slider__scale-line\n              slider__scale-line_'+i+'\n              js-slider__scale-line\n            "\n            style="'+a+";\n            position: absolute;\n            "+h+': 0%;"\n          ></div>'))},W=function(e){var t=e.$id,n=e.orientation,i=e.fieldSize,s=e.top,r=e.left;t.append('<div \n          data-testid="test-slider__scale-lines"\n          class="slider__scale-lines slider__scale-lines_'+n+'\n            js-slider__scale-lines"\n          style="height:'+i[1]+"px;\n            width:"+i[0]+"px;\n            left:"+r+"px; top:"+s+'px;\n          "\n        >\n        </div>')},U=function(e){for(var t=e.$scaleNumbers,n=e.minMax,i=e.lineQuantity,s=e.stepSignAfterComma,r=e.isVertical,a=e.stepMultiplier,o=e.step,u=e.onePxInPercent,l="vertical"===e.orientation?"top":"left",h=1;h<i+1;h+=1){var c=o/(n[1]-n[0])*a*100*h,d=2*(n[0]+h*o*a).toFixed(Math.min(2,s)).length*u;(100-c)/u>30&&(r?t.append('<div\n            class="\n              slider__scale-number\n              js-slider__scale-number\n            "\n            style="\n            left: 5px;\n            top: '+(100-(c+.5))+'%;\n            position: absolute;\n  \n            "\n\n          >'+(n[0]+h*o*a).toFixed(Math.min(2,s))+"\n          </div>"):t.append('<div\n            class="\n              slider__scale-number\n              js-slider__scale-number\n            "\n            style="\n            left: '+(c-d)+'%;\n            position: absolute;\n  \n            "\n            \n          >'+(n[0]+h*o*a).toFixed(Math.min(2,s))+"\n          </div>"))}r?(t.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          left: 5px;\n          '+l+': 99.5%;\n          position: absolute;\n\n          "\n          \n        >'+n[0]+"\n        </div>"),t.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          left: 5px;\n          '+l+': -0.5%;\n          position: absolute;\n\n          "\n          \n        >'+n[1]+"\n        </div>")):(t.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          '+l+': 100%;\n          position: absolute;\n\n          "\n          \n        >'+n[1]+"\n        </div>"),t.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          '+l+': 0%;\n          position: absolute;\n\n          "\n          \n        >'+n[0]+"\n        </div>"))},G=function(e){var t=e.$id,n=e.top,i=e.left,s=e.fieldSize;t.append('<div \n          data-testid="test-slider__scale-numbers"\n          class="slider__scale-lines slider__scale-numbers\n            js-slider__scale-numbers"\n          style="height:'+s[1]+"px;\n            width:"+s[0]+"px;\n            top:"+n+"px;\n            left:"+i+'px;\n          "\n        >\n        </div>')},J=function(){var e=this;$(document).ready((function(){var t=e.parent,n=t.isVertical,i=t.$field,s=t.fieldSize,r=t.runner,a=t.minMax,o=t.orientation;!function(e,t,n,i,s,r,a,o){var u=o.lineQuantity,l=o.segmentInPercent,h=o.stepMultiplier,c=o.scaleSignAfterComma,d=o.shouldAddExtraLine,p=o.onePxInPercent,f={$id:t,orientation:a,fieldSize:n,lineQuantity:u,top:5,left:n[0]+2,columnOrRow:"row"},v={$id:t,lineQuantity:u,width:n[0],height:n[1]+n[1]/(u-1),top:0,left:n[0]+20,columnOrRow:"row",fieldSize:n},m={$scaleLines:t.find(".js-slider__scale-lines"),lineQuantity:u,segmentInPercent:l,orientation:a,minMax:r,smallLine:"width: 5px",bigLine:"width: 10px",step:i,stepMultiplier:h,shouldAddExtraLine:d},g={$scaleNumbers:t.find(".js-slider__scale-numbers"),switcher:1,lastOrFirstIterration:0,minMax:r,segmentInPercent:l,lineQuantity:u,stepSignAfterComma:s,isVertical:e,stepMultiplier:h,step:i,scaleSignAfterComma:c,shouldAddExtraLine:d,onePxInPercent:p,orientation:a};e?(W(f),G(v),g.$scaleNumbers=t.find(".js-slider__scale-numbers"),m.$scaleLines=t.find(".js-slider__scale-lines"),U(g),Q(m)):(f.top=n[1]+2,f.left=4,f.columnOrRow="columns",W(f),v.width=n[0]+n[0]/(u-1),v.height=n[1],v.top=n[1]+20,v.left=0,v.columnOrRow="columns",G(v),g.$scaleNumbers=t.find(".js-slider__scale-numbers"),g.switcher=0,g.lastOrFirstIterration=u-1,U(g),m.$scaleLines=t.find(".js-slider__scale-lines"),m.smallLine="height: 5px",m.bigLine="height: 10px",Q(m))}(n,i,s,r.step,r.stepSignAfterComma,a,o,function(e,t,n,i,s){var r=0;t&&(r+=1);for(var a=100/e[r],o=s,u=!1,l=(n[1]-n[0])/i,h=Math.floor(l),c=Math.floor(e[r]/40),d=0;h>c;d+=1)h/=2;var p=Math.floor(h),f=Number(((n[1]-n[0])/p).toFixed(3)),v=Math.floor(f/i);return i*(p-1)*v!=n[1]-n[0]&&(o+=1,u=!0,e[r]-i*v*(p-1)/(n[1]-n[0])*e[r]<50&&(p-=1)),n[0]>0&&(f=Number(((n[1]-n[0])/(p-1)).toFixed(3))),{lineQuantity:p,segmentInPercent:f,stepMultiplier:v,scaleSignAfterComma:o,shouldAddExtraLine:u,onePxInPercent:a}}(s,n,a,r.step,r.stepSignAfterComma))}))},K=function(e){this.parent=e,this.create=J.bind(this)},ee=function(e,t,n,i){var s=this;$(document).ready((function(){var r=s.parent,a=r.fieldSize,o=r.$field,u=r.orientation;r.minMax,function(e,t,n,i,s){var r=e.instance,a=e.positioning,o=e.position;console.log("tip",s),t.append('<span data-testid="test-tip-number-'+r+"\" class='slider__tip slider__tip_"+n+" js-slider__tip_instance-"+r+"' style=\""+a[0]+":"+o[0]+'px"><span>0</span></span>'),t.find(".js-slider__tip_instance-"+r+" span").text(""+s),o[0]}(function(e,t,n,i){var s=["left"],r=e;return t&&(r=e,s=["top"]),{instance:r,positioning:s,position:t?[n[1]-i*(n[1]/100)-10]:[i*(n[0]/100)-20]}}(e,t,a,n),o,u,0,i)})),this.parent.hasTip=!0},te=function(e){var t=e.stepValue,n=e.instance,i=this.parent,s=i.$field,r=i.fieldSize,a=i.isVertical,o=i.runner,u=a?"top":"left",l=a?r[1]-o.positions[n]*(r[1]/100)-10:o.positions[n]*(r[0]/100)-20;s.find(".js-slider__tip_instance-"+n+" span").text(""+t),s.find(".js-slider__tip_instance-"+n).css(u,l+"px")},ne=function(e){this.parent=e,this.create=ee.bind(this),this.update=te.bind(this)};var ie=n(189);const se=function(e,t){this.id=e,this.$body=$("body"),this.$field=$("#"+e),this.class=$("#"+e).attr("class"),this.isVertical=!1,this.isRange=!1,this.hasBar=!1,this.hasScale=!1,this.hasTip=!1,this.orientation="horizontal",this.fieldSize=[],this.fieldThickness=6,this.borderWidth=1,this.minMax=[],this.lengthInStep=1,this.corrector=0,this.subscriber=t,this.bar=new A(this),this.runner=new Y(this),this.scale=new K(this),this.tip=new ne(this),this.clearHTMLElement=ie.Z,this.initializeValues=S.bind(this),this.handleClick=y.bind(this),this.notifyFieldClick=I.bind(this),this.initStartEnd=V,this.setStep=x};const re=function(){function e(e,t,n){this.parent=e,this.id=t,this.runnerCounter=0,this.runners=[],this.field=new a(t,this),this.view=new se(t,this),this.params=n,this.build(n),this.addListeners(n,"build")}return e.prototype.rebuild=function(e){this.params=e,this.field.isRange=!1,this.view.isRange=!1,this.removeListeners(e),this.runners=[],this.view.clearHTMLElement(this.view.id,e.orientation),this.runnerCounter=0,this.build(e),this.addListeners(e,"rebuild")},e.prototype.build=function(e){e.isTestMode||this.setMinMax(e).initLayers(e).createRangeSlider(e).setStep(e).createBar(e).createScale(e)},e.prototype.addListeners=function(e,t){var n=e.isRange;switch(t){case"build":this.onClick().onDrag(0).onDrop(),n&&this.onDrag(1);break;case"rebuild":this.onDrag(0),n&&this.onDrag(1)}return this},e.prototype.createRangeSlider=function(e){var t,n=e.isRange,i=e.shouldAddTip,s=e.runnerSize,r=e.minValue,a=e.maxValue,o=e.runnersInstantPosition,u=e.step;this.createRunner(s,r,a,o[this.runnerCounter],u);var l=this.runners[this.runnerCounter],h=l.stepPosition,c=l.stepValue;return this.createRunnerView(this.runnerCounter,h,this.runners[this.runnerCounter].stepSignAfterComma),this.createTipNumber(i,h,c),n?(this.runnerCounter+=1,this.view.isRange=!0,this.field.isRange=!0,this.createRunner(s,r,a,o[this.runnerCounter],u),h=(t=this.runners[this.runnerCounter]).stepPosition,c=t.stepValue,this.createRunnerView(this.runnerCounter,h,this.runners[this.runnerCounter].stepSignAfterComma),this.createTipNumber(i,h,c)):this.view.isRange=!1,this},e.prototype.createRunner=function(e,t,n,i,s){return this.runners.push(new b(this.id,this.runnerCounter,this)),this.runners[this.runnerCounter].setStep(s,[t,n]),this.runners[this.runnerCounter].initializeDefaultValues([t,n],i),this},e.prototype.createRunnerView=function(e,t,n){return this.view.runner.createRunner(e,t,n),this},e.prototype.createTipNumber=function(e,t,n){return e&&this.view.tip.create(this.runnerCounter,this.field.isVertical,t,n),this},e.prototype.createBar=function(e){var t=e.shouldAddBar,n=e.fieldThickness;return t&&(this.view.hasBar=!0,this.view.bar.createBar(n),this.view.bar.updateBarPosition()),this},e.prototype.createScale=function(e){return e.shouldAddScale&&(this.view.hasScale=!0,this.view.scale.create()),this},e.prototype.onDrag=function(e){var t=this;return $(document).ready((function(){t.view.runner.handleDrag(e)})),this},e.prototype.onDrop=function(){return this.view.runner.handleDrop(),this},e.prototype.removeListeners=function(e){var t=e.isRange;return this.view.runner.removeDrag(0),t&&this.view.runner.removeDrag(1),this},e.prototype.recieveModelLogic=function(e){e&&(this.updateRunnerPosition(e),this.view.hasTip&&this.updateTipNumber(e.stepValue,e.instance),this.view.hasBar&&this.updateBarPosition(),this.params.onChange&&(this.params.runnersInstantPosition[e.instance]=e.stepValue,this.params.onChange(this.params)))},e.prototype.recieveRebuildData=function(e){this.rebuild(e)},e.prototype.recieveDragData=function(e,t,n){var i=e.fieldSize,s={cursorXY:t,isVertical:this.field.isVertical,minMax:this.field.minMax,isRange:this.field.isRange,fieldSize:i,runners:this.runners,activeRunner:this.runners[n]};this.runners[n].updateRunnerValues(s)},e.prototype.recieveClickData=function(e,t){var n=e.runner.positions,i=e.fieldSize,s={runnersPosition:n,isVertical:this.field.isVertical,minMax:this.field.minMax,isRange:this.field.isRange,fieldSize:i,cursorXY:t,runners:this.runners};this.field.prepareDataForRunnerUpdating(s)},e.prototype.setMinMax=function(e){var t=e.minValue,n=e.maxValue;return this.field.setMinMax(t,n),this.view.initStartEnd(t,n),this},e.prototype.setStep=function(e){var t=this,n=e.step;return this.runners.forEach((function(e){return e.setStep(n,t.field.minMax)})),this.view.setStep(n,this.runners[0].stepSignAfterComma),this},e.prototype.updateRunnerPosition=function(e){var t=e.stepPosition,n=e.instance;this.view.runner.updatePosition(t,n)},e.prototype.updateTipNumber=function(e,t){return this.view.tip.update({stepValue:e,instance:t}),this},e.prototype.updateBarPosition=function(){return this.view.bar.updateBarPosition(),this},e.prototype.initLayers=function(e){var t=e.runnerSize,n=e.fieldThickness,i=e.orientation;return this.field.setIsVertical(i),this.view.initializeValues(t,n,i),this},e.prototype.onClick=function(){return this.view.handleClick(this.runners,this.field),this},e}();var ae=n(176);const oe=function(){function e(e,t){this.checkValues=ae.Z,this.presenter=new re(this,e,(0,ae.Z)(t))}return e.prototype.getValues=function(){return this.presenter.params},e.prototype.rebuild=function(e){this.presenter.rebuild((0,ae.Z)(e))},e}()},290:(e,t,n)=>{n.d(t,{Z:()=>i});const i=function(e){$("#"+e).off()}},176:(e,t,n)=>{n.d(t,{Z:()=>i});const i=function(e){var t,n=e.minValue,i=void 0===n?0:n,s=e.maxValue,r=void 0===s?100:s,a=e.step,o=void 0===a?1:a,u=e.fieldThickness,l=void 0===u?6:u,h=e.runnersInstantPosition,c=void 0===h?[0,100]:h,d=e.runnerSize,p=void 0===d?[40,40]:d,f=e.shouldAddTip,v=void 0!==f&&f,m=e.shouldAddBar,g=void 0!==m&&m,_=e.shouldAddScale,b=void 0!==_&&_,S=e.isRange,$=void 0!==S&&S,V=e.isTestMode,P=void 0!==V&&V,y=e.orientation,I=void 0===y?"horizontal":y;i>r?(i=(t=[r,i])[0],r=t[1]):i===r&&(i=0,r=100),o<=0&&(o=1),o>r-i&&(o=r-i),(p[0]<=6||p[1]<=6)&&(p[0]=6,p[1]=6),(p[0]>50||p[1]>50)&&(p[0]=50,p[1]=50),l<=0&&(l=1),l>=20&&(l=20),(c[0]<i||c[0]>r)&&(c[0]=i),(c[1]>r||c[1]<i)&&(c[1]=r),$&&c[0]>c[1]&&(c=[c[1],c[0]]);var x={minValue:i,maxValue:r,step:o,runnerSize:p,fieldThickness:l,runnersInstantPosition:c,shouldAddTip:v,shouldAddBar:g,shouldAddScale:b,isRange:$,isTestMode:P,orientation:I};return e.onChange&&(x.onChange=e.onChange),x}},189:(e,t,n)=>{n.d(t,{Z:()=>i});const i=function(e,t){var n=document.querySelector("#"+e);$(document).ready((function(){if(n){n.innerHTML="";var e="vertical"===t?"horizontal":"vertical";n.classList.remove("slider_"+e),n.classList.remove("js_slider_"+e)}}))}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(147),t=n(189),i=function(){var e=document.querySelector("#"+this.id+"-panel");e&&(this.$minValueInput=e.querySelector(".js-slider-input__min-value"),this.$maxValueInput=e.querySelector(".js-slider-input__max-value"),this.$runnerWidthInput=e.querySelector(".js-slider-input__runner-width"),this.$runnerHeightInput=e.querySelector(".js-slider-input__runner-height"),this.$stepInput=e.querySelector(".js-slider-input__step"),this.$isRangeInput=e.querySelector(".js-slider-input__is-range"),this.$orientationInput=e.querySelector(".js-slider-input__orientation"),this.$hasScaleInput=e.querySelector(".js-slider-input__has-scale"),this.$hasBarInput=e.querySelector(".js-slider-input__has-bar"),this.$hasTipInput=e.querySelector(".js-slider-input__has-tip"),this.$runner0ValueInput=e.querySelector(".js-slider-input__runner-0-value"),this.$runner1ValueInput=e.querySelector(".js-slider-input__runner-1-value"),this.$fieldThicknessInput=e.querySelector(".js-slider-input__field-thickness"))},s=function(e){var t=e.minValue,n=e.maxValue,i=e.runnerSize,s=e.runnersInstantPosition,r=e.orientation,a=e.shouldAddBar,o=e.shouldAddScale,u=e.shouldAddTip,l=e.isRange,h=e.step,c=e.fieldThickness;this.orientation=r,this.minMax=[t,n],this.isRange=l,this.fieldThickness=c,this.hasBar=a,this.hasScale=o,this.hasTip=u,this.runnersPosition=s,this.runnerSize=i,this.step=h;var d=this,p=d.$minValueInput,f=d.$maxValueInput,v=d.$stepInput,m=d.$isRangeInput,g=d.$orientationInput,_=d.$hasScaleInput,b=d.$hasBarInput,S=d.$hasTipInput,V=d.$runner0ValueInput,P=d.$runner1ValueInput,y=d.$runnerHeightInput,I=d.$runnerWidthInput,x=d.$fieldThicknessInput;$(document).ready((function(){p&&(p.value=""+t),f&&(f.value=""+n),y&&(y.value=""+i[1]),I&&(I.value=""+i[0]),v&&(v.value=""+h),m&&(m.checked=l),g&&(g.checked="vertical"===r),_&&(_.checked=o),b&&(b.checked=a),S&&(S.checked=u),V&&(V.value=""+s[0]),P&&(P.value=""+s[1]),x&&(x.value=""+c)}))},r=function(e,t){switch(t){case"min":this.minMax[0]=parseFloat(e.target.value);break;case"max":this.minMax[1]=parseFloat(e.target.value);break;case"runnerValue0":this.runnersPosition[0]=parseFloat(e.target.value);break;case"runnerValue1":this.runnersPosition[1]=parseFloat(e.target.value);break;case"runnerHeight":this.runnerSize[1]=parseInt(e.target.value,10);break;case"runnerWidth":this.runnerSize[0]=parseInt(e.target.value,10);break;case"step":this.step=parseFloat(e.target.value);break;case"isRange":this.isRange=e.target.checked;break;case"orientation":this.orientation=e.target.checked?"vertical":"horizontal";break;case"hasScale":this.hasScale=e.target.checked;break;case"hasTip":this.hasTip=e.target.checked;break;case"hasBar":this.hasBar=e.target.checked;break;case"fieldThickness":this.fieldThickness=parseInt(e.target.value,10)}this.notifyInputChange.call(this)},a=function(){var e=this,t=this,n=t.$minValueInput,i=t.$maxValueInput,s=t.$runnerWidthInput,r=t.$runnerHeightInput,a=t.$stepInput,o=t.$isRangeInput,u=t.$orientationInput,l=t.$hasScaleInput,h=t.$hasBarInput,c=t.$hasTipInput,d=t.$runner0ValueInput,p=t.$runner1ValueInput,f=t.$fieldThicknessInput;n&&n.addEventListener("change",(function(t){return e.handleChange(t,"min")})),i&&i.addEventListener("change",(function(t){return e.handleChange(t,"max")})),d&&d.addEventListener("change",(function(t){return e.handleChange(t,"runnerValue0")})),p&&p.addEventListener("change",(function(t){return e.handleChange(t,"runnerValue1")})),s&&s.addEventListener("change",(function(t){return e.handleChange(t,"runnerWidth")})),r&&r.addEventListener("change",(function(t){return e.handleChange(t,"runnerHeight")})),f&&f.addEventListener("change",(function(t){return e.handleChange(t,"fieldThickness")})),a&&a.addEventListener("change",(function(t){return e.handleChange(t,"step")})),u&&u.addEventListener("change",(function(t){return e.handleChange(t,"orientation")})),o&&o.addEventListener("change",(function(t){return e.handleChange(t,"isRange")})),h&&h.addEventListener("change",(function(t){return e.handleChange(t,"hasBar")})),l&&l.addEventListener("change",(function(t){return e.handleChange(t,"hasScale")})),c&&c.addEventListener("change",(function(t){return e.handleChange(t,"hasTip")}))};const o=function(e){i.call(this),s.call(this,e),a.call(this)},u=function(){var e={orientation:this.orientation,minValue:this.minMax[0],maxValue:this.minMax[1],isRange:this.isRange,fieldThickness:this.fieldThickness,shouldAddBar:this.hasBar,shouldAddScale:this.hasScale,shouldAddTip:this.hasTip,runnersInstantPosition:this.runnersPosition,runnerSize:this.runnerSize,step:this.step};this.parent.rebuild(e)};var l=n(290);const h=function(e,n,i){this.parent=i,this.id=e,this.$minValueInput=null,this.$fieldThicknessInput=null,this.$hasBarInput=null,this.$hasScaleInput=null,this.$hasTipInput=null,this.$isRangeInput=null,this.$maxValueInput=null,this.$orientationInput=null,this.$runner0ValueInput=null,this.$runner1ValueInput=null,this.$runnerHeightInput=null,this.$runnerWidthInput=null,this.$stepInput=null,this.hasBar=n.shouldAddBar,this.hasScale=n.shouldAddScale,this.hasTip=n.shouldAddTip,this.isRange=n.isRange,this.fieldThickness=n.fieldThickness,this.minMax=[n.minValue,n.maxValue],this.orientation=n.orientation,this.runnerSize=n.runnerSize,this.runnersPosition=n.runnersInstantPosition,this.step=n.step,this.activatePanel=o.bind(this),this.clearHTMLElement=t.Z.bind(this),this.initializePanel=s.bind(this),this.notifyInputChange=u.bind(this),this.removeListeners=l.Z,this.handleChange=r.bind(this)};var c=n(176),d=document.createElement("script");d.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"),document.head.appendChild(d);var p=function(){function t(t,n){this.id=t,this.checkedParams=(0,c.Z)(n),this.panel=new h(t,this.checkedParams,this),this.slider=new e.Z(t,this.setCallback()),this.activatePanel(this.checkedParams)}return t.prototype.setCallback=function(){return this.checkedParams.onChange=this.handleChange.bind(this),this.checkedParams},t.prototype.activatePanel=function(e){return this.panel.activatePanel.call(this.panel,e),this},t.prototype.handleChange=function(e){this.rebuildPanel(e)},t.prototype.rebuildPanel=function(e){this.checkedParams=(0,c.Z)(e),this.panel.initializePanel(this.checkedParams)},t.prototype.rebuild=function(e){this.checkedParams=(0,c.Z)(e),this.checkedParams=this.setCallback(),this.panel.initializePanel(this.checkedParams),this.slider.presenter.rebuild(this.checkedParams)},t.prototype.removeListeners=function(e){return this.panel.removeListeners(e),this},t}();new p("first",{step:1,maxValue:-10,minValue:10,shouldAddTip:!0,shouldAddBar:!0,shouldAddScale:!0,isRange:!0,runnerSize:[12,12],runnersInstantPosition:[-6,6],fieldThickness:6}),new p("second",{shouldAddTip:!0,shouldAddBar:!0,step:.003,maxValue:.15,minValue:-.751,isRange:!0,shouldAddScale:!0,runnerSize:[12,24],runnersInstantPosition:[-.5,.1]}),new p("third",{shouldAddTip:!0,shouldAddBar:!0,step:4,maxValue:16.25,minValue:-70,isRange:!0,shouldAddScale:!0,runnerSize:[12,12],runnersInstantPosition:[0,8],fieldThickness:2,orientation:"vertical"}),new p("fourth",{shouldAddTip:!1,shouldAddBar:!1,step:.07,maxValue:-.01,minValue:16.35,isRange:!0,shouldAddScale:!0,runnerSize:[50,50],runnersInstantPosition:[0,8],fieldThickness:20}),new p("fifth",{step:1e5,maxValue:-1e6,minValue:1e6,shouldAddTip:!0,shouldAddBar:!0,shouldAddScale:!0,runnerSize:[20,20],runnersInstantPosition:[0,1e5],fieldThickness:10,orientation:"vertical"})})()})();