(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(10),i=t.n(o),l=t(4),c=t(5),u=t(7),d=t(6),p=t(8),f=t(11),s=(t(31),t(3)),b=t(2);function h(){var n=Object(s.a)(["\n    color: orange;\n    padding: 0.5em 2em;\n    border-radius: 0.5em;\n    font-size: 1em;\n    &:hover {\n        background-color: lightblue;\n    }\n"]);return h=function(){return n},n}var m=b.a.button(h()),g=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(n){return r.a.createElement(m,{onClick:this.props.function},this.props.title)}}]),e}(r.a.Component),w=t(24),x=t(22),v=t(23);function E(){var n=Object(s.a)(["\n    width: 100%;\n    display: block;\n    background: #383838;\n    color: white;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 1.2em;\n    border: 1px solid white;\n"]);return E=function(){return n},n}function j(){var n=Object(s.a)(["\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n"]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n    float: right;\n    display: block;\n    color: white;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 1.2em;\n    margin-right: 7%;\n    border-color: white;\n    border-radius: 2px;\n"]);return O=function(){return n},n}function k(){var n=Object(s.a)(['\n    float: left;\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 1.2em;\n    font-family: "Roboto";\n']);return k=function(){return n},n}function y(){var n=Object(s.a)(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n"]);return y=function(){return n},n}function M(){var n=Object(s.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    display: block;\n"]);return M=function(){return n},n}var z=b.a.div(M()),C=b.a.ul(y()),D=b.a.a(k()),F=b.a.div(O()),S=b.a.div(j()),R=b.a.a(E()),A=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(r)))).state={showDropdownMenu:!1},t.showDropdownMenu=function(){t.setState(function(n){return{showDropdownMenu:!n.showDropdownMenu}})},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement(z,null,r.a.createElement(w.a,{query:"(max-width: 599px)"},function(e){return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,r.a.createElement(F,null,r.a.createElement(v.a,{icon:x.a,size:"1x",onClick:n.showDropdownMenu}))),n.state.showDropdownMenu?r.a.createElement(S,null,r.a.createElement(R,null,"hallo"),r.a.createElement(R,null,"hallo")):null):r.a.createElement(C,null,r.a.createElement(D,{href:"/"},"Home"),r.a.createElement(D,{href:"/about"},"About"),r.a.createElement(D,{href:"/contact"},"Contact"))}))}}]),e}(r.a.Component);function H(){var n=Object(s.a)(["\n    display: block;\n    text-align: center;\n    font-size: 1.2em;\n"]);return H=function(){return n},n}function J(){var n=Object(s.a)(["\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 0.5rem;\n    background-color: #efefef;\n    text-align: center;\n"]);return J=function(){return n},n}var T=b.a.footer(J()),B=b.a.a(H()),L=function(){return r.a.createElement(T,null,r.a.createElement(B,{href:"https://github.com/LouisPetrik/react-responsive-app"},"GitHub"))};function q(){var n=Object(s.a)(["\n    border-bottom: 1px solid #eee;\n    padding-top: 9px;\n"]);return q=function(){return n},n}function G(){var n=Object(s.a)(["\n    font-family: Roboto;\n    margin-bottom: 50px;\n    margin-top: 100px;\n    font-size: 36px;\n    font-weight: 500;\n    white-space: nowrap;\n"]);return G=function(){return n},n}var I=b.a.h1(G()),N=b.a.div(q()),P=function(n){return r.a.createElement(I,null,n.title,r.a.createElement(N,null))};function Y(){var n=Object(s.a)(["\n    color: black;\n    padding: 0.2em 1em;\n    background-color: white;\n    border-radius: 0.5em;\n    font-size: 1em;\n    margin-right: 4px;\n    &:hover {\n        background-color: orange;\n    }\n"]);return Y=function(){return n},n}function K(){var n=Object(s.a)(["\n    color: white;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    :hover {\n        color: orange;\n    }\n"]);return K=function(){return n},n}function Q(){var n=Object(s.a)(["\n    padding: 8px 10px;\n    background-color: black;\n    color: white;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n"]);return Q=function(){return n},n}function U(){var n=Object(s.a)(["\n    padding: 2px 16px;\n"]);return U=function(){return n},n}function V(){var n=Object(s.a)(["\n    padding: 2px 10px;\n    height: 60px;\n    background-color: black;\n    color: white;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n"]);return V=function(){return n},n}function W(){var n=Object(s.a)(["\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    width: 80%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n    max-width: 600px;\n    min-width: 350px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    font-family: Roboto;\n  \n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n  display: block; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n"]);return X=function(){return n},n}var Z=b.a.div(X()),$=b.a.div(W()),_=b.a.div(V()),nn=b.a.div(U()),en=b.a.div(Q()),tn=b.a.span(K()),an=b.a.span(Y()),rn=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(n){return r.a.createElement(r.a.Fragment,null,this.props.show?r.a.createElement(Z,null,r.a.createElement($,null,r.a.createElement(_,null,r.a.createElement(tn,{onClick:this.props.function},"\xd7"),r.a.createElement("h2",null,"This is the header")),r.a.createElement(nn,null,r.a.createElement("p",null,"This is the body"),r.a.createElement("p",null,"Just the body of the modal")),r.a.createElement(en,null,r.a.createElement(an,null,"Yes"),r.a.createElement(an,null,"No")))):null)}}]),e}(r.a.Component),on=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(r)))).state={showModal:!1},t.handleModal=function(){t.setState(function(n){return{showModal:!n.showModal}},console.log(t.state.showModal))},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(f.Row,null,r.a.createElement(f.Col,{span:10,offset:1},r.a.createElement(P,{title:"This is the title"})),r.a.createElement(f.Col,{span:8,offset:2},r.a.createElement(g,{title:"Show the Modal",function:this.handleModal}),r.a.createElement(rn,{show:this.state.showModal,function:this.handleModal}))),r.a.createElement(L,null))}}]),e}(a.Component);i.a.render(r.a.createElement(on,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fbb415ab.chunk.js.map