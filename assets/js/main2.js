/*scroll nav color*/
let scrollpos=window.scrollY;const header=document.querySelector(".nav-div"),header_height=header.offsetHeight,add_class_on_scroll=()=>header.classList.add("sticky"),remove_class_on_scroll=()=>header.classList.remove("sticky");window.addEventListener("scroll",function(){scrollpos=window.scrollY,scrollpos>=header_height?(add_class_on_scroll(),logo.src="assets/logo/logo-b.png"):(remove_class_on_scroll(),logo.src="assets/logo/logo-w.png")});
/* loader */
let progressBar=document.querySelector(".green");window.onload=function(){progressBar.style.background='#29E181'};
/*! responsive-nav */
!function(m,g,y){"use strict";g.responsiveNav=function(e,t){g.getComputedStyle||(g.getComputedStyle=function(n){return this.el=n,this.getPropertyValue=function(e){var t=/(\-([a-z]){1})/g;return"float"===e&&(e="styleFloat"),t.test(e)&&(e=e.replace(t,function(){return arguments[2].toUpperCase()})),n.currentStyle[e]?n.currentStyle[e]:null},this});var s,o,n,i,a,r,c=function(t,n,i,s){if("addEventListener"in t)try{t.addEventListener(n,i,s)}catch(e){if("object"!=typeof i||!i.handleEvent)throw e;t.addEventListener(n,function(e){i.handleEvent.call(i,e)},s)}else"attachEvent"in t&&("object"==typeof i&&i.handleEvent?t.attachEvent("on"+n,function(){i.handleEvent.call(i)}):t.attachEvent("on"+n,i))},l=function(t,n,i,s){if("removeEventListener"in t)try{t.removeEventListener(n,i,s)}catch(e){if("object"!=typeof i||!i.handleEvent)throw e;t.removeEventListener(n,function(e){i.handleEvent.call(i,e)},s)}else"detachEvent"in t&&("object"==typeof i&&i.handleEvent?t.detachEvent("on"+n,function(){i.handleEvent.call(i)}):t.detachEvent("on"+n,i))},h=function(e,t){for(var n in t)e.setAttribute(n,t[n])},u=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},p=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},v=m.createElement("style"),d=m.documentElement,f=function(e,t){var n;for(n in this.options={animate:!0,transition:284,label:"",insert:"before",customToggle:"toggle",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}},t)this.options[n]=t[n];if(u(d,this.options.jsClass),this.wrapperEl=e.replace("#",""),m.getElementById(this.wrapperEl))this.wrapper=m.getElementById(this.wrapperEl);else{if(!m.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=m.querySelector(this.wrapperEl)}this.wrapper.inner=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t}(this.wrapper),o=this.options,s=this.wrapper,this._init(this)};return f.prototype={destroy:function(){this._removeStyles(),p(s,"closed"),p(s,"opened"),p(s,o.navClass),p(s,o.navClass+"-"+this.index),p(d,o.navActiveClass),s.removeAttribute("style"),s.removeAttribute("aria-hidden"),l(g,"resize",this,!1),l(g,"focus",this,!1),l(m.body,"touchmove",this,!1),l(n,"touchstart",this,!1),l(n,"touchend",this,!1),l(n,"mouseup",this,!1),l(n,"keyup",this,!1),l(n,"click",this,!1),o.customToggle?n.removeAttribute("aria-hidden"):n.parentNode.removeChild(n)},toggle:function(){!0===i&&(r?this.close():this.open())},open:function(){r||(p(s,"closed"),u(s,"opened"),u(d,o.navActiveClass),u(n,"active"),s.style.position=o.openPos,h(s,{"aria-hidden":"false"}),r=!0,o.open())},close:function(){r&&(u(s,"closed"),p(s,"opened"),p(d,o.navActiveClass),p(n,"active"),h(s,{"aria-hidden":"true"}),o.animate?(i=!1,setTimeout(function(){s.style.position="absolute",i=!0},o.transition+10)):s.style.position="absolute",r=!1,o.close())},resize:function(){"none"!==g.getComputedStyle(n,null).getPropertyValue("display")?(a=!0,h(n,{"aria-hidden":"false"}),s.className.match(/(^|\s)closed(\s|$)/)&&(h(s,{"aria-hidden":"true"}),s.style.position=""),this._createStyles(),this._calcHeight()):(a=!1,h(n,{"aria-hidden":"true"}),h(s,{"aria-hidden":"false"}),s.style.position=o.openPos,this._removeStyles())},handleEvent:function(e){var t=e||g.event;switch(t.type){case"touchstart":this._onTouchStart(t);break;case"touchmove":this._onTouchMove(t);break;case"touchend":case"mouseup":this._onTouchEnd(t);break;case"click":this._preventDefault(t);break;case"keyup":this._onKeyUp(t);break;case"focus":case"resize":this.resize(t)}},_init:function(){this.index=y++,u(s,o.navClass),u(s,o.navClass+"-"+this.index),u(s,"closed"),r=!(i=!0),this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var e=this;setTimeout(function(){e.resize()},20),c(g,"resize",this,!1),c(g,"focus",this,!1),c(m.body,"touchmove",this,!1),c(n,"touchstart",this,!1),c(n,"touchend",this,!1),c(n,"mouseup",this,!1),c(n,"keyup",this,!1),c(n,"click",this,!1),o.init()},_createStyles:function(){v.parentNode||(v.type="text/css",m.getElementsByTagName("head")[0].appendChild(v))},_removeStyles:function(){v.parentNode&&v.parentNode.removeChild(v)},_createToggle:function(){if(o.customToggle){var e=o.customToggle.replace("#","");if(m.getElementById(e))n=m.getElementById(e);else{if(!m.querySelector(e))throw new Error("The custom nav toggle you are trying to select doesn't exist");n=m.querySelector(e)}}else{var t=m.createElement("a");t.innerHTML=o.label,h(t,{href:"#",class:"nav-toggle"}),"after"===o.insert?s.parentNode.insertBefore(t,s.nextSibling):s.parentNode.insertBefore(t,s),n=t}},_closeOnNavClick:function(){if(o.closeOnNavClick){var n=s.getElementsByTagName("a"),i=this;!function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,i,e[i])}(n,function(e,t){c(n[e],"click",function(){a&&i.toggle()},!1)})}},_preventDefault:function(e){if(e.preventDefault)return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1;e.returnValue=!1},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,l(n,"mouseup",this,!1)},_onTouchMove:function(e){(10<Math.abs(e.touches[0].clientX-this.startX)||10<Math.abs(e.touches[0].clientY-this.startY))&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),a&&!this.touchHasMoved){if("touchend"===e.type)return void this.toggle();var t=e||g.event;3!==t.which&&2!==t.button&&this.toggle()}},_onKeyUp:function(e){13===(e||g.event).keyCode&&this.toggle()},_transitions:function(){if(o.animate){var e=s.style,t="max-height "+o.transition+"ms";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<s.inner.length;t++)e+=s.inner[t].offsetHeight;var n="."+o.jsClass+" ."+o.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+o.jsClass+" ."+o.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";v.styleSheet?v.styleSheet.cssText=n:v.innerHTML=n,n=""}},new f(e,t)}}(document,window,0);
/*FastClick */
function FastClick(s){"use strict";var e;function t(t,e){return function(){return t.apply(e,arguments)}}this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=s,FastClick.notNeeded(s)||(deviceIsAndroid&&(s.addEventListener("mouseover",t(this.onMouse,this),!0),s.addEventListener("mousedown",t(this.onMouse,this),!0),s.addEventListener("mouseup",t(this.onMouse,this),!0)),s.addEventListener("click",t(this.onClick,this),!0),s.addEventListener("touchstart",t(this.onTouchStart,this),!1),s.addEventListener("touchmove",t(this.onTouchMove,this),!1),s.addEventListener("touchend",t(this.onTouchEnd,this),!1),s.addEventListener("touchcancel",t(this.onTouchCancel,this),!1),Event.prototype.stopImmediatePropagation||(s.removeEventListener=function(t,e,i){var n=Node.prototype.removeEventListener;"click"===t?n.call(s,t,e.hijacked||e,i):n.call(s,t,e,i)},s.addEventListener=function(t,e,i){var n=Node.prototype.addEventListener;"click"===t?n.call(s,t,e.hijacked||(e.hijacked=function(t){t.propagationStopped||e(t)}),i):n.call(s,t,e,i)}),"function"==typeof s.onclick&&(e=s.onclick,s.addEventListener("click",function(t){e(t)},!1),s.onclick=null))}var deviceIsAndroid=0<navigator.userAgent.indexOf("Android"),deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var i,n;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),n=e.changedTouches[0],(i=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,t.dispatchEvent(i)},FastClick.prototype.determineEventType=function(t){"use strict";return deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(t){"use strict";var e;deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,i;if(!(e=t.fastClickScrollParent)||!e.contains(t)){i=t;do{if(i.scrollHeight>i.offsetHeight){e=i,t.fastClickScrollParent=i;break}i=i.parentElement}while(i)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,i,n;if(1<t.targetTouches.length)return!0;if(e=this.getTargetElementFromEventTarget(t.target),i=t.targetTouches[0],deviceIsIOS){if((n=window.getSelection()).rangeCount&&!n.isCollapsed)return!0;if(!deviceIsIOS4){if(i.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=i.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=i.pageX,this.touchStartY=i.pageY,t.timeStamp-this.lastClickTime<200&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],i=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>i||Math.abs(e.pageY-this.touchStartY)>i},FastClick.prototype.onTouchMove=function(t){"use strict";return this.trackingClick&&(this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,i,n,s,o,r=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(o=t.changedTouches[0],(r=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||r).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(n=r.tagName.toLowerCase())){if(e=this.findControl(r)){if(this.focus(r),deviceIsAndroid)return!1;r=e}}else if(this.needsFocus(r))return 100<t.timeStamp-i||deviceIsIOS&&window.top!==window&&"input"===n?this.targetElement=null:(this.focus(r),this.sendClick(r,t),deviceIsIOS4&&"select"===n||(this.targetElement=null,t.preventDefault())),!1;return!(!deviceIsIOS||deviceIsIOS4||!(s=r.fastClickScrollParent)||s.fastClickLastScrollTop===s.scrollTop)||(this.needsClick(r)||(t.preventDefault(),this.sendClick(r,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,!(this.trackingClick=!1)):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(t){"use strict";var e,i;if(void 0===window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(31<i&&window.innerWidth<=window.screen.width)return!0}}return"none"===t.style.msTouchAction},FastClick.attach=function(t){"use strict";return new FastClick(t)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
/*  Smooth Scroll */
/* FIXED RESPONSIVE NAV */
!function(){"use strict";if("querySelector" in document&&"addEventListener" in window){var a=function(e,t,n){for(var o=0;o<e.length;o++)t.call(n,o,e[o])};var t=responsiveNav(".nav-collapse",{closeOnNavClick:!0}),e=document.createElement("div");e.className="mask",document.body.appendChild(e),null!==navigator.userAgent.match(/Android/i)&&(document.documentElement.className+=" android");window.addEventListener("resize",function(){n()},!1);e.addEventListener("click",function(e){e.preventDefault(),t.close()},!1);var d=function(){setTimeout(function(){r=!1},500)}}}()