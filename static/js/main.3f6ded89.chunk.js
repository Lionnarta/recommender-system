(this["webpackJsonprecommender-system"]=this["webpackJsonprecommender-system"]||[]).push([[0],{18:function(A,e,s){},19:function(A,e,s){},20:function(A,e,s){},22:function(A,e,s){},23:function(A,e,s){},37:function(A,e,s){},38:function(A,e,s){"use strict";s.r(e);var n=s(1),t=s.n(n),r=s(13),c=s.n(r),a=(s(18),s(3)),i=s(6),v=s(2),o=(s(19),s(20),s.p+"static/media/walmartLogo.d65d1ff4.png"),u=s(0),l=function(A){var e=Object(n.useState)(""),s=Object(a.a)(e,2),t=s[0],r=s[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"rs-login-bg"}),Object(u.jsx)("section",{className:"rs-login-c rs-font-lato",children:Object(u.jsx)("div",{className:"rs-form-container",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:A.username,password:t})};fetch("https://recommender-app-api.herokuapp.com/auth",s).then((function(A){return A.json()})).then((function(e){e.success?A.Login():console.log("Invalid")})).catch((function(A){console.log(A)}))},className:"rs-form",children:[Object(u.jsx)("div",{className:"rs-flex rs-justify-center",children:Object(u.jsx)("img",{src:o,alt:"Logo Walmart",className:"rs-logo rs-mb-20"})}),Object(u.jsx)("div",{className:"rs-text-center rs-mb-30",children:Object(u.jsx)("p",{className:"rs-font-18 rs-content-600",children:"Login to Walmart Reccomender System"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",id:"username",className:"rs-form-input",placeholder:" ",autoComplete:"off",required:!0,onChange:function(e){return A.SetName(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"username",className:"rs-form-label",children:"Username"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"password",id:"password",className:"rs-form-input",placeholder:" ",required:!0,onChange:function(A){return r(A.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",className:"rs-form-label",children:"Password"})]}),Object(u.jsx)("input",{type:"submit",value:"Login",className:"rs-login-button rs-font-lato"})]})})})]})},m=function(A){return Object(u.jsxs)("div",{children:[A.loginState?Object(u.jsx)(v.a,{to:"/recommender-system/main"}):null,Object(u.jsx)(l,{Login:A.Login,username:A.username,SetName:A.SetName})]})},d=(s(22),function(A){return Object(u.jsxs)("div",{className:"rs-navbar-container",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAgCAYAAADe16AYAAAABmJLR0QA/wD/AP+gvaeTAAAHnklEQVR42u1beWwUVRgvIJeltIIcBgS5PCDgUbHdmSk2VoiYIHJUASEkeCAVU4kcgn8o1IoYjkiMEgUFD4SqIO7u0EIxgCCoRWNFIIgoiFIEe2y3FBBYvw/flG+/vjl2qbRk5yVfuvO+b968973ffNebxsW57YpuQb82rtKvHgaqAvowlOdp6WolBhts/lGgkEEBn/qAq5VYBIJP/ZkCoVJX7nG1EpMWQdseBoR8tY+rlVgEgq6uCbcIae1crcRmjPAmAcLZ0ItxjaMaKBQKDQfKJBQvkWnGZJCaSeS6MJl+UcznVjZGqyt1k2DuKlnHMKf3VXu1LuDrR4b0wc0dWITZBAglTsav8HruCq73ZPDJFoXCW4ZkQUqodusvkXuByTwShfIWsjF6XsFA+JysI+AsHfT0hQ0N/LexWjFeWweLWtZFIGjFlvOB1BKAsxhkz1+Q96m5VoqfJlnQdAkQnpLI+Qj/PNB1LhAiAwJs0Oown+9XTwV17Vkzk1/pV0bUyPqUQrNxq7xpd4DMT2zsMwFv+rXGZB9kil9psyCjLZfIlRD+7iiVF+tA2MI2y6AvThYMuJ7LB7yKp6aG4FdX1LYCmU0Cfu054J+WjQu8G43JtgU6Rya8jy2mEdAJCRD2SOID2l6TKKYFUBuglnUJBDFmCws+xjhJEWxgEo4Z5ea3NOKsaIBQoaupEB/sMgFDGVQSR4c9DywFFJEeBTM/p9qvdKW8svWpN8A9W83GAgvyPJ98MZkwgiKB8HoT3g9MLpHIjWAbOASoKdAYoDVAfzL+IbHp7ZwAAf4uEvEM0mox9myg40R2O9CdZKzRQN8ToB8GehrBzZ7ZC+hlMfZpMh7+3oRrYfIpZC5FAoj9gLYIl7jVwpIarZ91rKAOhM3aKNvEoE9ZZh9rXLi/otb9uvoHWI5pf+sprWUofp1NMo3wJpL+eUBlssASfr9C+v8Bas3uNWu/AXV1AASq1N1An5qMFxTgXWTxzJfY+o84mOdsIj+Q8TSgUnJ9yUCo8e0+LRk2Lw9TQ7Khf9m7GCWHgWAfWg7LTAQm9RCbZDbhvUf6RwF9Ta5nErlNpP8r0ddNXJ/CPjHWKvFm0uaLEAjnbTbtdxv+WZwbeeYyYqUw4F0KVMhcJj4z1QQIm9l1nQGhxmXke3rCZi4Rb/lE2xQU3ATIHQDLsBPcxnBH9QWYVEem3HcJ7yDpx419m1yvJXFEOenPIfdnAXVgz4tngMJnd4oACCERmN4rLM9YZtKNzUY3kCBqE3sYfwaZTyrQfRKXMYzds9QECMYadLQ2uGbJnPFlmEGoXUONcPeRSX9HAFLzlklcxWHR14Mp5W6L56Bvv0YojLahEQJhOBt3BeOvYPz7GX+VjT4SxPoryD3FJkBAEIyqi6yhIQDhLTLpaqCrWGr5kZBLZkpozwJF9NHN2djoQ5cA7QU6Y2IqH4sQCEnsGVmMn8X4rRm/UMLPBtrAAlDajpoAYWddpY8NAQhj2eL6iODQaE+SN/ok6R8MNIdc55MxE0XG4KRNigQIkvmPYfeNl8ic5n5c9A8xSZF5O24ChDcuBxDKdaUHRPwzq/LTHBXqArryeMCvDI3o/EFSB8DUayO57k1kt9FKJFvwVCKnszEPAM0HmiDStcsNhGpJQJfKrBRmPJ8BTRE62O8ACPP/TyCIquAqkjlss08fL3y5ZGQMewO6NiGU16eZUzDQwHAuMZHHaCAFvxfQwJJlAbcLGQ9Tlh/djYXPri8g6Kw2MoDds6OOgFAZKQDwYAg2cYOklnAsivQR6UjQp049vk5NsAPCcjLxH8nvj5lcJnvLaxQF1FjITLEJ7sY1ECCUWpXFL9EirGEBpe1pIpaE4SApEzatyKQiWBTwem7m1UW+uVgvgNTxVZA/J68qqrnBdSkdzIAwwcQ3TrZxI0bLIzLZjDeL8FphZtJAgEADwzJWVR3FxjwRIRCWyvQIf5vwVJWcNSwxAcBZ3LxQUXJTKn9ST+mMFgL58LY/U2s8r5YOvEPSMXX1RNna9CTZxDuxIorR+kpkf5XIPWFxdH1KKGYec0FhRax6dg1GGT0XQS1qEbSdiRAIkyTrLBcxSaL8WFn9UrJpvwT0NFUaP+jqYLKx62QypRuTEyHIfF8KBl/qLWZWoYBHyjL0ijo/bz2YzHqLCHwHyz5m1RMQFIuUFgPHrawvIQIgtLVIRduYBHnZYecKfu0dK58OVmA8kd9h8xHLwyBTehEE6u7KAqV9UFcGySaP1cNdVsfSQu5q5JG3Zr9EJl7UD2jaViGCzXiRslaK/sXinlzhtw3qJvpX0n7Js0ay+2QFnqOE7yf9GaLGQdu3QOli4zeTYLKz6KfPyrGIu/qzQz1sVQgSqTz4e/Dtc+EN/gZLww5SxOkXQaMetJMXruQToAIsWwf96R0hoxhiV1lr6iDTaCEqhY0sZDAmuE0cBjWXHBF3aCC1lO6iYNbR5Ki71SWOjaC4yYlenTb4nmABsQhVcW6LzQZW4wPqSkoKBsW7WolFILBvFsp9WndXKzEJBK2YAgG/cHK1EpsWoST8G0RlqKuVmIwRlEIChGr4T6ferlZisOH/KuAHrVAjmFzhHdAr2nH+Bctdmk0LY9/hAAAAAElFTkSuQmCC",alt:"Walmart Logo",className:"rs-pointer"})}),Object(u.jsx)("div",{className:"rs-font-lato rs-navbar-item-logout",children:Object(u.jsx)("div",{className:"rs-logout-button",onClick:A.LogOut,children:"Sign Out"})})]})}),j=(s(23),s(10)),B=s.n(j),b=(s(36),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}}),h=function(A){var e=Object(n.useState)([]),s=Object(a.a)(e,2),t=s[0],r=s[1],c=Object(n.useState)([]),i=Object(a.a)(c,2),v=i[0],l=i[1],m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A.username})},d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:A.username})};Object(n.useEffect)((function(){A.loginState&&0===t.length&&(fetch("https://recommender-app-api.herokuapp.com/recommend",m).then((function(A){return A.json()})).then((function(A){r(A.data)})).catch((function(A){console.log(A)})),fetch("https://recommender-app-api.herokuapp.com/history",d).then((function(A){return A.json()})).then((function(A){l(A.data)})).catch((function(A){console.log(A)})))}));return Object(u.jsxs)("div",{className:"rs-r-container rs-font-lato",children:[Object(u.jsxs)("div",{className:"rs-mb-40",children:[Object(u.jsxs)("p",{className:"rs-r-header",children:["What Our ",Object(u.jsx)("span",{className:"rs-r-header-span",children:"Customer Are Buying"})]}),Object(u.jsx)("p",{className:"rs-r-content",children:"These are the products we recommend based on what our customers buy"})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"rs-r-name",children:["Hi ",A.username,", this is our products just for you"]}),Object(u.jsx)("div",{className:"rs-mb-15",children:0!==t.length?function(A){var e=A.map((function(A){return Object(u.jsx)("div",{className:"rs-r-card-c",children:Object(u.jsxs)("div",{className:"rs-r-card",children:[Object(u.jsx)("img",{src:o,alt:"",className:"rs-r-carousel-img"}),Object(u.jsxs)("div",{className:"rs-r-carousel-text",children:[Object(u.jsxs)("div",{className:"rs-flex",children:[Object(u.jsxs)("div",{className:"rs-mr-5",children:[Object(u.jsx)("p",{className:"rs-content-900",children:"ID"}),Object(u.jsx)("p",{children:"Predicted rating"})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"rs-content-900",children:[": ",A.product_id]}),Object(u.jsxs)("p",{children:[": ",Math.round(100*A.predicted_rating)/100]})]})]}),Object(u.jsx)("div",{className:"rs-r-btn",children:Object(u.jsx)("a",{className:"rs-r-link",target:"_blank",href:A.product_url,children:"Product Link"})})]})]})},A.id.toString())}));return Object(u.jsx)(B.a,{responsive:b,showDots:!0,className:"rs-rc-container",children:e})}(t):null}),Object(u.jsx)("div",{className:"rs-r-name",children:"Recently purchased products"}),Object(u.jsx)("div",{children:0!==v.length?function(A){var e=A.map((function(A){return Object(u.jsx)("div",{className:"rs-r-card-c",children:Object(u.jsxs)("div",{className:"rs-r-card",children:[Object(u.jsx)("img",{src:"data:image/jpeg;base64,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yTeTO1XqkPu2s4C/bQ0oDNS6MYwXbal7ClVEAumPkm9pz3qR4OTEN+oIIgJMEZwxGk+5zpGZjI5aBhbXZ/ftPFrbFEWJwpPCDBz2MSRcoGINC15BzN9TnvkaDRJc9ttqs4S/Ln3pEv6c+7up4wfu2nOUfd4pz7vrlfnzahBiHaHeKc+7rlie4I7aU5bxTn3czWAjL5T24/SdaK3inPu615Kj0H5QGaZW+YKDQGS/sIKwuLQ0G8U5+JU5+JU5+JU5+JU5+JU5+JU5+JU5+JU5+JU5+JVHh4kQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIT/9oADAMBAAIAAwAAABBX777777777777777777777775X777777777777777777777775X777777777777777777777775X777777777777777777777775X777777777777777777777775X77777777773Db77777777775X77777777760D777777777775X7777777777sB377777777775X77777xPf77sD377mTf777775X77774JLvP7gJ77D9K/777775X777743LO56/wC/he4dP++++++V+++++++uce+++c+u++++++++V++++++++++++++++++++++++V+++++++5hd+++iT8++++++++V+++++/wAnOFf+/nt7hu/vvvvvlfvvvvsxkDfqivvrlDq/vvvvvlfvvvvr3n/vvwNfvrOXfvvvvvlfvvvvvvvvvvwPfvvvvvvvvvvlfvvvvvvvvv6Al/vvvvvvvvvvlfvvvvvvvvvvr3fvvvvvvvvvvlfvvvvvvvvvvvvvvvvvvvvvvvlfvvvvvvvvvvvvvvvvvvvvvvvlfvvvvvvvvvvvvvvvvvvvvvvvlfvvvvvvvvvvvvvvvvvvvvvvvmcsssssssssssssssssssssssv/xAAnEQABAwIGAgIDAQAAAAAAAAABABExIVEQIDBBYZFAsaHRcYHB8P/aAAgBAwEBPxAz5JnyTPkmfJM+SZ0wETlUIP8AtNGY6hnTAOB/RgdPg+9Qzp0i4P3g4IsB71DObvGbKrEszdVR0gYjFw/n1g0rN6GJzYByqzSzP2tvJg3zmcw5hJNcHAaXfabLTY7HB+G494O3n1TBkn5OwQR5u+sCnpBDZzOZ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",alt:"",className:"rs-r-carousel-img"}),Object(u.jsxs)("div",{className:"rs-r-carousel-text",children:[Object(u.jsxs)("div",{className:"rs-flex",children:[Object(u.jsxs)("div",{className:"rs-mr-5",children:[Object(u.jsx)("p",{className:"rs-content-900",children:"ID"}),Object(u.jsx)("p",{children:"User rating"})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"rs-content-900",children:[": ",A.product_id]}),Object(u.jsxs)("p",{children:[": ",Math.round(100*A.user_rating)/100]})]})]}),Object(u.jsx)("div",{className:"rs-r-btn",children:Object(u.jsx)("a",{className:"rs-r-link",target:"_blank",href:A.product_url,children:"Product Link"})})]})]})},A.id.toString())}));return Object(u.jsx)(B.a,{responsive:b,showDots:!0,className:"rs-rc-container",children:e})}(v):null})]})]})},Q=(s(37),function(A){return Object(u.jsxs)("div",{children:[A.loginState?null:Object(u.jsx)(v.a,{to:"/recommender-system"}),Object(u.jsx)(d,{LogOut:A.LogOut}),Object(u.jsx)("div",{className:"rs-h-80"}),Object(u.jsx)(h,{username:A.username,loginState:A.loginState})]})});var g=function(){var A=Object(n.useState)(!1),e=Object(a.a)(A,2),s=e[0],t=e[1],r=Object(n.useState)(""),c=Object(a.a)(r,2),o=c[0],l=c[1];return Object(u.jsx)("div",{children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(v.d,{children:[Object(u.jsx)(v.b,{path:"/recommender-system",element:Object(u.jsx)(m,{loginState:s,Login:function(){t(!0)},username:o,SetName:function(A){l(A)}})}),Object(u.jsx)(v.b,{path:"/recommender-system/main",element:Object(u.jsx)(Q,{loginState:s,LogOut:function(){t(!1)},username:o})})]})})})},E=function(A){A&&A instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(e){var s=e.getCLS,n=e.getFID,t=e.getFCP,r=e.getLCP,c=e.getTTFB;s(A),n(A),t(A),r(A),c(A)}))};c.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),E()}},[[38,1,2]]]);
//# sourceMappingURL=main.3f6ded89.chunk.js.map