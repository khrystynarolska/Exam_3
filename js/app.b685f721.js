(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/leospa-vue-project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f7":function(t,e,a){},"07de":function(t,e,a){t.exports=a.p+"img/massage.5207d91e.png"},"1b67":function(t,e,a){},"1cd1":function(t,e,a){},"27ea":function(t,e,a){t.exports=a.p+"img/beauty-care.72dc4d59.png"},"2c6a":function(t,e,a){},"2e93":function(t,e){},"2f19":function(t,e,a){},3829:function(t,e,a){"use strict";a("2f19")},"3dea":function(t,e,a){t.exports=a.p+"img/stone-massage.6f2749fc.png"},4042:function(t,e,a){"use strict";a("da96")},"458d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABGCAYAAABSdbNRAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAB+dJREFUeJzd3HuwVVUdB/DPubzJECfAhMQZswcyIQO9a6yIpsQxdQwqJQPtNTW9tCi1YG7jCFb2IjGnhjApjaG0ccjKdHowJRbopECaAwmaebUEAkroevvjd07nvs6+e++7zzn3nu8/57HW+q21v3uv3/r9fuu3dqmrfbkWxOewEp2N7rit0R02AMdgOT7fjM5bkdC3YZQgdF6jO29FQs8vf7bhRjyvkZ23GqGTsKDb76n4ViMH0GqEfghjev33DryrUQNoJUJH48M1ylZr0NRvJUIvxAk1yiZhVSMG0SqEPgftA9S5GK+s90BahdBPiwUoCSUNeEpbgdBp+FTKum/S0wooHK1A6Gox5dNilTpe93An9Hycm7HNy/DOOowFw5vQU3BdzrbLhE4tHMOV0PH4ISbkbD9b6NPCMRwJLWEd5gxSzkcGP5S+GI6ErsTCAuSchSkFyOmB4UboFfhMQbJGqYOPP5wIXYYrC5a5qGB5w4LQiodzdR1kvwaTixQ41Akdh/WKm+a90abg1X4oE3oiNqtG4OuF04sUNrJIYQXiJbhDkFpvtDyhp+DXOL5B/c0UsYBDKeq+BRdgBkZgJ27ALysVhhqhk3G7xpFJqL2ZuCehzjiswZJe/8/FYmwQ8daDQ0mHjsIt4gltNE4eoPwGfcnsjkVih7U0lAi9Cq9rUt8vSCh7q3Se2Tl4+1Ah9Axc2sT+JyaULckg531DgdBjcL06hdMyjKEWsgRhXj4UCL1cseZRR442SYRmWbibrkOn4ZMFy/xjjjZHE8p2ZJDzYLMJXYaxBcu8P0ebpLTH9Rnk3NZMQo/FRXWQ+5ccbZ5MKNsoXOCB8AzWNZPQxZJ1V17swrMZ2/wtoaxT2JkDqZINeKqZhNYrgWuH7EGf3QOUP47X47Ky/KPipnVXFWvk6LgoHI/X1kHuP3AwR7udKeo8I+KyM4UrOlV1MduMu2keoafXqe/tQjdnwd/xWMY2nXi36oK6slLQLELr5WJuNXCOU2/8Pkc/bfhg+ft9IqDz/4Jm4KV1krtZdkLvyNHPQtVraEdXpaBZhL6oTnJ/i5MyttmUsX5J7L7CFvyke2GzCK1HNvFOYU9mefrvwZ6M/Zwr8qOINMqu7oXNIjRvCk0Sflr+nJ2hzfcy9jECK8rfbxIzogeaRWjXwFUyY5O44NNS1j+I72fs42LMwgHxdPZBswjdX7C8f+I3gsy0uaLfxb4MfUxUTbRYoYap1SxCny5Y3o+FbZh2B/MorsnYx5fEntcWkeTbL5pF6N6C5d1Y/pyfsv638UgG+fPEdD8sIvg1o1PNIjRPiK0WdovFYTzemKL+AXwhg/znihtQEts0f06q3CxCtxQoa61Y5BZIpz9X4IkM8leLXdGbpTjm2CxCfyF7iK0//Fv1ItPkzd8tQf/1gwvxXjyk6momYiTejF/Jf1h/ijAlTsZx5f8OC4N5Ox7up00H/oBX5eyzgvV4SsRVBzoucxDvkf4654oc/v0iOfdAmkYj8VGxkb8Bd2KbiP/1hxGCuFl4hbgZcyQ/6R0ieHCrsBUrIa+NBkfos/hK+fvZQocm4VL939z+MFWMd4zwjB5KO6hSV/vyReIAQHccwqPirnYJhTxZxDF7n/bNgg4xRb8qbuYeEVvMg5tFCI2YYW9IqPsDkZOUBuNxlzjGuERGb6rU1b58rHgikzb7i8bTwq6bJV/kvlMY8dtxKh5Qe19/q7BPD6eQO1rYtGeKnNQvZh1YG/4jTlU0EseJ1Juzc7ZfJ8iET6hN5l6RIpOGzBFCJ58pXq+RmUyqum81/ptHwCCRZ7ofFG+9IVTQ4hr1OoRB/mgKmSOE+bVQhOZy5/JXCN0l9MxwwJVi2wIu0f9N2Se8pjSL0Bixhlwgzi5dNZjBdV+d28VG1FDGdtWVfYr+D289IfLm03hjE4QFcoawY9cMdoDdCd2Fbw5WYB3Riferml2f1dcz2iNW+/tSyJsurIPp4jTIj4oYZG/7sV32CHaj8GXVDbUX6vt+ka1ia/rBFLLml+s/LuzpPxU0xj6E/ku8WaYeAeDBYJt4W1gFV+tpD98insyBtoNLIttvk5jeZyk4lNifh3O7MLzT4hH1faoPCFv1SPn3fJxX/t4psjnOM/Chg2ni2i4SHt4KxcQTeqCWy3gZfpdSxkliNf2YcvZEgejCUtUEsDG4tvx9ryB3leQZVRJBjm0ijWa2dMlfuVCL0CPCIE6bGzlPTKVrxYC/Jp39NxAuF55LBVfgxcLEO00sKkk4Vey7LxXvxLtEvlSd1EgKajwpEvb/mlLW80Xk/BvigqeLDJF28UQcqd20X1yn51ts5oqpv0DYjEm6b5K4uTfh68KMujdj/7lQSvH+0BOF7pmZUfZdwl+vxD7HCd99ljg6M00EXMaJQMkhESrbLaI7a1VDbSVhJ94mWVceKzKizxGLzloN9gDTEEoM9Hr5Xn7ymPBEbhWR+qxPahpMxceFCbRWRKKa4UqnJrSCpcJTyRuZOixIvV/szXSIqbtPGOyjhYORxpQpialcsQDWK35RzIyshBK6coUwP0YXNI4OoX+/I3kTrA2vFhGhCSKVZqPYChkSyENoBVPxAXH8Ok/y18P4mdDPd6odRxgrFrcZYmbswM+lO+zacAyG0O6YITyVOYLcE0Tke6SYzvuFm/eAmO73qh0JGi8CHxNFUtlI4RrW2pYZUvgfNQyDzeWtyNIAAAAASUVORK5CYII="},4884:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAqCAYAAAAj6gIfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZThjMTE2MS05YjA5LTQ0ODMtOTRjMy0xMzViNzE4OTNlODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDI5MUFBMTRBNEIxMTFFOTlCQURGRDZEMTExRkU0QzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDI5MUFBMTNBNEIxMTFFOTlCQURGRDZEMTExRkU0QzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjZiZTlhY2QtNzMyMC05OTQ4LWI3Y2QtMjhlM2U2YmVlMDIwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2E5MTE1ZjgtNzg3MS0xMTdiLWIzNjYtODAyNDU1ODk2OThiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4rui/wAABV1JREFUeNrUmX9oVlUYx+/7brlaus3aj0S3XIEtp5Xhj0pFKmq5ZgVGEYYVirgy7YeBbf2pUCEtiObQpMCMDBWxZQ4VapWaabMoqdTSOWu2tOnUuZe1t+8D3wuPh7P3vffuvpse+Oze99xzzv2ec57znPPcReLxuBNSKgSzQBkoAbkgHXSDCWC/E3JKD6GNArAMPAWioAlsBS3swHwwPKD4weBOXn8FBy56ipFPA5+ABrAaVIJCmREPTAEnQBeoAUWW55Ie9NieSxRUgY74xWkXKHHLyZ9sPmgGx3j/H6gHtyd4QTk4Dw6C0gSdCyK+lvU2gDIwGbwIWsEpMMYUv4QVi9nrNtANlnF2dOOjwTnwLRiaZGb8il/IOm+ovAgo4MweB99Lnk28y1CakTsCg9SU7qG5DPNgVn7EP8QB20TBrvB3wZ983zy2OSGReJeXQA9Yxd+PsvxsS9l7DBPyI34sOM3ZzFTCrwW/geXMK2WbT3rxNm+BYWAxaABzwO/gQ6OceJqN4APwgk+vMgJsAWfATHAeRMBK0AYmgnaWzee1I+qx8SXgB/A2uBd8BHqMMreCbLDHp3BxozvYgUPgFPMfBnPFISrhkhaBTtAo05DBaXiN0yKLczqn0bRHN91vmfY36TLzVF4Fy0/rxVQKaRJnuEDF3ncos9H10pQXetn1NsK/oI73g+lfN1l87wlWHmVZ3O1gnZE/r5fyDj3HYT5fzLzZ7MAX4Gqj/QaWXar9vMPeNqnCNfT1NxsvXMMGzM1oOcuPN/JXcCBMVzsS/MEOH+B+UcZns9iBRjCEbvkgZ/Vp3Y578wpF3cTfBVz525XLEqot4ifxZasNgencVNYb+bKPHOFsS2dzOXAXaK5S5nG22USTaqXncmzixX92cmTdvAUUWqXyKg3xedyZj1g2qzksW67ybmT5k8buLe5wH0e3gnl1rC+uc4RtzTgWU5mqfGw9ffxMi3hZG7s5YncZDcvM/Q2+UXli9y2sv4UzY66bvexALd+7VS3ehOJFzCGeb4qZJxvYfs7KI0r8OArvphfS7WTy2Tnaq0NzPM4O1bCN9WrXdtT73EX8Obgy0cZmZpTwBS1q8cmUfkehu9mwbNUx2qauPxzsNDoli/4veqoxateWtNHowAKOeD1duONHvHALbThGL5LPEahVfl4ObXerOleB53niE+8yQ23lrRQ/2nIAE6Gb2YFFxu+kZ6GIJZLK4S66lBFRF9gOvmS+REoLQTOjp0lgBnfXk6CKx4csUAeu4XHhF8vuOp/HgZ9BKTjMtmOWsrLL7tUZNvFTwFfOpZe+BlO9hoFzUxF3Bkzv+Y1hJWbcF6IAiUPv4IBc4H2y9A/Ln01VAO41FYNtoILrZZuHOp+xvDPQ4uW4O57XGO+TpdN9+fSRy28uu4wzdZDUaZhhn00yWTBSwghn8iXofZKK7+A1+3IUf4zX6y838RmMJ4+CaQOsM2KJma3i21REL+lTHgvyBlB8vtKVUHwzPcNt/L2K5aoHSLh4vBt4/nHMD602NvP8PUjFoj0MqJ1+5jmeZCd6ORK7nxwkvcrfGYxn4+zYA8YnjlSRw+N0o9fzvMs6BhXlKqCuZuDspsoUCs/gV42u3r5WJ6o8hF9jYww0oqrR+5g3LkXCRzL+lZj6GT+RlCaLwbKknxjtjOV0hin2CoaQYo4rOdpnwWN+w0ATCVieYGTfH6mdnz2KgoSBidIongbfoUv9OARXmMMPuWvB+2AnXXXyFHCaj4K1IZlMUdDFHw1h5H7kqLn39f21e/UlGJEd+HVwHUhT95m895qyAh94Av4TWQ5rRSEP5LNghZ8K/wswAJ7IBbdbOLltAAAAAElFTkSuQmCC"},"49ef":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAYAAACZZ43PAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAK9JREFUOI3tk1EVwjAMRe/j1EAngUkACXgaEoYFJAwJTAIaKgEkhA82zihdV/jig/vTNk1ektNGZtYADd9xkJldgT3Qfxi8A1oHeCAAHbAuDA5DUu8mRg8cgVsi4DTZb4B2PLjIsZeUbcXMXqpcFZSb5S/wCwLxP/DxOyfwOYGuMHEYN88WJNWKACqgiu2S6rkKYi7DWs85LAlsF+6RmZ15TNiIn3NO0AveJ6wUSeEOejYkgOmDzQsAAAAASUVORK5CYII="},"50c47":function(t,e,a){"use strict";a("a9b3")},"534f":function(t,e){t.exports="data:image/png;base64,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"},"53d7":function(t,e,a){"use strict";a("01f7")},5452:function(t,e,a){"use strict";a("af35")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("1dce"),n=a.n(s),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Menu"),a("router-view",{key:t.$route.fullPath}),a("Footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",class:{staticMenu:this.$data.menuStatic},attrs:{id:"menu-wrapper"}},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:a("534f"),alt:""}})])],1),i("div",{staticClass:"menu"},[i("label",{staticClass:"menu__img"}),i("input",{staticClass:"menu__burger",attrs:{type:"checkbox",id:"burg"}}),i("div",{staticClass:"menu__list list"},[i("ul",{staticClass:"list__ul-menu"},[i("li",{staticClass:"list__ul-menu item"},[i("router-link",{staticClass:"item__aboutUs",attrs:{to:{path:"/",hash:"#about"}}},[t._v(" ABOUT US ")])],1),i("li",{staticClass:"list__ul-menu item"},[i("router-link",{staticClass:"item__team",attrs:{to:"/team"}},[t._v("TEAM")])],1),i("li",{staticClass:"list__ul-menu item"},[i("router-link",{staticClass:"item__gallery",attrs:{to:{path:"/",hash:"#gallery"}}},[t._v(" GALLERY ")])],1),i("li",{staticClass:"list__ul-menu item"},[i("router-link",{staticClass:"item__contact",attrs:{to:"/contact"}},[t._v("CONTACT")])],1)])])])])},l=[],u={name:"Menu",data:function(){return{menuStatic:!1}},watch:{$route:{handler:function(t){var e=t.path;this.$data.menuStatic="/contact"===e||"/team"===e},immediate:!0}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{updateScroll:function(){var t=document.getElementById("menu-wrapper");this.scrollPosition=window.scrollY,!this.$data.menuStatic&&this.scrollPosition>50?t.classList.add("isMoving"):t.classList.remove("isMoving")}}},d=u,m=(a("a1b3"),a("2877")),p=Object(m["a"])(d,c,l,!1,null,null,null),g=p.exports,A=a("fd2d"),f={name:"App",components:{Menu:g,Footer:A["default"]}},h=f,v=(a("5c0b"),Object(m["a"])(h,r,o,!1,null,null,null)),b=v.exports,C=a("8c4f"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"contact"}},[t._m(0),i("img",{staticClass:"contact__photo",attrs:{src:a("d8d9"),alt:""}}),i("div",{staticClass:"contact__wrapper"},[i("div",{staticClass:"contact__items"},t._l(t.contact,(function(t){return i("div",{key:t.id},[i("ContactItem",{attrs:{imgSrc:t.imgSrc,title:t.title,description:t.description}})],1)})),0),i("form",{staticClass:"signUp",on:{submit:function(e){return e.preventDefault(),t.checkForm.apply(null,arguments)}}},[i("div",{staticClass:"signUp__form-proup"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"signUp__form-control",class:{invalid:t.$v.form.name.$dirty&&!t.$v.form.name.required||t.$v.form.name.$dirty&&!t.$v.form.name.minLength},attrs:{id:"name",placeholder:"Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.form.name.$dirty&&!t.$v.form.name.required?i("p",{staticClass:"signUp__invalid-feedback"},[t._v(" Required field ")]):t._e(),t.$v.form.name.$dirty&&!t.$v.form.name.minLength?i("p",{staticClass:"signUp__invalid-feedback"},[t._v(" There must be more than 2 letters ")]):t._e()]),i("div",{staticClass:"signUp__form-proup"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"signUp__form-control",class:{invalid:t.$v.form.email.$dirty&&!t.$v.form.email.required||t.$v.form.email.$dirty&&!t.$v.form.email.email},attrs:{id:"email",type:"email",placeholder:"Email Address"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.form.email.$dirty&&!t.$v.form.email.required?i("p",{staticClass:"signUp__invalid-feedback"},[t._v(" Required field ")]):t._e(),t.$v.form.email.$dirty&&!t.$v.form.email.email?i("p",{staticClass:"signUp__invalid-feedback"},[t._v(" The email is incorrect ")]):t._e()]),i("div",{staticClass:"signUp__form-proup"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"signUp__form-control",class:{invalid:t.$v.form.comment.$dirty&&!t.$v.form.comment.required},attrs:{id:"comment",placeholder:"Write comment"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}}),t.$v.form.comment.$dirty&&!t.$v.form.comment.required?i("p",{staticClass:"signUp__invalid-feedback"},[t._v(" Required field ")]):t._e()]),i("div",{staticClass:"contact__button"},[i("Button",{attrs:{type:"submit",title:"SUBMIT NOW",isRound:!0}})],1)])]),i("google-map")],1)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact__content"},[a("h1",{staticClass:"contact__title"},[t._v("Get In Touch")]),a("p",{staticClass:"contact__paragraph"},[t._v(" To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin ")])])}],w=a("5530"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:{round:t.isRound},attrs:{id:"button",type:t.type},on:{click:t.onClick}},[t._v(t._s(t.title)+" ")])},I=[],S={name:"Button",props:["type","title","isRound","clicked","onClickProp"],methods:{onClick:function(){this.$emit("clicked"),this.$props.onClickProp&&this.$props.onClickProp()}}},R=S,P=(a("ef55"),Object(m["a"])(R,y,I,!1,null,null,null)),j=P.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location"},[a("div",{staticClass:"location__photo"},[a("img",{staticClass:"location__img",attrs:{src:t.imgSrc,alt:""}})]),a("div",{staticClass:"location__address"},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"subtitle"},[t._v(t._s(t.description))])])])},E=[],N={name:"ContactItem",props:["imgSrc","title","description"]},x=N,Z=Object(m["a"])(x,O,E,!1,null,null,null),B=Z.exports,L=a("b5ae"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,(function(e,i){return a("gmap-marker",{key:i,attrs:{position:e.position},on:{click:function(a){t.center=e.position}}})})),1)],1)},T=[],Y={name:"GoogleMap",data:function(){return{center:{lat:49.420429176912606,lng:26.989768165069876},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))}}},M=Y,W=Object(m["a"])(M,U,T,!1,null,null,null),z=W.exports,J=a("8b55"),G=a.n(J),D=a("9afb"),H=a.n(D),X=a("49ef"),Q=a.n(X),F={name:"Contact",data:function(){return{form:{name:"",email:"",comment:""},contact:[{id:1,imgSrc:G.a,title:"848 E 28th ST BROOKLYN",description:"NEW YORK, USA"},{id:2,imgSrc:H.a,title:"example@leospa.com",description:"example@leospa.com"},{id:3,imgSrc:Q.a,title:"+02 365 2365 3265 (02)",description:"+01 365 2365 3265 (04)"}],maps:{google:null,map:null}}},validations:{form:{name:{required:L["required"],minLength:Object(L["minLength"])(2)},email:{required:L["required"],email:L["email"]},comment:{required:L["required"]}}},methods:{checkForm:function(){this.$v.$invalid?this.$v.$touch():console.log(Object(w["a"])({},this.form))}},components:{Button:j,ContactItem:B,GoogleMap:z}},V=F,K=(a("7f5d"),Object(m["a"])(V,_,k,!1,null,null,null)),q=K.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"team"}},[t._m(0),a("div",{staticClass:"team__master"},t._l(t.team,(function(t){return a("div",{key:t.id},[a("Master",{attrs:{imgSrc:t.imgSrc,title:t.title,description:t.description}})],1)})),0)])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team__content"},[a("h1",{staticClass:"team__title"},[t._v("Experienced Team")]),a("p",{staticClass:"team__paragraph"},[t._v(" To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin ")])])}],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person"},[a("div",{staticClass:"person__photo"},[a("img",{staticClass:"person__img",attrs:{src:t.imgSrc,alt:""}})]),a("div",{staticClass:"person__information"},[a("div",{staticClass:"person__info"},[a("h3",{staticClass:"person__title"},[t._v(t._s(t.title))]),a("p",{staticClass:"person__subtitle"},[t._v(t._s(t.description))])]),t._m(0)])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person__icons"},[a("div",{staticClass:"person__facebook"},[a("a",{attrs:{href:"https://uk-ua.facebook.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"person__twitter"},[a("a",{attrs:{href:"https://twitter.com/?lang=uk",target:"_blank"}},[a("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"person__instagram"},[a("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"person__google"},[a("a",{attrs:{href:"https://myaccount.google.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])])])}],it={name:"Master",props:["imgSrc","title","description"]},st=it,nt=Object(m["a"])(st,et,at,!1,null,null,null),rt=nt.exports,ot=a("8214"),ct=a.n(ot),lt=a("eecc"),ut=a.n(lt),dt=a("5a73"),mt=a.n(dt),pt={name:"Team",components:{Master:rt},data:function(){return{team:[{id:1,imgSrc:ct.a,title:"Katya Austin",description:"Depilation master"},{id:2,imgSrc:ut.a,title:"Anna Hannan",description:"Beautician"},{id:3,imgSrc:mt.a,title:"Sarah Harris",description:"Masseur"}]}}},gt=pt,At=(a("8a76"),Object(m["a"])(gt,$,tt,!1,null,null,null)),ft=At.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("Header"),a("About"),a("Gallery"),a("Procedures"),t._m(0)],1)},vt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background-right"},[i("img",{staticClass:"photo2",attrs:{src:a("f9ac"),alt:""}})])}],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{attrs:{id:"header"}},[a("modal",{attrs:{name:"modal",adaptive:t.adaptive}},[a("youtube",{ref:"youtube",attrs:{"video-id":"PuQQYfFvgrs",resize:!0}})],1),t._m(0),a("div",{staticClass:"header__content"},[a("h4",{staticClass:"header__subtitle"},[t._v("SPA & BEAUTY CENTER")]),a("h1",{staticClass:"header__title"},[t._v("Beauty and success starts here")]),a("p",{staticClass:"header__paragraph"},[t._v(" Together creeping heaven upon third dominion be upon won't darkness rule behold it created good saw after she'd Our set living. ")]),a("div",{staticClass:"header__button"},[a("router-link",{staticClass:"header__contact",attrs:{to:"/contact"}},[a("Button",{attrs:{title:"RESERVE NOW"}})],1),a("div",{staticClass:"header__watch",on:{click:t.showVideo}},[a("i",{staticClass:"fa fa-play",attrs:{"aria-hidden":"true"}}),a("p",{staticClass:"header__text"},[t._v("Watch our story")])])],1)])],1)},Ct=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header__background-left"},[i("img",{staticClass:"photo1",attrs:{src:a("8b52"),alt:""}})])}],_t=a("1881"),kt=a.n(_t);i["a"].use(kt.a,{componentName:"modal"});var wt={name:"Header",data:function(){return{adaptive:!0}},components:{Button:j},methods:{showVideo:function(){this.$modal.show("modal")}}},yt=wt,It=(a("5452"),Object(m["a"])(yt,bt,Ct,!1,null,null,null)),St=It.exports,Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about"}},[i("img",{staticClass:"about__photo1",attrs:{src:a("64ed"),alt:""}}),i("img",{staticClass:"about__photo2",attrs:{src:a("d8d9"),alt:""}}),i("img",{attrs:{src:a("458d"),alt:""}}),i("div",{staticClass:"about__content"},[i("h4",{staticClass:"about__subtitle"},[t._v("ABOUT OUR SPA CENTER")]),i("h1",{staticClass:"about__title"},[t._v("Come and you will be Inspired!")]),i("p",{staticClass:"about__paragraph1"},[t._v(" It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker ")]),t.isReadMore?i("p",{staticClass:"about__paragraph2"},[t._v(" It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker ")]):t._e()]),i("div",{staticClass:"about__button"},[i("Button",{attrs:{title:t.btnTitle,isRound:!0,onClickProp:t.readMore}})],1)])},Pt=[],jt={name:"About",components:{Button:j},data:function(){return{isReadMore:!1,btnTitle:"READ MORE"}},methods:{readMore:function(){this.$data.isReadMore=!this.$data.isReadMore,this.$data.isReadMore?this.$data.btnTitle="CLOSE":this.$data.btnTitle="READ MORE"}}},Ot=jt,Et=(a("50c47"),Object(m["a"])(Ot,Rt,Pt,!1,null,null,null)),Nt=Et.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"gallery"}},t._l(t.gallery,(function(t){return a("div",{key:t.id,attrs:{id:"gallery"}},[a("PhotoCard",{attrs:{imgSrc:t.imgSrc,description:t.description}})],1)})),0)},Zt=[],Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery__massage right services"},[i("img",{staticClass:"gallery__img",attrs:{src:t.imgSrc,alt:""}}),i("div",{staticClass:"services__hover"},[i("img",{staticClass:"services__img",attrs:{src:a("4884"),alt:""}}),i("span",{staticClass:"services__span"},[t._v(t._s(t.description))])])])},Lt=[],Ut={name:"PhotoCard",props:["imgSrc","description"]},Tt=Ut,Yt=Object(m["a"])(Tt,Bt,Lt,!1,null,null,null),Mt=Yt.exports,Wt=a("07de"),zt=a.n(Wt),Jt=a("3dea"),Gt=a.n(Jt),Dt=a("a18c"),Ht=a.n(Dt),Xt=a("a1d1"),Qt=a.n(Xt),Ft={name:"Gallery",data:function(){return{gallery:[{id:1,imgSrc:zt.a,description:"Massage"},{id:2,imgSrc:Gt.a,description:"Stone massage"},{id:3,imgSrc:Ht.a,description:"Depilation"},{id:4,imgSrc:Qt.a,description:"Facial massage"}]}},components:{PhotoCard:Mt}},Vt=Ft,Kt=(a("5baa"),Object(m["a"])(Vt,xt,Zt,!1,null,null,null)),qt=Kt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"procedures"}},[t._m(0),a("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),[t._l(t.procedures,(function(t){return a("div",{key:t.id},[a("Procedure",{attrs:{title:t.title,description:t.description,imgSrc:t.imgSrc}})],1)})),t._l(t.procedures,(function(t){return a("div",{key:t.id},[a("Procedure",{attrs:{title:t.title,description:t.description,imgSrc:t.imgSrc}})],1)}))],2)],1)},te=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"procedures__content"},[a("h1",{staticClass:"procedures__title"},[t._v("Popular Procedures")]),a("p",{staticClass:"procedures__paragraph"},[t._v(" To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin ")])])}],ee=a("a7ab"),ae=a.n(ee),ie=(a("7b8d"),a("6a2c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider__item"},[a("img",{staticClass:"slider__img",attrs:{src:t.imgSrc,alt:""}}),a("div",{staticClass:"slider__text"},[a("h3",{staticClass:"slider__title"},[t._v(t._s(t.title))]),a("p",{staticClass:"slider__subtitle"},[t._v(t._s(t.description))])])])}),se=[],ne={name:"Procedure",props:["imgSrc","title","description"]},re=ne,oe=Object(m["a"])(re,ie,se,!1,null,null,null),ce=oe.exports,le=a("6495"),ue=a.n(le),de=a("27ea"),me=a.n(de),pe=a("e671"),ge=a.n(pe),Ae={name:"Procedures",data:function(){return{procedures:[{id:1,imgSrc:ue.a,title:"Massage Therapy",description:"Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."},{id:2,imgSrc:me.a,title:"Beauty Care",description:"Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."},{id:3,imgSrc:ge.a,title:"Executive Reflexology",description:"Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."}],settings:{dots:!0,infinite:!0,initialSlide:2,speed:500,slidesToShow:3,slidesToScroll:1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1330,settings:{slidesToShow:2}},{breakpoint:970,settings:{slidesToShow:1}}]}}},components:{Button:j,VueSlickCarousel:ae.a,Procedure:ce}},fe=Ae,he=(a("3829"),Object(m["a"])(fe,$t,te,!1,null,null,null)),ve=he.exports,be={name:"Home",components:{Header:St,About:Nt,Gallery:qt,Procedures:ve}},Ce=be,_e=(a("4042"),Object(m["a"])(Ce,ht,vt,!1,null,null,null)),ke=_e.exports,we=new C["a"]({mode:"history",routes:[{path:"/",component:ke},{path:"/contact",component:q},{path:"/team",component:ft}],scrollBehavior:function(t,e,a){return a||(t.hash?{selector:t.hash}:{x:0,y:0})}}),ye=a("755e"),Ie=a("e0ec"),Se=a.n(Ie);i["a"].use(Se.a),i["a"].use(C["a"]),i["a"].use(n.a),i["a"].config.productionTip=!1,i["a"].use(ye,{load:{key:"AIzaSyDwy3yIZKy6wx7R3dZ9A9l-7KLVhnNAO6M",libraries:"places"}}),new i["a"]({router:we,render:function(t){return t(b)}}).$mount("#app")},"5a73":function(t,e,a){t.exports=a.p+"img/masseur.f2058c48.png"},"5baa":function(t,e,a){"use strict";a("1b67")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5e5d":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{attrs:{id:"footer"}},[i("div",{staticClass:"footer__content"},[i("div",{staticClass:"f-logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:a("534f"),alt:""}})])],1),i("div",{staticClass:"menu"},[i("div",{staticClass:"menu__list f-list"},[i("ul",{staticClass:"f-list__ul-menu"},[i("li",{staticClass:"f-list__ul-menu item"},[i("router-link",{staticClass:"item__aboutUs",attrs:{to:{path:"/",hash:"#about"}}},[t._v(" ABOUT US ")])],1),i("li",{staticClass:"f-list__ul-menu item"},[i("router-link",{staticClass:"item__team",attrs:{to:"/team"}},[t._v("TEAM")])],1),i("li",{staticClass:"f-list__ul-menu item"},[i("router-link",{staticClass:"item__gallery",attrs:{to:{path:"/",hash:"#gallery"}}},[t._v(" GALLERY ")])],1),i("li",{staticClass:"f-list__ul-menu item"},[i("router-link",{staticClass:"item__contact",attrs:{to:"/contact"}},[t._v("CONTACT")])],1)])])]),t._m(0),t._m(1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer__icons"},[a("div",{staticClass:"footer__facebook"},[a("a",{attrs:{href:"https://uk-ua.facebook.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"footer__twitter"},[a("a",{attrs:{href:"https://twitter.com/?lang=uk",target:"_blank"}},[a("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"footer__instagram"},[a("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer__text"},[a("span",{staticClass:"footer__span"},[t._v(" © COPYRIGHT 2019 "),a("a",{staticClass:"footer__link",attrs:{href:"https://beetroot.academy/ru/",target:"_blank"}},[t._v("LEOSPA")]),t._v(" ALL RIGHTS RESERVED ")])])}]},6495:function(t,e,a){t.exports=a.p+"img/massage-therapy.c808626a.png"},"64ed":function(t,e,a){t.exports=a.p+"img/flower-red.8802db96.png"},"7f5d":function(t,e,a){"use strict";a("1cd1")},8214:function(t,e,a){t.exports=a.p+"img/depilationMaster.648ac849.png"},"8a76":function(t,e,a){"use strict";a("cbdd")},"8b52":function(t,e,a){t.exports=a.p+"img/leaf.cf41bbea.png"},"8b55":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAPxJREFUOI3NlOFtg0AMRp8rFmCFrJAVWIEVyAodIRkBRqAjkBUyQjICGeH1R0x1QmnhZy2dsM/np7P5dLDD1LM65xrVek9dCZjUu9qqx4zn3SC1U+f0G7UrwONyLtRpg/UAvoClaABuQA9cgboCGuBzVdgBT6BOCOk/V+dqoEH1TRtTttKp96KdNv0xV6P6JyT9eSnOuM694wL52JgHwAU4F3EPXCPitmxsQiLikjfo1QZoWc2w2nETgBMwJeAUEY8yuQsSEVd1AA4RMazze2ayaf8HUgFvtQIcUx8DL3n/WP6ljpfaf7cUUp/Csvgu/liKcNNSpW2+K4d1/hsgtesAPVuGPQAAAABJRU5ErkJggg=="},"94d4":function(t,e,a){"use strict";var i=a("2e93"),s=a.n(i);e["default"]=s.a},"9afb":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAJtJREFUKJGt0+ENAiEMhuHvRnAFZnEFHYEVnIUVGMoRcIT3ftg7G1IiRPsLCH0KNGxA0x9iA5D0knSX9FzMT5KqpIt4RwUakGYFIFlOBZCdSCuYR2z+gWaxHgmhb1iEDKER5pAS7B9C2ZrQDDgQgOsU5JAbUAxoNs4RFj32ibi14q8TYX37w2pR9AVPCHjMIgGWPbSEBBjHX/s5dhPKaFcpWNJ/AAAAAElFTkSuQmCC"},"9c0c":function(t,e,a){},a18c:function(t,e,a){t.exports=a.p+"img/depilation.ff70fe54.png"},a1b3:function(t,e,a){"use strict";a("2c6a")},a1d1:function(t,e,a){t.exports=a.p+"img/facial-massage.85b61036.png"},a9b3:function(t,e,a){},af35:function(t,e,a){},cbdd:function(t,e,a){},d8d9:function(t,e,a){t.exports=a.p+"img/flower-pink.308962bb.png"},da8d:function(t,e,a){},da96:function(t,e,a){},e671:function(t,e,a){t.exports=a.p+"img/executive-reflexology.822741f4.png"},eecc:function(t,e,a){t.exports=a.p+"img/beautician.713aa3b5.png"},ef55:function(t,e,a){"use strict";a("da8d")},f9ac:function(t,e,a){t.exports=a.p+"img/background_header.ff6cd36c.png"},fd2d:function(t,e,a){"use strict";var i=a("5e5d"),s=a("94d4"),n=(a("53d7"),a("2877")),r=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports}});
//# sourceMappingURL=app.b685f721.js.map