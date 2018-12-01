!function(){"use strict";!function(){try{if(SVGElement.prototype.innerHTML)return}catch(e){return}var e=function(t,n){var o=t.nodeType;3===o?n.push(t.textContent.replace(/&/,"&amp;").replace(/</,"&lt;").replace(">","&gt;")):1===o?(n.push("<",t.tagName),t.hasAttributes()&&[].forEach.call(t.attributes,function(e){n.push(" ",e.name,"='",e.value,"'")}),t.hasChildNodes()?(n.push(">"),[].forEach.call(t.childNodes,function(t){e(t,n)}),n.push("</",t.tagName,">")):n.push("/>")):8===o&&n.push("\x3c!--",t.nodeValue,"--\x3e")};Object.defineProperty(SVGElement.prototype,"innerHTML",{get:function(){for(var t=[],n=this.firstChild;n;)e(n,t),n=n.nextSibling;return t.join("")},set:function(e){for(;this.firstChild;)this.removeChild(this.firstChild);try{var t=new DOMParser;t.async=!1;for(var n="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>"+e+"</svg>",o=t.parseFromString(n,"text/xml").documentElement.firstChild;o;)this.appendChild(this.ownerDocument.importNode(o,!0)),o=o.nextSibling}catch(e){throw new Error("Can not set innerHTML on node")}}}),Object.defineProperty(SVGElement.prototype,"outerHTML",{get:function(){var t=[];return e(this,t),t.join("")},set:function(e){for(;this.firstChild;)this.removeChild(this.firstChild);try{var t=new DOMParser;t.async=!1;for(var n="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>"+e+"</svg>",o=t.parseFromString(n,"text/xml").documentElement.firstChild;o;)this.parentNode.insertBefore(this.ownerDocument.importNode(o,!0),this),o=o.nextSibling}catch(e){throw new Error("Can not set outerHTML on node")}}})}(),function(e){(function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}})(this)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};function n(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1}var o=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(t,n){if(!t)throw new Error("Not enough arguments");if("createEvent"in document){var o=document.createEvent("Event"),r=!(!n||n.bubbles===e)&&n.bubbles,i=!(!n||n.cancelable===e)&&n.cancelable;return o.initEvent(t,r,i),o}return(o=document.createEventObject()).type=t,o.bubbles=!(!n||n.bubbles===e)&&n.bubbles,o.cancelable=!(!n||n.cancelable===e)&&n.cancelable,o},o&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:o}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,o=arguments[0],r=arguments[1];if(e===window&&o in t)throw new Error("In IE8 the event: "+o+" is not available on the window object.");e._events||(e._events={}),e._events[o]||(e._events[o]=function(t){var o,r=e._events[t.type].list,i=r.slice(),c=-1,s=i.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++c<s&&!t.cancelImmediate;)c in i&&-1!==n(r,o=i[c])&&"function"==typeof o&&o.call(e,t)},e._events[o].list=[],e.attachEvent&&e.attachEvent("on"+o,e._events[o])),e._events[o].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,t=arguments[0],o=arguments[1];this._events&&this._events[t]&&this._events[t].list&&-1!==(e=n(this._events[t].list,o))&&(this._events[t].list.splice(e,1),this._events[t].list.length||(this.detachEvent&&this.detachEvent("on"+t,this._events[t]),delete this._events[t]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(o){e.target=t;do{e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode}while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))}(),"CustomEvent"in this&&("function"==typeof this.CustomEvent||this.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)||(this.CustomEvent=function(e,t){if(!e)throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');var n;if(t=t||{bubbles:!1,cancelable:!1,detail:null},"createEvent"in document)try{(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail)}catch(o){(n=document.createEvent("Event")).initEvent(e,t.bubbles,t.cancelable),n.detail=t.detail}else(n=new Event(e,t)).detail=t&&t.detail||null;return n},CustomEvent.prototype=Event.prototype)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});try{SVGElement.prototype.children||Object.defineProperty(SVGElement.prototype,"children",{get:function(){return function(e,t){var n,o=e.length,r=[];for(n=0;n<o;n++)t(e[n])&&r.push(e[n]);return r}(this.childNodes,function(e){return 1===e.nodeType})}})}catch(e){}try{Object.getPrototypeOf("test")}catch(t){var e=Object.getPrototypeOf;Object.getPrototypeOf=function(t){return"object"!=typeof t&&(t=new Object(t)),e.call(this,t)}}}();
