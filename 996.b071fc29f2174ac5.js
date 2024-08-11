"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[996],{996:(J,p,a)=>{a.r(p),a.d(p,{SpecialityModule:()=>B});var g=a(6814),o=a(7860),d=a(649),e=a(5879),S=a(8472),m=a(9378),r=a(6223),f=a(4361),u=a(6663),h=a(7248);const b=["fileInput"];function C(l,y){if(1&l&&e._UZ(0,"p-image",25),2&l){const t=e.oxw();e.Q6J("src",t.currentSpeciality.imageBase64)("preview",!0)}}function v(l,y){if(1&l){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.AddSpeciality())}),e.qZA()}}function E(l,y){if(1&l){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.Edit())}),e.qZA()}}let A=(()=>{class l{service;cdr;cts;Cols;Data;contentSecondBtn;mode="add";lang=localStorage.getItem("language");constructor(t,n,i){this.service=t,this.cdr=n,this.cts=i,this.lang=localStorage.getItem("language"),this.Cols=[o.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"imageUrl",header:"ar"==this.lang?"\u0635\u0648\u0631\u0629":"Image ",type:"image"}),o.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"speciality_Name_Ar":"speciality_Name_En",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Name",type:"text"}),o.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"speciality_Description_Ar":"speciality_Description_En",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Description",type:"text"})],this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(t){this.cdr.detectChanges()}currentSpeciality={id:"",arabicName:"",englishName:"",specialityDescriptionAr:"",specialityDescriptionEn:"",imageBase64:""};ngOnInit(){this.searchSpeciality()}searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0,void 0).subscribe({next:t=>{this.Data=t.data.items,this.cdr.detectChanges()},error:()=>{}})}Edit(){}AddSpeciality(){let t=new d.R_Y;t.specialityNameAr=this.currentSpeciality.arabicName,t.specialityNameEn=this.currentSpeciality.englishName,t.specialityDescriptionAr=this.currentSpeciality.specialityDescriptionAr,t.specialityDescriptionEn=this.currentSpeciality.specialityDescriptionEn,t.imageBase64=this.currentSpeciality.imageBase64,this.service.newSpeciality(t).subscribe({next:n=>{n.isSuccess&&this.searchSpeciality()},error:n=>{n.error.isFailure&&this.cts.Show("error","error",n.error.errors[0].message)}})}fileInput;selectedFile=null;base64String="";triggerFileInput(){this.fileInput.nativeElement.click(),this.cdr.detectChanges()}onFileSelected(t){const n=t.target;if(n.files&&n.files.length>0){this.selectedFile=n.files[0];const i=new FileReader;i.onload=this.handleReaderLoaded.bind(this),i.readAsDataURL(this.selectedFile)}}handleReaderLoaded(t){this.base64String=t.target?.result,this.currentSpeciality.imageBase64=String(this.base64String);let n=new d.hc$;n.specialityId=this.currentSpeciality.id,n.imageBase64=this.currentSpeciality.imageBase64,this.service.changeSpecialityImage(n).subscribe({next:i=>{}}),this.cdr.detectChanges()}EditRow(t){this.mode="edit",this.currentSpeciality.id=t.id,this.currentSpeciality.arabicName=t.speciality_Name_Ar,this.currentSpeciality.englishName=t.speciality_Name_En,this.currentSpeciality.imageBase64=t.imageUrl,this.currentSpeciality.specialityDescriptionAr=t.speciality_Description_Ar,this.currentSpeciality.specialityDescriptionEn=t.speciality_Description_En}Clear(){this.currentSpeciality={id:"",arabicName:"",englishName:"",specialityDescriptionAr:"",specialityDescriptionEn:"",imageBase64:""},this.mode="add"}static \u0275fac=function(n){return new(n||l)(e.Y36(d.r9S),e.Y36(e.sBO),e.Y36(S.m))};static \u0275cmp=e.Xpm({type:l,selectors:[["app-Speciality"]],viewQuery:function(n,i){if(1&n&&e.Gf(b,5),2&n){let c;e.iGM(c=e.CRH())&&(i.fileInput=c.first)}},features:[e.TTD],decls:35,vars:16,consts:[[1,"m-3"],["translate","MENU.Speciality",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","SecondBtn","contentSecondBtn","classSecondBtn","data","chooseColomns","secondButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],["translate","SHARED.FirstImage",1,"form-label"],[1,"custom-file-input",2,"display","flex","justify-content","space-evenly","align-content","center","align-items","flex-end"],["alt","Image","width","80",3,"src","preview",4,"ngIf"],["type","button","translate","SHARED.ChangeFirtImage",1,"btn","btn-success",3,"click"],["type","file",1,"form-control",3,"change"],["fileInput",""],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["alt","Image","width","80",3,"src","preview"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(n,i){1&n&&(e._UZ(0,"p-toast"),e.TgZ(1,"span",0),e._UZ(2,"h2",1),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"app-shared-datatable",6),e.NdJ("secondButtonEvent",function(s){return i.EditRow(s)}),e.qZA()()()(),e.TgZ(8,"div",7)(9,"div",4)(10,"div",5)(11,"div",8)(12,"div",9),e._UZ(13,"label",10),e.TgZ(14,"input",11),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.arabicName=s}),e.qZA()(),e.TgZ(15,"div",9),e._UZ(16,"label",12),e.TgZ(17,"textarea",11),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.specialityDescriptionAr=s}),e.qZA()(),e.TgZ(18,"div",9),e._UZ(19,"label",13),e.TgZ(20,"input",11),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.englishName=s}),e.qZA()(),e.TgZ(21,"div",9),e._UZ(22,"label",14),e.TgZ(23,"textarea",11),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.specialityDescriptionEn=s}),e.qZA()(),e.TgZ(24,"div",9),e._UZ(25,"label",15),e.TgZ(26,"div",16),e.YNc(27,C,1,2,"p-image",17),e.TgZ(28,"button",18),e.NdJ("click",function(){return i.triggerFileInput()}),e.qZA(),e.TgZ(29,"input",19,20),e.NdJ("change",function(s){return i.onFileSelected(s)}),e.qZA()()(),e.TgZ(31,"div",21),e.YNc(32,v,1,0,"button",22),e.YNc(33,E,1,0,"button",23),e.TgZ(34,"button",24),e.NdJ("click",function(){return i.Clear()}),e.qZA()()()()()()()),2&n&&(e.xp6(7),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("SecondBtn",!0)("contentSecondBtn",i.contentSecondBtn)("classSecondBtn","light-warning")("data",i.Data)("chooseColomns",!0),e.xp6(7),e.Q6J("ngModel",i.currentSpeciality.arabicName),e.xp6(3),e.Q6J("ngModel",i.currentSpeciality.specialityDescriptionAr),e.xp6(3),e.Q6J("ngModel",i.currentSpeciality.englishName),e.xp6(3),e.Q6J("ngModel",i.currentSpeciality.specialityDescriptionEn),e.xp6(4),e.Q6J("ngIf",i.currentSpeciality.imageBase64),e.xp6(5),e.Q6J("ngIf","add"==i.mode),e.xp6(1),e.Q6J("ngIf","edit"==i.mode))},dependencies:[g.O5,m.FN,r.Fj,r.JJ,r.On,f.G,u.Pi,h.E],styles:[".custom-file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}"]})}return l})();var D=a(7304),N=a(3660),Z=a(3415),T=a(3758),_=a(2427);let B=(()=>{class l{static \u0275fac=function(n){return new(n||l)};static \u0275mod=e.oAB({type:l});static \u0275inj=e.cJS({imports:[g.ez,m.EV,r.u5,Z.m,D.Bz.forChild([{path:"",component:A,canActivate:[_.o,T.a],data:{animation:"SpecialityComponent"}}]),u.aw,N.q,h.$]})}return l})()}}]);