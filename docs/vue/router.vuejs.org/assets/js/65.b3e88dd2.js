(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{329:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[e("strong",[t._v("Params 또는 쿼리를 변경하면 네비게이션 가드가 실행되지 않습니다")]),t._v(". 단순히 "),e("router-link",{attrs:{to:"./../essentials/dynamic-matching.html#reacting-to-params-changes"}},[e("code",[t._v("$route")]),t._v(" 객체를 감시")]),t._v("하고 그 변화에 반응하십시오. 또는 컴포넌트 가드의 "),e("code",[t._v("beforeRouteUpdate")]),t._v("를 사용하십시오")],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),e("p",[t._v("모든 가드 기능은 세 가지 전달인자를 받습니다.")]),t._v(" "),e("ul",[e("li",[e("p",[t._m(6),t._v(": 대상 "),e("router-link",{attrs:{to:"./../../api/#the-route-object"}},[t._v("Route 객체")]),t._v(" 로 이동합니다.")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),e("p",[t._v("이러한 가드는 전역 이전 가드와 동일한 서명을 가집니다.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"네비게이션-가드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#네비게이션-가드","aria-hidden":"true"}},[this._v("#")]),this._v(" 네비게이션 가드")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("이름에서 알 수 있듯이 "),s("code",[this._v("vue-router")]),this._v("가 제공하는 네비게이션 가드는 주로 리디렉션하거나 취소하여 네비게이션을 보호하는 데 사용됩니다. 라우트 탐색 프로세스에 연결하는 방법에는 전역, 라우트별 또는 컴포넌트가 있습니다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"전역-가드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전역-가드","aria-hidden":"true"}},[this._v("#")]),this._v(" 전역 가드")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("router.beforeEach")]),this._v("를 사용하여 보호하기 이전에 전역 등록을 할 수 있습니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("네비게이션이 트리거될 때마다 가드가 작성 순서에 따라 호출되기 전의 모든 경우에 발생합니다. 가드는 비동기식으로 실행 될 수 있으며 네비게이션은 모든 훅이 해결되기 전까지 "),s("strong",[this._v("보류 중")]),this._v(" 으로 간주됩니다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("strong",[s("code",[this._v("to: 라우트")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[s("code",[this._v("from: 라우트")])]),this._v(": 현재 라우트로 오기전 라우트 입니다.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[e("strong",[e("code",[t._v("next: 함수")])]),t._v(": 이 함수는 "),e("strong",[t._v("훅을 해결하기 위해")]),t._v(" 호출 되어야 합니다. 액션은 "),e("code",[t._v("next")]),t._v("에 제공된 전달인자에 달려 있습니다.")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[e("code",[t._v("next()")])]),t._v(": 파이프라인의 다음 훅으로 이동하십시오. 훅이 없는 경우 네비게이션은 "),e("strong",[t._v("승인")]),t._v("됩니다.")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("next(false)")])]),t._v(": 현재 네비게이션을 중단합니다. 브라우저 URL이 변경되면(사용자 또는 뒤로 버튼을 통해 수동으로 변경됨) "),e("code",[t._v("from")]),t._v("경로의 URL로 재설정됩니다.")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("next('/')")]),t._v(" 또는 "),e("code",[t._v("next({ path: '/' })")])]),t._v(": 다른 위치로 리디렉션합니다. 현재 네비게이션이 중단되고 새 네비게이션이 시작됩니다.")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("next(error)")])]),t._v(": (2.4.0 이후 추가) "),e("code",[t._v("next")]),t._v("에 전달된 인자가 "),e("code",[t._v("Error")]),t._v(" 의 인스턴스이면 탐색이 중단되고 "),e("code",[t._v("router.onError()")]),t._v("를 이용해 등록 된 콜백에 에러가 전달됩니다.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("항상 "),s("code",[this._v("next")]),this._v(" 함수를 호출하십시오. 그렇지 않으면 훅이 절대 불러지지 않습니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"global-resolve-guards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-resolve-guards","aria-hidden":"true"}},[this._v("#")]),this._v(" Global Resolve Guards")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("2.5.0에서 추가됨")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.5.0 이후로 "),s("code",[this._v("router.beforeResolve")]),this._v("를 사용하여 글로벌 가드를 등록 할 수 있습니다. 이는 "),s("code",[this._v("router.beforeEach")]),this._v("와 유사합니다. 모든 컴포넌트 가드와 비동기 라우트 컴포넌트를 불러온 후 네비게이션 가드를 확인하기 전에 호출된다는 차이가 있습니다")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"global-after-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-after-hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Global After Hooks")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("전역 훅을 등록 할 수도 있지만, 가드와 달리 이 훅은 "),s("code",[this._v("next")]),this._v(" 함수를 얻지 못하며 네비게이션에 영향을 줄 수 없습니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"라우트-별-가드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#라우트-별-가드","aria-hidden":"true"}},[this._v("#")]),this._v(" 라우트 별 가드")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("beforeEnter")]),this._v(" 가드를 라우트의 설정 객체에 직접 정의 할 수 있습니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      beforeEnter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"컴포넌트-내부-가드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-내부-가드","aria-hidden":"true"}},[this._v("#")]),this._v(" 컴포넌트 내부 가드")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("마지막으로 "),s("code",[this._v("beforeRouteEnter")]),this._v(" 와 "),s("code",[this._v("beforeRouteLeave")]),this._v("를 사용하여 라우트 컴포넌트(라우터 설정으로 전달되는 컴포넌트) 안에 라우트 네비게이션 가드를 직접 정의 할 수 있습니다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("beforeRouteEnter")])]),this._v(" "),s("li",[s("code",[this._v("beforeRouteUpdate")]),this._v(" (2.2 버전에 추가)")]),this._v(" "),s("li",[s("code",[this._v("beforeRouteLeave")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`...`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이 가드가 호출 될 때 아직 생성되지 않았기 때문에")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("beforeRouteEnter")]),this._v(" 가드는 네비게이션이 확인되기 전에 가드가 호출되어서 새로운 엔트리 컴포넌트가 아직 생성되지 않았기 때문에 "),s("code",[this._v("this")]),this._v("에 접근하지 "),s("strong",[this._v("못합니다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("그러나 콜백을 "),s("code",[this._v("next")]),this._v("에 전달하여 인스턴스에 액세스 할 수 있습니다. 네비게이션이 확인되고 컴포넌트 인스턴스가 콜백에 전달인자로 전달 될 때 콜백이 호출됩니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `vm`을 통한 컴포넌트 인스턴스 접근")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("beforeRouteLeave")]),this._v(" 안에서 "),s("code",[this._v("this")]),this._v("에 직접 접근 할 수 있습니다. leave 가드는 일반적으로 사용자가 저장하지 않은 편집 내용을 두고 실수로 라우트를 떠나는 것을 방지하는데 사용됩니다. 탐색은 "),s("code",[this._v("next(false)")]),this._v("를 호출하여 취소할 수 있습니다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"전체-네비게이션-시나리오"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전체-네비게이션-시나리오","aria-hidden":"true"}},[this._v("#")]),this._v(" 전체 네비게이션 시나리오")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[t._v("네비게이션이 트리거됨.")]),t._v(" "),e("li",[t._v("비활성화될 컴포넌트에서 가드를 호출.")]),t._v(" "),e("li",[t._v("전역 "),e("code",[t._v("beforeEach")]),t._v(" 가드 호출.")]),t._v(" "),e("li",[t._v("재사용되는 컴포넌트에서 "),e("code",[t._v("beforeRouteUpdate")]),t._v(" 가드 호출. (2.2 이상)")]),t._v(" "),e("li",[t._v("라우트 설정에서 "),e("code",[t._v("beforeEnter")]),t._v(" 호출.")]),t._v(" "),e("li",[t._v("비동기 라우트 컴포넌트 해결.")]),t._v(" "),e("li",[t._v("활성화된 컴포넌트에서 "),e("code",[t._v("beforeRouteEnter")]),t._v(" 호출.")]),t._v(" "),e("li",[t._v("전역 "),e("code",[t._v("beforeResolve")]),t._v(" 가드 호출. (2.5이상)")]),t._v(" "),e("li",[t._v("네비게이션 완료.")]),t._v(" "),e("li",[t._v("전역 "),e("code",[t._v("afterEach")]),t._v(" 훅 호출.")]),t._v(" "),e("li",[t._v("DOM 갱신 트리거 됨.")]),t._v(" "),e("li",[t._v("인스턴스화 된 인스턴스들의 "),e("code",[t._v("beforeRouteEnter")]),t._v("가드에서 "),e("code",[t._v("next")]),t._v("에 전달 된 콜백을 호출합니다.")])])}],!1,null,null,null);s.default=n.exports}}]);