(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("注入器配置")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("例如逻辑删除注入器 "),n("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/injector/LogicSqlInjector.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("LogicSqlInjector"),n("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sql-注入器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入器","aria-hidden":"true"}},[this._v("#")]),this._v(" Sql 注入器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("全局配置 "),s("code",[this._v("sqlInjector")]),this._v(" 用于注入 "),s("code",[this._v("ISqlInjector")]),this._v(" 接口的子类，实现自定义方法注入。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("SQL 自动注入器接口 "),s("code",[this._v("ISqlInjector")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ISqlInjector")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n     * <p>\n     * 检查SQL是否注入(已经注入过不再注入)\n     * </p>\n     *\n     * @param builderAssistant mapper 信息\n     * @param mapperClass      mapper 接口的 class 对象\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("inspectInject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MapperBuilderAssistant builderAssistant"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Class"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" mapperClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n     * <p>\n     * 注入 SqlRunner 相关\n     * </p>\n     *\n     * @param configuration 全局配置\n     * @see ISqlRunner\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("injectSqlRunner")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Configuration configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("实现接口抽象类 "),s("code",[this._v("AbstractSqlInjector")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("AbstractSqlInjector")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ISqlInjector")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("inspectInject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MapperBuilderAssistant builderAssistant"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Class"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" mapperClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        String className "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mapperClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Set"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" mapperRegistryCache "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" GlobalConfigUtils"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getMapperRegistryCache")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builderAssistant"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getConfiguration")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("mapperRegistryCache"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("contains")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("className"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbstractMethod"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" methodList "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getMethodList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Assert"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("notEmpty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("methodList"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"No effective injection method was found."')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 循环注入自定义方法")]),t._v("\n            methodList"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" m"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("inject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builderAssistant"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapperClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            mapperRegistryCache"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("add")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("className"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n             * 初始化 SQL 解析\n             */")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GlobalConfigUtils"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getGlobalConfig")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builderAssistant"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getConfiguration")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isSqlParserCache")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                SqlParserHelper"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("initSqlParserInfoCache")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapperClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("injectSqlRunner")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Configuration configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// to do nothing")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n     * <p>\n     * 获取 注入的方法\n     * </p>\n     *\n     * @return 注入的方法集合\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbstractMethod"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getMethodList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("自定义自己的通用方法可以实现接口 "),n("code",[t._v("ISqlInjector")]),t._v(" 也可以继承抽象类  "),n("code",[t._v("AbstractSqlInjector")]),t._v(" 注入通用方法 "),n("code",[t._v("SQL 语句")]),t._v(" 然后继承 "),n("code",[t._v("BaseMapper")]),t._v(" 添加自定义方法，全局配置 "),n("code",[t._v("sqlInjector")]),t._v(" 注入 MP 会自动将类所有方法注入到 "),n("code",[t._v("mybatis")]),t._v(" 容器中。")])}],!1,null,null,null);o.options.__file="sql-injector.md";s.default=o.exports}}]);