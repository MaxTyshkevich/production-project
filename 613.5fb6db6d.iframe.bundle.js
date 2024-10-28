"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[613],{"./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ArticleDetailsPage_ArticleDetailsPage});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Article=__webpack_require__("./src/entities/Article/index.ts"),react_router=__webpack_require__("./node_modules/react-router/index.js"),useAsyncStore=__webpack_require__("./src/shared/hooks/useAsyncStore.tsx"),Text=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./src/shared/ui/Text/Text.tsx")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CommentList_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentList/CommentList.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CommentList_module.Z,options);const CommentList_CommentList_module=CommentList_module.Z&&CommentList_module.Z.locals?CommentList_module.Z.locals:void 0;var Skeleton=__webpack_require__("./src/shared/ui/Skeleton/Skeleton.tsx"),AppLink=__webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"),routeConfig=__webpack_require__("./src/shared/config/routeConfig/routeConfig.tsx"),Avatar=__webpack_require__("./src/shared/ui/Avatar/Avatar.tsx"),CommentCard_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss"),CommentCard_module_options={};CommentCard_module_options.styleTagTransform=styleTagTransform_default(),CommentCard_module_options.setAttributes=setAttributesWithoutAttributes_default(),CommentCard_module_options.insert=insertBySelector_default().bind(null,"head"),CommentCard_module_options.domAPI=styleDomAPI_default(),CommentCard_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CommentCard_module.Z,CommentCard_module_options);const CommentCard_CommentCard_module=CommentCard_module.Z&&CommentCard_module.Z.locals?CommentCard_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CommentCard=(0,react.memo)((function(_ref){var comment=_ref.comment,isLoading=_ref.isLoading,className=_ref.className;return isLoading&&((0,classNames.A)(CommentCard_CommentCard_module.commentcard,{},[CommentCard_CommentCard_module.loadin,className]),CommentCard_CommentCard_module.header,Skeleton.O,Skeleton.O,CommentCard_CommentCard_module.username,Skeleton.O,CommentCard_CommentCard_module.text),comment?(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(CommentCard_CommentCard_module.commentcard,{},[className]),children:[(0,jsx_runtime.jsxs)(AppLink.F,{to:""+routeConfig.h3.profile+comment.user.id,className:CommentCard_CommentCard_module.header,children:[comment.user.avatar?(0,jsx_runtime.jsx)(Avatar.q,{size:30,src:comment.user.avatar}):null,(0,jsx_runtime.jsx)(Text.xv,{className:CommentCard_CommentCard_module.username,title:comment.user.username})]}),(0,jsx_runtime.jsx)(Text.xv,{className:CommentCard_CommentCard_module.text,text:comment.text})]}):null}));try{CommentCard.displayName="CommentCard",CommentCard.__docgenInfo={description:"",displayName:"CommentCard",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},comment:{defaultValue:null,description:"",name:"comment",required:!1,type:{name:"IComment"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entities/Comment/ui/CommentCard/CommentCard.tsx#CommentCard"]={docgenInfo:CommentCard.__docgenInfo,name:"CommentCard",path:"src/entities/Comment/ui/CommentCard/CommentCard.tsx#CommentCard"})}catch(__react_docgen_typescript_loader_error){}var CommentList=(0,react.memo)((function(_ref){var className=_ref.className,isLoading=_ref.isLoading,comments=_ref.comments,t=(0,useTranslation.$)("article").t;return isLoading?(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(CommentList_CommentList_module.commentlist,{},[className]),children:[(0,jsx_runtime.jsx)(CommentCard,{isLoading:!0}),(0,jsx_runtime.jsx)(CommentCard,{isLoading:!0}),(0,jsx_runtime.jsx)(CommentCard,{isLoading:!0})]}):(0,jsx_runtime.jsx)("div",{className:(0,classNames.A)(CommentList_CommentList_module.commentlist,{},[className]),children:comments?comments.map((function(comment){return(0,jsx_runtime.jsx)(CommentCard,{comment,isLoading:!0},comment.id)})):(0,jsx_runtime.jsx)(Text.xv,{text:t("Комментарии отсутствуют")})})}));try{CommentList.displayName="CommentList",CommentList.__docgenInfo={description:"",displayName:"CommentList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},comments:{defaultValue:null,description:"",name:"comments",required:!1,type:{name:"IComment[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entities/Comment/ui/CommentList/CommentList.tsx#CommentList"]={docgenInfo:CommentList.__docgenInfo,name:"CommentList",path:"src/entities/Comment/ui/CommentList/CommentList.tsx#CommentList"})}catch(__react_docgen_typescript_loader_error){}var useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),AddCommentFormAsync=(__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),(0,react.lazy)((function(){return new Promise((function(resolve){setTimeout((function(){return resolve(__webpack_require__.e(792).then(__webpack_require__.bind(__webpack_require__,"./src/features/AddCommentForm/ui/AddCommentForm.tsx")))}),1500)}))})));try{AddCommentFormAsync.displayName="AddCommentFormAsync",AddCommentFormAsync.__docgenInfo={description:"",displayName:"AddCommentFormAsync",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSendComment:{defaultValue:null,description:"",name:"onSendComment",required:!0,type:{name:"(text: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/AddCommentForm/ui/AddCommentForm.async.tsx#AddCommentFormAsync"]={docgenInfo:AddCommentFormAsync.__docgenInfo,name:"AddCommentFormAsync",path:"src/features/AddCommentForm/ui/AddCommentForm.async.tsx#AddCommentFormAsync"})}catch(__react_docgen_typescript_loader_error){}var Page=__webpack_require__("./src/widgets/Page/Page.tsx"),ArticleDetailsPage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss"),ArticleDetailsPage_module_options={};ArticleDetailsPage_module_options.styleTagTransform=styleTagTransform_default(),ArticleDetailsPage_module_options.setAttributes=setAttributesWithoutAttributes_default(),ArticleDetailsPage_module_options.insert=insertBySelector_default().bind(null,"head"),ArticleDetailsPage_module_options.domAPI=styleDomAPI_default(),ArticleDetailsPage_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ArticleDetailsPage_module.Z,ArticleDetailsPage_module_options);const ArticleDetailsPage_ArticleDetailsPage_module=ArticleDetailsPage_module.Z&&ArticleDetailsPage_module.Z.locals?ArticleDetailsPage_module.Z.locals:void 0;var articleDetailsCommentsSlice=__webpack_require__("./src/pages/ArticleDetailsPage/modal/slices/articleDetailsCommentsSlice.ts"),addCommentForArticle=(__webpack_require__("./src/pages/ArticleDetailsPage/modal/services/fetchCommentsByArticleId/fetchCommentsByArticleId.ts"),__webpack_require__("./src/pages/ArticleDetailsPage/modal/services/addCommentForArticle/addCommentForArticle.ts")),indext=__webpack_require__("./src/pages/ArticleDetailsPage/modal/slices/indext.ts"),getArticleRecommendationsIsLoading=function getArticleRecommendationsIsLoading(state){var _state$articleDetails,_state$articleDetails2;return null===(_state$articleDetails=state.articleDetailsPage)||void 0===_state$articleDetails||null===(_state$articleDetails2=_state$articleDetails.recommendations)||void 0===_state$articleDetails2?void 0:_state$articleDetails2.isLoading},articleDetailsPageRecomendationSlice=__webpack_require__("./src/pages/ArticleDetailsPage/modal/slices/articleDetailsPageRecomendationSlice.ts"),Button=(__webpack_require__("./src/pages/ArticleDetailsPage/modal/services/fetchArticleRecomendations/fetchArticleRecomendations.ts"),__webpack_require__("./src/shared/ui/Button/Button.tsx")),articleDetails=__webpack_require__("./src/entities/Article/modal/selectors/articleDetails.ts"),reselect_es=__webpack_require__("./node_modules/reselect/es/index.js"),User=__webpack_require__("./src/entities/User/index.tsx"),getCanEditArticle=(0,reselect_es.P1)(articleDetails.wq,User.m5,(function(article,user){var _article$user;return!(!article||!user)&&(null==article||null===(_article$user=article.user)||void 0===_article$user?void 0:_article$user.id)===(null==user?void 0:user.id)})),ArticleDetailsPageHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader.module.scss"),ArticleDetailsPageHeader_module_options={};ArticleDetailsPageHeader_module_options.styleTagTransform=styleTagTransform_default(),ArticleDetailsPageHeader_module_options.setAttributes=setAttributesWithoutAttributes_default(),ArticleDetailsPageHeader_module_options.insert=insertBySelector_default().bind(null,"head"),ArticleDetailsPageHeader_module_options.domAPI=styleDomAPI_default(),ArticleDetailsPageHeader_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ArticleDetailsPageHeader_module.Z,ArticleDetailsPageHeader_module_options);const ui_ArticleDetailsPageHeader_module=ArticleDetailsPageHeader_module.Z&&ArticleDetailsPageHeader_module.Z.locals?ArticleDetailsPageHeader_module.Z.locals:void 0;var ArticleDetailsPageHeader=(0,react.memo)((function(_ref){var className=_ref.className,t=(0,useTranslation.$)("article").t,navigate=(0,react_router.s0)(),isEdit=(0,es.v9)(getCanEditArticle),article=(0,es.v9)(articleDetails.wq),onBackToList=(0,react.useCallback)((function(){navigate(-1)}),[navigate]),onEditArticle=(0,react.useCallback)((function(){navigate(""+routeConfig.h3.article_details+(null==article?void 0:article.id)+"/edit")}),[null==article?void 0:article.id,navigate]);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ui_ArticleDetailsPageHeader_module.articledetailspageheader,{},[className]),children:[(0,jsx_runtime.jsx)(Button.zx,{theme:Button.bn.OUTLINE,onClick:onBackToList,children:t("Назад к списку")}),isEdit&&(0,jsx_runtime.jsx)(Button.zx,{theme:Button.bn.OUTLINE,onClick:onEditArticle,children:t("Редактировать ")})]})}));try{ArticleDetailsPageHeader.displayName="ArticleDetailsPageHeader",ArticleDetailsPageHeader.__docgenInfo={description:"",displayName:"ArticleDetailsPageHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader.tsx#ArticleDetailsPageHeader"]={docgenInfo:ArticleDetailsPageHeader.__docgenInfo,name:"ArticleDetailsPageHeader",path:"src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader.tsx#ArticleDetailsPageHeader"})}catch(__react_docgen_typescript_loader_error){}var reducer={articleDetailsPage:indext.M},ArticleDetailsPage=function ArticleDetailsPage(_ref){var className=_ref.className;_ref.children;(0,useAsyncStore.J)({initialReducers:reducer,removeAfterUnmount:!0});var t=(0,useTranslation.$)("article").t,dispatch=(0,useAppDispatch.T)(),id=(0,react_router.UO)().id,comments=(0,es.v9)(articleDetailsCommentsSlice.l.selectAll),recommendationsIsLoading=(0,es.v9)(getArticleRecommendationsIsLoading),recommendations=(0,es.v9)(articleDetailsPageRecomendationSlice.R.selectAll),onSendComment=(0,react.useCallback)((function(text){dispatch((0,addCommentForArticle.j)(text))}),[dispatch]);return(0,react.useEffect)((function(){0}),[]),id?(0,jsx_runtime.jsxs)(Page.T,{className:(0,classNames.A)("",{},[className]),children:[(0,jsx_runtime.jsx)(ArticleDetailsPageHeader,{}),(0,jsx_runtime.jsx)(Article.D0,{id}),(0,jsx_runtime.jsx)(Text.xv,{title:t("Рекомендуем"),size:Text.yH.L,className:ArticleDetailsPage_ArticleDetailsPage_module.recommendArticles}),(0,jsx_runtime.jsx)(Article.wD,{articles:recommendations,isLoading:recommendationsIsLoading,className:ArticleDetailsPage_ArticleDetailsPage_module.recommendations,target:"_blank"}),(0,jsx_runtime.jsx)(Text.xv,{title:t("Комментарии"),size:Text.yH.L,className:ArticleDetailsPage_ArticleDetailsPage_module.commendTitle}),(0,jsx_runtime.jsx)(AddCommentFormAsync,{onSendComment}),(0,jsx_runtime.jsx)(CommentList,{comments})]}):(0,jsx_runtime.jsx)(Page.T,{children:t("Статья не найдена!")})};ArticleDetailsPage.displayName="ArticleDetailsPage";const ArticleDetailsPage_ArticleDetailsPage=(0,react.memo)(ArticleDetailsPage);try{ArticleDetailsPage.displayName="ArticleDetailsPage",ArticleDetailsPage.__docgenInfo={description:"",displayName:"ArticleDetailsPage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx#ArticleDetailsPage"]={docgenInfo:ArticleDetailsPage.__docgenInfo,name:"ArticleDetailsPage",path:"src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx#ArticleDetailsPage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentCard/CommentCard.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-entities-Comment-ui-CommentCard-CommentCard-module__commentcard--TJVKj{padding:10px;border:1px solid var(--primary-color)}.src-entities-Comment-ui-CommentCard-CommentCard-module__header--dsH_3{display:flex;align-items:center}.src-entities-Comment-ui-CommentCard-CommentCard-module__username--dw82W{margin-left:10px}.src-entities-Comment-ui-CommentCard-CommentCard-module__text--Ks7Ky{margin-top:10px}.src-entities-Comment-ui-CommentCard-CommentCard-module__loading--V0iZ1{border:none}","",{version:3,sources:["webpack://./src/entities/Comment/ui/CommentCard/CommentCard.module.scss"],names:[],mappings:"AAAA,4EACI,YAAA,CACA,qCAAA,CAGJ,uEACI,YAAA,CACA,kBAAA,CAGJ,yEACI,gBAAA,CAGJ,qEACI,eAAA,CAGJ,wEACI,WAAA",sourcesContent:[".commentcard {\n    padding: 10px;\n    border: 1px solid var(--primary-color);\n}\n\n.header {\n    display: flex;\n    align-items: center;\n}\n\n.username {\n    margin-left: 10px;\n}\n\n.text {\n    margin-top: 10px;\n}\n\n.loading {\n    border: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={commentcard:"src-entities-Comment-ui-CommentCard-CommentCard-module__commentcard--TJVKj",header:"src-entities-Comment-ui-CommentCard-CommentCard-module__header--dsH_3",username:"src-entities-Comment-ui-CommentCard-CommentCard-module__username--dw82W",text:"src-entities-Comment-ui-CommentCard-CommentCard-module__text--Ks7Ky",loading:"src-entities-Comment-ui-CommentCard-CommentCard-module__loading--V0iZ1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Comment/ui/CommentList/CommentList.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-entities-Comment-ui-CommentList-CommentList-module__commentlist--r4kPh{display:flex;flex-direction:column;row-gap:18px}","",{version:3,sources:["webpack://./src/entities/Comment/ui/CommentList/CommentList.module.scss"],names:[],mappings:"AAAA,4EACI,YAAA,CACA,qBAAA,CACA,YAAA",sourcesContent:[".commentlist {\n    display: flex;\n    flex-direction: column;\n    row-gap: 18px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={commentlist:"src-entities-Comment-ui-CommentList-CommentList-module__commentlist--r4kPh"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__articledetailspage--lU75T{min-height:100%}.src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__commendTitle--WKDJ3{margin-top:15px}.src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__recommendations--NwQlS{margin-top:20px;flex-wrap:nowrap;overflow-y:hidden;overflow-x:auto}","",{version:3,sources:["webpack://./src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss"],names:[],mappings:"AAAA,yGACI,eAAA,CAGJ,mGACI,eAAA,CAGJ,sGACI,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA",sourcesContent:[".articledetailspage {\n    min-height: 100%;\n}\n\n.commendTitle {\n    margin-top: 15px;\n}\n\n.recommendations {\n    margin-top: 20px;\n    flex-wrap: nowrap;\n    overflow-y: hidden;\n    overflow-x: auto;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={articledetailspage:"src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__articledetailspage--lU75T",commendTitle:"src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__commendTitle--WKDJ3",recommendations:"src-pages-ArticleDetailsPage-ui-ArticleDetailsPage-ArticleDetailsPage-module__recommendations--NwQlS"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-ArticleDetailsPage-ui-ArticleDetailsPageHeader-ui-ArticleDetailsPageHeader-module__articledetailspageheader--Cupf1{display:flex;align-items:center;justify-content:space-between}","",{version:3,sources:["webpack://./src/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader.module.scss"],names:[],mappings:"AAAA,8HACI,YAAA,CACA,kBAAA,CACA,6BAAA",sourcesContent:[".articledetailspageheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={articledetailspageheader:"src-pages-ArticleDetailsPage-ui-ArticleDetailsPageHeader-ui-ArticleDetailsPageHeader-module__articledetailspageheader--Cupf1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);