(this.webpackJsonpnotflix=this.webpackJsonpnotflix||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},41:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(31),l=n.n(i),o=n(8),u=n(9),c=n(10),s=n(11),p=n(15),m=n(14),d=n(2),f=n(1);function g(){var e=Object(d.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return g=function(){return e},e}function v(){var e=Object(d.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return v=function(){return e},e}function h(){var e=Object(d.a)(["\n  display: flex;\n"]);return h=function(){return e},e}function b(){var e=Object(d.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return b=function(){return e},e}var E=f.default.header(b()),x=f.default.ul(h()),y=f.default.li(v(),(function(e){return e.current?"#3498db":"transparent"})),_=Object(f.default)(p.b)(g()),j=Object(m.g)((function(e){var t=e.location.pathname;return r.a.createElement(E,null,r.a.createElement(x,null,r.a.createElement(y,{current:"/"===t},r.a.createElement(_,{to:"/"},"Movies")),r.a.createElement(y,{current:"/tv"===t},r.a.createElement(_,{to:"/tv"},"TV Shows")),r.a.createElement(y,{current:"/search"===t},r.a.createElement(_,{to:"/search"},"Search"))))})),O=n(6),w=n.n(O),k=n(13),S=n(12);function T(){var e=Object(d.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  gap: 25px;\n"]);return T=function(){return e},e}function R(){var e=Object(d.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return R=function(){return e},e}function M(){var e=Object(d.a)(["\n  &:not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return M=function(){return e},e}var U=f.default.div(M()),z=f.default.span(R()),C=f.default.div(T()),N=function(e){var t=e.title,n=e.children;return r.a.createElement(U,null,r.a.createElement(z,null,t),r.a.createElement(C,null,n))};function P(){var e=Object(d.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 32px;\n  margin-top: 20px;\n"]);return P=function(){return e},e}var I=f.default.div(P()),F=function(){return r.a.createElement(I,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function A(){var e=Object(d.a)(["\n  color: ",";\n"]);return A=function(){return e},e}function B(){var e=Object(d.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return B=function(){return e},e}var D=f.default.div(B()),V=f.default.span(A(),(function(e){return e.color})),L=function(e){var t=e.text,n=e.color;return r.a.createElement(D,null,r.a.createElement(V,{color:n},t))};function q(){var e=Object(d.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return q=function(){return e},e}function J(){var e=Object(d.a)(["\n  display: block;\n  margin-bottom: 2px;\n"]);return J=function(){return e},e}function G(){var e=Object(d.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(d.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n"]);return H=function(){return e},e}function K(){var e=Object(d.a)(["\n  background-image: url(",");\n  background-size: cover;\n  height: 180px;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.2s linear;\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  font-size: 12px;\n"]);return Q=function(){return e},e}var W=f.default.div(Q()),X=f.default.div(K(),(function(e){return e.bgUrl})),Y=f.default.span(H()),Z=f.default.div(G(),X,Y),$=f.default.span(J()),ee=f.default.span(q()),te=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,o=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(p.b,{to:c?"/movie/".concat(t):"/tv/".concat(t)},r.a.createElement(W,null,r.a.createElement(Z,null,r.a.createElement(X,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(25)}),r.a.createElement(Y,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",l,"/10")),r.a.createElement($,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(ee,null,o)))};function ne(){var e=Object(d.a)(["\n  padding: 20px;\n"]);return ne=function(){return e},e}var ae=f.default.div(ne()),re=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Movies | Notflix")),l?r.a.createElement(F,null):r.a.createElement(ae,null,t&&t.length>0&&r.a.createElement(N,{title:"Now Playing"},t.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(N,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(N,{title:"Popular Movies"},a.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),i&&r.a.createElement(L,{text:i,color:"#e74c3c"})))},ie=n(38),le=n.n(ie).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6f4e46529695845bf36a1ce1369523a5",language:"en-US"}}),oe=function(){return le.get("movie/now_playing")},ue=function(){return le.get("movie/upcoming")},ce=function(){return le.get("movie/popular")},se=function(e){return le.get("movie/".concat(e),{params:{append_to_response:"videos"}})},pe=function(e){return le.get("search/movie",{params:{query:encodeURIComponent(e)}})},me=function(){return le.get("tv/top_rated")},de=function(){return le.get("tv/popular")},fe=function(){return le.get("tv/airing_today")},ge=function(e){return le.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ve=function(e){return le.get("search/tv",{params:{query:encodeURIComponent(e)}})},he=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,a,r,i,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe();case 3:return t=e.sent,n=t.data.results,e.next=7,ue();case 7:return a=e.sent,r=a.data.results,e.next=11,ce();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(re,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:l})}}]),n}(r.a.Component);function be(){var e=Object(d.a)(["\n  padding: 20px;\n"]);return be=function(){return e},e}var Ee=f.default.div(be()),xe=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,l=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"TV Shows | Notflix")),l?r.a.createElement(F,null):r.a.createElement(Ee,null,t&&t.length>0&&r.a.createElement(N,{title:"Top Rated Show"},t.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(N,{title:"Popular Show"},n.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(N,{title:"Airing Today"},a.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(L,{text:i,color:"#e74c3c"})))},ye=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,a,r,i,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me();case 3:return t=e.sent,n=t.data.results,e.next=7,de();case 7:return a=e.sent,r=a.data.results,e.next=11,fe();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find tv information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,l=e.loading;return r.a.createElement(xe,{topRated:t,popular:n,airingToday:a,error:i,loading:l})}}]),n}(r.a.Component);function _e(){var e=Object(d.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return _e=function(){return e},e}function je(){var e=Object(d.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return je=function(){return e},e}function Oe(){var e=Object(d.a)(["\n  padding: 20px;\n"]);return Oe=function(){return e},e}var we=f.default.div(Oe()),ke=f.default.form(je()),Se=f.default.input(_e()),Te=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading,o=e.handleSubmit,u=e.updateTerm;return r.a.createElement(we,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Search | Notflix")),r.a.createElement(ke,{onSubmit:o},r.a.createElement(Se,{placeholder:"Search Movies or TV Show...",value:a,onChange:u})),l?r.a.createElement(F,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(N,{title:"Movie Results"},t.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(N,{title:"TV Show Result"},n.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(L,{text:i,color:"#e74c3c"}),t&&n&&0===t.length&&0===n.length&&r.a.createElement(L,{text:"Nothing found",color:"#95a5a6"})))},Re=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(k.a)(w.a.mark((function t(){var n,a,r,i,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,pe(n);case 5:return a=t.sent,r=a.data.results,t.next=9,ve(n);case 9:i=t.sent,l=i.data.results,e.setState({movieResults:r,tvResults:l}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading;return r.a.createElement(Te,{movieResults:t,tvResults:n,searchTerm:a,error:i,loading:l,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function Me(){var e=Object(d.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return Me=function(){return e},e}function Ue(){var e=Object(d.a)(["\n  margin: 0 10px;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(d.a)([""]);return ze=function(){return e},e}function Ce(){var e=Object(d.a)(["\n  margin: 20px 0;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  font-size: 32px;\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(d.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(d.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return Ie=function(){return e},e}function Fe(){var e=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  height: 100%;\n"]);return Fe=function(){return e},e}function Ae(){var e=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"]);return Ae=function(){return e},e}function Be(){var e=Object(d.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Be=function(){return e},e}var De=f.default.div(Be()),Ve=f.default.div(Ae(),(function(e){return e.bgImage})),Le=f.default.div(Fe()),qe=f.default.div(Ie(),(function(e){return e.bgImage})),Je=f.default.div(Pe()),Ge=f.default.h3(Ne()),He=f.default.div(Ce()),Ke=f.default.span(ze()),Qe=f.default.span(Ue()),We=f.default.p(Me()),Xe=function(e){var t=e.result;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Loading | Notflix")),r.a.createElement(F,null)):r.a.createElement(De,null,r.a.createElement(S.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| Nomflix")),r.a.createElement(Ve,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Le,null,r.a.createElement(qe,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(25)}),r.a.createElement(Je,null,r.a.createElement(Ge,null,t.original_title?t.original_title:t.original_name),r.a.createElement(He,null,r.a.createElement(Ke,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Qe,null,"\u2022"),r.a.createElement(Ke,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Qe,null,"\u2022"),r.a.createElement(Ke,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(We,null,t.overview))))},Ye=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var a;Object(o.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,error:null,loading:!0,isMovie:r.includes("/movie/")},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,a,r,i,l,o,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=Number(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,se(i);case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,ge(i);case 16:u=e.sent,l=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:l}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(Xe,{result:t,error:n,loading:a})}}]),n}(r.a.Component),Ze=function(){return r.a.createElement(p.a,null,r.a.createElement(j,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:he}),r.a.createElement(m.b,{path:"/tv",exact:!0,component:ye}),r.a.createElement(m.b,{path:"/search",exact:!0,component:Re}),r.a.createElement(m.b,{path:"/movie/:id",exact:!0,component:Ye}),r.a.createElement(m.b,{path:"/tv/:id",exact:!0,component:Ye}),r.a.createElement(m.a,{from:"*",to:"/"})))},$e=n(39),et=n.n($e);function tt(){var e=Object(d.a)(["\n    ","\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top: 50px;\n    }\n"]);return tt=function(){return e},e}var nt=Object(f.createGlobalStyle)(tt(),et.a),at=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,null),r.a.createElement(nt,null))}}]),n}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(at,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cb2809cb.chunk.js.map