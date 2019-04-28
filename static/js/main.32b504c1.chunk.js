(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,n){e.exports=n(87)},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(23),o=n.n(s),i=n(12),u=n(25),c=n(19),l=(n(38),n(90)),h=n(6),p=n(7),g=n(10),y=n(8),d=n(18),m=n(9),f=n(91),T=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).searchInput=e.urlTagName,n._handleKeyDown=n._handleKeyDown.bind(Object(d.a)(n)),n._handleChange=n._handleChange.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.props.urlTagName&&(this.searchInput=this.props.urlTagName)}},{key:"_handleKeyDown",value:function(e){"Enter"===e.key&&(e.preventDefault(),this.searchInput&&(this.props.fetchQuestions(this.searchInput),this.props.history.push("/"+this.searchInput)))}},{key:"_handleChange",value:function(e){this.searchInput=e.target.value}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.hasError&&r.a.createElement(f.a.Text,{className:"text-muted"},this.props.errorMessage),!this.props.hasError&&r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"formSearchTagControlId"},r.a.createElement(f.a.Label,null,"Search Trending problems by tag:"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Tag name",defaultValue:this.searchInput,onKeyDown:this._handleKeyDown,onChange:this._handleChange}),r.a.createElement(f.a.Text,{className:"text-muted"},void 0!==this.props.availableQuota&&"Free Search Quota used: "+this.props.availableQuota+"/"+this.props.totalQuota))))}}]),t}(r.a.Component),E=n(28),B=n.n(E),b="GET_QUESTIONS_BY_TAG";var q="RECEIVE_QUESTIONS_BY_TAG";var O="ERROR_RECEIVING_QUESTIONS_BY_TAG";function v(e,t){return{type:O,tag:e,errorMessage:t}}var I="UPDATE_SEARCH_VALUE_ON_HOME_PAGE";var j=function(e){return function(t){return t(function(e){return{type:b,tag:e}}(e)),B()("https://api.stackexchange.com/2.2/tags/".concat(e,"/faq?site=stackoverflow&filter=!9Z(-wwYGT")).then(function(e){return e.json()}).then(function(n){t("error_id"in n?v(e,n.error_message):function(e,t){return{type:q,tag:e,questions:t,receivedAt:Date.now()}}(e,n))}).catch(function(){return t(v(e))})}},k=Object(c.d)(Object(i.b)(function(e,t){var n,a,r=t.tagName,s=e.questionsByTag?e.questionsByTag.searchValue:"";return e.questionsByTag.hasOwnProperty("questionsByTags")&&e.questionsByTag.questionsByTags.hasOwnProperty(e.questionsByTag.currentTag)&&(n=e.questionsByTag.questionsByTags[e.questionsByTag.currentTag].quota_remaining,a=e.questionsByTag.questionsByTags[e.questionsByTag.currentTag].quota_max),{availableQuota:n,totalQuota:a,urlTagName:r,searchValue:s}},function(e){return{fetchQuestions:function(t){e(j(t))},updateSearchValue:function(t){e({type:I,searchValue:t})}}})(T)),w=n(92),_=n(89),S=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"setBody",value:function(){return this.props.truncateBody?this.createMarkup(this.props.body.substring(0,200).concat("...")):this.createMarkup(this.props.body)}},{key:"titleInBody",value:function(){return this.props.titleAsHeader?void 0:this.props.titleHasLink?r.a.createElement(u.b,{to:"".concat("/stackoverflow-basic-webapp","/question/")+this.props.questionId},r.a.createElement(w.a.Title,{dangerouslySetInnerHTML:this.createMarkup(this.props.title)})):r.a.createElement(w.a.Title,{dangerouslySetInnerHTML:this.createMarkup(this.props.title)})}},{key:"titleInHeader",value:function(){return this.props.titleAsHeader?this.props.titleHasLink?r.a.createElement(u.b,{to:"".concat("/stackoverflow-basic-webapp","/question/")+this.props.questionId},r.a.createElement(w.a.Header,null,r.a.createElement(w.a.Title,{dangerouslySetInnerHTML:this.createMarkup(this.props.title)}))):r.a.createElement(w.a.Header,null,r.a.createElement(w.a.Title,{dangerouslySetInnerHTML:this.createMarkup(this.props.title)})):void 0}},{key:"listTags",value:function(){return this.props.tags.map(function(e){return r.a.createElement(_.a,{key:e,pill:!0,variant:"secondary",style:{marginRight:5}},e)})}},{key:"render",value:function(){return r.a.createElement(w.a,{style:{marginBottom:20}},this.titleInHeader(),r.a.createElement(w.a.Body,null,this.titleInBody(),r.a.createElement(w.a.Text,{dangerouslySetInnerHTML:this.setBody()}),r.a.createElement(w.a.Text,null,r.a.createElement("a",{href:this.props.link,target:"blank",style:{textDecoration:"none"}},"StackOverflow"))),r.a.createElement(w.a.Body,null,this.listTags()))}}]),t}(r.a.Component),M=n(50),x=n.n(M),N=n(51),F=n.n(N),C=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(x.a,{active:!0,spinner:r.a.createElement(F.a,{color:"#36D7B7"})})}}]),t}(r.a.Component),D=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.questions,n=t?t.filter(function(t){return!e.props.filterBy||(-1!==t.title.indexOf(e.props.filterBy)||-1!==t.body.indexOf(e.props.filterBy))}).map(function(e){return r.a.createElement(S,{key:e.question_id,link:e.link,title:e.title,body:e.body,truncateBody:!0,titleHasLink:!0,questionId:e.question_id,tags:e.tags})}):[];return r.a.createElement(r.a.Fragment,null,t&&0===t.length&&r.a.createElement(f.a.Text,{className:"text-muted"},"No questions found for the given Tag!"),t&&0!==t.length&&0===n.length&&r.a.createElement(f.a.Text,{className:"text-muted"},"No matching questions found!"),t&&0!==t.length&&n.length>0&&r.a.createElement(f.a.Text,{className:"text-muted"},"Found: ",n.length," matches"),this.props.hasError&&r.a.createElement(f.a.Text,{className:"text-muted"},this.props.errorMessage),this.props.isFetching&&r.a.createElement(C,null),!this.props.isFetching&&!this.props.hasError&&r.a.createElement("ul",{style:{marginTop:20}},n))}}]),t}(r.a.Component),L=Object(i.b)(function(e){var t,n,a=!!e.questionsByTag&&e.questionsByTag.isFetching,r=!!e.questionsByTag&&e.questionsByTag.hasError,s=e.questionsByTag?e.questionsByTag.errorMessage:"";return e.questionsByTag.hasOwnProperty("questionsByTags")&&e.questionsByTag.questionsByTags.hasOwnProperty(e.questionsByTag.currentTag)&&(t=e.questionsByTag.questionsByTags[e.questionsByTag.currentTag].items,n=e.questionsByTag.filterBy),{isFetching:a,questions:t,filterBy:n,hasError:r,errorMessage:s}},function(){return{}})(D),Q=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e)))._handleChange=n._handleChange.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"_handleChange",value:function(e){this.props.filterList(e.target.value)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.showFilterTag&&r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"formFilterTagControlId"+this.props.filterType},r.a.createElement(f.a.Label,null,"Filter ",this.props.filterType,"s:"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Search string",onChange:this._handleChange}))))}}]),t}(r.a.Component),H="FILTER_QUESTIONS_BY_STRING";var R="FILTER_ANSWERS_BY_STRING";var A="GET_QUESTION_DETAILS";var V="RECEIVE_QUESTION_DETAILS";var G="ERROR_RECEIVING_QUESTION_DETAILS";function P(e,t){return{type:G,questionId:e,errorMessage:t}}var U=function(e){return function(t){return t(function(e){return{type:A,questionId:e}}(e)),B()("https://api.stackexchange.com/2.2/questions/".concat(e,"?order=desc&sort=activity&site=stackoverflow&filter=!51HTqDFxBs5q365jR-o6KJTubZZDbm.9HHcFra")).then(function(e){return e.json()}).then(function(n){t("error_id"in n?P(e,n.error_message):function(e,t){return{type:V,questionId:e,questionDetails:t,receivedAt:Date.now()}}(e,n))}).catch(function(){return t(P(e))})}},K=Object(i.b)(function(e){var t;return e.questionsByTag.hasOwnProperty("questionsByTags")&&e.questionsByTag.questionsByTags.hasOwnProperty(e.questionsByTag.currentTag)&&(t=e.questionsByTag.questionsByTags[e.questionsByTag.currentTag].items.length>0),{showFilterTag:t,filterType:"Question"}},function(e){return{filterList:function(t){e(function(e){return{type:H,searchString:e}}(t))}}})(Q);var Y=function(e){var t=e.match.params.tagName;return r.a.createElement(l.a,null,r.a.createElement("h1",{style:{marginTop:20,marginBottom:30}},"Stackoverflow Basic View"),r.a.createElement(k,{tagName:t}),r.a.createElement(K,null),r.a.createElement(L,null))},W=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"setBody",value:function(){return this.props.truncateBody?this.createMarkup(this.props.body.substring(0,200).concat("...")):this.createMarkup(this.props.body)}},{key:"render",value:function(){return r.a.createElement(w.a,{style:{marginBottom:20}},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Text,{dangerouslySetInnerHTML:this.setBody()}),r.a.createElement(w.a.Text,null,r.a.createElement("a",{href:this.props.link,target:"blank",style:{textDecoration:"none"}},"StackOverflow"))))}}]),t}(r.a.Component),J=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.answers,n=t?t.filter(function(t){return!e.props.filterBy||-1!==t.body.indexOf(e.props.filterBy)}).map(function(e){return r.a.createElement(W,{key:e.answer_id,link:e.link,body:e.body,truncateBody:!1,answerId:e.answer_id})}):[];return r.a.createElement(r.a.Fragment,null,t&&0===t.length&&r.a.createElement(f.a.Text,{className:"text-muted"},"There are no answers!"),t&&0!==t.length&&0===n.length&&r.a.createElement(f.a.Text,{className:"text-muted"},"No matching answers found!"),t&&0!==t.length&&n.length>0&&r.a.createElement(f.a.Text,{className:"text-muted"},"Found: ",n.length," matches"),r.a.createElement("ul",{style:{marginTop:20}},n))}}]),t}(r.a.Component),Z=Object(i.b)(function(e){var t;return e.questionsById.hasOwnProperty("questionsByIds")&&e.questionsById.questionsByIds.hasOwnProperty(e.questionsByTag.currentTag)&&e.questionsByTag.questionsByTags[e.questionsByTag.currentTag].hasOwnProperty("items")&&(t=e.questionsByTag.questionsByTags[e.questionsByTag.currentTag].items.length>0),{showFilterTag:t,filterType:"Answer"}},function(e){return{filterList:function(t){e(function(e){return{type:R,searchString:e}}(t))}}})(Q),$=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchQuestionData(this.props.questionId)}},{key:"render",value:function(){var e=this.props.question;return r.a.createElement(l.a,null,r.a.createElement("h1",{style:{marginTop:20,marginBottom:30}},"Stackoverflow Basic View"),this.props.hasError&&r.a.createElement(f.a.Text,{className:"text-muted"},this.props.errorMessage),this.props.isLoading&&r.a.createElement(C,null),!this.props.isLoading&&!this.props.hasError&&e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{key:e.question_id,questionId:e.question_id,link:e.link,title:e.title,body:e.body,titleAsHeader:!0}),r.a.createElement(Z,null),r.a.createElement(J,{filterBy:this.props.filterBy,answers:e.answers})))}}]),t}(r.a.Component),z=Object(i.b)(function(e,t){var n,a=t.match.params.questionId,r=!!e.questionsById&&e.questionsById.isFetching,s=e.questionsById?e.questionsById.filterBy:"",o=!!e.questionsById&&e.questionsById.hasError,i=e.questionsById?e.questionsById.errorMessage:"";return e.questionsById.hasOwnProperty("questionsByIds")&&e.questionsById.questionsByIds.hasOwnProperty(a)&&(n=e.questionsById.questionsByIds[a]),{isFetching:r,filterBy:s,questionId:a,question:n,hasError:o,errorMessage:i}},function(e){return{fetchQuestionData:function(t){return e(U(t))}}})($),X=n(21),ee=n(30);var te=Object(X.combineReducers)({questionsByTag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentTag:"",filterBy:"",searchValue:"",isFetching:!1,hasError:!1,errorMessage:"",questionsByTags:Object.assign({})},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object.assign({},e,{hasError:!0,isFetching:!1,currentTag:t.tag,filterBy:"",errorMessage:t.errorMessage});case b:return Object.assign({},e,{isFetching:!0,filterBy:"",currentTag:t.tag,hasError:!1,errorMessage:""});case q:return Object.assign({},e,{isFetching:!1,hasError:!1,errorMessage:"",filterBy:"",currentTag:t.tag,questionsByTags:Object.assign({},e.questionsByTags,Object(ee.a)({},t.tag,t.questions))});case H:return Object.assign({},e,{filterBy:t.searchString});case I:return Object.assign({},e,{searchValue:t.searchValue});default:return e}},questionsById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,hasError:!1,questionsByIds:{},errorMessage:"",currentQuestionId:"",filterBy:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object.assign({},e,{isFetching:!1,hasError:!0,currentQuestionId:t.questionId,errorMessage:t.errorMessage});case A:return Object.assign({},e,{isFetching:!0,currentQuestionId:t.questionId,errorMessage:"",hasError:!1});case V:return Object.assign({},e,{isFetching:!1,currentQuestionId:t.questionId,errorMessage:"",hasError:!1,questionsByIds:Object.assign({},e.questionsByIds,Object(ee.a)({},t.questionId,t.questionDetails.items[0]))});case R:return Object.assign({},e,{filterBy:t.searchString});default:return e}}}),ne=n(52),ae=n(53);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=function(e){var t=[ae.a],n=[X.applyMiddleware.apply(void 0,t)],a=ne.composeWithDevTools.apply(void 0,n);return Object(X.createStore)(te,e,a)}();o.a.render(r.a.createElement(i.a,{store:re},r.a.createElement(u.a,{basename:"/stackoverflow-basic-webapp"},r.a.createElement(c.a,{exact:!0,path:"".concat("/stackoverflow-basic-webapp","/:tagName?"),component:Y}),r.a.createElement(c.a,{path:"".concat("/stackoverflow-basic-webapp","/question/:questionId"),component:z}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.32b504c1.chunk.js.map