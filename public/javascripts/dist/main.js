!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.src.length;var t,a,n=e.width,o=e.height;(t=n*o/4e6)>1?(t=Math.sqrt(t),n/=t,o/=t):t=1;if(canvas.width=n,canvas.height=o,ctx.fillStyle="#fff",ctx.fillRect(0,0,canvas.width,canvas.height),(a=n*o/1e6)>1){a=~~(Math.sqrt(a)+1);var r=~~(n/a),l=~~(o/a);tCanvas.width=r,tCanvas.height=l;for(var i=0;i<a;i++)for(var c=0;c<a;c++)tctx.drawImage(e,i*r*t,c*l*t,r*t,l*t,0,0,r,l),ctx.drawImage(tCanvas,i*r,c*l,r,l)}else ctx.drawImage(e,0,0,n,o);var u=canvas.toDataURL("image/jpeg",.1);return tCanvas.width=tCanvas.height=canvas.width=canvas.height=0,u}},,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=$("#username")[0].value;localStorage.setItem("username",e),console.log(localStorage)}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(void 0==localStorage.getItem("username"))return void alert("请先输入名字");var t=e.target.files[0];if(["jpeg","png","gif","jpg"].indexOf(t.type.split("/")[1])<0)return void alert("文件格式不对");if(t.size>1024e4)return void alert("文件过大");if(!this.files.length)return;var a=new FileReader;t.size,t.size;a.onload=function(){var e=this.result,t=new Image;if(t.src=e,$(".photoinput").css("background-image","url("+e+")"),$(".cameraContainer").hide(),$(".add").hide(),e.length<=102400)return t=null,void localStorage.setItem("img",e);function a(){var e=(0,r.default)(t);localStorage.setItem("img",e);var a=localStorage.getItem("username");$.ajax({url:"http://n5vssq.natappfree.cc/u/upload",type:"POST",data:{b64f:e,name:a}}).done(function(){console.log("success")}).fail(function(){console.log("error")}).always(function(){console.log("complete")}),t=null}t.complete?a():t.onload=a},a.readAsDataURL(t)};var n,o=a(0),r=(n=o)&&n.__esModule?n:{default:n}},function(e,t,a){"use strict";r(a(0));var n=r(a(4)),o=r(a(3));function r(e){return e&&e.__esModule?e:{default:e}}var l,i,c;document.createElement("canvas").getContext("2d"),document.createElement("canvas").getContext("2d");function u(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):null}document.getElementById("username").scrollIntoViewIfNeeded(),window.onload=(c=encodeURI("https://wx.idsbllp.cn/nodejs/graduationSeason/"),void(void 0==localStorage.getItem("nickname")&&void 0==localStorage.getItem("headimgurl")?(window.location="https://wx.idsbllp.cn/MagicLoop/index.php?s=/addon/Api/Api/oauth&redirect="+c,l=u(l),i=u(i),localStorage.setItem("nickname",l),localStorage.setItem("headimgurl",i)):(l=localStorage.getItem("nickname"),i=localStorage.getItem("headimgurl")))),document.getElementById("username").addEventListener("change",o.default),document.getElementById("camera_image").addEventListener("change",n.default)}]);
//# sourceMappingURL=main.js.map