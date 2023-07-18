"use strict";(self["webpackChunkgoogle_login"]=self["webpackChunkgoogle_login"]||[]).push([[825],{3237:function(t,e,i){i.d(e,{Z:function(){return u}});var n=i(4367),r=(i(9653),i(4944),i(3792),i(5648)),a=i(1226),s=i(6505),o=i(3325),u=(0,o.Z)(a.Z,s.Z,r.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,n.Z)((0,n.Z)({"v-card":!0},s.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.Z.options.computed.classes.call(this))},styles:function(){var t=(0,n.Z)({},r.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=a.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,i){i.d(e,{EB:function(){return u},Qq:function(){return s},ZB:function(){return o},h7:function(){return a}});var n=i(3237),r=i(4589),a=(0,r.Ji)("v-card__actions"),s=(0,r.Ji)("v-card__subtitle"),o=(0,r.Ji)("v-card__text"),u=(0,r.Ji)("v-card__title");n.Z},6232:function(t,e,i){var n=i(4367),r=(i(6699),i(2023),i(2479),i(7327),i(1539),i(4747),i(9826),i(3325)),a=i(6210),s=i(6257);e["Z"]=(0,r.Z)(a.Z,(0,s.J)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:(0,n.Z)({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},4350:function(t,e,i){i.d(e,{Z:function(){return o}});var n=i(4367),r=(i(9653),i(3105)),a=i(3325),s=(0,a.Z)(r.Z),o=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return(0,n.Z)({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var i;t?e.calculateInputHeight():null==(i=e.$refs.input)||i.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=r.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},3825:function(t,e,i){i.r(e),i.d(e,{default:function(){return H}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-main",[i("v-container",[i("v-card",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card-title",{staticClass:"headline mt-9 text-center"},[t._v("문의하기 / 건의하기")]),i("v-card-text",[i("p",{staticClass:"mb-3"},[t._v(" 궁금한 사항은 문의를 주시면"),i("br"),t._v(" 친절하고 신속하게 답변 드리겠습니다. ")]),i("v-text-field",{attrs:{placeholder:"예)abc12@gmail.com",variant:"underlined",label:"이메일",required:"",rules:[t.rule.required,t.rule.email],hint:"연락 가능한 이메일을 입력해주세요."},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),i("v-responsive",[i("v-textarea",{attrs:{placeholder:"내용을 입력해주세요~",required:"",rules:[t.rule.required],type:"inquiry"},model:{value:t.form.inquiry,callback:function(e){t.$set(t.form,"inquiry",e)},expression:"form.inquiry"}})],1),i("v-checkbox",{attrs:{label:"개인정보 수집 및 이용방침에 동의합니다.",required:"",rules:[t.rule.required]},model:{value:t.form.checkbox,callback:function(e){t.$set(t.form,"checkbox",e)},expression:"form.checkbox"}})],1),i("v-card-actions",[i("v-btn",{attrs:{outlined:"",color:"#2c38a8"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("뒤로")]),i("v-spacer"),i("v-btn",{attrs:{disabled:!t.valid,outlined:"",color:"#2c38a8"},on:{click:t.submit}},[t._v("등록")])],1)],1)],1)],1)],1)],1)},r=[],a=(i(4916),i(7601),{name:"App",data:function(){return{form:{name:"",addr:"",email:"",inquiry:"",checkbox:""},rule:{required:function(t){return!!t||"필수 입력 항목입니다."},email:function(t){return/.+@.+\..+/.test(t)||"이메일 형식에 맞게 입력하세요."}},valid:!1}},methods:{submit:function(){this.$refs.form.validate()?(this.showAlert(),this.redirectToLink()):this.$toasted.error("입력 폼을 전부 작성해주세요")},showAlert:function(){alert("제출되었습니다. 빠른 시일안에 연락 드리겠습니다.")},redirectToLink:function(){this.$router.push({name:"intro_page"})}}}),s=a,o=i(1001),u=i(3453),l=i.n(u),c=i(7524),h=i(3150),d=i(3237),p=i(7118),f=i(3274),v=i(4367),m=(i(1539),i(9714),i(172)),g=i(8230),b=(i(7327),i(6286)),k=i(144),Z=k.Z.extend({name:"rippleable",directives:{ripple:b.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),x=i(4419),y=i(3325);function V(t){t.preventDefault()}var w=(0,y.Z)(g.Z,Z,x.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=g.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:V},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:V},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),C=["title"],_=w.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return(0,v.Z)((0,v.Z)({},g.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,(0,f.Z)(t,C));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(m.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",(0,v.Z)((0,v.Z)({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),I=i(9846),$=i(6232),B=i(7877),A=i(3857),S=i(9762),E=i(3105),T=i(4350),q=(0,o.Z)(s,n,r,!1,null,null,null),H=q.exports;l()(q,{VApp:c.Z,VBtn:h.Z,VCard:d.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VCheckbox:_,VContainer:I.Z,VForm:$.Z,VMain:B.Z,VResponsive:A.Z,VSpacer:S.Z,VTextField:E.Z,VTextarea:T.Z})}}]);
//# sourceMappingURL=825-legacy.253f1060.js.map