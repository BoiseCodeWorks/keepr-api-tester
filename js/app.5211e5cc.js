(function(e){function t(t){for(var s,r,o=t[0],l=t[1],u=t[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);h&&h(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var h=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("auth0config"),a("router-view")],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"p-2 shadow bg-dark text-white"},[a("div",{staticClass:"d-flex align-items-center justify-content-between mx-2"},[a("h6",{staticClass:"m-0"},[e._v("Configure Auth0")]),a("h6",{staticClass:"action m-0",on:{click:function(t){e.setupRequired=!e.setupRequired}}},[a("b",[e._v(e._s(e.setupRequired?"+":"−"))])])]),a("form",{directives:[{name:"show",rawName:"v-show",value:e.setupRequired,expression:"setupRequired"}],on:{submit:function(t){return t.preventDefault(),e.setAuth0(t)}}},[a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.auth0Config.domain,expression:"auth0Config.domain"}],staticClass:"form-control col m-1",attrs:{type:"text",placeholder:"Domain"},domProps:{value:e.auth0Config.domain},on:{input:function(t){t.target.composing||e.$set(e.auth0Config,"domain",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.auth0Config.clientId,expression:"auth0Config.clientId"}],staticClass:"form-control col m-1",attrs:{type:"text",placeholder:"ClientId"},domProps:{value:e.auth0Config.clientId},on:{input:function(t){t.target.composing||e.$set(e.auth0Config,"clientId",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.auth0Config.audience,expression:"auth0Config.audience"}],staticClass:"form-control col m-1",attrs:{type:"text",placeholder:"Audience"},domProps:{value:e.auth0Config.audience},on:{input:function(t){t.target.composing||e.$set(e.auth0Config,"audience",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.auth0Config.apiTestToken,expression:"auth0Config.apiTestToken"}],staticClass:"form-control col m-1",attrs:{type:"text",placeholder:"API Test Token"},domProps:{value:e.auth0Config.apiTestToken},on:{input:function(t){t.target.composing||e.$set(e.auth0Config,"apiTestToken",t.target.value)}}})]),e._m(0)])]),!e.setupRequired&&e.auth0Config.domain?a("authstate"):e._e()],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ml-1 my-2"},[a("button",{staticClass:"btn btn-info"},[e._v("Save Auth0 Config")])])}],l=a("ea4c"),u=a("335d");class h extends l["a"]{async CheckUserAsync(){try{let e=await Object(u["b"])();if(!e.isAuthenticated)throw new Error("Not logged in, try running the login test first");return e.user}catch(e){throw new Error("Not logged in, try running the login test first")}}async switchUserAsync(){let e=await Object(u["b"])();await e.logout(),await e.loginwithPopup({username:"JIMMY_TESTER@test.com",password:"testing123"})}verifyIsSame(e,t){return Object.keys(e).every(e=>t.hasOwnProperty(e))}handleError(e){return e.response&&""!=e.response.data?e.response.data:e}async getUserKeepsAsync(){let e=await this.get("https://localhost:5001/api/keeps/user");if(0==e.length)return this.fail("Please create at least one keep with this user.")}async getPublicKeepsAsync(){let e=this.CheckUserAsync(),t=await this.get("https://localhost:5001/api/keeps");return 0==t.length?this.fail("Please create at least one keep."):t.every(t=>!t.isPrivate||t.userId==e.id)?t:this.fail("Able to retrieve private keeps that do not belong to the user.")}}const p="https://localhost:5001/api/vaults";let d={name:"TEST__VAULT",description:"VAULT__DESCRIPTION"};class c extends h{constructor(){super("Vaults Testing",p),this.addTests(this.canCreateVault(),this.canGetVaultById(),this.canDeleteVault())}canCreateVault(){return new l["b"]({name:"Can Create a vault",path:p,description:"POST request. This should create a new vault.",expected:"Vault",payload:"Vault object { name, description }"},async()=>{let e;try{return e=await this.create({...d,userId:"dont trust the front end"}),this.verifyIsSame(d,e),this.pass("Successfully created a vault!",e)}catch(t){return this.unexpected(d,this.handleError(t))}finally{if(e){let t=await this.get();t.length>1&&await this.delete(e.id)}}})}canGetVaultById(){return new l["b"]({name:"Can get a vault by its id",path:p,description:"GET request. This should get a single vault by its id.",expected:"Vault",payload:"Vault { }"},async()=>{try{let e=await this.get("https://localhost:5001/api/vaults");if(e.length<1)return this.fail("Please create at least one vault to test this route.");let t=await this.getById(e[0].id);return this.pass("Able to get a users vault by its id.",t)}catch(e){return this.unexpected([d],this.handleError(e))}})}canDeleteVault(){return new l["b"]({name:"Can delete a vault",path:p,description:"DELETE request. This should delete a vault.",expected:"",payload:""},async()=>{try{let e=await this.create(d);await this.delete(e.id)}catch(e){return this.unexpected("Vault deleted",this.handleError(e))}try{return await this.getById(vault.id),this.fail("Vault was not deleted from the database.")}catch(e){return this.pass("Vault was deleted!")}})}}function v(e){let t=Object(u["b"])();t&&t.bearer?e.defaults.headers.Authorization=t.bearer:Object(u["c"])(t=>{e.defaults.headers.Authorization=t.bearer})}const f="https://localhost:5001/api/keeps";let y={name:"TEST__KEEP",description:"KEEP__DESCRIPTION",img:"//placehold.it/200x200",isPrivate:!1,shares:0,views:0,keeps:0};class g extends h{constructor(){super("Keeps Testing",f),v(this.request),this.addTests(this.canCreatePublicKeep(),this.canCreatePrivateKeep(),this.canGetPublicKeeps(),this.canGetKeepById(),this.canEditKeepById(),this.canDeleteKeepById())}canCreatePublicKeep(){return new l["b"]({name:"Can Create a Public Keep",path:f,description:"POST request. This should create a new public keep in your database.",expected:"Keep",payload:"Keep object {name, description, img, isPrivate}"},async()=>{let e;try{return e=await this.create({...y,userId:"dont trust the front end"}),this.verifyIsSame(y,e),this.pass("Successfully created a keep!",e)}catch(t){return this.unexpected(y,this.handleError(t))}finally{e&&await this.delete(e.id)}})}canCreatePrivateKeep(){return new l["b"]({name:"Can create Private keeps",path:f,description:"POST request. This should create a new public keep in your database.",expected:"Keep"},async()=>{let e;try{return e=await this.create({name:"TEST__KEEP__PRIVATE",description:"KEEP__SHOULD_BE_PRIVATE",img:"//placehold.it/200x200",isPrivate:!0}),e.isPrivate?this.pass("Able to create a private keep",e):this.fail("Could not make a private keep")}catch(t){return this.unexpected(e,this.handleError(t))}})}canGetPublicKeeps(){return new l["b"]({name:"Can Get Public Keeps",path:f,description:"GET request. This should get a list of public keeps.",expected:"Keep[]"},async()=>{let e;try{let t=await this.CheckUserAsync();return e=await this.get(),0==e.length?this.fail("Please add at least one keep to test this route."):e.every(e=>!e.isPrivate||e.userId==t.id)?this.verifyIsSame(y,e[0])?this.pass("Able to get keeps",e.splice(0,3)):this.fail("Array does not contain objects that match the given Keep model."):this.fail("Able to retrieve private keeps that do not belong to the user.")}catch(t){return this.unexpected([y],this.handleError(t))}})}canGetKeepById(){return new l["b"]({name:"Can Get keep by Id",path:f+"/:id",description:"GET request. This should get one keep by its id.",expected:"Keep"},async()=>{try{let e=await this.get();if(e.length<1)return this.fail("Please add at least one keep to test this route.");let t=await this.getById(e[0].id);return e[0].id!=t.id?this.fail("Could not retrieve the keep by its Id."):this.pass("Retrieved Keep by Id",t)}catch(e){return this.unexpected(y,this.handleError(e))}})}canEditKeepById(){return new l["b"]({name:"Can Edit keep by Id",path:f+"/:id",description:"PUT request. This should update one keep by its id.",expected:"Keep",payload:"Keep"},async()=>{let e,t;try{await this.CheckUserAsync();let a={...y};e=await this.create(a);let s={...e};return s.name="edited keep",await this.update(s),t=await this.getById(s.id),t.name!=s.name?this.fail("Could not edit the keep."):this.pass("Successfully edited the keep!",t)}catch(a){return this.unexpected(y,this.handleError(a))}finally{e&&await this.delete(e.id)}})}canDeleteKeepById(){return new l["b"]({name:"Can delete keep by Id",path:f+"/:id",description:"DELETE request. This should delete one keep by its id.",expected:"Keep"},async()=>{let e;try{e=await this.create({name:"TEST__KEEP__DELETABLE",description:"KEEP__DESCRIPTION_SHOULD_GET_DELETED",img:"//placehold.it/200x200",isPrivate:!1})}catch(t){return this.unexpected(e,t.response.data)}try{await this.delete(e.id)}catch(t){return this.fail(t.message)}try{return await this.getById(e.id),this.fail("Unable to delete keep by its Id")}catch(t){return this.pass("Sucessfully removed keep by it's Id",e)}})}cantEditViewsKeepsSharesUserId(){return new l["b"]({name:"Cant edit shares, views, keeps, or userId",path:f+"/:id",description:"PUT request. Cant edit shares, views, keeps, or userId from the front end on a keep.",expected:"Keep",payload:"Keep"},async()=>{let e,t;try{let a={...y};e=await this.create(a);let s={...e};s.shares=10,s.views=10,s.keeps=10,s.userId="Oops. You allowed the front end to change your userId",await this.update(s),t=await this.getById(s.id),console.log(t);for(let i in t)if(t[i]!=e[i])return this.fail(`Was able to edit the field ${i} on the keep.`);return this.pass("Couldn't edit the shares, views, keeps, or userId.",t)}catch(a){return this.unexpected(y,this.handleError(a))}finally{e&&await this.delete(e.id)}})}}const b="https://localhost:5001/api/vaultkeeps";class w extends h{constructor(){super("Vault Keeps Testing",b),this.addTests(this.canCreateVaultKeep(),this.canGetVaultKeepsByVaultId(),this.canDeleteVaultKeep())}canCreateVaultKeep(){return new l["b"]({name:"Can Create a Vault Keep",path:b,description:"POST request. This should create a new vault keep relationship.",expected:"VaultKeep",payload:"Vault object { keepId, vaultId }"},async()=>{let e,t=[],a=[];try{let s=await this.get("https://localhost:5001/api/keeps");return a=await this.get("https://localhost:5001/api/vaults"),s.length<1&&this.fail("Please add at least one keep to test."),a.length<1&&this.fail("Please add at least one vault to test."),await this.create({keepId:s[0].id,vaultId:a[0].id,userId:"dont trust the front end"}),t=await this.get(`https://localhost:5001/api/vaultkeeps/${a[0].id}/keeps`),e=t.find(e=>e.id==s[0].id),e?this.pass("Successfully created a vault keep!"):this.fail("Couldnt create a vault keep.")}catch(s){return this.unexpected("VaultKeep",this.handleError(s))}finally{e&&t.length>1&&await this.delete(e.id,`https://localhost:5001/api/vaultkeeps/${a[0].id}/keeps`)}})}canGetVaultKeepsByVaultId(){return new l["b"]({name:"Can get vaultkeeps by a vault id",path:b,description:"GET request. This should get an array of keeps inside a vault.",expected:"Keeps[]",payload:""},async()=>{let e,t=[];try{let a=await this.get("https://localhost:5001/api/keeps");return t=await this.get("https://localhost:5001/api/vaults"),a.length<1&&this.fail("Please add at least one keep to test."),t.length<1&&this.fail("Please add at least one vault to test."),await this.create({keepId:a[0].id,vaultId:t[0].id,userId:"dont trust the front end"}),e=await this.get(`https://localhost:5001/api/vaultkeeps/${t[0].id}/keeps`),e.length<1?this.fail("Couldnt find any vault keeps by a vault Id."):this.pass("Able to get vaultkeeps by vault Id.",e.splice(0,3))}catch(a){return this.unexpected("Keeps[]",this.handleError(a))}})}canDeleteVaultKeep(){return new l["b"]({name:"Can delete a vault keep",path:b,description:"DELETE request. This should delete a vaultkeep relationship.",expected:"",payload:""},async()=>{let e,t=[],a=[];try{let s=await this.get("https://localhost:5001/api/keeps");a=await this.get("https://localhost:5001/api/vaults"),s.length<1&&this.fail("Please add at least one keep to test."),a.length<1&&this.fail("Please add at least one vault to test."),await this.create({keepId:s[0].id,vaultId:a[0].id,userId:"dont trust the front end"}),await this.delete(s[0].id,`https://localhost:5001/api/vaultkeeps/${a[0].id}/keeps`),t=await this.get(`https://localhost:5001/api/vaultkeeps/${a[0].id}/keeps`),e=t.find(e=>e.id==s[0].id);let i=t.filter(e=>e.id==s[0].id);return i.length>1?this.fail("The server allows adding the same keep twice to a vault."):e?this.fail("Couldn't remove keep from vault."):this.pass("Able to delete a vault keep relationship.")}catch(s){return this.unexpected("VaultKeep",this.handleError(s))}})}}const m="https://localhost:5001/api",E=m+"/keeps",k=m+"/vaults",T=m+"/vaultkeeps";class _ extends h{constructor(){super("Auth Checks",m),v(this.request),this.addTests(this.setupAuthChecks(),this.startNoAuthTests(),this.GET_PrivateKeep(),this.GET_Vault(),this.GET_VaultKeep(),this.GET_PublicKeep(),this.EDIT_PublicKeep(),this.EDIT_PrivateKeep(),this.EDIT_Vault(),this.DELETE_PublicKeep(),this.DELETE_PrivateKeep(),this.DELETE_Vault(),this.DELETE_VaultKeep(),this.startWrongAuthTests(),this.GET_PrivateKeep(),this.GET_Vault(),this.GET_VaultKeep(),this.GET_PublicKeep(),this.EDIT_PublicKeep(),this.EDIT_PrivateKeep(),this.EDIT_Vault(),this.DELETE_PublicKeep(),this.DELETE_PrivateKeep(),this.DELETE_Vault(),this.DELETE_VaultKeep())}setupAuthChecks(){return new l["b"]({name:"Setup Auth Data",path:"NONE",description:"Creates all of the data necessary to test auth",expected:"Creates Keep, Vault, VaultKeep"},async()=>{let e={name:"PRIVATE__KEEP",description:"MY__PRIVATE__KEEP",img:"//placehold.it/200x200",isPrivate:!0},t={name:"PUBLIC__KEEP",description:"MY__PUBLIC__KEEP",img:"//placehold.it/200x200",isPrivate:!1},a={name:"MY__VAULT",description:"MY__VAULT__DESCRIPTION"};try{this.privateKeep=await this.create(e,E),this.publicKeep=await this.create(t,E),this.vault=await this.create(a,k)}catch(i){return this.unexpected({privateKeep:e,publicKeep:t,vault:a},this.handleError(i))}let s={vaultId:this.vault.id,keepId:this.publicKeep.id};try{await this.create(s,T),this.vaultKeep=s}catch(i){return this.unexpected({vaultKeep:s},this.handleError(i))}return this.pass("Auth Check data setup correctly")})}startNoAuthTests(){return new l["b"]({name:"Start No Auth Tests",path:"NONE",description:"Removes Auth token from requests",expected:"Auth to function correctly"},async()=>(delete this.request.defaults.headers.Authorization,this.pass("Auth Removed")))}startWrongAuthTests(){return new l["b"]({name:"Start Wrong User Auth Tests",path:"NONE",description:"Uses the Api Test Token to validate bad user access"},async()=>{try{let e=JSON.parse(window.localStorage.getItem("auth0:config"));return e.apiTestToken?(this.request.defaults.headers.Authorization="Bearer "+e.apiTestToken,this.pass("Ready to check wrong auth")):this.fail("Please set you Api Test Token")}catch(e){this.fail(e.message)}})}GET_PrivateKeep(){return new l["b"]({name:"Get Private Keep",path:"api/keeps/:id",description:"The server should send back an error when attempting to get a private keep",expected:"ERROR"},async()=>{try{await this.getById(this.privateKeep.id,E)}catch(e){return this.pass("not able to get private keeps")}return this.fail("Should not be able to get private keeps")})}GET_Vault(){return new l["b"]({name:"Get Vault",path:"api/vaults/:id",description:"The server should send back an error when attempting to get a vault",expected:"ERROR"},async()=>{try{await this.getById(this.vault.id,k)}catch(e){return this.pass("can not get vaults that don't belong to you")}return this.fail("Should not be able to get vaults")})}GET_VaultKeep(){return new l["b"]({name:"Get VaultKeep",path:"api/vaults/:id/keeps",description:"The server should send back an error when attempting to get a vaultkeep",expected:"ERROR"},async()=>{try{await this.request.get(`${k}/${this.vault.id}/keeps`)}catch(e){return this.pass("can not get vault keeps that don't belong to you")}return this.fail("Should not be able to get vaults keep")})}GET_PublicKeep(){return new l["b"]({name:"Get Public Keep",path:"api/keeps/:id",description:"the server should allow you to get public keeps",expected:this.publicKeep},async()=>{try{return await this.getById(this.publicKeep.id,E),this.pass("can get public keeps regardless of auth")}catch(e){return this.unexpected(this.publicKeep,this.handleError(e))}})}EDIT_PublicKeep(){return new l["b"]({name:"EDIT public keep",path:"api/keeps/:id",description:"The server should send back an error when attempting to edit a keep",expected:"ERROR"},async()=>{try{await this.update(this.publicKeep,E)}catch(e){return this.pass("not be able to edit a keep that doesnt belong to you")}this.fail("the server should throw an error when attempting to edit a keep that does not belong to you")})}EDIT_PrivateKeep(){return new l["b"]({name:"EDIT private keep",path:"api/keeps/:id",description:"The server should send back an error when attempting to edit a keep",expected:"ERROR"},async()=>{try{await this.update(this.privateKeep,E)}catch(e){return this.pass("not be able to edit a keep that doesnt belong to you regardless of private status")}this.fail("the server should throw an error when attempting to edit a keep that does not belong to you")})}EDIT_Vault(){return new l["b"]({name:"Edit Vault",path:"api/vaults/:id",description:"The server should send back an error when attempting to edit a vault",expected:"ERROR"},async()=>{try{await this.update(this.vault,k)}catch(e){return this.pass("not be able to edit a vault that doesnt belong to you")}this.fail("the server should throw an error when attempting to edit a vault that does not belong to you")})}DELETE_PublicKeep(){return new l["b"]({name:"DELETE Keep",path:"api/keeps/:id",description:"The server should send back an error when attempting to delete a keep",expected:"ERROR"},async()=>{try{await this.delete(this.publicKeep.id,E)}catch(e){return this.pass("not be able to delete a keep that doesnt belong to you")}this.fail("the server should throw an error when attempting to delete a keep that does not belong to you")})}DELETE_PrivateKeep(){return new l["b"]({name:"DELETE Keep",path:"api/keeps/:id",description:"The server should send back an error when attempting to delete a keep",expected:"ERROR"},async()=>{try{await this.delete(this.privateKeep.id,E)}catch(e){return this.pass("not be able to delete a keep that doesnt belong to you")}this.fail("the server should throw an error when attempting to delete a keep that does not belong to you")})}DELETE_Vault(){return new l["b"]({name:"DELETE Vault",path:"api/vaults/:id",description:"The server should send back an error when attempting to delete a vault",expected:"ERROR"},async()=>{try{await this.delete(this.vault.id,k)}catch(e){return this.pass("not be able to delete a vault that doesnt belong to you")}this.fail("the server should throw an error when attempting to delete a vault that does not belong to you")})}DELETE_VaultKeep(){return new l["b"]({name:"DELETE VaultKeep",path:"api/vaultskeeps/:vaultId/keeps/:keepId",description:"The server should send back an error when attempting to delete a vaultkeep",expected:"ERROR"},async()=>{try{await this.request.delete(`${T}/${this.vaultKeep.vaultId}/keeps/${this.vaultKeep.keepId}`)}catch(e){return this.pass("not be able to delete a vaultkeep that doesnt belong to you")}this.fail("the server should throw an error when attempting to delete a vaultkeep that does not belong to you")})}}const C=()=>{new g,new c,new w,new _};var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-dark text-white border-top border-secondary p-2"},[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("h6",{staticClass:"m-0"},[e._v(" Authenticated: "+e._s(e.$auth.isAuthenticated?e.$auth.user.name:"false")+" ")]),a("div",[e.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:e.logout}},[e._v("Logout")]):a("button",{staticClass:"btn btn-info",on:{click:e.login}},[e._v(" Login ")])])])])},I=[],P={name:"Auth0Config",data(){return{setupRequired:!0}},computed:{authReady(){return this.$auth}},methods:{async login(){try{await this.$auth.loginWithPopup(),l["c"].TestRunner.ClearSuites(),C()}catch(e){console.error(e)}},async logout(){await this.$auth.logout({returnTo:window.location.host}),l["c"].TestRunner.ClearSuites()}}},x=P,A=a("2877"),R=Object(A["a"])(x,K,I,!1,null,null,null),V=R.exports,O={name:"Auth0Config",data(){return{setupRequired:!0,auth0Config:{domain:"",clientId:"",audience:"",apiTestToken:""}}},mounted(){let e=window.localStorage.getItem("auth0:config");e&&(this.auth0Config=JSON.parse(e),this.startAuth0())},methods:{setAuth0(){window.localStorage.setItem("auth0:config",JSON.stringify(this.auth0Config)),this.startAuth0()},startAuth0(){this.setupRequired=!1,s["a"].use(u["a"],this.auth0Config),l["c"].TestRunner.ClearSuites(),C()}},components:{authstate:V}},S=O,D=Object(A["a"])(S,r,o,!1,null,null,null),L=D.exports,G={name:"App",components:{auth0config:L}},$=G,q=(a("034f"),Object(A["a"])($,i,n,!1,null,null,null)),N=q.exports,B=a("8c4f"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-3 mt-3"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body readMeSection text-left"},[a("h3",[a("span",{on:{click:e.openTests}},[e._v("Welcome")]),e._v(" to the Keepr Testing Tool. ")]),e._m(0),a("p",[e._v(" Each test will tell you what pathway it is testing, what data (if any) should be sent to your API, and what the response should be from your database. Once the test passes, it will turn green, and the next test will be called. Each section of tests will correspond to a controller in your backend. It is designed so that you can test one controller at a time ")]),a("p",[e._v(" Please read the following directions before beginning your tests: ")]),e._m(1)])])])])])},U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" This tool is designed to test very specific routes in your application's backend. "),a("strong",[e._v(" If your routes are different these tests will not work. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"text-left"},[a("li",{staticClass:"my-2"},[a("strong",[e._v("OPEN YOUR INSPECTOR TOOLS")])]),a("li",{staticClass:"my-2"},[e._v(" Create a user. When you create a user, it will test all of your auth routes. ")]),a("li",{staticClass:"my-2"},[e._v(' After you create your first user successfully, you will be able to use the "test an existing account" option ')]),a("li",{staticClass:"my-2"},[e._v(" Next, test your Keep controller. When you press 'run tests' it will create a waterfall effect. Each time a test is successful, it will invoke the next test. "),a("strong",[e._v(" If a test fails, the next tests will not run. ")]),e._v(" This means that if you pass the first test and the remaining tests stay red, that does not mean that all of them are broken; it means that the next test in the line did not pass so the remaining tests were not run. ")]),a("li",[e._v(' When you are ready to view the tests and begin testing, click on the word "Welcome" in the upper left corner of this box and then be sure to scroll down. ')]),a("li",{staticClass:"my-2"},[e._v(" Be sure to read your error messages in the console if a test does not pass. ")])])}],M={name:"home",methods:{openTests(){this.$router.push({name:"testRunner"})}}},W=M,Y=Object(A["a"])(W,j,U,!1,null,null,null),J=Y.exports;s["a"].use(B["a"]);var z=new B["a"]({routes:[{path:"/",name:"home",component:J}]}),H=a("2f62");s["a"].use(H["a"]);var F=new H["a"].Store({state:{},modules:{},mutations:{},actions:{},getters:{}});l["c"].install(s["a"],{router:z}),new s["a"]({router:z,store:F,render:function(e){return e(N)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.5211e5cc.js.map