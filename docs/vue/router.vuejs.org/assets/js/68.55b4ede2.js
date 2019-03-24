(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{326:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),e("p",[t._v("실제 예제는 "),e("a",{attrs:{href:"http://jsfiddle.net/yyx990803/4xfa2f19/",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("에 있습니다.")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("예:")]),t._v(" "),t._m(7),t._v(" "),e("p",[e("code",[t._v("$route.params")]),t._v(" 외에도 "),e("code",[t._v("$route")]),t._v(" 객체는 "),e("code",[t._v("$route.query")]),t._v(" (URL에 쿼리가 있는 경우), "),e("code",[t._v("$route.hash")]),t._v(" 등의 유용한 정보를 제공합니다. "),e("router-link",{attrs:{to:"./../../api/#the-route-object"}},[t._v("API 레퍼런스")]),t._v("에서 전체 세부 정보를 확인할 수 있습니다.")],1),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[e("code",[t._v("vue-router")]),t._v("는 라우트 매칭 엔진으로 "),e("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-to-regexp"),e("OutboundLink")],1),t._v("를 사용하기 때문에 선택적 동적 세그먼트, 0개 이상/하나 이상의 요구 사항, 심지어 커스텀 정규식 패턴과 같은 많은 고급 매칭 패턴을 지원합니다. 이 고급 패턴들과 "),e("code",[t._v("vue-router")]),t._v("에서 사용하는 "),e("a",{attrs:{href:"https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("예제"),e("OutboundLink")],1),t._v("에 대한 "),e("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp#parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("문서"),e("OutboundLink")],1),t._v("를 확인하십시오.")]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("동일한 URL이 여러 라우트와 일치하는 경우가 있습니다. 이 경우 일치하는 우선 순위는 라우트 정의의 순서에 따라 결정됩니다. 즉, 경로가 더 먼저 정의 될수록 우선 순위가 높아집니다.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"동적-라우트-매칭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동적-라우트-매칭","aria-hidden":"true"}},[this._v("#")]),this._v(" 동적 라우트 매칭")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("주어진 패턴을 가진 라우트를 동일한 컴포넌트에 매핑해야하는 경우가 자주 있습니다. 예를 들어 모든 사용자에 대해 동일한 레이아웃을 가지지만 하지만 다른 사용자 ID로 렌더링되어야하는 "),s("code",[this._v("User")]),this._v(" 컴포넌트가 있을 수 있습니다. "),s("code",[this._v("vue-router")]),this._v("에서 우리는 경로에서 동적 세그먼트를 사용하여 다음을 할 수 있습니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>User</div>'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 동적 세그먼트는 콜론으로 시작합니다.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("이제 "),s("code",[this._v("/user/foo")]),this._v("와 "),s("code",[this._v("/user/bar")]),this._v(" 같은 URL은 모두 같은 경로에 매핑됩니다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("동적 세그먼트는 콜론 "),s("code",[this._v(":")]),this._v("으로 표시됩니다. 라우트가 일치하면 동적 세그먼트의 값은 모든 컴포넌트에서 "),s("code",[this._v("this.$route.params")]),this._v("로 표시됩니다. 그러므로 "),s("code",[this._v("User")]),this._v("의 템플릿을 다음과 같이 갱신하여 현재 사용자 ID를 표현할 수 있습니다 :")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>User {{ $route.params.id }}</div>'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("동일한 라우트에 여러 동적 세그먼트를 가질 수 있으며, "),s("code",[this._v("$route.params")]),this._v("의 해당 필드에 매핑됩니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("패턴")]),t._v(" "),e("th",[t._v("일치하는 패스")]),t._v(" "),e("th",[t._v("$route.params")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("/user/:username")]),t._v(" "),e("td",[t._v("/user/evan")]),t._v(" "),e("td",[e("code",[t._v("{ username: 'evan' }")])])]),t._v(" "),e("tr",[e("td",[t._v("/user/:username/post/:post_id")]),t._v(" "),e("td",[t._v("/user/evan/post/123")]),t._v(" "),e("td",[e("code",[t._v("{ username: 'evan', post_id: '123' }")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"params-변경-사항에-반응하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params-변경-사항에-반응하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Params 변경 사항에 반응하기")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("매개 변수와 함께 라우트를 사용할 때 주의 해야할 점은 사용자가 "),e("code",[t._v("/user/foo")]),t._v("에서 "),e("code",[t._v("/user/bar")]),t._v("로 이동할 때 "),e("strong",[t._v("동일한 컴포넌트 인스턴스가 재사용된다는 것입니다.")]),t._v(" 두 라우트 모두 동일한 컴포넌트를 렌더링하므로 이전 인스턴스를 삭제 한 다음 새 인스턴스를 만드는 것보다 효율적입니다. "),e("strong",[t._v("그러나 이는 또한 컴포넌트의 라이프 사이클 훅이 호출되지 않음을 의미합니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("동일한 컴포넌트의 params 변경 사항에 반응하려면 "),s("code",[this._v("$route")]),this._v(" 객체를 보면됩니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$route'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 경로 변경에 반응하여...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("또는 2.2에서 소개된 "),s("code",[this._v("beforeRouteUpdate")]),this._v(" 가드를 사용하십시오.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react to route changes...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// don't forget to call next()")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"고급-매칭-패턴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#고급-매칭-패턴","aria-hidden":"true"}},[this._v("#")]),this._v(" 고급 매칭 패턴")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"매칭-우선순위"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매칭-우선순위","aria-hidden":"true"}},[this._v("#")]),this._v(" 매칭 우선순위")])}],!1,null,null,null);s.default=n.exports}}]);