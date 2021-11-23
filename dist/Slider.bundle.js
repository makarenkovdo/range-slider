!function(i,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["my-library"]=e():i["my-library"]=e()}(self,(function(){return(()=>{"use strict";var i={290:(i,e,t)=>{t.d(e,{Z:()=>n});const n=function(i){$("#"+i).off()}},176:(i,e,t)=>{t.d(e,{Z:()=>n});const n=function(i){var e,t=i.minValue,n=void 0===t?0:t,s=i.maxValue,r=void 0===s?100:s,a=i.step,o=void 0===a?1:a,l=i.fieldThickness,u=void 0===l?6:l,c=i.runnersInstantPosition,h=void 0===c?[0,100]:c,d=i.runnerSize,p=void 0===d?[40,40]:d,f=i.shouldAddTip,v=void 0!==f&&f,m=i.shouldAddBar,b=void 0!==m&&m,_=i.shouldAddScale,g=void 0!==_&&_,y=i.isRange,x=void 0!==y&&y,S=i.isTestMode,V=void 0!==S&&S,P=i.orientation,w=void 0===P?"horizontal":P;n>r?(n=(e=[r,n])[0],r=e[1]):n===r&&(n=0,r=100),o<=0&&(o=1),o>r-n&&(o=r-n),(p[0]<=6||p[1]<=6)&&(p[0]=6,p[1]=6),(p[0]>50||p[1]>50)&&(p[0]=50,p[1]=50),u<=0&&(u=1),u>=20&&(u=20),(h[0]<n||h[0]>r)&&(h[0]=n),(h[1]>r||h[1]<n)&&(h[1]=r),x&&h[0]>h[1]&&(h=[h[1],h[0]]);var M={minValue:n,maxValue:r,step:o,runnerSize:p,fieldThickness:u,runnersInstantPosition:h,shouldAddTip:v,shouldAddBar:b,shouldAddScale:g,isRange:x,isTestMode:V,orientation:w};return i.onChange&&(M.onChange=i.onChange),M}},189:(i,e,t)=>{t.d(e,{Z:()=>n});const n=function(i,e){var t=document.querySelector("#"+i);$(document).ready((function(){if(t){t.innerHTML="";var i="vertical"===e?"horizontal":"vertical";t.classList.remove("slider_"+i),t.classList.remove("js_slider_"+i)}}))}}},e={};function t(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return i[n](r,r.exports,t),r.exports}t.d=(i,e)=>{for(var n in e)t.o(e,n)&&!t.o(i,n)&&Object.defineProperty(i,n,{enumerable:!0,get:e[n]})},t.o=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),t.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{default:()=>ai});var i=t(176);const e=function(i){var e=i.runnersPosition,t=i.isVertical,n=i.minMax,s=i.isRange,r=i.fieldSize,a=i.cursorXY,o=i.runners,l=0;s&&(l=function(i,e,t,n){var s=function(i,e,t){var n=e?1:0;return Math.abs(100*n-i[n]/t[n]*100)}(i,e,t);return function(i,e){return Math.abs(i-e[0])-Math.abs(i-e[1])<0?0:1}(s,n)}(a,t,r,e));var u={cursorXY:a,isVertical:t,minMax:n,isRange:s,fieldSize:r,runners:o,activeRunner:o[l]};o[l].updateRunnerValues(u)},s=function(i,e){this.minMax=[i,e]},r=function(i){this.isVertical="vertical"===i},a=function(i,t){this.class=$("#"+i).attr("class"),this.minMax=[0,100],this.isVertical=!1,this.isRange=!1,this.subscriber=t,this.setIsVertical=r.bind(this),this.setMinMax=s.bind(this),this.prepareDataForRunnerUpdating=e.bind(this)};var o=function(i){this.stepSignAfterComma=i};const l=function(i){return o.call(this,function(i,e){var t=[],n=i.step.toString().split("."),s=e[0].toString().split("."),r=e[1].toString().split(".");return n[1]?t.push(n[1].length):t.push(0),s[1]?t.push(s[1].length):t.push(0),r[1]?t.push(r[1].length):t.push(0),Math.max(t[0],t[1],t[2])}(this,i)),this.stepSignAfterComma},u=function(i,e){this.defineSignAfterComma(i),this.stepInPercent=this.step/(i[1]-i[0])*100,this.setValuesFromInputs.call(this,e,i)},c=function(i,e){this.step=i,this.stepInPercent=100/((e[1]-e[0])/i)},h=function(){this.subscriber.recieveModelLogic(this)},d=function(i){this.subscriber.recieveRebuildData(i)};var p=function(i,e,t){var n=i;Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=t)},f=function(i,e){var t,n=i.positionInPercent,s=i.step,r=i.stepInPercent,a=i.value,o=i.stepSignAfterComma;function l(){return Math.floor((e[1]-e[0])/s)*s==e[1]-e[0]}var u=100/(t=l()?(e[1]-e[0])/s:Math.floor((e[1]-e[0])/s)+1),c=Number((Math.round(n/r)*r).toFixed(o)),h=Math.floor(c/u),d=Number((e[0]+s*h).toFixed(o));return l()||a!==e[1]&&h!==t||(c=100,d=e[1]),{stepPosition:c,stepValue:d}};const v=function(i){var e,t,n=i.cursorXY,s=i.isVertical,r=i.minMax,a=i.isRange,o=i.fieldSize,l=i.runners,u=i.activeRunner;e=u,t=function(i,e,t,n){var s=t[0],r=t[1],a=0;return i?(r<0&&(r=0),a=100*(n[1]-r)/n[1]):(s<0&&(s=0),a=100*s/n[0]),a}(s,0,n,o),p(e,"positionInPercent",t),function(i,e){p(i,"value",e)}(u,function(i,e){var t=i[1]-i[0];return e.positionInPercent*(t/100)+ +i[0]}(r,u)),function(i,e){var t=e.stepPosition,n=e.stepValue;p(i,"stepPosition",t),p(i,"stepValue",n)}(u,a?function(i,e,t,n){var s=i.stepPosition,r=i.stepValue;return!n&&0===t.instance&&s-e[1].stepPosition>=0||n&&0===t.instance&&e[1].stepPosition-s<=0?{stepPosition:e[1].stepPosition,stepValue:e[1].stepValue}:!n&&1===t.instance&&s-e[0].stepPosition<=0||n&&1===t.instance&&e[0].stepPosition-s>=0?{stepPosition:e[0].stepPosition,stepValue:e[0].stepValue}:{stepPosition:s,stepValue:r}}(f(u,r),l,u,s):f(u,r)),u.notifyToUpdate()};var m=function(i,e){this.positionInPercent=i,this.value=e},b=function(i,e){this.stepPosition=i,this.stepValue=e};const _=function(i,e){var t=function(i,e){return 100*Math.abs((i-e[0])/(e[1]-e[0]))}(i,e);m.call(this,t,i);var n=f(this,e),s=n.stepValue,r=n.stepPosition;return b.call(this,r,s),{stepValue:s,stepPosition:r}},g=function(i,e,t){this.instance=e,this.positionInPercent=0,this.value=0,this.step=1,this.stepInPercent=1,this.stepSignAfterComma=0,this.stepPosition=0,this.stepValue=0,this.subscriber=t,this.defineSignAfterComma=l.bind(this),this.notifyToUpdate=h.bind(this),this.notifyToRebuild=d.bind(this),this.setStep=c.bind(this),this.updateRunnerValues=v.bind(this),this.initializeDefaultValues=u.bind(this),this.setValuesFromInputs=_.bind(this)},y=function(i,e,t){var n=this;this.runner.size=i,this.orientation=t,this.isVertical="vertical"===t,$(document).ready((function(){var i=n.$field,t=parseInt(i.css("border-left-width"),10),s=parseInt(i.parent().css("width"),10),r=parseInt(i.parent().css("height"),10);n.isVertical?(n.fieldSize=[e,r-t-12],i.css("width",e),i.css("height","100%")):(n.fieldSize=[s-t-12,e],i.css("height",e),i.css("width","100%"))})),this.$field.addClass("slider_"+this.orientation+" js-slider_"+this.orientation)},x=function(i,e){this.minMax=[i,e]},S=function(i){i.preventDefault(),i.stopPropagation();var e=i.data,t=function(i,e){var t=[i.pageX-e.$field.position().left-5,i.pageY-e.$field.position().top-5];return t[0]<0&&(t[0]=0),t[0]>e.fieldSize[0]&&(t[0]=e.fieldSize[0]),t}(i,e);e.notifyFieldClick(t)},V=function(){this.$field.on("click",this,S),$(".js-scale-line").on("click",this,S),$(".js-scale-numbers").on("click",this,S)},P=function(i){this.subscriber.recieveClickData(this,i)},w=function(i,e){this.runner.step=i,this.runner.stepSignAfterComma=e,this.lengthInStep=(this.minMax[1]-this.minMax[0])/i},M=function(i){var e,t=this,n=this.parent;e=n.isVertical?"width":"height",$(document).ready((function(){n.$field.append("<div data-testid='test-slider-bar' class='slider__bar slider__bar_"+n.orientation+" js-slider__bar' style='"+e+": "+i+"'></div>")})),$(document).ready((function(){t.$bar=n.$field.children(".js-slider__bar")})),t.fieldThickness=i};var R;!function(i){i[i.zero=0]="zero",i[i.one=1]="one"}(R||(R={}));var C=function(i){return Math.abs(i[1]-i[0])},z=function(i,e,t){t&&$(document).ready((function(){t.css("height",i[0]+"%").css("top",100-i[0]+"%"),t.css("width",e+"px")}))},j=function(i,e,t){t&&$(document).ready((function(){t.css("width",i[0]+"%"),t.css("height",e+"px")}))},I=function(i,e,t,n,s){e&&$(document).ready((function(){var r=[["left","width"],["top","height"]],a=Math.abs(100*i-t[i]);e.css(""+r[i][0],a+"%"),e.css(""+r[i][1],s+"%");var o=1-i;e.css(""+r[o][1],n+"px")}))};const A=function(){var i=this,e=this.parent,t=e.isRange,n=e.isVertical,s=e.runner;$(document).ready((function(){var e=i,r=e.$bar,a=e.fieldThickness;!function(i){var e=i.isRange,t=i.isVertical,n=i.$bar,s=i.runnersPosition,r=i.fieldThickness,a=i.calcLengthOfRangeBar,o=i.updateSingleVerticalBarPosition,l=i.updateSingleHorizontalBarPosition,u=i.updateRangeBarPosition;e&&t&&u(R.one,n,s,r,a(s)),e&&!t&&u(R.zero,n,s,r,a(s)),!e&&t&&o(s,r,n),e||t||l(s,r,n)}({isRange:t,isVertical:n,$bar:r,runnersPosition:s.positions,fieldThickness:a,calcLengthOfRangeBar:C,updateSingleVerticalBarPosition:z,updateSingleHorizontalBarPosition:j,updateRangeBarPosition:I})}))},T=function(i){this.parent=i,this.fieldThickness=6,this.createBar=M.bind(this),this.updateBarPosition=A.bind(this)};var D=t(290),L=function(i,e){this.$elements[i]=this.parent.$field.children(".js-slider__runner_instance-"+i),this.positions[i]=e};const k=function(i,e,t){var n=this;this.stepSignAfterComma=t,$().ready((function(){var t,s,r,a,o,l,u;t=function(i,e,t,n,s){var r=["left","top"],a=[0,1],o=i,l=5-t[0]/2;e&&(r=["top","left"],a=[1,0]);var u=t[a[1]]/2+1;return{instance:o,positioning:r,position:[Math.abs(n[a[0]]*a[0]-s*(n[a[0]]/100))+l,-u+.5*n[a[1]]]}}(i,n.parent.isVertical,n.size,n.parent.fieldSize,e),s=n.parent.$field,r=n.size,a=n.parent.orientation,o=t.instance,l=t.positioning,u=t.position,s.append('<span data-testid="test-runner-'+o+'" class="slider__runner slider__runner_'+a+" js-slider__runner_instance-"+o+'" style="'+l[0]+":"+u[0]+"px; "+l[1]+":"+u[1]+"px; width:"+r[0]+"px; height:"+r[1]+'px"></span>'),L.call(n,i,e)}))},B=function(i){i.preventDefault(),i.stopPropagation();var e=i.data,t=function(i,e){var t=e.thisRunner.parent,n=t.$field,s=t.fieldSize,r=t.isVertical,a=[0,0];i.pageX&&i.pageY&&(a=[i.pageX-n.position().left-5,i.pageY-n.position().top-5]);var o=0;return r&&(o=1),a[o]<0&&(a[o]=0),a[o]>s[o]&&(a[o]=s[o]),a}(i,e);e.thisRunner.notifySliderMoving(t,e.instance)},F=function(i){var e=this,t=this.parent,n=t.$field,s=t.$body;n.on("mousedown",".js-slider__runner_instance-"+i,(function(t){t.preventDefault(),t.stopPropagation(),n.addClass("tap"),s.on("mousemove",{thisRunner:e,instance:i},B)})),n.on("touchstart",".js-slider__runner_instance-"+i,(function(t){t.preventDefault(),t.stopPropagation(),n.addClass("tap"),s.on("touchmove",{thisRunner:e,instance:i},B)}))},N=function(i){if("INPUT"!==i.target.tagName){i.preventDefault(),i.stopPropagation();var e=i.data,t=e.thisView,n=t.$field,s=t.isRange,r=t.$body,a=e.thisView.runner;n.removeClass("tap"),a.$elements[0].removeClass("slider__runner_current"),s&&e.thisView.runner.$elements[1].removeClass("slider__runner_current"),r.off("mousemove touchmove"),e.thisView.runner.updateZIndex(a.activeInstance)}},O=function(){var i=this.parent,e=i.$field,t=i.$body;e.on("mouseup",{thisView:this.parent},N),t.on("mouseup",{thisView:this.parent},N),e.on("touchend",{thisView:this.parent},N),t.on("touchend",{thisView:this.parent},N)},Z=function(i,e){this.parent.subscriber.recieveDragData(this.parent,i,e)};var E=function(i,e){this.positions[e]=i,this.activeInstance=e},X=function(i){var e=i.stepPosition,t=i.instance,n=i.positioning,s=this.parent,r=s.isVertical,a=s.fieldSize,o=this.size,l=this.$elements,u=e*(a[r?1:0]/100),c=r?a[1]-u+5-o[0]/2+"px":u+5-o[0]/2+"px";l[t].css(n[0],c)};const Y=function(i,e){E.call(this,i,e),X.call(this,function(i,e,t){var n=[["left","width"],["top","height"]],s={stepPosition:e,instance:t,positioning:n[0]};return i&&(s.positioning=n[1]),s}(this.parent.isVertical,i,e))},Q=function(i){var e=this;$(document).ready((function(){e.$elements[i].addClass("slider__runner_current")}))},U=function(i){this.parent=i,this.$elements=[],this.activeInstance=0,this.positions=[0,100],this.isZIndexUpdated=!1,this.size=[],this.step=1,this.stepSignAfterComma=0,this.cursorXY=[0,0],this.createRunner=k.bind(this),this.handleDrag=F.bind(this),this.handleDrop=O.bind(this),this.notifySliderMoving=Z.bind(this),this.removeDrag=D.Z.bind(this),this.updatePosition=Y.bind(this),this.updateZIndex=Q.bind(this)},H=function(i){for(var e=i.$scaleLines,t=i.lineQuantity,n=i.orientation,s=i.minMax,r=i.smallLine,a=i.bigLine,o=i.step,l=i.stepMultiplier,u=i.shouldAddExtraLine,c="vertical"===n?"top":"left",h="vertical"===n?1:0,d=0;d<2*t+1;d+=1){var p=Math.abs(100*h-o/(s[1]-s[0])*l*100*(d/2));p<98&&(d%2&&d!==2*Math.floor(t)+1?e.append('<div \n              class="\n                slider__scale-line\n                slider__scale-line_'+n+'\n                js-slider__scale-line\n                " \n              style="\n              position: absolute;\n              '+r+";\n              "+c+": "+p+'%;"\n            >\n            </div>'):d%2||e.append('<div\n              class="\n                slider__scale-line\n                slider__scale-line_'+n+'\n                js-slider__scale-line\n              "\n              style="'+a+";\n              position: absolute;\n              "+c+": "+p+'%;"\n            ></div>'))}u&&(e.append('<div\n            class="\n              slider__scale-line\n              slider__scale-line_'+n+'\n              js-slider__scale-line\n            "\n            style="'+a+";\n            position: absolute;\n            "+c+': 100%;"\n          ></div>'),e.append('<div\n            class="\n              slider__scale-line\n              slider__scale-line_'+n+'\n              js-slider__scale-line\n            "\n            style="'+a+";\n            position: absolute;\n            "+c+': 0%;"\n          ></div>'))},q=function(i){var e=i.$id,t=i.orientation,n=i.fieldSize,s=i.top,r=i.left;e.append('<div \n          data-testid="test-slider__scale-lines"\n          class="slider__scale-lines slider__scale-lines_'+t+'\n            js-slider__scale-lines"\n          style="height:'+n[1]+"px;\n            width:"+n[0]+"px;\n            left:"+r+"px; top:"+s+'px;\n          "\n        >\n        </div>')},W=function(i){for(var e=i.$scaleNumbers,t=i.minMax,n=i.lineQuantity,s=i.stepSignAfterComma,r=i.isVertical,a=i.stepMultiplier,o=i.step,l=i.onePxInPercent,u="vertical"===i.orientation?"top":"left",c=1;c<n+1;c+=1){var h=o/(t[1]-t[0])*a*100*c,d=2*(t[0]+c*o*a).toFixed(Math.min(2,s)).length*l;(100-h)/l>30&&(r?e.append('<div\n            class="\n              slider__scale-number\n              js-slider__scale-number\n            "\n            style="\n            left: 5px;\n            top: '+(100-(h+.5))+'%;\n            position: absolute;\n  \n            "\n\n          >'+(t[0]+c*o*a).toFixed(Math.min(2,s))+"\n          </div>"):e.append('<div\n            class="\n              slider__scale-number\n              js-slider__scale-number\n            "\n            style="\n            left: '+(h-d)+'%;\n            position: absolute;\n  \n            "\n            \n          >'+(t[0]+c*o*a).toFixed(Math.min(2,s))+"\n          </div>"))}r?(e.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          left: 5px;\n          '+u+': 99.5%;\n          position: absolute;\n\n          "\n          \n        >'+t[0]+"\n        </div>"),e.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          left: 5px;\n          '+u+': -0.5%;\n          position: absolute;\n\n          "\n          \n        >'+t[1]+"\n        </div>")):(e.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          '+u+': 100%;\n          position: absolute;\n\n          "\n          \n        >'+t[1]+"\n        </div>"),e.append('<div\n          class="\n            slider__scale-number\n            js-slider__scale-number\n          "\n          style="\n          '+u+': 0%;\n          position: absolute;\n\n          "\n          \n        >'+t[0]+"\n        </div>"))},G=function(i){var e=i.$id,t=i.top,n=i.left,s=i.fieldSize;e.append('<div \n          data-testid="test-slider__scale-numbers"\n          class="slider__scale-lines slider__scale-numbers\n            js-slider__scale-numbers"\n          style="height:'+s[1]+"px;\n            width:"+s[0]+"px;\n            top:"+t+"px;\n            left:"+n+'px;\n          "\n        >\n        </div>')},J=function(){var i=this;$(document).ready((function(){var e=i.parent,t=e.isVertical,n=e.$field,s=e.fieldSize,r=e.runner,a=e.minMax,o=e.orientation;!function(i,e,t,n,s,r,a,o){var l=o.lineQuantity,u=o.segmentInPercent,c=o.stepMultiplier,h=o.scaleSignAfterComma,d=o.shouldAddExtraLine,p=o.onePxInPercent,f={$id:e,orientation:a,fieldSize:t,lineQuantity:l,top:5,left:t[0]+2,columnOrRow:"row"},v={$id:e,lineQuantity:l,width:t[0],height:t[1]+t[1]/(l-1),top:0,left:t[0]+20,columnOrRow:"row",fieldSize:t},m={$scaleLines:e.find(".js-slider__scale-lines"),lineQuantity:l,segmentInPercent:u,orientation:a,minMax:r,smallLine:"width: 5px",bigLine:"width: 10px",step:n,stepMultiplier:c,shouldAddExtraLine:d},b={$scaleNumbers:e.find(".js-slider__scale-numbers"),switcher:1,lastOrFirstIterration:0,minMax:r,segmentInPercent:u,lineQuantity:l,stepSignAfterComma:s,isVertical:i,stepMultiplier:c,step:n,scaleSignAfterComma:h,shouldAddExtraLine:d,onePxInPercent:p,orientation:a};i?(q(f),G(v),b.$scaleNumbers=e.find(".js-slider__scale-numbers"),m.$scaleLines=e.find(".js-slider__scale-lines"),W(b),H(m)):(f.top=t[1]+2,f.left=4,f.columnOrRow="columns",q(f),v.width=t[0]+t[0]/(l-1),v.height=t[1],v.top=t[1]+20,v.left=0,v.columnOrRow="columns",G(v),b.$scaleNumbers=e.find(".js-slider__scale-numbers"),b.switcher=0,b.lastOrFirstIterration=l-1,W(b),m.$scaleLines=e.find(".js-slider__scale-lines"),m.smallLine="height: 5px",m.bigLine="height: 10px",H(m))}(t,n,s,r.step,r.stepSignAfterComma,a,o,function(i,e,t,n,s){var r=0;e&&(r+=1);for(var a=100/i[r],o=s,l=!1,u=(t[1]-t[0])/n,c=Math.floor(u),h=Math.floor(i[r]/40),d=0;c>h;d+=1)c/=2;var p=Math.floor(c),f=Number(((t[1]-t[0])/p).toFixed(3)),v=Math.floor(f/n);return n*(p-1)*v!=t[1]-t[0]&&(o+=1,l=!0,i[r]-n*v*(p-1)/(t[1]-t[0])*i[r]<50&&(p-=1)),t[0]>0&&(f=Number(((t[1]-t[0])/(p-1)).toFixed(3))),{lineQuantity:p,segmentInPercent:f,stepMultiplier:v,scaleSignAfterComma:o,shouldAddExtraLine:l,onePxInPercent:a}}(s,t,a,r.step,r.stepSignAfterComma))}))},K=function(i){this.parent=i,this.create=J.bind(this)},ii=function(i,e,t,n){var s=this;$(document).ready((function(){var r=s.parent,a=r.fieldSize,o=r.$field,l=r.orientation;r.minMax,function(i,e,t,n,s){var r=i.instance,a=i.positioning,o=i.position;e.append('<span data-testid="test-tip-number-'+r+"\" class='slider__tip slider__tip_"+t+" js-slider__tip_instance-"+r+"' style=\""+a[0]+":"+o[0]+'px"><span>0</span></span>'),e.find(".js-slider__tip_instance-"+r+" span").text(""+s),o[0]}(function(i,e,t,n){var s=["left"],r=i;return e&&(r=i,s=["top"]),{instance:r,positioning:s,position:e?[t[1]-n*(t[1]/100)-10]:[n*(t[0]/100)-20]}}(i,e,a,t),o,l,0,n)})),this.parent.hasTip=!0},ei=function(i){var e=i.stepValue,t=i.instance,n=this.parent,s=n.$field,r=n.fieldSize,a=n.isVertical,o=n.runner,l=a?"top":"left",u=a?r[1]-o.positions[t]*(r[1]/100)-10:o.positions[t]*(r[0]/100)-20;s.find(".js-slider__tip_instance-"+t+" span").text(""+e),s.find(".js-slider__tip_instance-"+t).css(l,u+"px")},ti=function(i){this.parent=i,this.create=ii.bind(this),this.update=ei.bind(this)};var ni=t(189);const si=function(i,e){this.id=i,this.$body=$("body"),this.$field=$("#"+i),this.class=$("#"+i).attr("class"),this.isVertical=!1,this.isRange=!1,this.hasBar=!1,this.hasScale=!1,this.hasTip=!1,this.orientation="horizontal",this.fieldSize=[],this.fieldThickness=6,this.borderWidth=1,this.minMax=[],this.lengthInStep=1,this.corrector=0,this.subscriber=e,this.bar=new T(this),this.runner=new U(this),this.scale=new K(this),this.tip=new ti(this),this.clearHTMLElement=ni.Z,this.initializeValues=y.bind(this),this.handleClick=V.bind(this),this.notifyFieldClick=P.bind(this),this.initStartEnd=x,this.setStep=w};const ri=function(){function i(i,e,t){this.parent=i,this.id=e,this.runnerCounter=0,this.runners=[],this.field=new a(e,this),this.view=new si(e,this),this.params=t,this.build(t),this.addListeners(t,"build")}return i.prototype.rebuild=function(i){this.params=i,this.field.isRange=!1,this.view.isRange=!1,this.removeListeners(i),this.runners=[],this.view.clearHTMLElement(this.view.id,i.orientation),this.runnerCounter=0,this.build(i),this.addListeners(i,"rebuild")},i.prototype.build=function(i){i.isTestMode||this.setMinMax(i).initLayers(i).createRangeSlider(i).setStep(i).createBar(i).createScale(i)},i.prototype.addListeners=function(i,e){var t=i.isRange;switch(e){case"build":this.onClick().onDrag(0).onDrop(),t&&this.onDrag(1);break;case"rebuild":this.onDrag(0),t&&this.onDrag(1)}return this},i.prototype.createRangeSlider=function(i){var e,t=i.isRange,n=i.shouldAddTip,s=i.runnerSize,r=i.minValue,a=i.maxValue,o=i.runnersInstantPosition,l=i.step;this.createRunner(s,r,a,o[this.runnerCounter],l);var u=this.runners[this.runnerCounter],c=u.stepPosition,h=u.stepValue;return this.createRunnerView(this.runnerCounter,c,this.runners[this.runnerCounter].stepSignAfterComma),this.createTipNumber(n,c,h),t?(this.runnerCounter+=1,this.view.isRange=!0,this.field.isRange=!0,this.createRunner(s,r,a,o[this.runnerCounter],l),c=(e=this.runners[this.runnerCounter]).stepPosition,h=e.stepValue,this.createRunnerView(this.runnerCounter,c,this.runners[this.runnerCounter].stepSignAfterComma),this.createTipNumber(n,c,h)):this.view.isRange=!1,this},i.prototype.createRunner=function(i,e,t,n,s){return this.runners.push(new g(this.id,this.runnerCounter,this)),this.runners[this.runnerCounter].setStep(s,[e,t]),this.runners[this.runnerCounter].initializeDefaultValues([e,t],n),this},i.prototype.createRunnerView=function(i,e,t){return this.view.runner.createRunner(i,e,t),this},i.prototype.createTipNumber=function(i,e,t){return i&&this.view.tip.create(this.runnerCounter,this.field.isVertical,e,t),this},i.prototype.createBar=function(i){var e=i.shouldAddBar,t=i.fieldThickness;return e&&(this.view.hasBar=!0,this.view.bar.createBar(t),this.view.bar.updateBarPosition()),this},i.prototype.createScale=function(i){return i.shouldAddScale&&(this.view.hasScale=!0,this.view.scale.create()),this},i.prototype.onDrag=function(i){var e=this;return $(document).ready((function(){e.view.runner.handleDrag(i)})),this},i.prototype.onDrop=function(){return this.view.runner.handleDrop(),this},i.prototype.removeListeners=function(i){var e=i.isRange;return this.view.runner.removeDrag(0),e&&this.view.runner.removeDrag(1),this},i.prototype.recieveModelLogic=function(i){i&&(this.updateRunnerPosition(i),this.view.hasTip&&this.updateTipNumber(i.stepValue,i.instance),this.view.hasBar&&this.updateBarPosition(),this.params.onChange&&(this.params.runnersInstantPosition[i.instance]=i.stepValue,this.params.onChange(this.params)))},i.prototype.recieveRebuildData=function(i){this.rebuild(i)},i.prototype.recieveDragData=function(i,e,t){var n=i.fieldSize,s={cursorXY:e,isVertical:this.field.isVertical,minMax:this.field.minMax,isRange:this.field.isRange,fieldSize:n,runners:this.runners,activeRunner:this.runners[t]};this.runners[t].updateRunnerValues(s)},i.prototype.recieveClickData=function(i,e){var t=i.runner.positions,n=i.fieldSize,s={runnersPosition:t,isVertical:this.field.isVertical,minMax:this.field.minMax,isRange:this.field.isRange,fieldSize:n,cursorXY:e,runners:this.runners};this.field.prepareDataForRunnerUpdating(s)},i.prototype.setMinMax=function(i){var e=i.minValue,t=i.maxValue;return this.field.setMinMax(e,t),this.view.initStartEnd(e,t),this},i.prototype.setStep=function(i){var e=this,t=i.step;return this.runners.forEach((function(i){return i.setStep(t,e.field.minMax)})),this.view.setStep(t,this.runners[0].stepSignAfterComma),this},i.prototype.updateRunnerPosition=function(i){var e=i.stepPosition,t=i.instance;this.view.runner.updatePosition(e,t)},i.prototype.updateTipNumber=function(i,e){return this.view.tip.update({stepValue:i,instance:e}),this},i.prototype.updateBarPosition=function(){return this.view.bar.updateBarPosition(),this},i.prototype.initLayers=function(i){var e=i.runnerSize,t=i.fieldThickness,n=i.orientation;return this.field.setIsVertical(n),this.view.initializeValues(e,t,n),this},i.prototype.onClick=function(){return this.view.handleClick(this.runners,this.field),this},i}(),ai=function(){function e(e,t){this.checkValues=i.Z,this.presenter=new ri(this,e,(0,i.Z)(t))}return e.prototype.getValues=function(){return this.presenter.params},e.prototype.rebuild=function(e){this.presenter.rebuild((0,i.Z)(e))},e}()})(),n})()}));