(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,r,t){var content=t(207);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("41729678",content,!0,{sourceMap:!1})},196:function(e,r,t){"use strict";t.r(r);t(68),t(21),t(22),t(9),t(51),t(16);var o=t(37),n=t(83),l=t(201),d=t.n(l),v=t(203),m=t.n(v);t(204);function c(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}var f=d()(m.a),h={name:"FileUpload",components:{FilePond:f},data:function(){return{first:!0,files:[],files2:[]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(o.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}({allowMultiple:function(){return!0},rule:function(){return this.required&&!this.first&&0===this.files.length}},Object(n.b)(["user"])),watch:{files:{handler:function(e,r){this.first&&(this.first=!1),this.$emit("input",e),this.$emit("filesUpdate",e)},deep:!0}},methods:{process:function(e,r,t,o,n,progress,l){var d=this;try{progress(!0,0,1024);var v=this.$fireStorage.ref().child("".concat(this.user.email,"/").concat(r.name)).put(r,t);return v.on(this.$fireStorageObj.TaskEvent.STATE_CHANGED,(function(e){progress(!0,e.bytesTransferred,e.totalBytes)}),(function(e){d.handleError(n,e)}),(function(){o(v.snapshot.ref.fullPath),d.files.push(v.snapshot.ref.fullPath)})),{abort:function(){l(),v.cancel()}}}catch(e){return this.handleError(n,e),{abort:function(){l()}}}},revert:function(e,r,t){var o=this;this.$fireStorage.ref().child(e).delete().then((function(){var t=o.files.indexOf(e);t>-1&&o.files.splice(t,1),r()})).catch((function(e){this.handleError(t,e)}))},load:function(e,r,t){t()},fetch:function(e,r,t,progress,o,n){t("Solo archivos locales")},restore:function(e,r,t,progress,o,n){t()},handleError:function(e,r){switch(r.code){case"storage/canceled":break;default:e(r.message)}},handleFilePondInit:function(){this.$refs.input.getFiles()}},component:{FilePond:f}},_=t(17),component=Object(_.a)(h,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("FilePond",{ref:"input",attrs:{name:"file","allow-multiple":e.allowMultiple,"allow-file-type-validation":"true","accepted-file-types":"application/pdf",server:{process:e.process,revert:e.revert,restore:e.restore,load:e.load,fetch:e.fetch},files:e.files2},on:{init:e.handleFilePondInit}}),e._v(" "),e.rule?t("p",{staticClass:"caption red--text"},[e._v("\n    Archivo requerido\n  ")]):e._e()],1)}),[],!1,null,null,null);r.default=component.exports},206:function(e,r,t){"use strict";var o=t(194);t.n(o).a},207:function(e,r,t){(r=t(49)(!1)).push([e.i,".landing-banner[data-v-0750ad08]{min-height:300px;display:flex;text-align:center;align-items:center;flex-direction:column;justify-content:center}.google-signin-btn[data-v-0750ad08]{border:none;padding:0;background:none;margin-top:var(--space-0)}.main-content[data-v-0750ad08]{background:#fff;padding:var(--space-4)}.form-field[data-v-0750ad08],.form-textarea[data-v-0750ad08]{background:#fff;padding:var(--space-0);margin:var(--space-0) 0;margin-right:var(--space-0);border:1px solid var(--border-grey)}.form-label[data-v-0750ad08]{margin:var(--space-1) 0 var(--space-0) 0}.address-field[data-v-0750ad08]{width:649px}.form-textarea[data-v-0750ad08]{width:100%;resize:none}.form-attachment[data-v-0750ad08],.mandatory-checkboxes[data-v-0750ad08]{margin:var(--space-1) 0;font-weight:700}.attachment-text[data-v-0750ad08],.form-checkbox[data-v-0750ad08]{display:inline-block;margin:var(--space-0) 0}.errors[data-v-0750ad08]{color:#dc143c;margin-bottom:15px}",""]),e.exports=r},217:function(e,r,t){"use strict";t.r(r);t(68),t(21),t(22),t(9),t(51),t(52),t(70),t(40);var o=t(37),n=t(83);function l(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(o.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var v={components:{FileUpload:t(196).default},data:function(){return{uploadTask:"",submitted:!1,errors:[],preview:!1,form:{sid:"",full_name:"",email_id:"",personal_number:"",guardian_number:"",address:{address1:"",address2:"",city:"",state:"",country:""},scholarship_this_year:"",scholarship_info:"",sef_before:"",amount:0,q_descneed:"",q_whatfor:"",q_impact:"",q_efforts:"",q_plan:"",attachments:[]}}},computed:d(d({},Object(n.b)(["user"])),{},{verified:function(){return!1}}),methods:{togglePreview:function(){return this.preview=!this.preview,!1},trim:function(text){return console.log(text),text.replace(/^\s+|\s+$/gm,"")},submit:function(){var e=this;this.errors=[];var r=d(d({},this.form),{},{user:d({},this.user)});for(var t in r)if("address"!==t)"attachments"!==t&&"user"!==t&&"amount"!==t&&(r[t]=this.trim(r[t]));else for(var o in r.address)r.address[o]=this.trim(r.address[o]);this.$fireStore.collection("submissions").add(r).then((function(r){e.submitted=!0})).catch((function(e){console.log(e)}))},google_sign_in:function(){var e=this,r=new this.$fireAuthObj.GoogleAuthProvider;this.$fireAuth.signInWithPopup(r).then((function(r){var t=r.user.email;t.includes("daiict.ac.in",t.length-"daiict.ac.in".length)?(e.$store.dispatch("user/setUser",r.user),e.form.email_id=r.user.email):alert("Please sign in with daiict.ac.in to proceed")})).catch((function(e){console.log(e)}))},fileUpdateHandler:function(e){this.form.attachments=e}},head:function(){return{title:"Request Help | Student Emergency Fund",link:[{rel:"stylesheet",href:"https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"}]}}},m=(t(206),t(17)),component=Object(m.a)(v,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"page"},[t("div",{staticClass:"page-wrapper"},[e._m(0),e._v(" "),t("section",{staticClass:"main-content"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.user.loggedIn&&!e.submitted,expression:"!user.loggedIn && !submitted"}],staticClass:"sign-in-wrapper"},[t("h2",[e._v("\n          Sign-in with daiict.ac.in domain to avail the funds.\n        ")]),e._v(" "),t("button",{staticClass:"google-signin-btn",on:{click:e.google_sign_in}},[t("img",{attrs:{src:"/google/btn_google_signin_light_normal_web.png"}})])]),e._v(" "),e.user.loggedIn&&!e.submitted?t("div",{staticClass:"request-form"},[t("form",{on:{submit:function(r){return r.preventDefault(),e.submit(r)}}},[t("h4",{staticClass:"form-label"},[e._v("\n            Personal Information\n          ")]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.sid,expression:"form.sid"}],staticClass:"form-field",attrs:{type:"text",placeholder:"SID",required:""},domProps:{value:e.form.sid},on:{input:function(r){r.target.composing||e.$set(e.form,"sid",r.target.value)}}}),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("SID: ")]),e._v(" "),t("span",[e._v(e._s(e.form.sid))])]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.full_name,expression:"form.full_name"}],staticClass:"form-field",attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:e.form.full_name},on:{input:function(r){r.target.composing||e.$set(e.form,"full_name",r.target.value)}}}),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("Full Name: ")]),e._v(" "),t("span",[e._v(e._s(e.form.full_name))])]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.email_id,expression:"form.email_id"}],staticClass:"form-field",attrs:{type:"text",placeholder:"DA-IICT Email Id",required:""},domProps:{value:e.form.email_id},on:{input:function(r){r.target.composing||e.$set(e.form,"email_id",r.target.value)}}}),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("Email address: ")]),e._v(" "),t("span",[e._v(e._s(e.form.email_id))])]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.personal_number,expression:"form.personal_number"}],staticClass:"form-field",attrs:{type:"text",placeholder:"Personal Contact Number",required:""},domProps:{value:e.form.personal_number},on:{input:function(r){r.target.composing||e.$set(e.form,"personal_number",r.target.value)}}}),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.guardian_number,expression:"form.guardian_number"}],staticClass:"form-field",attrs:{type:"text",placeholder:"Guardian Contact Number",required:""},domProps:{value:e.form.guardian_number},on:{input:function(r){r.target.composing||e.$set(e.form,"guardian_number",r.target.value)}}}),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("Personal Contact Number: ")]),e._v(" "),t("span",[e._v(e._s(e.form.personal_number))])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("Guardian Contact Number: ")]),e._v(" "),t("span",[e._v(e._s(e.form.guardian_number))])]),e._v(" "),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}]},[t("h4",{staticClass:"form-label"},[e._v("\n              Address\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address.address1,expression:"form.address.address1"}],staticClass:"form-field address-field",attrs:{type:"text",required:""},domProps:{value:e.form.address.address1},on:{input:function(r){r.target.composing||e.$set(e.form.address,"address1",r.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address.address2,expression:"form.address.address2"}],staticClass:"form-field address-field",attrs:{type:"text",required:""},domProps:{value:e.form.address.address2},on:{input:function(r){r.target.composing||e.$set(e.form.address,"address2",r.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address.city,expression:"form.address.city"}],staticClass:"form-field",attrs:{type:"text",placeholder:"City",required:""},domProps:{value:e.form.address.city},on:{input:function(r){r.target.composing||e.$set(e.form.address,"city",r.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address.state,expression:"form.address.state"}],staticClass:"form-field",attrs:{type:"text",placeholder:"State",required:""},domProps:{value:e.form.address.state},on:{input:function(r){r.target.composing||e.$set(e.form.address,"state",r.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address.zip,expression:"form.address.zip"}],staticClass:"form-field",attrs:{type:"number",placeholder:"Zip",required:""},domProps:{value:e.form.address.zip},on:{input:function(r){r.target.composing||e.$set(e.form.address,"zip",r.target.value)}}}),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address.country,expression:"form.address.country"}],staticClass:"form-field",attrs:{name:"country",type:"text",placeholder:"Country",required:""},domProps:{value:e.form.address.country},on:{input:function(r){r.target.composing||e.$set(e.form.address,"country",r.target.value)}}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("Address: ")]),t("br"),e._v(" "),t("span",[e._v(e._s(e.form.address.address1))]),t("br"),e._v(" "),t("span",[e._v(e._s(e.form.address.address2))]),t("br"),e._v(" "),t("span",[e._v(e._s(e.form.address.city)+", "+e._s(e.form.address.state)+", "+e._s(e.form.address.zip)+", "+e._s(e.form.address.country))])]),e._v(" "),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}]},[t("h4",{staticClass:"form-label"},[e._v("\n              Have you applied for any scholarship this year?\n            ")]),e._v(" "),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.scholarship_this_year,expression:"form.scholarship_this_year"}],attrs:{name:"scholarship",type:"radio",value:"yes",required:""},domProps:{checked:e._q(e.form.scholarship_this_year,"yes")},on:{change:function(r){return e.$set(e.form,"scholarship_this_year","yes")}}}),e._v(" Yes\n            ")]),e._v(" "),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.scholarship_this_year,expression:"form.scholarship_this_year"}],attrs:{name:"scholarship",type:"radio",value:"no",required:""},domProps:{checked:e._q(e.form.scholarship_this_year,"no")},on:{change:function(r){return e.$set(e.form,"scholarship_this_year","no")}}}),e._v(" No\n            ")]),t("br"),e._v(" "),"yes"==e.form.scholarship_this_year?t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.scholarship_info,expression:"form.scholarship_info"}],staticClass:"form-textarea",attrs:{rows:"2",placeholder:"Details of scholarship",required:""},domProps:{value:e.form.scholarship_info},on:{input:function(r){r.target.composing||e.$set(e.form,"scholarship_info",r.target.value)}}}):e._e()]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("\n              Have you applied for any scholarship this year?\n            ")]),e._v(" "),t("span",[e._v(e._s(e.form.scholarship_this_year))]),e._v(" "),t("br"),e._v(" "),t("p",[e._v(e._s(e.form.scholarship_info))])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}]},[t("h4",{staticClass:"form-label"},[e._v("\n              Have you received funds from the Student Emergency Fund before?\n            ")]),e._v(" "),t("label",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}]},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.sef_before,expression:"form.sef_before"}],attrs:{name:"sef",type:"radio",value:"yes",required:""},domProps:{checked:e._q(e.form.sef_before,"yes")},on:{change:function(r){return e.$set(e.form,"sef_before","yes")}}}),e._v(" Yes\n            ")]),e._v(" "),t("label",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}]},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.sef_before,expression:"form.sef_before"}],attrs:{name:"sef",type:"radio",value:"no",required:""},domProps:{checked:e._q(e.form.sef_before,"no")},on:{change:function(r){return e.$set(e.form,"sef_before","no")}}}),e._v(" No\n            ")]),t("br")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("\n              Have you received funds from the Student Emergency Fund before?\n            ")]),e._v(" "),t("span",[e._v(e._s(e.form.sef_before))])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}]},[t("h4",{staticClass:"form-label"},[e._v("\n              Amount of funds requested from Student Emergency Fund (in Indian Rupee)\n            ")]),e._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.amount,expression:"form.amount"}],staticClass:"form-field",attrs:{type:"number",placeholder:"Amount",required:""},domProps:{value:e.form.amount},on:{input:function(r){r.target.composing||e.$set(e.form,"amount",r.target.value)}}}),e._v(" "),t("span",[e._v("INR")])]),e._v(" "),t("br"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("strong",[e._v("\n              Requested Funds:\n            ")]),e._v(" "),t("span",[e._v(e._s(e.form.amount)+" INR")])]),e._v(" "),t("h4",{staticClass:"form-label"},[e._v("\n            Please describe what led to your emergent financial need, providing as much detail as you are comfortable providing.\n          ")]),e._v(" "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.q_descneed,expression:"form.q_descneed"}],staticClass:"form-textarea",attrs:{rows:"4",required:""},domProps:{value:e.form.q_descneed},on:{input:function(r){r.target.composing||e.$set(e.form,"q_descneed",r.target.value)}}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("span",[e._v(e._s(e.form.q_descneed))])]),e._v(" "),t("br"),e._v(" "),t("h4",{staticClass:"form-label"},[e._v("\n            Please explain in detail what the funds will be used for.\n          ")]),e._v(" "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.q_whatfor,expression:"form.q_whatfor"}],staticClass:"form-textarea",attrs:{rows:"4",required:""},domProps:{value:e.form.q_whatfor},on:{input:function(r){r.target.composing||e.$set(e.form,"q_whatfor",r.target.value)}}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("span",[e._v(e._s(e.form.q_whatfor))])]),e._v(" "),t("br"),e._v(" "),t("h4",{staticClass:"form-label"},[e._v("\n            Please describe the specific impact of the emergency on your ability to be a student.\n          ")]),e._v(" "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.q_impact,expression:"form.q_impact"}],staticClass:"form-textarea",attrs:{rows:"4",required:""},domProps:{value:e.form.q_impact},on:{input:function(r){r.target.composing||e.$set(e.form,"q_impact",r.target.value)}}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("span",[e._v(e._s(e.form.q_impact))])]),e._v(" "),t("br"),e._v(" "),t("h4",{staticClass:"form-label"},[e._v("\n            Please describe your efforts to obtain assistance to address your needs through other sources (family, friends, campus/community organizations, etc.)\n          ")]),e._v(" "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.q_efforts,expression:"form.q_efforts"}],staticClass:"form-textarea",attrs:{rows:"4",required:""},domProps:{value:e.form.q_efforts},on:{input:function(r){r.target.composing||e.$set(e.form,"q_efforts",r.target.value)}}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("span",[e._v(e._s(e.form.q_efforts))])]),e._v(" "),t("br"),e._v(" "),t("h4",{staticClass:"form-label"},[e._v("\n            What do you plan to do to return to financial stability after receiving help to prevent a pattern?\n          ")]),e._v(" "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"},{name:"model",rawName:"v-model",value:e.form.q_plan,expression:"form.q_plan"}],staticClass:"form-textarea",attrs:{rows:"4",required:""},domProps:{value:e.form.q_plan},on:{input:function(r){r.target.composing||e.$set(e.form,"q_plan",r.target.value)}}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}]},[t("span",[e._v(e._s(e.form.q_plan))])]),e._v(" "),t("br"),e._v(" "),e._m(1),e._v(" "),t("div",{staticClass:"form-attachment"},[t("span",{staticClass:"attachment-text"},[e._v("\n              Add Attachment [It is advisable to attach documents, photos etc. to prove or support your claims]\n            ")]),e._v(" "),t("FileUpload",{on:{filesUpdate:e.fileUpdateHandler}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.len>0,expression:"errors.len > 0"}],staticClass:"errors"},[e._l(e.errors,(function(r){return t("span",{key:r},[e._v(e._s(r))])})),t("br")],2),e._v(" "),t("button",{staticClass:"sef-btn",attrs:{type:"button"},on:{click:e.togglePreview}},[e._v("\n            "+e._s(e.preview?"Edit":"Preview")+"\n          ")]),e._v(" "),t("button",{staticClass:"sef-btn"},[e._v("\n            Submit\n          ")])])]):e._e(),e._v(" "),e.submitted?t("div",{staticClass:"thank-you-wrapper"},[t("h2",[e._v("\n          Thank you for filling out the form. You'll be hearing from us\n          very soon.\n        ")])]):e._e()])])])}),[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"landing-banner"},[r("h1",[this._v("Emergency Fund Application")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"mandatory-checkboxes"},[t("label",{staticClass:"form-checkbox"},[t("input",{attrs:{type:"checkbox",required:""}}),e._v(" "),t("span",{staticClass:"checkbox-text"},[e._v("\n                I understand that I may not be eligible for an award from the Student Emergency Fund, and will respect that decision.\n              ")])]),t("br"),e._v(" "),t("label",{staticClass:"form-checkbox"},[t("input",{attrs:{type:"checkbox",required:""}}),e._v(" "),t("span",{staticClass:"checkbox-text"},[e._v("\n                I agree to use any award of funds for the requested purpose(s) only and I understand that this is a one-time grant of funds.\n              ")])]),t("br"),e._v(" "),t("label",{staticClass:"form-checkbox"},[t("input",{attrs:{type:"checkbox",required:""}}),e._v(" "),t("span",{staticClass:"checkbox-text"},[e._v("\n                I understand that this application falls under the non-urgent category and will be received during normal business hours (M-F 8-5).\n              ")])])])}],!1,null,"0750ad08",null);r.default=component.exports;installComponents(component,{FileUpload:t(196).default})}}]);