(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{283:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("VideoPreview"),t._v(" "),a("p",[t._v("Vuex is a "),a("strong",[t._v("state management pattern + library")]),t._v(" for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official "),a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("devtools extension"),a("OutboundLink")],1),t._v(" to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Let's start with a simple Vue counter app:")]),t._v(" "),t._m(2),a("p",[t._v("It is a self-contained app with the following parts:")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v('This is an simple representation of the concept of "one-way data flow":')]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("For problem one, passing props can be tedious for deeply nested components, and simply doesn't work for sibling components. For problem two, we often find ourselves resorting to solutions such as reaching for direct parent/child instance references or trying to mutate and synchronize multiple copies of the state via events. Both of these patterns are brittle and quickly lead to unmaintainable code.")]),t._v(" "),a("p",[t._v('So why don\'t we extract the shared state out of the components, and manage it in a global singleton? With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!')]),t._v(" "),a("p",[t._v("By defining and separating the concepts involved in state management and enforcing rules that maintain independece between views and states, we give our code more structure and maintainability.")]),t._v(" "),a("p",[t._v("This is the basic idea behind Vuex, inspired by "),a("a",{attrs:{href:"https://facebook.github.io/flux/docs/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flux"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"http://redux.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://guide.elm-lang.org/architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Elm Architecture"),a("OutboundLink")],1),t._v(". Unlike the other patterns, Vuex is also a library implementation tailored specifically for Vue.js to take advantage of its granular reactivity system for efficient updates.")]),t._v(" "),a("p",[t._v("If you want to learn Vuex in an interactive way you can check out this "),a("a",{attrs:{href:"https://scrimba.com/g/gvuex",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex course on Scrimba"),a("OutboundLink")],1),t._v(", which gives you a mix of screencast and code playground that you can pause and play around with anytime.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Vuex helps us deal with shared state management with the cost of more concepts and boilerplate. It's a trade-off between short term and long term productivity.")]),t._v(" "),a("p",[t._v("If you've never built a large-scale SPA and jump right into Vuex, it may feel verbose and daunting. That's perfectly normal - if your app is simple, you will most likely be fine without Vuex. A simple "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch",target:"_blank",rel:"noopener noreferrer"}},[t._v("store pattern"),a("OutboundLink")],1),t._v(" may be all you need. But if you are building a medium-to-large-scale SPA, chances are you have run into situations that make you think about how to better handle state outside of your Vue components, and Vuex will be the natural next step for you. There's a good quote from Dan Abramov, the author of Redux:")]),t._v(" "),t._m(9)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"what-is-vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-vuex","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Vuex?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"what-is-a-state-management-pattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-state-management-pattern","aria-hidden":"true"}},[this._v("#")]),this._v(' What is a "State Management Pattern"?')])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// state")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// view")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n    <div>{{ count }}</div>\n  `")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// actions")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("The "),a("strong",[t._v("state")]),t._v(", the source of truth that drives our app;")]),t._v(" "),a("li",[t._v("The "),a("strong",[t._v("view")]),t._v(", a declarative mapping of the "),a("strong",[t._v("state")]),t._v(";")]),t._v(" "),a("li",[t._v("The "),a("strong",[t._v("actions")]),t._v(", the possible ways the state could change in reaction to user inputs from the "),a("strong",[t._v("view")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"text-align":"center",margin:"2em"}},[e("img",{staticStyle:{width:"100%","max-width":"450px"},attrs:{src:"/flow.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("However, the simplicity quickly breaks down when we have "),e("strong",[this._v("multiple components that share a common state")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Multiple views may depend on the same piece of state.")]),this._v(" "),e("li",[this._v("Actions from different views may need to mutate the same piece of state.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/vuex.png",alt:"vuex"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"when-should-i-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-should-i-use-it","aria-hidden":"true"}},[this._v("#")]),this._v(" When Should I Use It?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Flux libraries are like glasses: you’ll know when you need them.")])])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);