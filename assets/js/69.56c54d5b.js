(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{411:function(s,t,e){"use strict";e.r(t);var a=e(10),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_9-7-扫描器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-扫描器"}},[s._v("#")]),s._v(" 9.7 扫描器")]),s._v(" "),t("p",[s._v("配合"),t("code",[s._v("配置中心")]),s._v("使用")]),s._v(" "),t("p",[s._v("应用启动扫描器，主要用于监听应用启动配置信息，根据监听并且解析启动配置的信息，来判断该应用是否已经接入配置中心，目前支持supervisor和systemd两种。")]),s._v(" "),t("h2",{attrs:{id:"_9-7-1-supervisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-1-supervisor"}},[s._v("#")]),s._v(" 9.7.1 supervisor")]),s._v(" "),t("p",[s._v("supervisor主要用来监听部署在agent机器上的所有的应用的一个supervisor启动的配置信息，通过解析supervisor文件来获取应用启动使用的配置文件信息，用来判断应用是否接入了配置中心。")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.supervisor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("     // 插件是否开启\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/supervisor/conf.d1"')]),s._v(" // 用来配置supervisor的配置目录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("supercisor插件的主要工作：")]),s._v(" "),t("ul",[t("li",[s._v("是否打开supervisor监听")]),s._v(" "),t("li",[s._v("agent初始化时，负责将该机器上所有应用的supervisor配置信息记录在内容中")]),s._v(" "),t("li",[s._v("监听supervisor配置文件，当发现supervisor文件发生变化，则更新内存缓存的应用配置信息")]),s._v(" "),t("li",[s._v("提供配置中心应用是否接入配置中心的接口")])]),s._v(" "),t("h2",{attrs:{id:"_9-7-2-systemd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-2-systemd"}},[s._v("#")]),s._v(" 9.7.2 systemd")]),s._v(" "),t("p",[s._v("systemd主要用来监听部署在agent机器上的所有的应用的一个systemd启动的配置信息，通过解析systemd文件来获取应用启动使用的配置文件信息，用来判断应用是否接入了配置中心。")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.systemd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" // 插件是否开启\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/systemd/system1"')]),s._v(" // 用来配置systemd的配置目录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("systemd插件的主要工作：")]),s._v(" "),t("ul",[t("li",[s._v("是否打开systemd监听")]),s._v(" "),t("li",[s._v("agent初始化时，负责将该机器上所有应用的systemd配置信息记录在内容中")]),s._v(" "),t("li",[s._v("监听systemd配置文件，当发现systemd文件发生变化，则更新内存缓存的应用配置信息")]),s._v(" "),t("li",[s._v("提供配置中心应用是否接入配置中心的接口")])])])}),[],!1,null,null,null);t.default=r.exports}}]);