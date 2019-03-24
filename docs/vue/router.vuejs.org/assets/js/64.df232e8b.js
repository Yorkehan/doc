(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{330:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"라우트-메타-필드"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#라우트-메타-필드","aria-hidden":"true"}},[t._v("#")]),t._v(" 라우트 메타 필드")]),t._v(" "),n("p",[t._v("라우트를 정의 할 때 "),n("code",[t._v("meta")]),t._v(" 필드를 포함시킬 수 있습니다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 메타 필드")]),t._v("\n          meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" requiresAuth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("그렇다면 이 "),n("code",[t._v("메타")]),t._v("필드에 어떻게 접근할까요?")]),t._v(" "),n("p",[t._v("첫째,"),n("code",[t._v("routes")]),t._v(" 설정의 각 라우트 객체를 "),n("strong",[t._v("라우트 레코드")]),t._v(" 라고합니다. 라우트 레코드는 중첩 될 수 있습니다. 따라서 라우트가 일치하면 둘 이상의 라우트 레코드와 잠재적으로 일치 할 수 있습니다.")]),t._v(" "),n("p",[t._v("예를 들어, 위의 라우트 구성에서 URL "),n("code",[t._v("/foo/bar")]),t._v("는 상위 라우트 레코드와 하위 라우트 레코드 모두와 일치합니다.")]),t._v(" "),n("p",[t._v("라우트와 일치하는 모든 라우트 레코드는 "),n("code",[t._v("$route")]),t._v(" 객체(그리고 네비게이션 가드의 라우트 객체)에 "),n("code",[t._v("$route.matched")]),t._v(" 배열로 노출됩니다. 그러므로 우리는 "),n("code",[t._v("$route.matched")]),t._v("를 반복하여 라우트 레코드의 메타 필드를 검사 할 필요가 있습니다.")]),t._v(" "),n("p",[t._v("예제 사용 사례는 글로벌 네비게이션 가드에서 메타 필드를 확인하는 것입니다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matched"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" record"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requiresAuth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("loggedIn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 반드시 next()를 호출하십시오!")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);