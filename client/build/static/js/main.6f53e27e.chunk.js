(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),s=a.n(r),i=a(65),o=a.n(i),l=a(76),j=a(43),d=a(107),h=a(139),p=Object(h.a)((function(e){return{root:{flexGrow:1},tabs:{borderBottom:"1px solid #dcdcdc"},tab:{padding:0,height:"100%"},aTag:{width:"100%",height:"100%",textDecoration:"none",padding:"11px 0"},headerMain:{padding:25},title:{fontSize:29,paddingBottom:10},subTitle:{fontSize:20},fieldset:{all:"unset"},user:{minWidth:550,"@media (max-width:700px)":{minWidth:350},maxWidth:550,marginTop:40,marginRight:10,marginLeft:10},repoBox:{paddingBottom:15},p:{padding:"3px 0"},paper:{margin:70,minWidth:600,"@media (max-width:700px)":{minWidth:350},maxWidth:600,minHeight:200,paddingBottom:25,borderTop:"4px solid #dcdcdc"},content:{alignItems:"center",justifyContent:"center",maxWidth:992,margin:"auto",marginTop:30},paperAbout:{padding:e.spacing(1),margin:e.spacing(3),textAlign:"center",color:e.palette.text.secondary},paragraph:{padding:e.spacing(5,20),"@media (max-width:700px)":{padding:e.spacing(5)},margin:e.spacing(3),textAlign:"left",color:e.palette.text.secondary,"& h1":{textAlign:"center"}},contact:{padding:e.spacing(1),margin:e.spacing(3),textAlign:"center",color:e.palette.text.secondary},button:{padding:e.spacing(1,5),margin:e.spacing(3)},paragraphError:{padding:e.spacing(0,30),"@media (max-width:1050px)":{padding:e.spacing(0,15)},"@media (max-width:700px)":{padding:e.spacing(0)},margin:e.spacing(3),textAlign:"center",color:e.palette.text.secondary,"& h1":{textAlign:"center"},"& img":{width:"100%"}},accordionSum:{padding:e.spacing(0,1)}}})),b=a(2),x=function(){var e=p();return Object(b.jsx)(d.a,{component:"header",children:Object(b.jsx)(d.a,{component:"h1",className:e.headerMain,variant:"h4",children:"Github API"})})},m=a(153),u=a(142),O=a(143),g=a(35),f=a.n(g),N=function(e){var t=p();return Object(b.jsxs)(d.a,{component:"form",className:t.fieldset,onSubmit:e.onSubmit,children:[Object(b.jsx)(m.a,{type:"text",id:"githubUsername",name:"githubUsername",className:"githubUsername",helperText:"Github username",InputProps:{startAdornment:Object(b.jsx)(u.a,{position:"start",children:Object(b.jsx)(f.a,{})})}}),Object(b.jsx)(O.a,{type:"submit",children:"Submit"})]})},v=a(80),w=a(154),y=a(156),k=a(157),_=a(144),A=a(5),S=a(78),D=a.n(S),T=function(e){for(var t=e.userData,a=0,n=!1;!n;)t["repo_name_".concat(a)]?a++:n=!0;return a},B=Object(A.a)({root:{boxShadow:"none"},heading:{flexBasis:"33.33%",flexShrink:0},secondaryHeading:{},expanded:{}})(y.a),C=Object(A.a)({root:{padding:"0px",marginBottom:-1,minHeight:56,borderTop:"1px solid #dcdcdc","&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"5px 0"}},expanded:{}})(k.a),W=Object(A.a)((function(e){return{root:{display:"inline-block",padding:"7px"}}}))(_.a);var I=function(e){var t,a=Object(n.useState)(!1),c=Object(j.a)(a,2),r=c[0],s=c[1],i=p();return Object(b.jsx)(w.a,{width:"100%",children:Object(b.jsxs)(B,{square:!0,expanded:"panel"===r,onChange:(t="panel",function(e,a){s(!!a&&t)}),children:[Object(b.jsx)(C,{"aria-controls":"paneld-content",expandIcon:Object(b.jsx)(D.a,{}),id:"paneld-header",children:Object(b.jsx)(d.a,{className:i.accordionSum,component:"p",children:"Repositories"})}),Object(b.jsx)(W,{children:Object(v.a)(Array(T(e))).map((function(t,a){return Object(b.jsxs)(w.a,{className:i.repoBox,children:[Object(b.jsx)(d.a,{className:i.subTitle,component:"h2",children:e.userData["repo_name_".concat(a)]}),Object(b.jsx)(d.a,{className:i.p,color:"textSecondary",component:"p",children:"null"!==e.userData["repo_desc_".concat(a)]?e.userData["repo_desc_".concat(a)]:Object(b.jsx)(d.a,{component:"p",color:"textSecondary",children:"No description provided."})}),Object(b.jsx)(d.a,{className:i.p,component:"a",target:"_blank",href:e.userData["repo_url_".concat(a)],children:e.userData["repo_url_".concat(a)]})]})}))})]})})},G=a(145),U=a(146),F=a(147),L=function(){var e=p();return Object(b.jsxs)(d.a,{className:e.p,component:"p",children:[Object(b.jsx)(d.a,{component:"em",children:"Oops! "}),"either user doesn't exist or the internet is broken..."]})},J=function(e,t){return"null"===e?"":t},M=function(e){var t=e.data,a=p();return Object(b.jsxs)(G.a,{className:a.user,variant:"outlined",children:[Object(b.jsxs)(U.a,{children:[Object(b.jsx)(d.a,{className:a.title,component:"h2",children:t.login}),J(t.bio,Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(d.a,{className:a.subTitle,component:"h3",children:"Bio"}),Object(b.jsx)(d.a,{className:a.p,color:"textSecondary",component:"p",children:t.bio})]})),Object(b.jsxs)(d.a,{className:a.p,component:"p",children:["Followers: ",t.followers]}),Object(b.jsxs)(d.a,{className:a.p,component:"p",children:["Following: ",t.following]}),J(t.company,Object(b.jsxs)(d.a,{className:a.p,component:"p",children:["Company: ",t.company]})),J(t.location,Object(b.jsxs)(d.a,{className:a.p,component:"p",children:["Location: ",t.location]})),Object(b.jsxs)(d.a,{className:a.p,component:"p",children:["Github: ",Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:"".concat(t.html_url),children:t.html_url})]}),J(t.email,Object(b.jsxs)(d.a,{className:a.p,component:"p",children:["email: ",t.email]}))]}),Object(b.jsx)(F.a,{children:Object(b.jsx)(I,{userData:t})})]})},R=function(e){var t=e.data;return Object(b.jsx)(n.Fragment,{children:t.message?Object(b.jsx)(L,{}):Object(b.jsx)(M,{data:t})})},E=a(148),H=function(e){var t=e.userData,a=e.isLoading;return Object(b.jsx)(n.Fragment,{children:a?Object(b.jsx)(E.a,{}):t&&Object(b.jsx)(R,{data:t})})},P=a(108),z=a(149);function $(){var e=p();return Object(b.jsx)(z.a,{className:e.root,children:Object(b.jsxs)(z.a,{className:e.content,container:!0,children:[Object(b.jsx)(z.a,{item:!0,xs:12,children:Object(b.jsxs)(P.a,{className:e.paragraph,children:[Object(b.jsx)("h1",{children:"About Us"}),Object(b.jsx)("p",{children:"We have met in class while studying Diploma of Website Development on TAFE and this project was developed as part of our curriculum. It covers technologies such as:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Linux"}),Object(b.jsx)("li",{children:"Node.JS"}),Object(b.jsx)("li",{children:"Redis"}),Object(b.jsx)("li",{children:"React.JS"}),Object(b.jsx)("li",{children:"Material-Ui"}),Object(b.jsx)("li",{children:"Git"})]}),Object(b.jsx)("p",{children:"This project gave us the experience of a real working environment, working alongside other students as a team and sharing the workload as well as knowledge learned througout the project."})]})}),Object(b.jsx)(z.a,{item:!0,xs:12,children:Object(b.jsx)(P.a,{className:e.contact,children:Object(b.jsx)("h1",{children:"Contact Us"})})}),Object(b.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(b.jsxs)(P.a,{className:e.paperAbout,children:[Object(b.jsx)("h2",{children:"Jonathan Archer"}),Object(b.jsx)("p",{children:"jon357@pm.me"}),Object(b.jsx)(O.a,{target:"_blank",href:"https://github.com/jnlar",children:Object(b.jsx)(f.a,{})})]})}),Object(b.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(b.jsxs)(P.a,{className:e.paperAbout,children:[Object(b.jsx)("h2",{children:"Nathan Williams"}),Object(b.jsx)("p",{children:"contact@nathwebdev.com"}),Object(b.jsx)(O.a,{target:"_blank",href:"https://github.com/Creeds1996",children:Object(b.jsx)(f.a,{})})]})}),Object(b.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(b.jsxs)(P.a,{className:e.paperAbout,children:[Object(b.jsx)("h2",{children:"Mohammad Rabbani"}),Object(b.jsx)("p",{children:"ngnengr@yahoo.com"}),Object(b.jsx)(O.a,{target:"_blank",href:"https://github.com/ngnengr",children:Object(b.jsx)(f.a,{})})]})}),Object(b.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(b.jsxs)(P.a,{className:e.paperAbout,children:[Object(b.jsx)("h2",{children:"Gus Costa"}),Object(b.jsx)("p",{children:"gustavo_leon88@hotmail.com"}),Object(b.jsx)(O.a,{target:"_blank",href:"https://github.com/Guscosta88",children:Object(b.jsx)(f.a,{})})]})})]})})}var q=a.p+"static/media/coffee.d80268de.gif";function K(){var e=p();return Object(b.jsx)(w.a,{className:e.root,children:Object(b.jsx)(z.a,{container:!0,spacing:3,children:Object(b.jsx)(z.a,{item:!0,xs:12,children:Object(b.jsxs)(P.a,{className:e.paragraphError,children:[Object(b.jsx)(d.a,{className:e.headerMain,component:"h1",variant:"h4",children:"404 Page not found"}),Object(b.jsx)(d.a,{component:"img",alt:"coffee cup spilling over",src:q}),Object(b.jsx)(O.a,{className:e.button,variant:"outlined",color:"secondary",href:"/",children:"Back"})]})})})})}var Q=a(151),V=a(79),X=a(150),Y=a(155),Z=a(152),ee=a(61),te=a(11),ae=Object(V.a)({palette:{background:{default:"#f7f7f7"}}}),ne=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),i=Object(j.a)(s,2),d=i[0],h=i[1],m=c.a.useState(0),u=Object(j.a)(m,2),O=u[0],g=u[1],f=p(),v=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===(a=t.target.githubUsername.value.toLowerCase()).trim()){e.next=20;break}return e.prev=3,r(!0),e.next=7,fetch("/api/user/?username=".concat(a));case 7:return n=e.sent,e.next=10,n.json();case 10:c=e.sent,h(c),r(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:e.next=21;break;case 20:window.alert("Please enter a github username.");case 21:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(X.a,{theme:ae,children:[Object(b.jsx)(Q.a,{}),Object(b.jsxs)(ee.a,{children:[Object(b.jsxs)(Y.a,{value:O,onChange:function(e,t){g(t)},className:f.tabs,indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(b.jsx)(Z.a,{className:f.tab,label:Object(b.jsx)(ee.b,{className:f.aTag,to:"/",children:"App"})}),Object(b.jsx)(Z.a,{className:f.tab,label:Object(b.jsx)(ee.b,{className:f.aTag,to:"/about",children:"About"})})]}),Object(b.jsxs)(te.d,{children:[Object(b.jsx)(te.b,{exact:!0,path:"/",children:Object(b.jsx)(z.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:Object(b.jsx)(P.a,{className:f.paper,children:Object(b.jsxs)(z.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",children:[Object(b.jsx)(x,{}),Object(b.jsx)(N,{onSubmit:v}),Object(b.jsx)(H,{userData:d,isLoading:a})]})})})}),Object(b.jsx)(te.b,{path:"/about",children:Object(b.jsx)($,{})}),Object(b.jsx)(te.b,{path:"/error",children:Object(b.jsx)(K,{})}),Object(b.jsx)(te.a,{to:"/error"})]})]})]})};s.a.render(Object(b.jsx)(ne,{}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.6f53e27e.chunk.js.map