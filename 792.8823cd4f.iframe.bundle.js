"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[792],{"./src/features/AddCommentForm/ui/AddCommentForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ui_AddCommentForm});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts"),Input=__webpack_require__("./src/shared/ui/Input/Input.tsx"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),useAsyncStore=__webpack_require__("./src/shared/hooks/useAsyncStore.tsx"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AddCommentForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AddCommentForm/ui/AddCommentForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AddCommentForm_module.Z,options);const ui_AddCommentForm_module=AddCommentForm_module.Z&&AddCommentForm_module.Z.locals?AddCommentForm_module.Z.locals:void 0;var addCommentFormSlice=__webpack_require__("./src/features/AddCommentForm/modal/slice/addCommentFormSlice.ts"),getAddCommentFormText=function getAddCommentFormText(state){var _state$addCommentForm;return(null===(_state$addCommentForm=state.addCommentForm)||void 0===_state$addCommentForm?void 0:_state$addCommentForm.text)||""},getAddCommentFormError=function getAddCommentFormError(state){var _state$addCommentForm2;return null===(_state$addCommentForm2=state.addCommentForm)||void 0===_state$addCommentForm2?void 0:_state$addCommentForm2.error},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),reducers={addCommentForm:addCommentFormSlice.sM};const ui_AddCommentForm=(0,react.memo)((function(_ref){var className=_ref.className,onSendComment=_ref.onSendComment;(0,useAsyncStore.J)({initialReducers:reducers,removeAfterUnmount:!0});var t=(0,useTranslation.$)().t,dispatch=(0,useAppDispatch.T)(),text=(0,es.v9)(getAddCommentFormText),onCommentTextChange=((0,es.v9)(getAddCommentFormError),(0,react.useCallback)((function(value){dispatch(addCommentFormSlice.yc.setText(value))}),[dispatch])),onSendHandler=(0,react.useCallback)((function(){onSendComment(text||""),onCommentTextChange("")}),[onCommentTextChange,onSendComment,text]);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ui_AddCommentForm_module.addcommentform,{},[className]),children:[(0,jsx_runtime.jsx)(Input.I,{className:ui_AddCommentForm_module.input,placeholder:t("Введите текст комментария"),value:text,onChange:onCommentTextChange}),(0,jsx_runtime.jsx)(Button.zx,{theme:Button.bn.OUTLINE,onClick:onSendHandler,children:t("Отправить")})]})}))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AddCommentForm/ui/AddCommentForm.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-features-AddCommentForm-ui-AddCommentForm-module__addcommentform--EFtxx{border:1px solid var(--primary-color);padding:20px;display:flex;justify-content:space-between;align-items:center}.src-features-AddCommentForm-ui-AddCommentForm-module__input--m8Feq{flex-grow:1}","",{version:3,sources:["webpack://./src/features/AddCommentForm/ui/AddCommentForm.module.scss"],names:[],mappings:"AAAA,6EACI,qCAAA,CACA,YAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CAGJ,oEACI,WAAA",sourcesContent:[".addcommentform {\n    border: 1px solid var(--primary-color);\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.input {\n    flex-grow: 1;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={addcommentform:"src-features-AddCommentForm-ui-AddCommentForm-module__addcommentform--EFtxx",input:"src-features-AddCommentForm-ui-AddCommentForm-module__input--m8Feq"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);