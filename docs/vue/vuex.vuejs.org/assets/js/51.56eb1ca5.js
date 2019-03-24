(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{229:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("Vuex는 Vue.js 애플리케이션에 대한 "),n("strong",[t._v("상태 관리 패턴 + 라이브러리")]),t._v(" 입니다. 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경할 수 있습니다. 또한 Vue의 공식 "),n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("devtools 확장 프로그램"),n("OutboundLink")],1),t._v("과 통합되어 설정 시간이 필요 없는 디버깅 및 상태 스냅 샷 내보내기/가져오기와 같은 고급 기능을 제공합니다.")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("간단한 Vue 카운터 앱부터 시작 해보겠습니다.")]),t._v(" "),t._m(2),n("p",[t._v("다음과 같은 기능을 가진 앱입니다.")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v('이것은 "단방향 데이터 흐름" 개념의 매우 단순한 도표입니다.')]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("첫번째 문제의 경우, 지나치게 중첩된 컴포넌트를 통과하는 prop는 장황할 수 있으며 형제 컴포넌트에서는 작동하지 않습니다. 두번째 문제의 경우 직접 부모/자식 인스턴스를 참조하거나 이벤트를 통해 상태의 여러 복사본을 변경 및 동기화 하려는 등의 해결 방법을 사용해야 합니다. 이러한 패턴은 모두 부서지기 쉽고 유지보수가 불가능한 코드로 빠르게 변경됩니다.")]),t._v(" "),n("p",[t._v('그렇다면 컴포넌트에서 공유된 상태를 추출하고 이를 전역 싱글톤으로 관리해야 합니다. 이를 통해 우리의 컴포넌트 트리는 커다란 "뷰"가 되며 모든 컴포넌트는 트리에 상관없이 상태에 액세스하거나 동작을 트리거 할 수 있습니다!')]),t._v(" "),n("p",[t._v("또한 상태 관리 및 특정 규칙 적용과 관련된 개념을 정의하고 분리함으로써 코드의 구조와 유지 관리 기능을 향상시킵니다.")]),t._v(" "),n("p",[t._v("이는 "),n("a",{attrs:{href:"https://facebook.github.io/flux/docs/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flux"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"http://redux.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://guide.elm-lang.org/architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Elm Architecture"),n("OutboundLink")],1),t._v("에서 영감을 받은 Vuex의 기본 아이디어 입니다. 다른 패턴과 달리 Vuex는 Vue.js가 효율적인 업데이트를 위해 세분화된 반응 시스템을 활용하도록 특별히 고안된 라이브러리입니다.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("Vuex는 공유된 상태 관리를 처리하는 데 유용하지만, 개념에 대한 이해와 시작하는 비용도 함께 듭니다. 그것은 단기간과 장기간 생산성 간의 기회비용이 있습니다.")]),t._v(" "),n("p",[t._v("대규모 SPA를 구축하지 않고 Vuex로 바로 뛰어 들었다면, 시간이 오래 걸리고 힘든일일 것입니다. 이것은 일반 적인 일입니다. 앱이 단순하다면 Vuex없이는 괜찮을 것입니다. 간단한 "),n("a",{attrs:{href:"https://kr.vuejs.org/v2/guide/components.html#%EB%B9%84-%EB%B6%80%EB%AA%A8-%EC%9E%90%EC%8B%9D%EA%B0%84-%ED%86%B5%EC%8B%A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("글로벌 이벤트 버스"),n("OutboundLink")],1),t._v("만 있으면됩니다. 그러나 중대형 규모의 SPA를 구축하는 경우 Vue컴포넌트 외부의 상태를 보다 잘 처리할 수 있는 방법을 생각하게 될 가능성이 있으며 Vuex는 자연스럽게 선택할 수 있는 단계가 될 것입니다. Redux의 저자인 Dan Abramov의 좋은 인용이 있습니다.")]),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vuex가-무엇인가요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex가-무엇인가요","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuex가 무엇인가요?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"상태-관리-패턴-이란-무엇인가요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#상태-관리-패턴-이란-무엇인가요","aria-hidden":"true"}},[this._v("#")]),this._v(' "상태 관리 패턴"이란 무엇인가요?')])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 상태")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 뷰")]),t._v("\n  template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n    <div>{{ count }}</div>\n  `")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 액션")]),t._v("\n  methods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("strong",[t._v("상태")]),t._v(" 는 앱을 작동하는 원본 소스 입니다.")]),t._v(" "),n("li",[n("strong",[t._v("뷰")]),t._v(" 는 "),n("strong",[t._v("상태의")]),t._v(" 선언적 매핑입니다.")]),t._v(" "),n("li",[n("strong",[t._v("액션")]),t._v(" 은 "),n("strong",[t._v("뷰")]),t._v(" 에서 사용자 입력에 대해 반응적으로 상태를 바꾸는 방법입니다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"text-align":"center",margin:"2em"}},[e("img",{staticStyle:{width:"100%","max-width":"450px"},attrs:{src:"/flow.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("그러나 "),e("strong",[this._v("공통의 상태를 공유하는 여러 컴포넌트")]),this._v(" 가 있는 경우 단순함이 빠르게 저하됩니다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("여러 뷰는 같은 상태에 의존합니다.")]),this._v(" "),e("li",[this._v("서로 다른 뷰의 작업은 동일한 상태를 반영해야 할 수 있습니다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("대화식으로 Vuex를 배우고 싶다면 "),e("a",{attrs:{href:"(https://scrimba.com/g/gvuex)"}},[this._v("Scrimba")]),this._v("의 Vuex 과정에 등록하십시오.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/vuex.png",alt:"vuex"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"언제-사용해야-하나요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#언제-사용해야-하나요","aria-hidden":"true"}},[this._v("#")]),this._v(" 언제 사용해야 하나요?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Flux 라이브러리는 안경과 같습니다. 필요할 때 알아볼 수 있습니다.")])])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);