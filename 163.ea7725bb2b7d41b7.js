"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[163],{163:(N,d,t)=>{t.r(d),t.d(d,{RoleModule:()=>D});var h=t(6814),c=t(649),g=t(7860),e=t(5879),s=t(6223),u=t(4361),m=t(6663);let p=(()=>{class r{service;cdr;Cols;Data;lang=localStorage.getItem("language");constructor(n,l){this.service=n,this.cdr=l,this.lang=localStorage.getItem("language"),this.Cols=[g.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"role_Name_Ar":"role_Name_En",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Name",type:"text"}),g.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"role_Description_Ar":"role_Description_En",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Description",type:"text"})]}ngOnChanges(n){this.cdr.detectChanges()}currentRole={arabicName:"",englishName:"",roleDescriptionAr:"",roleDescriptionEn:""};ngOnInit(){this.searchRole()}searchRole(){this.service.searchRole("",!1,0,1,void 0,void 0).subscribe({next:n=>{this.Data=n.data.items,this.cdr.detectChanges()},error:()=>{}})}AddRole(){let n=new c.wNl;n.roleNameAr=this.currentRole.arabicName,n.roleNameEn=this.currentRole.englishName,n.roleDescriptionAr=this.currentRole.roleDescriptionAr,n.roleDescriptionEn=this.currentRole.roleDescriptionEn,this.service.newRole(n).subscribe({next:l=>{this.searchRole(),this.currentRole.arabicName="",this.currentRole.englishName="",this.currentRole.roleDescriptionAr="",this.currentRole.roleDescriptionEn=""}})}static \u0275fac=function(l){return new(l||r)(e.Y36(c.r9S),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-Role"]],features:[e.TTD],decls:25,vars:11,consts:[[1,"m-3"],["translate","MENU.Role",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(l,o){1&l&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"app-shared-datatable",6),e.qZA()()(),e.TgZ(7,"div",7)(8,"div",4)(9,"div",5)(10,"div",8)(11,"div",9),e._UZ(12,"label",10),e.TgZ(13,"input",11),e.NdJ("ngModelChange",function(a){return o.currentRole.arabicName=a}),e.qZA()(),e.TgZ(14,"div",9),e._UZ(15,"label",12),e.TgZ(16,"textarea",11),e.NdJ("ngModelChange",function(a){return o.currentRole.roleDescriptionAr=a}),e.qZA()(),e.TgZ(17,"div",9),e._UZ(18,"label",13),e.TgZ(19,"input",11),e.NdJ("ngModelChange",function(a){return o.currentRole.englishName=a}),e.qZA()(),e.TgZ(20,"div",9),e._UZ(21,"label",14),e.TgZ(22,"textarea",11),e.NdJ("ngModelChange",function(a){return o.currentRole.roleDescriptionEn=a}),e.qZA()(),e.TgZ(23,"div",15)(24,"button",16),e.NdJ("click",function(){return o.AddRole()}),e.qZA()()()()()()()),2&l&&(e.xp6(6),e.Q6J("cols",o.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",o.Data)("chooseColomns",!0)("SecondBtn",!1),e.xp6(7),e.Q6J("ngModel",o.currentRole.arabicName),e.xp6(3),e.Q6J("ngModel",o.currentRole.roleDescriptionAr),e.xp6(3),e.Q6J("ngModel",o.currentRole.englishName),e.xp6(3),e.Q6J("ngModel",o.currentRole.roleDescriptionEn))},dependencies:[s.Fj,s.JJ,s.On,u.G,m.Pi]})}return r})();var R=t(7304),f=t(3660),v=t(3415),C=t(2427),A=t(3758);let D=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[h.ez,s.u5,v.m,R.Bz.forChild([{path:"",canActivate:[C.o,A.a],component:p,data:{animation:"RoleComponent"}}]),m.aw,f.q]})}return r})()}}]);