(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{258:function(t,e,o){"use strict";o.r(e);var l={name:"Modal",data:function(){return{title:"",body:"",showDialog:!1}},methods:{show:function(title,body){this.showDialog=!0},close:function(){this.showDialog=!1}}},n=o(31),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return this.showDialog?o("div",{staticClass:"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"},[o("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3"},[o("div",{staticClass:"border-b px-4 py-2 flex justify-between items-center"},[o("h3",{staticClass:"font-semibold text-lg"},[t._v(t._s(t.title))]),t._v(" "),o("button",{staticClass:"text-black close-modal"},[t._v("✗")])]),t._v(" "),o("div",{staticClass:"p-3"},[t._v("\n      "+t._s(t.body)+"\n    ")]),t._v(" "),o("div",{staticClass:"flex justify-end items-center w-100 border-t p-3"},[o("button",{staticClass:"bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal",on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white",on:{click:t.close}},[t._v("Oke")])])])]):t._e()}),[],!1,null,"45d35fa3",null);e.default=component.exports}}]);