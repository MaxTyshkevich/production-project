"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[803],{"./src/pages/ProfilePage/ui/ProfilePage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ui_ProfilePage});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),useAsyncStore=__webpack_require__("./src/shared/hooks/useAsyncStore.tsx"),profileSlice=__webpack_require__("./src/entities/Profile/model/slice/profileSlice.ts"),Profile=__webpack_require__("./src/entities/Profile/index.ts"),useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),getProfile=function getProfile(state){return state.profile||{readonly:!0,isLoading:!1,error:void 0,data:void 0,form:void 0}},injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ProfilePage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProfilePage_module.Z,options);const ui_ProfilePage_module=ProfilePage_module.Z&&ProfilePage_module.Z.locals?ProfilePage_module.Z.locals:void 0;var Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),ProfilePageHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss"),ProfilePageHeader_module_options={};ProfilePageHeader_module_options.styleTagTransform=styleTagTransform_default(),ProfilePageHeader_module_options.setAttributes=setAttributesWithoutAttributes_default(),ProfilePageHeader_module_options.insert=insertBySelector_default().bind(null,"head"),ProfilePageHeader_module_options.domAPI=styleDomAPI_default(),ProfilePageHeader_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProfilePageHeader_module.Z,ProfilePageHeader_module_options);const ProfilePageHeader_ProfilePageHeader_module=ProfilePageHeader_module.Z&&ProfilePageHeader_module.Z.locals?ProfilePageHeader_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProfilePageHeader=function ProfilePageHeader(props){var className=props.className,t=(0,useTranslation.$)("profile").t,readonly=(0,es.v9)(Profile.Xh),dispatch=(0,useAppDispatch.T)(),onEdit=(0,react.useCallback)((function(){dispatch(Profile.ef.setReadonly(!1))}),[dispatch]),onCancelEdit=(0,react.useCallback)((function(){dispatch(Profile.ef.cancelEdit())}),[dispatch]),onSave=(0,react.useCallback)((function(){dispatch((0,Profile.y)())}),[dispatch]);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ProfilePageHeader_ProfilePageHeader_module.ProfilePageHeader,{},[className]),children:[(0,jsx_runtime.jsx)(Text.xv,{title:t("Профиль")}),readonly?(0,jsx_runtime.jsx)(Button.zx,{className:ProfilePageHeader_ProfilePageHeader_module.editBtn,theme:Button.bn.OUTLINE,onClick:onEdit,children:t("Редактировать")}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.zx,{className:ProfilePageHeader_ProfilePageHeader_module.editBtn,theme:Button.bn.OUTLINE_RED,onClick:onCancelEdit,children:t("Отменить")}),(0,jsx_runtime.jsx)(Button.zx,{className:ProfilePageHeader_ProfilePageHeader_module.saveBtn,theme:Button.bn.OUTLINE,onClick:onSave,children:t("Сохранить")})]})]})};ProfilePageHeader.displayName="ProfilePageHeader";try{ProfilePageHeader.displayName="ProfilePageHeader",ProfilePageHeader.__docgenInfo={description:"",displayName:"ProfilePageHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.tsx#ProfilePageHeader"]={docgenInfo:ProfilePageHeader.__docgenInfo,name:"ProfilePageHeader",path:"src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.tsx#ProfilePageHeader"})}catch(__react_docgen_typescript_loader_error){}var reducers={profile:profileSlice.Cn},ProfilePage=function ProfilePage(_ref){var className=_ref.className;(0,useAsyncStore.J)({initialReducers:reducers,removeAfterUnmount:!0});var dispath=(0,useAppDispatch.T)(),_useSelector=(0,es.v9)(getProfile),form=_useSelector.form,error=_useSelector.error,isLoading=_useSelector.isLoading,readonly=_useSelector.readonly;return(0,react.useEffect)((function(){dispath((0,Profile.bN)())}),[dispath]),(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ui_ProfilePage_module.profile,{},[className]),children:[(0,jsx_runtime.jsx)(ProfilePageHeader,{}),(0,jsx_runtime.jsx)(Profile.PP,{data:form,error,readonly,isLoading})]})};ProfilePage.displayName="ProfilePage";const ui_ProfilePage=ProfilePage;try{ProfilePage.displayName="ProfilePage",ProfilePage.__docgenInfo={description:"",displayName:"ProfilePage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/ProfilePage/ui/ProfilePage.tsx#ProfilePage"]={docgenInfo:ProfilePage.__docgenInfo,name:"ProfilePage",path:"src/pages/ProfilePage/ui/ProfilePage.tsx#ProfilePage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePage.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-ProfilePage-ui-ProfilePage-module__profile--HiRjw{color:red}","",{version:3,sources:["webpack://./src/pages/ProfilePage/ui/ProfilePage.module.scss"],names:[],mappings:"AAAA,6DACI,SAAA",sourcesContent:[".profile {\n    color: red;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={profile:"src-pages-ProfilePage-ui-ProfilePage-module__profile--HiRjw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__ProfilePageHeader--FPJSg{display:flex;margin-bottom:20px}.src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__ProfilePageHeader--FPJSg .src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__editBtn--vP5lJ{margin-left:auto;margin-right:10px}","",{version:3,sources:["webpack://./src/pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.module.scss"],names:[],mappings:"AAAA,+FACI,YAAA,CACA,kBAAA,CAEA,oLACI,gBAAA,CACA,iBAAA",sourcesContent:[".ProfilePageHeader {\n    display: flex;\n    margin-bottom: 20px;\n\n    .editBtn {\n        margin-left: auto;\n        margin-right: 10px;\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ProfilePageHeader:"src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__ProfilePageHeader--FPJSg",editBtn:"src-pages-ProfilePage-ui-ProfilePageHeader-ProfilePageHeader-module__editBtn--vP5lJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);