(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1325:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1326);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(22),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(504),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(493),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(220),_storybook_theming__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12);Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.configureActions)({depth:1}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.create)({base:"light",brandUrl:"https://github.com/evargast/webpack-react-spectrum"})},docs:{container:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.DocsContainer,page:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.DocsPage}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(storyFn){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{theme:_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__.a,colorScheme:"light"},storyFn())}))},1326:function(module,exports,__webpack_require__){var api=__webpack_require__(50),content=__webpack_require__(1327);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1327:function(module,exports,__webpack_require__){(exports=__webpack_require__(51)(!1)).push([module.i,".StorybookProvider {\n    padding: 4.2rem;\n}\n\n#story-root {\n    padding-top: 4.2rem;\n}\n\n#story-root + div {\n    background-color: #f7f7f7;\n    border-color: #a7a7a7;\n    border-style: double;\n    margin-top: 6rem;\n    padding: 1rem;\n}\n\n#story-root + div h1 {\n    margin-top: 0.5rem !important;\n}\n",""]),module.exports=exports},1371:function(module,exports){},1383:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1384)],module)}.call(this,__webpack_require__(219)(module))},1384:function(module,exports,__webpack_require__){var map={"./components/App/App.story.tsx":1385,"./components/MenuDialog/MenuDialog.story.tsx":1402,"./components/TabsPicker/TabsPicker.story.tsx":1411};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1384},1385:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(495),withSourceLoader=__webpack_require__(68).withSource,__SOURCE_PREFIX__=(__webpack_require__(68).addSource,withSourceLoader=__webpack_require__(68).withSource,__webpack_require__(68).addSource,"/Users/evargast/Workspace/spectrum-examples/src/components/App"),__STORY__='import { storiesOf } from "@storybook/react";\nimport React from "react";\n\nimport App from "./App";\n\nconst stories = storiesOf("Storybook!", module);\n\nstories.add("App story", () => <App />);\n',__ADDS_MAP__={},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Storybook!",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/App.story.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/App.story.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.a,null);stories.add("App story",(function(){return _ref}))}.call(this,__webpack_require__(219)(module))},1402:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_MenuDialog__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(498),withSourceLoader=__webpack_require__(68).withSource,__SOURCE_PREFIX__=(__webpack_require__(68).addSource,withSourceLoader=__webpack_require__(68).withSource,__webpack_require__(68).addSource,"/Users/evargast/Workspace/spectrum-examples/src/components/MenuDialog"),__STORY__='import { storiesOf } from "@storybook/react";\nimport React from "react";\n\nimport MenuDialog from "./MenuDialog";\n\nconst stories = storiesOf("MenuDialog", module);\n\nstories.add("MenuDialog", () => <MenuDialog />);\n',__ADDS_MAP__={},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("MenuDialog",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/MenuDialog.story.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/MenuDialog.story.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuDialog__WEBPACK_IMPORTED_MODULE_2__.a,null);stories.add("MenuDialog",(function(){return _ref}))}.call(this,__webpack_require__(219)(module))},1411:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_TabsPicker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(500),withSourceLoader=__webpack_require__(68).withSource,__SOURCE_PREFIX__=(__webpack_require__(68).addSource,withSourceLoader=__webpack_require__(68).withSource,__webpack_require__(68).addSource,"/Users/evargast/Workspace/spectrum-examples/src/components/TabsPicker"),__STORY__='import { storiesOf } from "@storybook/react";\nimport React from "react";\n\nimport TabsPicker from "./TabsPicker";\n\nconst stories = storiesOf("TabsPicker", module);\n\nstories.add("TabsPicker", () => <TabsPicker />);\n',__ADDS_MAP__={},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("TabsPicker",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TabsPicker.story.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TabsPicker.story.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TabsPicker__WEBPACK_IMPORTED_MODULE_2__.a,null);stories.add("TabsPicker",(function(){return _ref}))}.call(this,__webpack_require__(219)(module))},495:function(module,__webpack_exports__,__webpack_require__){"use strict";var _adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(504),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(232),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(76),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),_ref=react__WEBPACK_IMPORTED_MODULE_5__.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_0__.a,{theme:_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__.a,colorScheme:"light"},react__WEBPACK_IMPORTED_MODULE_5__.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.b,null,react__WEBPACK_IMPORTED_MODULE_5__.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__.a,null,"Show menu"),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_5__.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__.a,null,"Cut"),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__.a,null,"Copy"),react__WEBPACK_IMPORTED_MODULE_5__.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__.a,null,"Paste")))),App=function(){return _ref};App.displayName="App",App.__docgenInfo={description:"",methods:[],displayName:"App"},__webpack_exports__.a=App,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/App/App.tsx"]={name:"App",docgenInfo:App.__docgenInfo,path:"src/components/App/App.tsx"})},498:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(38);var _adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(76),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(232),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(52),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(125),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(326),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(505),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(327),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _ref=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__.a,null,"Edit"),_ref2=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{key:"cut"},"Cut"),_ref3=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{key:"copy"},"Copy"),_ref4=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{key:"paste"},"Paste"),_ref5=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{key:"dialog"},"Dialog"),MenuDialog=function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(!1),2),isOpen=_useState2[0],setIsOpen=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__.b,null,_ref,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__.a,{onAction:function onMenuAction(key){"dialog"===key&&setIsOpen(!0)}},_ref2,_ref3,_ref4,_ref5)),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CustomDialog,{isOpen:isOpen,close:function close(){return setIsOpen(!1)}}))},_ref7=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__.a,null,"Internet Speed Test"),_ref8=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_5__.b,null,"Connection status: Connected"),_ref9=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_6__.a,null),_ref10=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__.b,null,"Start speed test?")),CustomDialog=function(_ref6){var isOpen=_ref6.isOpen,close=_ref6.close;return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_7__.b,{isOpen:isOpen},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,null),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_7__.a,null,_ref7,_ref8,_ref9,_ref10,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_8__.a,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__.b,{variant:"secondary",onPress:close},"Cancel"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__.b,{variant:"cta",onPress:close},"Confirm"))))};CustomDialog.displayName="CustomDialog",MenuDialog.__docgenInfo={description:"",methods:[],displayName:"MenuDialog"},__webpack_exports__.a=MenuDialog,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuDialog/MenuDialog.tsx"]={name:"MenuDialog",docgenInfo:MenuDialog.__docgenInfo,path:"src/components/MenuDialog/MenuDialog.tsx"})},500:function(module,__webpack_exports__,__webpack_require__){"use strict";var _adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1432),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(125),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(52),_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(328),_react_spectrum_tabs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(503),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_ref=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_0__.a,{theme:_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_1__.a,colorScheme:"light"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_react_spectrum_tabs__WEBPACK_IMPORTED_MODULE_6__.a,{"aria-label":"History of Ancient Rome"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{title:"Founding of Rome",key:"FoR"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__.a,{marginTop:"size-250",marginStart:"size-125"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__.b,null,"Arma virumque cano, Troiae qui primus ab oris."))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{title:"Monarchy and Republic",key:"MaR"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__.a,{marginTop:"size-250",marginStart:"size-125"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_5__.a,{label:"Choose frequency"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{key:"rarely"},"Rarely"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{key:"sometimes"},"Sometimes"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{key:"always"},"Always")))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_2__.a,{title:"Empire",key:"Emp"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_3__.a,{marginTop:"size-250",marginStart:"size-125"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_adobe_react_spectrum__WEBPACK_IMPORTED_MODULE_4__.b,null,"Alea jacta est."))))),TabsPicker=function(){return _ref};TabsPicker.displayName="TabsPicker",TabsPicker.__docgenInfo={description:"",methods:[],displayName:"TabsPicker"},__webpack_exports__.a=TabsPicker,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabsPicker/TabsPicker.tsx"]={name:"TabsPicker",docgenInfo:TabsPicker.__docgenInfo,path:"src/components/TabsPicker/TabsPicker.tsx"})},506:function(module,exports,__webpack_require__){__webpack_require__(507),__webpack_require__(671),__webpack_require__(672),__webpack_require__(1324),__webpack_require__(1325),module.exports=__webpack_require__(1383)},580:function(module,exports){}},[[506,1,2]]]);
//# sourceMappingURL=main.37a15d03c74413ac7b4d.bundle.js.map