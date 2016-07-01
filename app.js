!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={},a={}.hasOwnProperty,i=/^\.\.?(\/|$)/,s=function(e,t){for(var n,r=[],a=(i.test(t)?e+"/"+t:t).split("/"),s=0,o=a.length;o>s;s++)n=a[s],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},u=function(t){return function(n){var r=s(o(t),n);return e.require(r,t)}},l=function(e,t){var r={id:e,exports:{}};return n[e]=r,t(r.exports,u(e),r),r.exports},c=function(e){return r[e]?c(r[e]):e},d=function(e,r){null==r&&(r="/");var i=c(e);if(a.call(n,i))return n[i].exports;if(a.call(t,i))return l(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};d.alias=function(e,t){r[t]=e},d.reset=function(){t={},n={},r={}};var f=/\.[^.\/]+$/,p=/\/index(\.[^\/]+)?$/,h=function(e){if(f.test(e)){var t=e.replace(f,"");a.call(r,t)&&r[t].replace(f,"")!==t+"/index"||(r[t]=e)}if(p.test(e)){var n=e.replace(p,"");a.call(r,n)||(r[n]=e)}};d.register=d.define=function(e,r){if("object"==typeof e)for(var i in e)a.call(e,i)&&d.register(i,e[i]);else t[e]=r,delete n[e],h(e)},d.list=function(){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e},d.brunch=!0,d._cache=n,e.require=d}}(),require.register("actions.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resetSearch=e.searchImages=e.initialFetchImages=e.setQuery=e.cacheDrawing=e.setText=e.setSize=e.selectImage=e.setFilter=e.setColor=e.setItalic=e.setBold=e.setFontSize=e.setFont=void 0;var r=t("util/unsplash"),a=(e.setFont=function(e){return{type:"SET_FONT",font:e}},e.setFontSize=function(e){return{type:"SET_FONT_SIZE",size:e}},e.setBold=function(e){return{type:"SET_BOLD",bold:e}},e.setItalic=function(e){return{type:"SET_ITALIC",italic:e}},e.setColor=function(e){return{type:"SET_COLOR",color:e}},e.setFilter=function(e){return{type:"SET_FILTER",filter:e}},e.selectImage=function(e){return{type:"SELECT_IMAGE",image:e}});e.setSize=function(e){return{type:"SET_SIZE",size:e}},e.setText=function(e){return{type:"SET_TEXT",text:e}},e.cacheDrawing=function(e){return{type:"CACHE_DRAWING",drawing:e}},e.setQuery=function(e){return{type:"SET_QUERY",query:e}},e.initialFetchImages=function(){return function(e){(0,r.getPopularImages)().then(function(t){e({type:"RECEIVE_IMAGES",images:t}),e(a(t[0]))})}},e.searchImages=function(e){return function(t){(0,r.searchImages)(e).then(function(e){t({type:"RECEIVE_IMAGES",images:e})})}},e.resetSearch=function(){return function(e){(0,r.getPopularImages)().then(function(t){e({type:"RECEIVE_IMAGES",images:t})})}}}),require.register("components/Canvas/Container.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=t("react"),s=r(i),o=t("react/lib/ReactUpdates"),u=r(o),l=t("react/lib/ReactMultiChild"),c=r(l),d=t("react/lib/ReactInstanceMap"),f=r(d),p=t("util/canvas"),h=Object.assign({},c["default"].Mixin,{mountAndInjectChildren:function(e,t,n){this.mountChildren(e,t,n);window.requestAnimationFrame(this._draw)},updateChildren:function(e,t,n){this.mountAndInjectChildren(e,t,n)}});e["default"]=s["default"].createClass({displayName:"Container",mixins:[h],render:function(){var e=this.props,t=e.width,n=e.height,r=this.props,i=r.onMouseDown,o=r.onMouseMove,u=r.onMouseUp,l={width:t,height:n},c=window.devicePixelRatio||1;return s["default"].createElement("canvas",a({ref:"canvas",width:t*c,height:n*c,style:l},{onMouseDown:i,onMouseMove:o,onMouseUp:u}))},scaleCanvas:function(){this.refs.canvas.getContext("2d").scale(window.devicePixelRatio||1,window.devicePixelRatio||1)},componentDidMount:function(){this._debugID=this._reactInternalInstance._debugID;var e=u["default"].ReactReconcileTransaction.getPooled();e.perform(this.mountAndInjectChildren,this,this.props.children,e,f["default"].get(this)._context),u["default"].ReactReconcileTransaction.release(e),this.scaleCanvas()},componentDidUpdate:function(e){var t=u["default"].ReactReconcileTransaction.getPooled();t.perform(this.updateChildren,this,this.props.children,t,f["default"].get(this)._context),u["default"].ReactReconcileTransaction.release(t),e.height===this.props.height&&e.width===this.props.width||this.scaleCanvas()},_draw:function(){var e=this,t=Object.keys(this._renderedChildren).map(function(t){var n=e._renderedChildren[t],r=n.getNativeNode();return r}),n={frame:[0,0,this.props.width,this.props.height],children:t},r=this.refs.canvas,a=r.getContext("2d"),i=this.props,s=i.width,o=i.height;a.clearRect(0,0,s,o),(0,p.renderCanvasLayout)(a,n),this.props.onRedraw&&this.props.onRedraw(r.toDataURL("image/jpeg"))}})}),require.register("components/Canvas/createCanvasComponent.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(e,t){var n=function(e){this._el=e};return n.displayName="Rect",Object.assign(n.prototype,{construct:function(){},mountComponent:function(e,t,n,r){return{}},receiveComponent:function(){},unmountComponent:function(){},getNativeNode:function(){return t(this._el.props)},getPublicInstance:function(){return t(this._el.props)}}),n}}),require.register("components/Canvas/index.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.Canvas=e.CanvasLine=e.CanvasOutline=e.CanvasText=e.CanvasImage=e.CanvasFilter=e.CanvasRect=void 0;var a=t("./Container"),i=r(a),s=t("./createCanvasComponent"),o=r(s);e.CanvasRect=(0,o["default"])("CanvasRect",function(e){return Object.assign({type:"rect"},e)}),e.CanvasFilter=(0,o["default"])("CanvasFilter",function(e){return Object.assign({type:"filter"},e)}),e.CanvasImage=(0,o["default"])("CanvasImage",function(e){return Object.assign({type:"image"},e)}),e.CanvasText=(0,o["default"])("CanvasText",function(e){return Object.assign({type:"text"},e)}),e.CanvasOutline=(0,o["default"])("CanvasOutline",function(e){return Object.assign({type:"outline"},e)}),e.CanvasLine=(0,o["default"])("CanvasLine",function(e){return Object.assign({type:"line"},e)}),e.Canvas=i["default"]}),require.register("components/Card.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a);e["default"]=function(e){var t=e.title,n=e.children;return i["default"].createElement("div",{className:"Card"},i["default"].createElement("div",{className:"Card-header"},i["default"].createElement("h4",null,t)),n)}}),require.register("components/DownloadButton.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a);e["default"]=i["default"].createClass({displayName:"DownloadButton",propTypes:{drawing:i["default"].PropTypes.string},handleDownload:function(e){var t=this.props.drawing,n=e.target;n.href=t,n.click()},render:function(){return i["default"].createElement("div",null,i["default"].createElement("a",{className:"Button",download:"pabla.jpg",target:"_blank",onClick:this.handleDownload},"Download"))}})}),require.register("components/FiltersPicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a);e["default"]=i["default"].createClass({displayName:"FiltersPicker",propTypes:{filter:i["default"].PropTypes.oneOf(["none","light_contrast","heavy_contrast"]).isRequired,onFilterChange:i["default"].PropTypes.func.isRequired},updateFilter:function(){var e=this.refs.select.value;this.props.onFilterChange(e)},render:function(){return i["default"].createElement("div",null,i["default"].createElement("select",{className:"FiltersPicker",value:this.props.filter,ref:"select",onChange:this.updateFilter},i["default"].createElement("option",{value:"none"},"None"),i["default"].createElement("option",{value:"light_contrast"},"Light contrast"),i["default"].createElement("option",{value:"heavy_contrast"},"Heavy contrast")))}})}),require.register("components/ImageCanvas.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{!r&&o["return"]&&o["return"]()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=t("react"),s=r(i),o=t("./Canvas"),u=t("util/imageCache"),l=t("util/text"),c=t("util/textEditor"),d=r(c),f=document.createElement("canvas").getContext("2d"),p={8:"backspace",27:"escape",37:"arr_left",39:"arr_right"},h={tall:[500,750],square:[500,500],wide:[500,250]},m=function(e,t){var n=t.getBoundingClientRect(),r={x:e.clientX-n.left,y:e.clientY-n.top};return r},g=function(e,t){return e.x>=t[0]&&e.x<=t[0]+t[2]&&e.y>=t[1]&&e.y<=t[1]+t[3]},v=function(e,t){return[e[0]-t.x,e[1]-t.y,e[2],e[3]]};e["default"]=s["default"].createClass({displayName:"ImageCanvas",initSize:function(e){var t=this,n={},r=a(h[e],2);n.canvasWidth=r[0],n.canvasHeight=r[1];var i=this.state;return i.canvasWidth===n.canvasWidth&&i.canvasHeight===n.canvasHeight?Promise.resolve():new Promise(function(e){t.setState(n,e)})},loadImage:function(e){var t=this;return e?(this.props.image!==e&&this.setState({image:null}),(0,u.getImage)(e).then(function(e){t.setState({image:e})})):Promise.resolve()},componentWillReceiveProps:function(e){var t=this;Promise.all([this.initSize(e.size),this.loadImage(e.image)]).then(function(){t.redraw(e)})},getInitialState:function(){return this.textEditor=new d["default"](this),{}},componentWillMount:function(){Promise.all([this.initSize(this.props.size),this.loadImage(this.props.image)])},componentDidMount:function(){var e=this;this.textRect=[20,20,this.state.canvasWidth-40,this.state.canvasHeight-40],window.requestAnimationFrame(this.doRedraw),setInterval(function(){e.state.isEditing&&(e.textEditor.toggleCursor(),window.requestAnimationFrame(e.doRedraw))},450)},doRedraw:function(){this.redraw(this.props)},redraw:function(e){e||(e=this.props),this.forceUpdate()},cancelEditing:function(){this.setState({isEditing:!1})},updateCursor:function(e){"escape"===p[e.which]&&(this.cancelEditing(),e.target.blur());var t=this.refs.txt,n=t.selectionStart,r=t.selectionEnd;this.textEditor.setFromInput(n,r),setTimeout(this.doRedraw,0)},setFocus:function(){this.setState({isFocused:!0})},setEditing:function(){this.setState({isFocused:!0,isEditing:!0})},setNoFocus:function(){this.setState({isFocused:!1,isEditing:!1})},handleMouseDown:function(e){var t=m(e,this.refs.canvas.refs.canvas);this.startPos=t;var n=this.textRect,r=g(t,n);r?(this.mouseHeld=!0,this.state.isFocused&&(this.mouseDown=new Date),this.setFocus()):this.setNoFocus()},handleMouseMove:function(e){if(this.mouseHeld){var t=this.startPos,n=m(e,this.refs.canvas.refs.canvas),r={x:t.x-n.x,y:t.y-n.y},a=this.state,i=a.isFocused,s=a.isEditing;if(i&&!s)this.textRect=v(this.textRect,r),this.mouseDiff=r,this.startPos=n;else if(i&&s){var o=t,u=n,c=this.textRect,d=this.props,p=d.text,h=d.textAttrs,g=(0,l.findIdxForCursor)(f,c,o,h,p),y=(0,l.findIdxForCursor)(f,c,u,h,p);this.textEditor.setSelection(g,y,this.refs.txt)}setTimeout(this.doRedraw,0)}},handleMouseUp:function(e){if(this.mouseDown&&new Date-this.mouseDown<200){var t=this.textRect,n=this.startPos,r=this.props,a=r.text,i=r.textAttrs,s=(0,l.findIdxForCursor)(f,t,n,i,a);this.textEditor.setCursor(s,this.refs.txt),this.setEditing(),this.refs.txt.focus()}this.mouseDiff=null,this.mouseDown=null,this.mouseHeld=!1,setTimeout(this.doRedraw,0)},getSelectionRects:function(){var e=this.textEditor,t=this.textRect,n=e.cursor1,r=e.cursor2;if(this.state.isEditing&&n>=0&&r>=0){var a=this.props,i=a.textAttrs,s=a.text,o=(0,l.findRectsForSelection)(f,t,n,r,i,s);if(o)return o.map(function(e,t){var n=e.x1,r=e.x2,a=e.y1,i=e.y2;return[n,a,r-n,i-a]})}return[]},getCursorCoords:function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=this.textEditor,n=this.textRect,r=t.cursor,a=t.showCursor;if(this.state.isEditing&&a&&0===e.length){var i=this.props,s=i.textAttrs,o=i.text,u=(0,l.findPosForCursor)(f,r,s,o);if(u)return(0,l.findCoordsForPos)(f,n,s,o,u)}},render:function(){var e=this,t=this.state.image,n=this.state,r=n.canvasWidth,a=n.canvasHeight,i=n.isFocused,u=(n.isEditing,this.props),l=u.filter,c=u.textAttrs,d=u.text,f=this.textRect,p=this.mouseHeld,h=(this.textEditor,[0,0,r,a]),m=this.getSelectionRects(),g=m.map(function(e,t){return s["default"].createElement(o.CanvasRect,{key:t,fill:"rgba(87, 205, 255, 0.5)",frame:e})}),v=this.getCursorCoords(m);return s["default"].createElement("div",{className:"ImageCanvas"},s["default"].createElement(o.Canvas,{ref:"canvas",width:r,height:a,onRedraw:this.props.onRedraw,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp},t?s["default"].createElement(o.CanvasImage,{image:t,frame:h}):null,s["default"].createElement(o.CanvasFilter,{filter:l,frame:h}),f?s["default"].createElement(o.CanvasText,{ref:"textRect",text:d,frame:f,textAttrs:c,onUpdateRect:function(t){return e.textRect=t}}):null,f&&i?s["default"].createElement(o.CanvasOutline,{width:2,frame:f,color:p?"rgba(87, 205, 255, 0.5)":"#0092d1"}):null,v?s["default"].createElement(o.CanvasLine,{color:"rgba(255, 255, 255, 0.75)",width:1,from:[v.x,v.y1],to:[v.x,v.y2]}):null,g),s["default"].createElement("textarea",{ref:"txt",value:d,onChange:function(t){return e.props.onTextChange(t.target.value)},onKeyUp:this.updateCursor,onFocus:this.setEditing,style:{height:1,width:1,opacity:0}}))}})}),require.register("components/ImagePicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a),s=t("./Option"),o=r(s);e["default"]=i["default"].createClass({displayName:"ImagePicker",propTypes:{images:i["default"].PropTypes.arrayOf(i["default"].PropTypes.shape({url:i["default"].PropTypes.string})).isRequired,selected:i["default"].PropTypes.shape({url:i["default"].PropTypes.string}),onSelect:i["default"].PropTypes.func},handleSelect:function(e){this.props.onSelect&&this.props.onSelect(e)},render:function(){var e=this,t=this.props.selected||{};return i["default"].createElement("div",{className:"ImagePicker"},this.props.images.map(function(n){var r=n.url===t.url,a="ImagePicker-image"+(r?" ImagePicker-image--selected":""),s=n.url+"&w=364";return i["default"].createElement("div",{className:a,onClick:e.handleSelect.bind(e,n),key:n.url},i["default"].createElement(o["default"],{selected:r,borderStyle:"thick-transparent"},i["default"].createElement("img",{src:s})))}))}})}),require.register("components/Option.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a);e["default"]=function(e){var t=e.selected,n=e.checkSize,r=e.borderStyle,a=e.children;n||(n="normal"),r||(r="thin-grey");var s="OptionWrapper OptionWrapper--size-"+n+" OptionWrapper--border-"+r+(t?" OptionWrapper--selected":"");return i["default"].createElement("div",{className:s},i["default"].createElement("div",{className:"OptionWrapper-w"},a))}}),require.register("components/SearchBar.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a);e["default"]=i["default"].createClass({displayName:"SearchBar",propTypes:{query:i["default"].PropTypes.string.isRequired,onSearch:i["default"].PropTypes.func.isRequired,onSearchReset:i["default"].PropTypes.func.isRequired,onQueryChange:i["default"].PropTypes.func.isRequired},search:function(e){e.preventDefault();var t=this.props.query;t&&t.length>0?this.props.onSearch(t):this.props.onSearchReset()},setQuery:function(e){e.preventDefault();var t=e.target.value;this.props.onQueryChange&&this.props.onQueryChange(t)},render:function(){return i["default"].createElement("form",{onSubmit:this.search},i["default"].createElement("input",{type:"text",className:"SearchBar",placeholder:"Search images",onChange:this.setQuery,value:this.props.query}))}})}),require.register("components/SizePicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a),s=t("./Option"),o=r(s),u=function(e){var t=e.name,n=e.code,r=e.currentCode,a=e.onSelect,s=function(e){e.preventDefault(),a(n)},u="SizePicker-size SizePicker-size--"+n;return i["default"].createElement("div",{className:u,onClick:s},i["default"].createElement(o["default"],{selected:n===r},t))};e["default"]=i["default"].createClass({displayName:"SizePicker",render:function(){var e=this.props.size;return i["default"].createElement("div",{className:"SizePicker"},i["default"].createElement(u,{name:"Tall",code:"tall",currentCode:e,onSelect:this.props.onSizeSelect}),i["default"].createElement(u,{name:"Square",code:"square",currentCode:e,onSelect:this.props.onSizeSelect}),i["default"].createElement(u,{name:"Wide",code:"wide",currentCode:e,onSelect:this.props.onSizeSelect}))}})}),require.register("components/TextPropertiesPicker.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a),s=t("./Option"),o=r(s),u=["white","black","#444","#007fff","#ffb300","#71c318"],l=["Arial","Georgia","Helvetica","Trebuchet MS"],c=[8,10,12,14,16,18,20,22,26,32,36,42,48,54];e["default"]=i["default"].createClass({displayName:"TextPropertiesPicker",propTypes:{textAttrs:i["default"].PropTypes.shape({font:i["default"].PropTypes.string.isRequired,fontSize:i["default"].PropTypes.number.isRequired,color:i["default"].PropTypes.string.isRequired,bold:i["default"].PropTypes.bool.isRequired,italic:i["default"].PropTypes.bool.isRequired}).isRequired,onFontChange:i["default"].PropTypes.func.isRequired,onFontSizeChange:i["default"].PropTypes.func.isRequired,onColorChange:i["default"].PropTypes.func.isRequired},updateFont:function(){var e=this.refs.font.value;this.props.onFontChange(e)},updateFontSize:function(){var e=parseInt(this.refs.fontSize.value,10);this.props.onFontSizeChange(e)},updateColor:function(e){this.props.onColorChange(e)},updateBold:function(){this.props.onBoldChange(!this.props.textAttrs.bold)},updateItalic:function(){this.props.onItalicChange(!this.props.textAttrs.italic)},render:function(){var e=this,t=this.props.textAttrs,n=t.font,r=t.fontSize,a=(t.color,t.bold),s=t.italic;return i["default"].createElement("div",{className:"TextPropsPicker"},i["default"].createElement("p",null,"Font:",i["default"].createElement("select",{ref:"font",value:n,onChange:this.updateFont},l.map(function(e){return i["default"].createElement("option",{key:e,value:e},e)}))),i["default"].createElement("p",null,"Font size:",i["default"].createElement("select",{ref:"fontSize",value:r,onChange:this.updateFontSize},c.map(function(e){return i["default"].createElement("option",{key:e,value:e},e)}))),i["default"].createElement("div",{className:"TextPropsPicker-style"},i["default"].createElement("div",{className:"TextPropsPicker-style-bold",onClick:this.updateBold},i["default"].createElement(o["default"],{selected:a},i["default"].createElement("span",null,"Bold"))),i["default"].createElement("div",{className:"TextPropsPicker-style-italic",onClick:this.updateItalic},i["default"].createElement(o["default"],{selected:s},i["default"].createElement("span",null,"Italic")))),i["default"].createElement("div",{className:"TextPropsPicker-colors"},u.map(function(t){return i["default"].createElement("div",{key:t,className:"TextPropsPicker-color",onClick:e.updateColor.bind(e,t)},i["default"].createElement(o["default"],{selected:t===e.props.textAttrs.color,checkSize:"small"},i["default"].createElement("div",{style:{background:t,borderRadius:3}})))})))}})}),require.register("container/App.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a),s=t("react-redux"),o=t("actions"),u=t("./LeftSidebar"),l=r(u),c=t("./RightSidebar"),d=r(c),f=t("components/ImageCanvas"),p=r(f),h=i["default"].createClass({displayName:"App",updateDrawnImage:function(e){this.props.drawing!==e&&this.props.onCacheDrawing(e)},render:function(){var e=this.props.selected&&this.props.selected.url,t=this.props,n=t.text,r=t.textAttrs,a=t.filter,s=t.size;return i["default"].createElement("div",{className:"Container"},i["default"].createElement(l["default"],null),i["default"].createElement("div",{className:"Main"},i["default"].createElement("h4",{className:"Main-subtitle"},"Canvas"),i["default"].createElement(p["default"],{image:e,text:n,textAttrs:r,filter:a,size:s,onRedraw:this.updateDrawnImage,onTextChange:this.props.onTextChange})),i["default"].createElement(d["default"],null))}}),m=function(e){return{textAttrs:e.textAttrs,filter:e.filter,size:e.size,selected:e.selectedImage,drawing:e.drawing,text:e.text}},g=function(e){return{onCacheDrawing:function(t){e((0,o.cacheDrawing)(t))},onTextChange:function(t){e((0,o.setText)(t))}}};e["default"]=(0,s.connect)(m,g)(h)}),require.register("container/LeftSidebar.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a),s=t("react-redux"),o=t("actions"),u=t("components/Card"),l=r(u),c=t("components/SearchBar"),d=r(c),f=t("components/ImagePicker"),p=r(f),h=function(e){var t=e.query,n=e.availableImages,r=e.selectedImage,a=e.onSelectImage,s=e.onSearch,o=e.onSearchReset,u=e.onQueryChange;return i["default"].createElement("div",{className:"Sidebar"},i["default"].createElement(l["default"],{title:"Images"},i["default"].createElement(d["default"],{query:t,onSearch:s,onSearchReset:o,onQueryChange:u}),i["default"].createElement(p["default"],{images:n,selected:r,onSelect:a})))},m=function(e){return{availableImages:e.availableImages,selectedImage:e.selectedImage,query:e.query}},g=function(e){return{onSelectImage:function(t){e((0,o.selectImage)(t))},onSearch:function(t){e((0,o.searchImages)(t))},onSearchReset:function(){e((0,o.resetSearch)())},onQueryChange:function(t){e((0,o.setQuery)(t))}}};e["default"]=(0,s.connect)(m,g)(h)}),require.register("container/RightSidebar.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),i=r(a),s=t("react-redux"),o=t("actions"),u=t("components/Card"),l=r(u),c=t("components/FiltersPicker"),d=r(c),f=t("components/TextPropertiesPicker"),p=r(f),h=t("components/SizePicker"),m=r(h),g=t("components/DownloadButton"),v=r(g),y=function(e){var t=e.drawing,n=e.filter,r=e.onFilterChange,a=e.textAttrs,s=e.onFontChange,o=e.onFontSizeChange,u=e.onColorChange,c=e.onBoldChange,f=e.onItalicChange,h=e.size,g=e.onSizeSelect;return i["default"].createElement("div",{className:"Sidebar"},i["default"].createElement(l["default"],{title:"Sizes"},i["default"].createElement(m["default"],{size:h,onSizeSelect:g})),i["default"].createElement(l["default"],{title:"Filters"},i["default"].createElement(d["default"],{filter:n,onFilterChange:r})),i["default"].createElement(l["default"],{title:"Text"},i["default"].createElement(p["default"],{textAttrs:a,onFontChange:s,onFontSizeChange:o,onColorChange:u,onBoldChange:c,onItalicChange:f})),i["default"].createElement(v["default"],{drawing:t}),i["default"].createElement("p",{className:"Credit"},"Made by ",i["default"].createElement("a",{href:"http://goshakkk.name"},"Gosha Arinich"),". ",i["default"].createElement("a",{href:"https://github.com/goshakkk/pabla"},"Repo"),"."))},x=function(e){return{textAttrs:e.textAttrs,filter:e.filter,size:e.size,drawing:e.drawing}},C=function(e){return{onFontChange:function(t){e((0,o.setFont)(t))},onFontSizeChange:function(t){e((0,o.setFontSize)(t))},onColorChange:function(t){e((0,o.setColor)(t))},onBoldChange:function(t){e((0,o.setBold)(t))},onItalicChange:function(t){e((0,o.setItalic)(t))},onFilterChange:function(t){e((0,o.setFilter)(t))},onSizeSelect:function(t){e((0,o.setSize)(t))}}};e["default"]=(0,s.connect)(x,C)(y)}),require.register("initialize.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=t("react-dom"),i=r(a),s=t("react"),o=r(s),u=t("redux"),l=t("redux-thunk"),c=r(l),d=t("react-redux"),f=t("reducer"),p=r(f),h=t("container/App"),m=r(h),g=t("actions");t("es6-promise").polyfill();var v=(0,u.createStore)(p["default"],(0,u.applyMiddleware)(c["default"]));v.dispatch((0,g.initialFetchImages)()),document.addEventListener("DOMContentLoaded",function(){i["default"].render(o["default"].createElement(d.Provider,{store:v},o["default"].createElement(m["default"],null)),document.querySelector("#app"))})}),require.register("reducer.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?a:arguments[0],t=arguments[1],n=void 0;switch(t.type){case"SET_FONT":return n=Object.assign({},e.textAttrs,{font:t.font}),Object.assign({},e,{textAttrs:n});case"SET_FONT_SIZE":return n=Object.assign({},e.textAttrs,{fontSize:t.size}),Object.assign({},e,{textAttrs:n});case"SET_BOLD":return n=Object.assign({},e.textAttrs,{bold:t.bold}),Object.assign({},e,{textAttrs:n});case"SET_ITALIC":return n=Object.assign({},e.textAttrs,{italic:t.italic}),Object.assign({},e,{textAttrs:n});case"SET_COLOR":return n=Object.assign({},e.textAttrs,{color:t.color}),Object.assign({},e,{textAttrs:n});case"SET_FILTER":return Object.assign({},e,{filter:t.filter});case"SELECT_IMAGE":return Object.assign({},e,{selectedImage:t.image});case"SET_SIZE":return Object.assign({},e,{size:t.size});case"SET_TEXT":return Object.assign({},e,{text:t.text});case"CACHE_DRAWING":return Object.assign({},e,{drawing:t.drawing});case"RECEIVE_IMAGES":return Object.assign({},e,{availableImages:t.images});case"SET_QUERY":return Object.assign({},e,{query:t.query});default:return e}};var r=t("util/unsplash"),a=((0,r.getPopularImages)(),{filter:"light_contrast",availableImages:[],selectedImage:null,query:"",drawing:null,size:"square",text:"“Others have seen what is and asked why. I have seen what could be and asked why not.”\n- Pablo Picasso",textAttrs:{fontSize:32,color:"white",font:"Georgia",bold:!1,italic:!1}})}),require.register("util/canvas.js",function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.renderCanvasLayout=void 0;var a=t("util/text"),i={image:function(e,t){o(e,t.frame,t.image)},filter:function u(e,t){var u=t.filter;if("none"!==u){var n="light_contrast"===u?.35:.65;s(e,t.frame,n)}},text:function(e,t){var n=(0,a.addText)(e,t.textAttrs,t.frame,t.text);t.frame.join(",")!==n.join(",")&&t.onUpdateRect&&t.onUpdateRect(n)},rect:function(e,t){e.fillStyle=t.fill,e.fillRect.apply(e,r(t.frame))},outline:function(e,t){e.lineWidth=t.width,e.strokeStyle=t.color,e.strokeRect.apply(e,r(t.frame))},line:function(e,t){e.strokeStyle=t.color,e.lineWidth=t.width,e.lineCap="round",e.beginPath(),e.moveTo.apply(e,r(t.from)),e.lineTo.apply(e,r(t.to)),e.stroke(),e.strokeStyle=null}},s=function(e,t,n){e.fillStyle="rgba(45, 45, 45, "+n+")",e.fillRect.apply(e,r(t))},o=function(e,t,n){var r=t[2],a=t[3],i=n.naturalWidth,s=n.naturalHeight,o=i/s,u=r/a,l=void 0,c=void 0;u>=o?(l=i,c=i/u):(l=s*u,c=s);var d=(i-l)/2,f=(s-c)/2;e.drawImage(n,d,f,l,c,0,0,r,a)};e.renderCanvasLayout=function(e,t){t.children.forEach(function(t){if(t){var n=i[t.type];n||console.error("Unknown canvas component: "+t.type),n(e,t)}})}}),require.register("util/imageCache.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={},a=function(e){var t=new Image;return t.crossOrigin="anonymous",t.src=e,new Promise(function(e,n){t.onload=function(){return e(t)}})};e.getImage=function(e){if(e in r)return r[e];var t=a(e);return r[e]=t,t}}),require.register("util/text.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{!r&&o["return"]&&o["return"]()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=500,i=a-40-10,s=function(e,t){var n=t.bold,r=t.italic,a=t.font,i=t.fontSize,s=t.color;e.font=(n?"bold":"")+" "+(r?"italic":"")+" "+i+'px "'+a+'"',e.fillStyle=s},o=e.splitTextInLines=function(e,t,n,r){n.fontSize;s(e,n);var a=r.split("\n"),i=a.map(function(e){return e.split(" ")}).reduce(function(e,t,n){var r=n==a.length-1?[]:["\n"];return e.concat(t).concat(r)},[]),o=[""],u=[[]],l=0;return i.forEach(function(n,r){if("\n"===n)return u.push([]),void o.push("");var a=o.length-1,i=o[a],s=0===i.length?n:i+" "+n;if(e.measureText(s).width<=t||0===i.length){o[a]=s;0===i.length;u[a]=u[a].concat(n.split("").map(function(e,t){return l+1+t}))}else u.push(n.split("").map(function(e,t){return l+1+t})),o.push(n);u[o.length-1].push(l+1+n.length),l=l+1+n.length}),[o,u]},u=(e.findIdxForCursor=function(e,t,n,a,u){var l=a.fontSize;s(e,a);var c=i,d=o(e,c,a,u),f=r(d,2),p=f[0],h=(f[1],1.3*l),m=void 0;return p.forEach(function(r,a){var i=t[0]+10,s=t[1]+l+a*h;n&&n.y<=s&&n.y>=s-h&&r.split("").forEach(function(t,a){var s=e.measureText(r.slice(0,a)).width,o=e.measureText(r.slice(0,a+1)).width,l=n.x-i;l>=s&&o>=l&&(m=u.indexOf(r)+a)})}),void 0!==m?m+1:null},e.coordsForLine=function(e,t,n){var r=t.fontSize,a=1.3*r;return{x:e[0]+10,y:e[1]+r+n*a}}),l=e.findPosForCursor=function(e,t,n,a){var u=n.fontSize;s(e,n);var l=i,c=o(e,l,u,a),d=r(c,2),f=(d[0],d[1]);if(0===t)return{lineNo:0,idxInLine:0,line:[""]};var p=f.find(function(e){return-1!==e.indexOf(t)}),h=void 0;if(p){var m=f.indexOf(p),g=p.indexOf(t);p.map(function(e){return a[e-1]}).join("");h={lineNo:m,idxInLine:g,line:p}}return h};e.findCoordsForPos=function(e,t,n,r,a){var i=n.fontSize;s(e,n);var o=a.lineNo,l=a.idxInLine,c=a.line,d=c.map(function(e){return r[e-1]}).join(""),f=u(t,n,o),p=f.x,h=f.y,m=e.measureText(d.slice(0,l+1)).width;return{x:p+m,y1:h-i+7,y2:h+7}},e.findRectsForSelection=function(e,t,n,a,c,d){var f=c.fontSize;s(e,c);var p=n,h=a;if(p>h){var m=[h,p];p=m[0],h=m[1]}var g=l(e,p,c,d),v=l(e,h,c,d);if(g&&v){var y=o(e,i,c,d),x=r(y,2),C=(x[0],x[1]);if(g.lineNo===v.lineNo){var E=C.find(function(e){return-1!==e.indexOf(p+1)}),S=E.map(function(e){return d[e-1]}).join(""),w=u(t,c,g.lineNo),b=w.x,_=w.y,I=e.measureText(S.slice(0,g.idxInLine)).width,P=e.measureText(S.slice(g.idxInLine,v.idxInLine)).width;return[{x1:b+I,x2:b+I+P,y1:_-f+7,y2:_+7}]}var T=Array.apply(0,Array(v.lineNo-g.lineNo+1)).map(function(e,t){return t+g.lineNo});return T.map(function(n){var r=u(t,c,n),a=r.x,i=r.y,s=void 0,o=void 0;if(n==g.lineNo){var l=C.find(function(e){return-1!==e.indexOf(p+1)}),m=l.map(function(e){return d[e-1]}).join("");s=e.measureText(m.slice(0,g.idxInLine)).width,o=e.measureText(m.slice(g.idxInLine)).width}else if(n===v.lineNo){var y=C.find(function(e){return-1!==e.indexOf(h)}),x=y.map(function(e){return d[e-1]}).join("");s=0,o=e.measureText(x.slice(0,v.idxInLine)).width}else{var E=C[n],S=E.map(function(e){return d[e-1]}).join("");s=0,o=e.measureText(S).width;
}return{x1:a+s,x2:a+s+o,y1:i-f+7,y2:i+7}})}},e.addText=function(e,t,n,a){var l=t.fontSize;s(e,t);var c=n.slice(),d=i,f=o(e,d,t,a),p=r(f,2),h=p[0],m=(p[1],1.3*l);h.forEach(function(n,r){var a=u(c,t,r),i=a.x,s=a.y;e.fillText(n,i,s,c[2]-20)});var g=h.length*m;return c[3]=g+10,c}}),require.register("util/textEditor.js",function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){r(this,e),this.component=t,this.cursor=0,this.cursor1=null,this.cursor2=null,this.showCursor=!1}return a(e,[{key:"toggleCursor",value:function(){this.showCursor=!this.showCursor}},{key:"setFromInput",value:function(e,t){e===t?(this.cursor=e,this.cursor1=null,this.cursor2=null):(this.cursor=null,this.cursor1=e,this.cursor2=t+1)}},{key:"setSelection",value:function(e,t,n){this.cursor1=e,this.cursor2=t,n.setSelectionRange(e,t-1)}},{key:"setCursor",value:function(e,t){this.cursor=e||this.cursor,this.cursor1=null,this.cursor2=null,t.setSelectionRange(this.cursor,this.cursor)}}]),e}();e["default"]=i}),require.register("util/unsplash.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=[{url:"https://images.unsplash.com/photo-1461016951828-c09537329b3a?fm=jpg",tags:["field","landscape","sunlight"]},{url:"https://images.unsplash.com/photo-1461295025362-7547f63dbaea?fm=jpg",tags:["crops"]},{url:"https://images.unsplash.com/photo-1465326117523-6450112b60b2?fm=jpg",tags:["forest","hill"]},{url:"https://images.unsplash.com/photo-1458640904116-093b74971de9?fm=jpg",tags:["dark","field"]},{url:"https://images.unsplash.com/photo-1447969025943-8219c41ea47a?fm=jpg",tags:["cat","kitten"]},{url:"https://images.unsplash.com/photo-1421749810611-438cc492b581?fm=jpg",tags:["water","landscape"]},{url:"https://images.unsplash.com/photo-1449960238630-7e720e630019?fm=jpg",tags:["water","seaside"]},{url:"https://images.unsplash.com/photo-1433190152045-5a94184895da?fm=jpg",tags:["water","cliff"]}];e.getPopularImages=function(){return Promise.resolve(r)},e.searchImages=function(e){var t=r.filter(function(t){return t.tags.some(function(t){return-1!==t.indexOf(e)})});return Promise.resolve(t)}});