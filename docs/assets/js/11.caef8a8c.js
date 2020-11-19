(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"global-queries-registered-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-queries-registered-queries"}},[t._v("#")]),t._v(" Global Queries / Registered Queries")]),t._v(" "),s("p",[t._v("Working with same queries in multiple dashboards might be hard some times. To change a query, you need to update all the dashboards. So Infinity datasource gives an option to register queries globally and then allows to reuse the queries across dashboards.")]),t._v(" "),s("h3",{attrs:{id:"registering-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registering-query"}},[t._v("#")]),t._v(" Registering Query")]),t._v(" "),s("p",[t._v("To register a query, in the datasource instance settings perform the following actions")]),t._v(" "),s("ul",[s("li",[t._v("Click "),s("strong",[t._v("Add Global Query")]),t._v(" button")]),t._v(" "),s("li",[t._v("Change the name and id of the query. Id should be unique per datasource instance.")]),t._v(" "),s("li",[t._v("Enter the query fields.")]),t._v(" "),s("li",[t._v("Click "),s("code",[t._v("Save")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/93780448-1635d080-fc20-11ea-8c92-d6e91dbcf003.png",alt:"image"}})]),t._v(" "),s("p",[t._v("You can have multiple queries registered per datasource instance.")]),t._v(" "),s("h3",{attrs:{id:"using-registered-queries-in-the-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-registered-queries-in-the-panel"}},[t._v("#")]),t._v(" Using Registered queries in the panel")]),t._v(" "),s("p",[t._v("In order to use the registered query in the dashboard, you have to select "),s("code",[t._v("Global Query")]),t._v(" / "),s("code",[t._v("global")]),t._v(" as type. Then select the query you needed from the list.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/93780923-ab38c980-fc20-11ea-9d87-078233102905.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"provision-the-global-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provision-the-global-queries"}},[t._v("#")]),t._v(" Provision the global queries")]),t._v(" "),s("p",[t._v("You can also provision the global queries in the datasource provisioning. Below example provides a sample of inline csv query provisioning")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ProvisionedQueries\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yesoreyeram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("datasource\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" proxy\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("isDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basicAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jsonData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource_mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"basic"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global_queries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Countries\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" countries\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" csv\n               "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline\n               "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table\n               "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n                    country,continent\n                    india,asia\n                    china,asia\n                    uk,europe")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" country\n                      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Country\n                      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" continent\n                      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Continent\n                      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("h4",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),s("ul",[s("li",[t._v("When using global queries, queries will be loaded from the datasource setting when loading the dashboard only. If the query changed, dashboards will get reflected only when they are reloaded. (Query refresh won't fetch the latest query)")]),t._v(" "),s("li",[t._v("When provisioning, grafana variables / tokens like "),s("code",[t._v("${__from}")]),t._v(" are not supported yet.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);