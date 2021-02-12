(this.webpackJsonpfirst_react_project=this.webpackJsonpfirst_react_project||[]).push([[0],[,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return c})),n.d(t,"p",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"o",(function(){return g}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",i="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_START",j="FETCH_ORDERS_SUCCESS",b="FETCH_ORDERS_FAIL",h="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",O="AUTH_LOGOUT",g="SET_AUTH_REDIRECT_PATH"},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return g})),n.d(t,"c",(function(){return m}));var r=n(3),c=n(20),i=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){c.a.get("https://burger-builder-75cf6-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(2),u=function(e,t){return function(n){n({type:r.k}),c.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderID:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var i="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';c.a.get("/orders.json"+i).then((function(e){var t,c=[];for(var i in e.data)c.push(Object(s.a)(Object(s.a)({},e.data[i]),{},{id:i}));n((t=c,{type:r.i,orders:t}))})).catch((function(e){var t;n({type:r.g,error:t})}))}},j=n(28),b=n.n(j),h=function(e,t){return{type:r.e,idToken:e,userId:t}},p=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(p())}),1e3*e)}},O=function(e,t,n){return function(c){c({type:r.d});var i={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrYBAYY_EImaUx9tEKD5WB6B6kEovhHHo";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrYBAYY_EImaUx9tEKD5WB6B6kEovhHHo"),b.a.post(a,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),c(h(e.data.idToken,e.data.localId)),c(f(e.data.expiresIn))})).catch((function(e){var t;console.log(e),c((t=e.response.data.error,{type:r.b,error:t}))}))}},g=function(e){return{type:r.o,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(p);else{var r=localStorage.getItem("userId");e(h(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(p())}}},,,function(e,t,n){"use strict";var r=n(28),c=n.n(r).a.create({baseURL:"https://burger-builder-75cf6-default-rtdb.firebaseio.com/"});t.a=c},,,,,,function(e,t,n){"use strict";var r=n(0);n(1),n(69);t.a=function(e){return e.show?Object(r.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(0),c=n(6),i=n(7),a=n(9),o=n(8),s=n(1),u=n.n(s),d=(n(74),n(26)),l=n(12),j=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d.a,{show:this.props.show,clicked:this.props.modelClosed}),Object(r.jsx)("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(u.a.Component);t.a=j},,function(e,t,n){"use strict";var r=n(0);n(1),n(75);t.a=function(e){return Object(r.jsx)("button",{disabled:e.disabled,className:["Button",e.btnType].join(" "),onClick:e.clicked,children:e.children})}},,,,,,function(e,t,n){"use strict";var r=n(0);n(1),n(94);t.a=function(){return Object(r.jsx)("div",{className:"loader",children:"Loading..."})}},function(e,t,n){"use strict";var r=n(0),c=n(2),i=n(6),a=n(7),o=n(9),s=n(8),u=n(1),d=n.n(u),l=n(27),j=n(12);t.a=function(e,t){return function(n){Object(o.a)(d,n);var u=Object(s.a)(d);function d(){var e;Object(i.a)(this,d);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=u.call.apply(u,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(a.a)(d,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInterceptors=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptors=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptors),t.interceptors.response.eject(this.resInterceptors)}},{key:"render",value:function(){return Object(r.jsxs)(j.a,{children:[Object(r.jsx)(l.a,{show:this.state.error,modelClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(c.a)({},this.props))]})}}]),d}(d.a.Component)}},,,,,,,,,,function(e,t,n){"use strict";var r=n(0),c=n(49),i=n(1),a=(n(70),n(6)),o=n(7),s=n(9),u=n(8),d=(n(71),n(19)),l=n.n(d),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{className:"BreadBottom"});break;case"bread-top":e=Object(r.jsxs)("div",{className:"BreadTop",children:[Object(r.jsx)("div",{className:"Seeds1"}),Object(r.jsx)("div",{className:"Seeds2"})]});break;case"meat":e=Object(r.jsx)("div",{className:"Meat"});break;case"cheese":e=Object(r.jsx)("div",{className:"Cheese"});break;case"bacon":e=Object(r.jsx)("div",{className:"Bacon"});break;case"salad":e=Object(r.jsx)("div",{className:"Salad"});break;default:e=null}return e}}]),n}(i.Component);j.PropsTypes={type:l.a.string.isRequired};var b=j;t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(c.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(b,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Start adding ingredients"})),Object(r.jsxs)("div",{className:"Burger",children:[Object(r.jsx)(b,{type:"bread-top"}),t,Object(r.jsx)(b,{type:"bread-bottom"})]})}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n.n(c),a=n(24),o=n.n(a),s=n(18),u=n(16),d=n(21),l=n(48),j=(n(59),n(6)),b=n(7),h=n(9),p=n(8),f=(n(60),n(5)),O=n(2),g=function(e){return function(t){Object(h.a)(c,t);var n=Object(p.a)(c);function c(){var e;Object(j.a)(this,c);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={component:null},e}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(r.jsx)(e,Object(O.a)({},this.props)):null}}]),c}(i.a.Component)},m=n(12),x=(n(61),n(62),n(63),n.p+"static/media/BurgerLogo.ec69c7f6.png"),v=function(e){return Object(r.jsx)("div",{className:"Logo",children:Object(r.jsx)(s.b,{to:"/",activeClassName:"active",exact:!0,children:Object(r.jsx)("img",{src:x,alt:"Burger"})})})},y=(n(65),n(66),function(e){return Object(r.jsx)("li",{className:"NavigationItem",children:Object(r.jsx)(s.b,{to:e.link,activeClassName:"active",exact:e.exact,children:e.children})})}),k=function(e){return Object(r.jsxs)("ul",{className:"NavigationItems",children:[Object(r.jsx)(y,{link:"/",exact:!0,children:" BurgerBuilder"}),e.isAuthenticated?Object(r.jsx)(y,{link:"/orders",children:" Orders"}):null,e.isAuthenticated?Object(r.jsx)(y,{link:"/logout",children:"Logout"}):Object(r.jsx)(y,{link:"/auth",children:" Authenticate"})]})},S=(n(67),function(e){return Object(r.jsxs)("div",{className:"DrawerToggle",onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}),I=function(e){return Object(r.jsxs)("header",{className:"Toolbar",children:[Object(r.jsx)(S,{clicked:e.drawerToggleClicked}),Object(r.jsx)(v,{}),Object(r.jsx)("nav",{className:"DesktopOnly",children:Object(r.jsx)(k,{isAuthenticated:e.isAuth})})]})},A=(n(68),n(26)),C=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(A.a,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(r.jsx)("div",{style:{width:"150px",height:"50px",textAlign:"left"},children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(k,{isAuthenticated:e.isAuth})})]})]})},T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={showSideDrawer:!1},e.sideDrawerHandler=function(){e.setState({showSideDrawer:!1})},e.showDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(m.a,{children:[Object(r.jsx)(I,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.showDrawerToggleHandler}),Object(r.jsx)(C,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerHandler}),Object(r.jsx)("main",{className:"Content",children:this.props.children})]})}}]),n}(i.a.Component),N=Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(T),w=n(46),D=(n(72),n(73),function(e){return Object(r.jsxs)("div",{className:"BuildControl",children:[Object(r.jsx)("div",{className:"Label",children:e.label}),Object(r.jsx)("button",{className:"Less",onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:"More",onClick:e.added,children:"More"})]})}),E=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],R=function(e){return Object(r.jsxs)("div",{className:"BuildControls",children:[Object(r.jsxs)("p",{style:{fontFamily:"monospace",color:"rgb(0,55,42)",fontSize:"16px"},children:["Current Price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),E.map((function(t){return Object(r.jsx)(D,{label:t.label,added:function(){return e.addedIng(t.type)},removed:function(){return e.removedIng(t.type)},disabled:e.disabledButton[t.type]},t.label)})),Object(r.jsxs)("button",{className:"OrderButton",onClick:e.ordered,disabled:!e.purchasable,children:["  ",e.isAuth?"ORDER NOW":"SINGUP TO ORDER","    "]})]})},B=n(27),_=n(29),P=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("span",{style:{textTransform:"capitalize"},children:[" ",t]})," : ",e.ingredients[t]]},t)}));return Object(r.jsxs)(m.a,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{style:{textAlign:"left",fontFamily:"monospace",fontSize:"15px"},children:"A delicious burger with tha following ingredients"}),Object(r.jsx)("ul",{style:{textAlign:"left",fontFamily:"monospace",fontSize:"15px"},children:t}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{style:{textAlign:"left",fontFamily:"monospace",fontSize:"15px"},children:[Object(r.jsxs)("strong",{children:["Total Price : Rs. ",e.price.toFixed(2)," "]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Continue to checkout..."]}),Object(r.jsx)(_.a,{btnType:"Danger",clicked:e.purchaseCancled,children:"Cancle"}),Object(r.jsx)(_.a,{btnType:"Success",clicked:e.purchaseContinue,children:"Continue"})]})},U=n(20),H=n(36),F=n(35),L=n(17),M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},r.updatePurchasing=function(){r.props.isAuthenticated?r.setState({purchasing:!0}):(r.props.onSetAuthRedirectPath("/checkout"),r.props.history.push("/auth"))},r.cancleOrder=function(){r.setState({purchasing:!1})},r.continuePurchase=function(){r.props.onInitPurchase(),r.props.history.push("/checkout")},r.state={purchasable:!1,purchasing:!1},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(O.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,c=this.props.error?Object(r.jsx)("h1",{children:"Error :: Ingredients Cant be loaded"}):Object(r.jsx)(F.a,{});return this.props.ings&&(c=Object(r.jsxs)(m.a,{children:[Object(r.jsx)(w.a,{ingredients:this.props.ings}),Object(r.jsx)(R,{addedIng:this.props.onIngredientAdded,removedIng:this.props.onIngredientRemoved,disabledButton:e,price:this.props.price,purchasable:this.updatePurchaseState(this.props.ings),isAuth:this.props.isAuthenticated,ordered:this.updatePurchasing})]}),n=Object(r.jsx)(P,{ingredients:this.props.ings,purchaseContinue:this.continuePurchase,purchaseCancled:this.cancleOrder,price:this.props.price})),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(B.a,{show:this.state.purchasing,modelClosed:this.cancleOrder,children:n}),c]})}}]),n}(i.a.Component),G=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(L.a(t))},onIngredientRemoved:function(t){return e(L.i(t))},onInitIngredients:function(){return e(L.e())},onInitPurchase:function(){return e(L.h())},onSetAuthRedirectPath:function(t){return e(L.j(t))}}}))(Object(H.a)(M,U.a)),Y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(r.jsx)(f.a,{to:"/"})}}]),n}(i.a.Component),z=Object(u.b)(null,(function(e){return{onLogout:function(){return e(L.f())}}}))(Y),q=g((function(){return n.e(3).then(n.bind(null,104))})),W=g((function(){return n.e(5).then(n.bind(null,105))})),J=g((function(){return n.e(4).then(n.bind(null,102))})),K=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=Object(r.jsxs)(f.d,{children:[Object(r.jsx)(f.b,{path:"/auth",component:J}),Object(r.jsx)(f.b,{path:"/",exact:!0,component:G}),Object(r.jsx)(f.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(r.jsxs)(f.d,{children:[Object(r.jsx)(f.b,{path:"/checkout",component:q}),Object(r.jsx)(f.b,{path:"/orders",component:W}),Object(r.jsx)(f.b,{path:"/logout",component:z}),Object(r.jsx)(f.b,{path:"/auth",component:J}),Object(r.jsx)(f.b,{path:"/",exact:!0,component:G}),Object(r.jsx)(f.a,{to:"/"})]})),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(N,{children:e})})}}]),n}(i.a.Component),V=Object(f.g)(Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignUp:function(){return e(L.c())}}}))(K)),Q=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,103)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},X=n(22),Z=n(3),$={ingredients:null,error:!1,totalPrice:30,building:!1},ee={salad:10,cheese:20,bacon:30,meat:40},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.a:return Object(O.a)(Object(O.a)({},e),{},{ingredients:Object(O.a)(Object(O.a)({},e.ingredients),{},Object(X.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+ee[t.ingredientName],building:!0});case Z.n:return Object(O.a)(Object(O.a)({},e),{},{ingredients:Object(O.a)(Object(O.a)({},e.ingredients),{},Object(X.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-ee[t.ingredientName],building:!0});case Z.p:return Object(O.a)(Object(O.a)({},e),{},{ingredients:t.ingredients,totalPrice:30,error:!1,building:!1});case Z.f:return Object(O.a)(Object(O.a)({},e),{},{error:!0});default:return e}},ne={orders:[],loading:!1,purchased:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.m:return Object(O.a)(Object(O.a)({},e),{},{purchased:!1});case Z.k:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case Z.l:var n=Object(O.a)(Object(O.a)({},t.orderData),{},{id:t.orderId});return Object(O.a)(Object(O.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case Z.j:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});case Z.h:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case Z.i:return Object(O.a)(Object(O.a)({},e),{},{orders:t.orders,loading:!1});case Z.g:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},ce={token:null,userID:null,error:null,loading:!1,authRedirectPath:"/"},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.d:return Object(O.a)(Object(O.a)({},e),{},{error:null,loading:!0});case Z.e:return Object(O.a)(Object(O.a)({},e),{},{token:t.idToken,userID:t.userId,error:null,loading:!1});case Z.b:return Object(O.a)(Object(O.a)({},e),{},{error:t.error,loading:!1});case Z.c:return Object(O.a)(Object(O.a)({},e),{},{token:null,userID:null});case Z.o:return Object(O.a)(Object(O.a)({},e),{},{authRedirectPath:t.path});default:return e}},ae=d.d,oe=Object(d.c)({burgerBuilder:te,orders:re,auth:ie}),se=Object(d.e)(oe,ae(Object(d.a)(l.a)));o.a.render(Object(r.jsx)(u.a,{store:se,children:Object(r.jsx)(s.a,{children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(V,{})})})}),document.getElementById("root")),Q()}],[[95,1,2]]]);
//# sourceMappingURL=main.5579acf5.chunk.js.map