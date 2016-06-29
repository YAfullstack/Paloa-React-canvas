!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={},i={}.hasOwnProperty,a=/^\.\.?(\/|$)/,s=function(e,t){for(var n,r=[],i=(a.test(t)?e+"/"+t:t).split("/"),s=0,o=i.length;o>s;s++)n=i[s],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},u=function(t){return function(n){var r=s(o(t),n);return e.require(r,t)}},c=function(e,t){var r={id:e,exports:{}};return n[e]=r,t(r.exports,u(e),r),r.exports},l=function(e){return r[e]?l(r[e]):e},d=function(e,r){null==r&&(r="/");var a=l(e);if(i.call(n,a))return n[a].exports;if(i.call(t,a))return c(a,t[a]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};d.alias=function(e,t){r[t]=e},d.reset=function(){t={},n={},r={}};var f=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,p=function(e){if(f.test(e)){var t=e.replace(f,"");i.call(r,t)&&r[t].replace(f,"")!==t+"/index"||(r[t]=e)}if(h.test(e)){var n=e.replace(h,"");i.call(r,n)||(r[n]=e)}};d.register=d.define=function(e,r){if("object"==typeof e)for(var a in e)i.call(e,a)&&d.register(a,e[a]);else t[e]=r,delete n[e],p(e)},d.list=function(){var e=[];for(var n in t)i.call(t,n)&&e.push(n);return e},d.brunch=!0,d._cache=n,e.require=d}}(),require.register("actions.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resetSearch=e.searchImages=e.initialFetchImages=e.cacheDrawing=e.setText=e.setSize=e.selectImage=e.setContrast=e.setFontSize=void 0;var r=t("util/unsplash"),i=(e.setFontSize=function(e){return{type:"SET_FONT_SIZE",size:e}},e.setContrast=function(e){return{type:"SET_CONTRAST",contrast:e}},e.selectImage=function(e){return{type:"SELECT_IMAGE",image:e}});e.setSize=function(e){return{type:"SET_SIZE",size:e}},e.setText=function(e){return{type:"SET_TEXT",text:e}},e.cacheDrawing=function(e){return{type:"CACHE_DRAWING",drawing:e}},e.initialFetchImages=function(){return function(e){(0,r.getPopularImages)().then(function(t){e({type:"RECEIVE_IMAGES",images:t}),e(i(t[0]))})}},e.searchImages=function(e){return function(t){(0,r.searchImages)(e).then(function(e){t({type:"RECEIVE_IMAGES",images:e})})}},e.resetSearch=function(){return function(e){(0,r.getPopularImages)().then(function(t){e({type:"RECEIVE_IMAGES",images:t})})}}}),require.register("components/Canvas/Container.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=t("react"),s=r(a),o=t("react/lib/ReactUpdates"),u=r(o),c=t("react/lib/ReactMultiChild"),l=r(c),d=t("react/lib/ReactInstanceMap"),f=r(d),h=t("util/canvas"),p=Object.assign({},l["default"].Mixin,{mountAndInjectChildren:function(e,t,n){this.mountChildren(e,t,n);window.requestAnimationFrame(this._draw)},updateChildren:function(e,t,n){this.mountAndInjectChildren(e,t,n)}});e["default"]=s["default"].createClass({displayName:"Container",mixins:[p],render:function(){var e=this.props,t=e.width,n=e.height,r=this.props,a=r.onMouseDown,o=r.onMouseMove,u=r.onMouseUp,c={width:t,height:n},l=window.devicePixelRatio||1;return s["default"].createElement("canvas",i({ref:"canvas",width:t*l,height:n*l,style:c},{onMouseDown:a,onMouseMove:o,onMouseUp:u}))},componentDidMount:function(){this._debugID=this._reactInternalInstance._debugID;var e=u["default"].ReactReconcileTransaction.getPooled();e.perform(this.mountAndInjectChildren,this,this.props.children,e,f["default"].get(this)._context),u["default"].ReactReconcileTransaction.release(e),this.refs.canvas.getContext("2d").scale(window.devicePixelRatio||1,window.devicePixelRatio||1)},componentDidUpdate:function(e){var t=u["default"].ReactReconcileTransaction.getPooled();t.perform(this.updateChildren,this,this.props.children,t,f["default"].get(this)._context),u["default"].ReactReconcileTransaction.release(t),e.height===this.props.height&&e.width===this.props.width||this.refs.canvas.getContext("2d").scale(window.devicePixelRatio||1,window.devicePixelRatio||1)},_draw:function(){var e=this,t=Object.keys(this._renderedChildren).map(function(t){var n=e._renderedChildren[t],r=n.getNativeNode();return r}),n={frame:[0,0,this.props.width,this.props.height],children:t},r=this.refs.canvas.getContext("2d"),i=this.props,a=i.width,s=i.height;r.clearRect(0,0,a,s),(0,h.renderCanvasLayout)(r,n)}})}),require.register("components/Canvas/createCanvasComponent.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(e,t){var n=function(e){this._el=e};return n.displayName="Rect",Object.assign(n.prototype,{construct:function(){},mountComponent:function(e,t,n,r){return{}},receiveComponent:function(){},unmountComponent:function(){},getNativeNode:function(){return t(this._el.props)},getPublicInstance:function(){return t(this._el.props)}}),n}}),require.register("components/Canvas/index.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.Canvas=e.CanvasLine=e.CanvasOutline=e.CanvasText=e.CanvasImage=e.CanvasFilter=e.CanvasRect=void 0;var i=t("./Container"),a=r(i),s=t("./createCanvasComponent"),o=r(s);e.CanvasRect=(0,o["default"])("CanvasRect",function(e){return Object.assign({type:"rect"},e)}),e.CanvasFilter=(0,o["default"])("CanvasFilter",function(e){return Object.assign({type:"filter"},e)}),e.CanvasImage=(0,o["default"])("CanvasImage",function(e){return Object.assign({type:"image"},e)}),e.CanvasText=(0,o["default"])("CanvasText",function(e){return Object.assign({type:"text"},e)}),e.CanvasOutline=(0,o["default"])("CanvasOutline",function(e){return Object.assign({type:"outline"},e)}),e.CanvasLine=(0,o["default"])("CanvasLine",function(e){return Object.assign({type:"line"},e)}),e.Canvas=a["default"]}),require.register("components/Card.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i);e["default"]=function(e){var t=e.title,n=e.children;return a["default"].createElement("div",{className:"Card"},a["default"].createElement("div",{className:"Card-header"},a["default"].createElement("h4",null,t)),n)}}),require.register("components/DownloadButton.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i);e["default"]=a["default"].createClass({displayName:"DownloadButton",propTypes:{drawing:a["default"].PropTypes.string},handleDownload:function(e){var t=this.props.drawing,n=e.target;n.href=t,n.click()},render:function(){return a["default"].createElement("div",null,a["default"].createElement("a",{className:"Button",download:"pabla.jpg",target:"_blank",onClick:this.handleDownload},"Download"))}})}),require.register("components/FiltersPicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i);e["default"]=a["default"].createClass({displayName:"FiltersPicker",propTypes:{contrast:a["default"].PropTypes.bool.isRequired,onContrastChange:a["default"].PropTypes.func.isRequired},updateContrast:function(){var e=this.refs.contrast.checked;this.props.onContrastChange(e)},render:function(){return a["default"].createElement("div",null,a["default"].createElement("label",null,a["default"].createElement("input",{ref:"contrast",checked:this.props.contrast,type:"checkbox",onChange:this.updateContrast})," Contrast"))}})}),require.register("components/ImageCanvas.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=t("react"),s=r(a),o=t("./Canvas"),u=t("util/imageCache"),c=t("util/text"),l=t("util/textEditor"),d=r(l),f=document.createElement("canvas").getContext("2d"),h={8:"backspace",27:"escape",37:"arr_left",39:"arr_right"},p={tall:[500,750],square:[500,500],wide:[500,250]},m=function(e,t){var n=t.getBoundingClientRect(),r={x:e.clientX-n.left,y:e.clientY-n.top};return r},v=function(e,t){return e.x>=t[0]&&e.x<=t[0]+t[2]&&e.y>=t[1]&&e.y<=t[1]+t[3]},g=function(e,t){return[e[0]-t.x,e[1]-t.y,e[2],e[3]]};e["default"]=s["default"].createClass({displayName:"ImageCanvas",initSize:function(e){var t=this,n={},r=i(p[e],2);n.canvasWidth=r[0],n.canvasHeight=r[1];var a=this.state;return a.canvasWidth===n.canvasWidth&&a.canvasHeight===n.canvasHeight?Promise.resolve():new Promise(function(e){t.setState(n,e)})},loadImage:function(e){var t=this;return e?(0,u.getImage)(e).then(function(e){t.setState({image:e})}):Promise.resolve()},componentWillReceiveProps:function(e){var t=this;Promise.all([this.initSize(e.size),this.loadImage(e.image)]).then(function(){t.redraw(e)})},getInitialState:function(){return this.textEditor=new d["default"](this),{}},componentWillMount:function(){Promise.all([this.initSize(this.props.size),this.loadImage(this.props.image)])},componentDidMount:function(){var e=this;document.addEventListener("keypress",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),this.textRect=[20,20,this.state.canvasWidth-40,this.state.canvasHeight-40],window.requestAnimationFrame(this.doRedraw),setInterval(function(){e.state.isEditing&&(e.textEditor.toggleCursor(),window.requestAnimationFrame(e.doRedraw))},450)},doRedraw:function(){this.redraw(this.props)},redraw:function(e){e||(e=this.props),this.forceUpdate(),this.props.onRedraw&&this.props.onRedraw(this.refs.canvas.refs.canvas.toDataURL("image/jpeg"))},cancelEditing:function(){this.setState({isEditing:!1}),setTimeout(this.doRedraw,50)},moveCursor:function(e,t){this.textEditor.moveCursor(e,t),setTimeout(this.doRedraw,50)},insertOrDeleteChar:function(e){var t=this.textEditor.insertOrDeleteChar(e);this.props.onTextChange(t)},selectAll:function(){this.textEditor.selectAll(),setTimeout(this.doRedraw,150)},handleKeyDown:function(e){if(this.state.isEditing){if(65===e.which&&e.metaKey===!0)return e.preventDefault(),this.selectAll();switch(h[e.which]){case"escape":this.cancelEditing();break;case"arr_left":this.moveCursor("left",e.shiftKey);break;case"arr_right":this.moveCursor("right",e.shiftKey)}}},handleKeyUp:function(e){if("Meta"!==e.keyIdentifier&&"Alt"!==e.keyIdentifier&&"Control"!==e.keyIdentifier&&this.state.isEditing)if("backspace"===h[e.which])this.insertOrDeleteChar();else{var t=String.fromCharCode(e.charCode);e.shiftKey||(t=t.toLowerCase()),13===e.keyCode&&(t="\n"),this.insertOrDeleteChar(t)}},handleMouseDown:function(e){var t=m(e,this.refs.canvas.refs.canvas);this.startPos=t;var n=this.textRect,r=v(t,n);r?(this.mouseHeld=!0,this.state.isFocused&&(this.mouseDown=new Date),this.setState({isFocused:!0}),setTimeout(this.doRedraw,100)):(this.setState({isFocused:!1,isEditing:!1}),setTimeout(this.doRedraw,100))},handleMouseMove:function(e){if(this.mouseHeld){var t=m(e,this.refs.canvas.refs.canvas),n={x:this.startPos.x-t.x,y:this.startPos.y-t.y};if(this.state.isFocused&&!this.state.isEditing)this.textRect=g(this.textRect,n),this.setState({mouseDiff:n}),this.startPos=t;else if(this.state.isFocused&&this.state.isEditing){var r=this.startPos,i=t,a=this.refs.canvas.refs.canvas,s=a.getContext("2d"),o=this.textRect,u=this.props,l=u.text,d=u.fontSize,f=(0,c.findIdxForCursor)(s,o,r,d,l),h=(0,c.findIdxForCursor)(s,o,i,d,l);this.textEditor.cursor1=f,this.textEditor.cursor2=h}setTimeout(this.doRedraw,50)}},handleMouseUp:function(e){if(this.mouseDown&&new Date-this.mouseDown<200){var t=this.refs.canvas.refs.canvas,n=t.getContext("2d"),r=this.textRect,i=this.props,a=i.text,s=i.fontSize;this.textEditor.cursor=(0,c.findIdxForCursor)(n,r,this.startPos,s,a)||this.textEditor.cursor,this.setState({isEditing:!0}),this.textEditor.cursor1=null,this.textEditor.cursor2=null,setTimeout(this.doRedraw,50)}this.setState({mouseDiff:null}),this.mouseDown=null,this.mouseHeld=!1,setTimeout(this.doRedraw,50)},getSelectionRects:function(){var e=this.textEditor;if(this.state.isEditing&&e.cursor1&&e.cursor2){var t=this.props,n=t.fontSize,r=t.text,i=(0,c.findRectsForSelection)(f,this.textRect,e.cursor1,e.cursor2,n,r);if(i)return i.map(function(e,t){var n=e.x1,r=e.x2,i=e.y1,a=e.y2;return[n,i,r-n,a-i]})}return[]},getCursorCoords:function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=this.textEditor;if(this.state.isEditing&&t.showCursor&&0===e.length){var n=this.props,r=n.fontSize,i=n.text,a=(0,c.findPosForCursor)(f,t.cursor,r,i);if(a)return(0,c.findCoordsForPos)(f,this.textRect,r,i,a)}},render:function(){var e=this,t=(this.props.image||{},this.state.image),n=this.state,r=n.canvasWidth,i=n.canvasHeight,a=n.isFocused,u=(n.isEditing,this.props),c=u.contrast,l=u.fontSize,d=u.text,f=this.textRect,h=this.mouseHeld,p=(this.textEditor,[0,0,r,i]),m=this.getSelectionRects(),v=m.map(function(e,t){return s["default"].createElement(o.CanvasRect,{key:t,fill:"rgba(87, 205, 255, 0.5)",frame:e})}),g=this.getCursorCoords(m);return s["default"].createElement("div",{className:"ImageCanvas"},s["default"].createElement(o.Canvas,{ref:"canvas",width:r,height:i,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp},t?s["default"].createElement(o.CanvasImage,{image:t,frame:p}):null,c?s["default"].createElement(o.CanvasFilter,{frame:p}):null,f?s["default"].createElement(o.CanvasText,{ref:"textRect",text:d,frame:f,fontSize:l,onUpdateRect:function(t){return e.textRect=t}}):null,f&&a?s["default"].createElement(o.CanvasOutline,{width:2,frame:f,color:h?"rgba(87, 205, 255, 0.5)":"#0092d1"}):null,g?s["default"].createElement(o.CanvasLine,{color:"rgba(255, 255, 255, 0.75)",width:1,from:[g.x,g.y1],to:[g.x,g.y2]}):null,v))}})}),require.register("components/ImagePicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i);e["default"]=a["default"].createClass({displayName:"ImagePicker",propTypes:{images:a["default"].PropTypes.arrayOf(a["default"].PropTypes.shape({url:a["default"].PropTypes.string})).isRequired,selected:a["default"].PropTypes.shape({url:a["default"].PropTypes.string}),onSelect:a["default"].PropTypes.func},handleSelect:function(e){this.props.onSelect&&this.props.onSelect(e)},search:function(e){e.preventDefault();var t=this.refs.search.value;t&&t.length>0?this.props.onSearch(t):this.props.onSearchReset()},render:function(){var e=this,t=this.props.selected||{};return a["default"].createElement("div",{className:"ImagePicker"},a["default"].createElement("form",{onSubmit:this.search},a["default"].createElement("input",{ref:"search",type:"text",className:"ImagePicker-search",placeholder:"Search images"})),this.props.images.map(function(n){var r=n.url===t.url,i="ImagePicker-image"+(r?" ImagePicker-image--selected":""),s=n.url+"&w=364";return a["default"].createElement("div",{className:i,onClick:e.handleSelect.bind(e,n),key:n.url},a["default"].createElement("div",{className:"ImagePicker-image-wrapper"},a["default"].createElement("img",{src:s})))}))}})}),require.register("components/SizePicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i),s=function(e){var t=e.name,n=e.code,r=e.currentCode,i=e.onSelect,s=function(e){e.preventDefault(),i(n)},o="SizePicker-size SizePicker-size--"+n+(n===r?" SizePicker-size--selected":"");return a["default"].createElement("div",{className:o,onClick:s},a["default"].createElement("div",{className:"SizePicker-size-wrapper"},t))};e["default"]=a["default"].createClass({displayName:"SizePicker",render:function(){var e=this.props.size;return a["default"].createElement("div",{className:"SizePicker"},a["default"].createElement(s,{name:"Tall",code:"tall",currentCode:e,onSelect:this.props.onSizeSelect}),a["default"].createElement(s,{name:"Square",code:"square",currentCode:e,onSelect:this.props.onSizeSelect}),a["default"].createElement(s,{name:"Wide",code:"wide",currentCode:e,onSelect:this.props.onSizeSelect}))}})}),require.register("components/TextPropertiesPicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i);e["default"]=a["default"].createClass({displayName:"TextPropertiesPicker",propTypes:{fontSize:a["default"].PropTypes.number.isRequired,onFontSizeChange:a["default"].PropTypes.func.isRequired},updateFontSize:function(){var e=parseInt(this.refs.fontSize.value,10);this.props.onFontSizeChange(e)},render:function(){return a["default"].createElement("div",null,"Font size:",a["default"].createElement("select",{ref:"fontSize",value:this.props.fontSize,onChange:this.updateFontSize},[8,10,12,14,16,18,20,22,26,32,36,42,48,54].map(function(e){return a["default"].createElement("option",{key:e,value:e},e)})))}})}),require.register("container/App.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i),s=t("react-redux"),o=t("actions"),u=t("./LeftSidebar"),c=r(u),l=t("./RightSidebar"),d=r(l),f=t("components/ImageCanvas"),h=r(f),p=a["default"].createClass({displayName:"App",updateDrawnImage:function(e){this.props.drawing!==e&&this.props.onCacheDrawing(e)},render:function(){var e=this.props.selected&&this.props.selected.url,t=this.props,n=t.text,r=t.fontSize,i=t.contrast,s=t.size;return a["default"].createElement("div",{className:"Container"},a["default"].createElement(c["default"],null),a["default"].createElement("div",{className:"Main"},a["default"].createElement("h4",{className:"Main-subtitle"},"Canvas"),a["default"].createElement(h["default"],{image:e,text:n,fontSize:r,contrast:i,size:s,onRedraw:this.updateDrawnImage,onTextChange:this.props.onTextChange})),a["default"].createElement(d["default"],null))}}),m=function(e){return{fontSize:e.fontSize,contrast:e.contrast,size:e.size,selected:e.selectedImage,drawing:e.drawing,text:e.text}},v=function(e){return{onCacheDrawing:function(t){e((0,o.cacheDrawing)(t))},onTextChange:function(t){e((0,o.setText)(t))}}};e["default"]=(0,s.connect)(m,v)(p)}),require.register("container/LeftSidebar.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i),s=t("react-redux"),o=t("actions"),u=t("components/Card"),c=r(u),l=t("components/ImagePicker"),d=r(l),f=function(e){var t=e.availableImages,n=e.selectedImage,r=e.onSelectImage,i=e.onSearch,s=e.onSearchReset;return a["default"].createElement("div",{className:"Sidebar"},a["default"].createElement(c["default"],{title:"Images"},a["default"].createElement(d["default"],{images:t,selected:n,onSelect:r,onSearch:i,onSearchReset:s})))},h=function(e){return{availableImages:e.availableImages,selectedImage:e.selectedImage}},p=function(e){return{onSelectImage:function(t){e((0,o.selectImage)(t))},onSearch:function(t){e((0,o.searchImages)(t))},onSearchReset:function(){e((0,o.resetSearch)())}}};e["default"]=(0,s.connect)(h,p)(f)}),require.register("container/RightSidebar.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=r(i),s=t("react-redux"),o=t("actions"),u=t("components/Card"),c=r(u),l=t("components/FiltersPicker"),d=r(l),f=t("components/TextPropertiesPicker"),h=r(f),p=t("components/SizePicker"),m=r(p),v=t("components/DownloadButton"),g=r(v),y=function(e){var t=e.drawing,n=e.contrast,r=e.onContrastChange,i=e.fontSize,s=e.onFontSizeChange,o=e.size,u=e.onSizeSelect;return a["default"].createElement("div",{className:"Sidebar"},a["default"].createElement(c["default"],{title:"Sizes"},a["default"].createElement(m["default"],{size:o,onSizeSelect:u})),a["default"].createElement(c["default"],{title:"Filters"},a["default"].createElement(d["default"],{contrast:n,onContrastChange:r})),a["default"].createElement(c["default"],{title:"Text"},a["default"].createElement(h["default"],{fontSize:i,onFontSizeChange:s})),a["default"].createElement(g["default"],{drawing:t}),a["default"].createElement("p",{className:"Credit"},"Made by ",a["default"].createElement("a",{href:"http://goshakkk.name"},"Gosha Arinich"),". ",a["default"].createElement("a",{href:"https://github.com/goshakkk/pabla"},"Repo"),"."))},C=function(e){return{fontSize:e.fontSize,contrast:e.contrast,size:e.size,drawing:e.drawing}},x=function(e){return{onFontSizeChange:function(t){e((0,o.setFontSize)(t))},onContrastChange:function(t){e((0,o.setContrast)(t))},onSizeSelect:function(t){e((0,o.setSize)(t))}}};e["default"]=(0,s.connect)(C,x)(y)}),require.register("initialize.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=t("react-dom"),a=r(i),s=t("react"),o=r(s),u=t("redux"),c=t("redux-thunk"),l=r(c),d=t("react-redux"),f=t("reducer"),h=r(f),p=t("container/App"),m=r(p),v=t("actions");t("es6-promise").polyfill();var g=(0,u.createStore)(h["default"],(0,u.applyMiddleware)(l["default"]));g.dispatch((0,v.initialFetchImages)()),document.addEventListener("DOMContentLoaded",function(){a["default"].render(o["default"].createElement(d.Provider,{store:g},o["default"].createElement(m["default"],null)),document.querySelector("#app"))})}),require.register("reducer.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case"SET_FONT_SIZE":return Object.assign({},e,{fontSize:t.size});case"SET_CONTRAST":return Object.assign({},e,{contrast:t.contrast});case"SELECT_IMAGE":return Object.assign({},e,{selectedImage:t.image});case"SET_SIZE":return Object.assign({},e,{size:t.size});case"SET_TEXT":return Object.assign({},e,{text:t.text});case"CACHE_DRAWING":return Object.assign({},e,{drawing:t.drawing});case"RECEIVE_IMAGES":return Object.assign({},e,{availableImages:t.images});default:return e}};var r=t("util/unsplash"),i=((0,r.getPopularImages)(),{fontSize:32,contrast:!0,availableImages:[],selectedImage:null,drawing:null,size:"square",text:"“Others have seen what is and asked why. I have seen what could be and asked why not.”\n- Pablo Picasso"})}),require.register("util/canvas.js",function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.renderCanvasLayout=void 0;var i=t("util/text"),a={image:function(e,t){o(e,t.frame,t.image)},filter:function(e,t){s(e,t.frame)},text:function(e,t){var n=(0,i.addText)(e,t.fontSize,t.frame,t.text);t.onUpdateRect&&t.onUpdateRect(n)},rect:function(e,t){e.fillStyle=t.fill,e.fillRect.apply(e,r(t.frame))},outline:function(e,t){e.lineWidth=t.width,e.strokeStyle=t.color,e.strokeRect.apply(e,r(t.frame))},line:function(e,t){e.strokeStyle=t.color,e.lineWidth=t.width,e.lineCap="round",e.beginPath(),e.moveTo.apply(e,r(t.from)),e.lineTo.apply(e,r(t.to)),e.stroke(),e.strokeStyle=null}},s=function(e,t){e.fillStyle="rgba(45, 45, 45, 0.45)",e.fillRect.apply(e,r(t))},o=function(e,t,n){var r=t[2],i=t[3],a=n.naturalWidth,s=n.naturalHeight,o=a/s,u=r/i,c=void 0,l=void 0;u>=o?(c=a,l=a/u):(c=s*u,l=s);var d=(a-c)/2,f=(s-l)/2;e.drawImage(n,d,f,c,l,0,0,r,i)};e.renderCanvasLayout=function(e,t){t.children.forEach(function(t){if(t){var n=a[t.type];n||console.error("Unknown canvas component: "+t.type),n(e,t)}})}}),require.register("util/imageCache.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={},i=function(e){var t=new Image;return t.crossOrigin="anonymous",t.src=e,new Promise(function(e,n){t.onload=function(){return e(t)}})};e.getImage=function(e){if(e in r)return r[e];var t=i(e);return r[e]=t,t}}),require.register("util/text.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=500,a=i-40-10,s=e.splitTextInLines=function(e,t,n,r){e.font=n+"px Georgia",e.fillStyle="white";var i=r.split("\n"),a=i.map(function(e){return e.split(" ")}).reduce(function(e,t,n){var r=n==i.length-1?[]:["\n"];return e.concat(t).concat(r)},[]),s=[""],o=[[]],u=0;return a.forEach(function(n,r){if("\n"===n)return o.push([]),void s.push("");var i=s.length-1,a=s[i],c=0===a.length?n:a+" "+n;if(e.measureText(c).width<=t||0===a.length){s[i]=c;0===a.length;o[i]=o[i].concat(n.split("").map(function(e,t){return u+1+t}))}else o.push(n.split("").map(function(e,t){return u+1+t})),s.push(n);o[s.length-1].push(u+1+n.length),u=u+1+n.length}),[s,o]},o=(e.findIdxForCursor=function(e,t,n,i,o){e.font=i+"px Georgia",e.fillStyle="white";var u=a,c=s(e,u,i,o),l=r(c,2),d=l[0],f=(l[1],1.3*i),h=void 0;return d.forEach(function(r,a){var s=t[0]+10,u=t[1]+i+a*f;n&&n.y<=u&&n.y>=u-f&&r.split("").forEach(function(t,i){var a=e.measureText(r.slice(0,i)).width,u=e.measureText(r.slice(0,i+1)).width,c=n.x-s;c>=a&&u>=c&&(h=o.indexOf(r)+i)})}),h},e.coordsForLine=function(e,t,n){var r=1.3*t;return{x:e[0]+10,y:e[1]+t+n*r}}),u=e.findPosForCursor=function(e,t,n,i){var o=a,u=s(e,o,n,i),c=r(u,2),l=(c[0],c[1]),d=l.find(function(e){return-1!==e.indexOf(t+1)}),f=void 0;if(d){var h=l.indexOf(d),p=d.indexOf(t+1);d.map(function(e){return i[e-1]}).join("");f={lineNo:h,idxInLine:p,line:d}}return f};e.findCoordsForPos=function(e,t,n,r,i){var a=i.lineNo,s=i.idxInLine,u=i.line,c=u.map(function(e){return r[e-1]}).join(""),l=o(t,n,a),d=l.x,f=l.y,h=e.measureText(c.slice(0,s+1)).width;return{x:d+h,y1:f-n+7,y2:f+7}},e.findRectsForSelection=function(e,t,n,i,c,l){var d=n,f=i;if(d>f){var h=[f,d];d=h[0],f=h[1]}var p=u(e,d,c,l),m=u(e,f,c,l);if(p&&m){var v=s(e,a,c,l),g=r(v,2),y=(g[0],g[1]);if(p.lineNo===m.lineNo){var C=y.find(function(e){return-1!==e.indexOf(d+1)}),x=C.map(function(e){return l[e-1]}).join(""),w=o(t,c,p.lineNo),S=w.x,E=w.y,_=e.measureText(x.slice(0,p.idxInLine+1)).width,I=e.measureText(x.slice(p.idxInLine+1,m.idxInLine)).width;return[{x1:S+_,x2:S+_+I,y1:E-c+7,y2:E+7}]}var b=Array.apply(0,Array(m.lineNo-p.lineNo+1)).map(function(e,t){return t+p.lineNo});return b.map(function(n){var r=o(t,c,n),i=r.x,a=r.y,s=void 0,u=void 0;if(n==p.lineNo){var h=y.find(function(e){return-1!==e.indexOf(d+1)}),v=h.map(function(e){return l[e-1]}).join("");s=e.measureText(v.slice(0,p.idxInLine+1)).width,u=e.measureText(v.slice(p.idxInLine+1)).width}else if(n===m.lineNo){var g=y.find(function(e){return-1!==e.indexOf(f+1)}),C=g.map(function(e){return l[e-1]}).join("");s=0,u=e.measureText(C.slice(0,m.idxInLine)).width}else s=0,u=280;return{x1:i+s,x2:i+s+u,y1:a-c+7,y2:a+7}})}},e.addText=function(e,t,n,i){var u=n.slice();e.font=t+"px Georgia",e.fillStyle="white";var c=a,l=s(e,c,t,i),d=r(l,2),f=d[0],h=(d[1],1.3*t);f.forEach(function(n,r){var i=o(u,t,r),a=i.x,s=i.y;e.fillText(n,a,s,u[2]-20)});var p=f.length*h;return u[3]=p+10,u}}),require.register("util/textEditor.js",function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){r(this,e),this.component=t,this.cursor=0,this.cursor1=null,this.cursor2=null,this.showCursor=!1}return i(e,[{key:"getText",value:function(){return this.component.props.text}},{key:"toggleCursor",value:function(){this.showCursor=!this.showCursor}},{key:"moveCursor",value:function(e,t){if(t=!1,!t||this.cursor1||this.cursor2||(this.cursor1=this.cursor2=this.cursor),t||(this.cursor1=this.cursor2=null),"left"===e)this.cursor=this.cursor-1,t&&(this.cursor2=this.cursor);else{if("right"!==e)return;this.cursor=this.cursor+1,t&&(this.cursor2=this.cursor)}}},{key:"insertOrDeleteChar",value:function(e){var t=this.getText(),n=void 0;if(this.cursor1||this.cursor2){var r=this.cursor1,i=this.cursor2,a=t.slice(0,r+1),s=t.slice(i);e?(n=a+e+s,this.cursor1=null,this.cursor2=null,this.cursor=r+1):(n=a+s,this.cursor1=null,this.cursor2=null,this.cursor=r)}else{var o=this.cursor,u=t.slice(0,o+1),c=t.slice(o+1);e?(n=u+e+c,this.cursor=o+1):(n=u.slice(0,-1)+c,this.cursor=o-1)}return n}},{key:"selectAll",value:function(){this.cursor1=1,this.cursor2=this.getText().length,this.cursor=this.cursor2}}]),e}();e["default"]=a}),require.register("util/unsplash.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=[{url:"https://images.unsplash.com/photo-1458640904116-093b74971de9?fm=jpg",tags:["dark","field"]},{url:"https://images.unsplash.com/photo-1447969025943-8219c41ea47a?fm=jpg",tags:["cat","kitten"]},{url:"https://images.unsplash.com/photo-1421749810611-438cc492b581?fm=jpg",tags:["water","landscape"]},{url:"https://images.unsplash.com/photo-1449960238630-7e720e630019?fm=jpg",tags:["water","seaside"]},{url:"https://images.unsplash.com/photo-1433190152045-5a94184895da?fm=jpg",tags:["water","cliff"]}];e.getPopularImages=function(){return Promise.resolve(r)},e.searchImages=function(e){var t=r.filter(function(t){return t.tags.some(function(t){return-1!==t.indexOf(e)})});return Promise.resolve(t)}});