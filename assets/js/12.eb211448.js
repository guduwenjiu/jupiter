(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{324:function(t,p,r){t.exports=r.p+"assets/img/pprof6.1.1cbd93d2.png"},325:function(t,p,r){t.exports=r.p+"assets/img/pprof6.2.b25de0a0.png"},326:function(t,p,r){t.exports=r.p+"assets/img/pprof1.1.1dc3c44c.png"},327:function(t,p,r){t.exports=r.p+"assets/img/pprof1.2.066f3cb8.png"},328:function(t,p,r){t.exports=r.p+"assets/img/pprof2.1.0bf0bc47.png"},329:function(t,p,r){t.exports=r.p+"assets/img/pprof2.2.2b1abe18.png"},330:function(t,p,r){t.exports=r.p+"assets/img/pprof3.1.1dfacfb3.png"},331:function(t,p,r){t.exports=r.p+"assets/img/pprof3.2.7de62a2c.png"},332:function(t,p,r){t.exports=r.p+"assets/img/pprof5.1.6443a9e8.png"},333:function(t,p,r){t.exports=r.p+"assets/img/pprof5.2.a4e58945.png"},334:function(t,p,r){t.exports=r.p+"assets/img/pprof4.1.f5525bea.png"},400:function(t,p,r){"use strict";r.r(p);var s=r(10),o=Object(s.a)({},(function(){var t=this,p=t._self._c;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h1",{attrs:{id:"_4-2-pprof"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-pprof"}},[t._v("#")]),t._v(" 4.2 Pprof")]),t._v(" "),p("h2",{attrs:{id:"_4-2-1-pprof-是什么"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-pprof-是什么"}},[t._v("#")]),t._v(" 4.2.1 Pprof 是什么")]),t._v(" "),p("p",[t._v("在计算机性能调试领域里，profiling 是指对应用程序的画像，画像就是应用程序使用 CPU 和内存的情况。")]),t._v(" "),p("p",[t._v("Golang 是一个对性能特别看重的语言，因此语言中自带了 profiling 的库，在程序运行过程中可以获取 cpu、heap、block、traces 等执行信息。")]),t._v(" "),p("p",[t._v("Golang 中的性能优化主要有以下几个方面：")]),t._v(" "),p("ul",[p("li",[p("p",[t._v("CPU profile：报告程序的 CPU 使用情况，按照一定频率去采集应用程序在 CPU 和寄存器上面的数据")])]),t._v(" "),p("li",[p("p",[t._v("Memory Profile（Heap Profile）：报告程序的内存使用情况")])]),t._v(" "),p("li",[p("p",[t._v("Block Profiling：报告 goroutines 不在运行状态的情况，可以用来分析和查找死锁等性能瓶颈")])]),t._v(" "),p("li",[p("p",[t._v("Goroutine Profiling：报告 goroutines 的使用情况，有哪些 goroutine，它们的调用关系是怎样的")])])]),t._v(" "),p("h2",{attrs:{id:"_4-2-2-juno-中-环境依赖"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-juno-中-环境依赖"}},[t._v("#")]),t._v(" 4.2.2 Juno 中 环境依赖")]),t._v(" "),p("ul",[p("li",[t._v("Profiling查看需要我们安装Juno的机器上拥有Golang Go-torch Graphviz环境，在应用服务-Pprof页面可以看到所需要的环境是否安装。\n"),p("img",{attrs:{src:r(324),alt:"image"}})]),t._v(" "),p("li",[t._v("若发现有依赖项没有安装，我们需要到系统管理-系统设置里面去手动安装这些依赖项\n"),p("img",{attrs:{src:r(325),alt:"image"}})])]),t._v(" "),p("h2",{attrs:{id:"_4-2-3-juno-中-pprof-的生成和查看"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-juno-中-pprof-的生成和查看"}},[t._v("#")]),t._v(" 4.2.3 Juno 中 pprof 的生成和查看")]),t._v(" "),p("p",[t._v("在应用服务-Pprof 下我们可以方便的获取和查看应用在某个实例下的 profiling 数据以及火焰图")]),t._v(" "),p("p",[p("img",{attrs:{src:r(326),alt:"image"}})]),t._v(" "),p("p",[t._v("选择实例后点击更新分析图标我们可以获取该应用当前的 profiling 数据，并以 svg 格式展示出来，方便我们查看")]),t._v(" "),p("p",[p("img",{attrs:{src:r(327),alt:"image"}})]),t._v(" "),p("p",[t._v("我们可以点击查看对应的 profiling 数据")]),t._v(" "),p("ul",[p("li",[p("p",[t._v("Goroutine 分析\n"),p("img",{attrs:{src:r(328),alt:"image"}})])]),t._v(" "),p("li",[p("p",[t._v("Goroutine 火焰图\n"),p("img",{attrs:{src:r(329),alt:"image"}})])]),t._v(" "),p("li",[p("p",[t._v("Memory 分析\n"),p("img",{attrs:{src:r(330),alt:"image"}})])]),t._v(" "),p("li",[p("p",[t._v("Memory 火焰图\n"),p("img",{attrs:{src:r(331),alt:"image"}})])]),t._v(" "),p("li",[p("p",[t._v("Cpu 分析\n"),p("img",{attrs:{src:r(332),alt:"image"}})])]),t._v(" "),p("li",[p("p",[t._v("Cpu 火焰图\n"),p("img",{attrs:{src:r(333),alt:"image"}})])]),t._v(" "),p("li",[p("p",[t._v("Block 分析\n"),p("img",{attrs:{src:r(334),alt:"image"}})])])])])}),[],!1,null,null,null);p.default=o.exports}}]);