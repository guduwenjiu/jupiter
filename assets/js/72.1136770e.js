(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{416:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-1-快速开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-快速开始"}},[a._v("#")]),a._v(" 1.1 快速开始")]),a._v(" "),t("p",[a._v("为了让大家快速了解 "),t("code",[a._v("Jupiter")]),a._v(" 框架，我们提供了大量的 "),t("a",{attrs:{href:"https://github.com/douyu/jupiter-examples",target:"_blank",rel:"noopener noreferrer"}},[a._v("example"),t("OutboundLink")],1),a._v(" 以及标准化的项目模版 "),t("a",{attrs:{href:"https://github.com/douyu/jupiter-layout",target:"_blank",rel:"noopener noreferrer"}},[a._v("jupiter-layout"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("在这一节，我们将通过 jupiter-layout 向大家演示如何基于 Jupiter 快速搭建并启动一个项目。")]),a._v(" "),t("h2",{attrs:{id:"_1-1-1-安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-安装依赖"}},[a._v("#")]),a._v(" 1.1.1 安装依赖")]),a._v(" "),t("h3",{attrs:{id:"安装-golang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-golang"}},[a._v("#")]),a._v(" 安装 "),t("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Golang"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("Jupiter 是基于 Golang 开发的，所以在开始之前，你需要先安装 Golang 环境。")]),a._v(" "),t("h3",{attrs:{id:"安装-jupiter-脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-jupiter-脚手架"}},[a._v("#")]),a._v(" 安装 Jupiter 脚手架")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" github.com/douyu/jupiter/cmd/jupiter@latest\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_1-1-2-创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-创建项目"}},[a._v("#")]),a._v(" 1.1.2 创建项目")]),a._v(" "),t("h3",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[a._v("#")]),a._v(" 创建项目")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("jupiter new jupiter-layout-demo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"进入项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入项目"}},[a._v("#")]),a._v(" 进入项目")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" jupiter-layout-demo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_1-1-3-启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-启动项目"}},[a._v("#")]),a._v(" 1.1.3 启动项目")]),a._v(" "),t("h3",{attrs:{id:"启动依赖中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动依赖中间件"}},[a._v("#")]),a._v(" 启动依赖中间件")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" deployment/docker-compose.yml up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[a._v("#")]),a._v(" 启动项目")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("jupiter run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" config/exampleserver/local-live.toml\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"测试接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试接口"}},[a._v("#")]),a._v(" 测试接口")]),a._v(" "),t("ul",[t("li",[a._v("HTTP")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost:9527?name=bob"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"error"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"请求正常"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"data"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello wolrd"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"jaeger-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jaeger-admin"}},[a._v("#")]),a._v(" Jaeger Admin")]),a._v(" "),t("p",[a._v("open "),t("a",{attrs:{href:"http://localhost:16686/search",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:16686/search"),t("OutboundLink")],1),a._v(" to checkout opentelemtry trace data.")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/hnlq715/imgs-all-in-one/main/obsidian/%E6%88%AA%E5%B1%8F2022-09-30%2018.31.27.png",alt:"Jaeger"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);