(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"JU/a":function(n,o,i){"use strict";i.r(o),i.d(o,"DatosBasicosReunionModule",(function(){return w}));var e=i("ofXK"),t=i("tyNb"),a=i("3Pt+"),r=i("Xksa"),c=i("fXoL"),d=i("2/A8"),m=i("5hAj"),b=i("0IaG"),u=i("kmnG"),s=i("qFsG"),l=i("d3UM"),f=i("FKr1");function h(n,o){if(1&n&&(c.Sb(0,"mat-option",19),c.Cc(1),c.Rb()),2&n){const n=o.$implicit;c.jc("value",n.id_contacto),c.Bb(1),c.Ec(" ",n.nombre_completo," ")}}function p(n,o){if(1&n&&(c.Sb(0,"mat-option",19),c.Cc(1),c.Rb()),2&n){const n=o.$implicit;c.jc("value",n.id_modo_reunion),c.Bb(1),c.Ec(" ",n.modo_reunion," ")}}function v(n,o){if(1&n&&(c.Sb(0,"mat-option",19),c.Cc(1),c.Rb()),2&n){const n=o.$implicit;c.jc("value",n.id_motivo_reunion),c.Bb(1),c.Ec(" ",n.motivo_reunion," ")}}function S(n,o){if(1&n&&(c.Sb(0,"mat-option",19),c.Cc(1),c.Rb()),2&n){const n=o.$implicit;c.jc("value",n.id_entidad),c.Bb(1),c.Ec(" ",n.entidad," ")}}function R(n,o){if(1&n&&(c.Sb(0,"mat-option",19),c.Cc(1),c.Rb()),2&n){const n=o.$implicit;c.jc("value",n.id_zona),c.Bb(1),c.Ec(" ",n.zona," ")}}const _=[{path:"",component:(()=>{class n{constructor(n,o){this.datosReunion=n,this.reunionService=o,this.zonas=this.datosReunion.datosEditarReunion.zonas,this.modos_reunion=this.datosReunion.datosEditarReunion.modosReunion,this.motivos_reunion=this.datosReunion.datosEditarReunion.motivosReunion,this.entidades_target=this.datosReunion.datosEditarReunion.entidades,this.contactos=this.datosReunion.datosEditarReunion.contactos}ngOnInit(){this.ENTIDAD=r.i,this.setForm(),this.datosBasicosForm.valueChanges.subscribe(n=>{this.reunionService.setDatosBasicosReunion(n)})}setForm(){this.datosBasicosForm=new a.h({id_reunion:new a.e(this.reunionService.reunion.id_reunion,a.v.required),reunion:new a.e(this.reunionService.reunion.reunion,a.v.required),id_contacto:new a.e(this.reunionService.reunion.id_contacto,a.v.required),id_modo_reunion:new a.e(this.reunionService.reunion.id_modo_reunion,a.v.required),id_motivo_reunion:new a.e(this.reunionService.reunion.id_motivo_reunion,a.v.required),id_entidad_target:new a.e(this.reunionService.reunion.id_entidad_target,a.v.required),id_zona:new a.e(this.reunionService.reunion.id_zona,a.v.required),fecha:new a.e(this.reunionService.reunion.fecha,a.v.required),hora_inicio:new a.e(this.reunionService.reunion.hora_inicio,a.v.required),hora_fin:new a.e(this.reunionService.reunion.hora_fin,a.v.required),ubicacion:new a.e(this.reunionService.reunion.ubicacion),localidad:new a.e(this.reunionService.reunion.localidad),observaciones:new a.e(this.reunionService.reunion.observaciones)})}}return n.\u0275fac=function(o){return new(o||n)(c.Mb(d.a),c.Mb(m.a))},n.\u0275cmp=c.Gb({type:n,selectors:[["app-datos-basicos"]],decls:65,vars:7,consts:[[1,"container"],["mat-dialog-title",""],[1,"mat-dialog-content",3,"formGroup"],[1,"form"],["color","accent"],["matInput","","placeholder","Reuni\xf3n","formControlName","reunion","name","reunion","maxlength","100","required",""],["formControlName","id_contacto","required",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","date","matInput","","placeholder","Fecha","formControlName","fecha","name","fecha","maxlength","100","required",""],["type","time","matInput","","placeholder","Hora Inicio","formControlName","hora_inicio","name","hora_inicio","maxlength","100","required",""],["type","time","matInput","","placeholder","Hora Fin","formControlName","hora_fin","name","hora_fin","maxlength","100","required",""],["matInput","","placeholder","Ubicaci\xf3n","formControlName","ubicacion","name","ubicacion","maxlength","100"],["matInput","","placeholder","Localidad","formControlName","localidad","name","localidad","maxlength","100","required",""],["formControlName","id_modo_reunion","required",""],["formControlName","id_motivo_reunion","required",""],["formControlName","id_entidad_target"],["formControlName","id_zona","required",""],["matInput","","placeholder","Observaciones","formControlName","observaciones","name","Observaciones"],[3,"value"]],template:function(n,o){1&n&&(c.Sb(0,"div",0),c.Sb(1,"h3",1),c.Cc(2),c.Rb(),c.Sb(3,"form",2),c.Sb(4,"div",3),c.Sb(5,"mat-form-field",4),c.Nb(6,"input",5),c.Rb(),c.Rb(),c.Sb(7,"div",3),c.Sb(8,"mat-form-field"),c.Sb(9,"mat-label"),c.Cc(10,"Dinamizador"),c.Rb(),c.Sb(11,"mat-select",6),c.Sb(12,"mat-option",7),c.Cc(13,"Sin dinamizador"),c.Rb(),c.Bc(14,h,2,2,"mat-option",8),c.Rb(),c.Rb(),c.Rb(),c.Sb(15,"div",3),c.Sb(16,"mat-form-field",4),c.Nb(17,"input",9),c.Rb(),c.Rb(),c.Sb(18,"div",3),c.Sb(19,"mat-form-field",4),c.Nb(20,"input",10),c.Rb(),c.Rb(),c.Sb(21,"div",3),c.Sb(22,"mat-form-field",4),c.Nb(23,"input",11),c.Rb(),c.Rb(),c.Sb(24,"div",3),c.Sb(25,"mat-form-field",4),c.Nb(26,"input",12),c.Rb(),c.Rb(),c.Sb(27,"div",3),c.Sb(28,"mat-form-field",4),c.Nb(29,"input",13),c.Rb(),c.Rb(),c.Sb(30,"div",3),c.Sb(31,"mat-form-field"),c.Sb(32,"mat-label"),c.Cc(33,"Modo Reuni\xf3n"),c.Rb(),c.Sb(34,"mat-select",14),c.Sb(35,"mat-option",7),c.Cc(36,"Sin modo reunion"),c.Rb(),c.Bc(37,p,2,2,"mat-option",8),c.Rb(),c.Rb(),c.Rb(),c.Sb(38,"div",3),c.Sb(39,"mat-form-field"),c.Sb(40,"mat-label"),c.Cc(41,"Motivo Reuni\xf3n"),c.Rb(),c.Sb(42,"mat-select",15),c.Sb(43,"mat-option",7),c.Cc(44,"Sin motivo reunion"),c.Rb(),c.Bc(45,v,2,2,"mat-option",8),c.Rb(),c.Rb(),c.Rb(),c.Sb(46,"div",3),c.Sb(47,"mat-form-field"),c.Sb(48,"mat-label"),c.Cc(49,"Entidad Target"),c.Rb(),c.Sb(50,"mat-select",16),c.Sb(51,"mat-option",7),c.Cc(52,"Sin entidad target"),c.Rb(),c.Bc(53,S,2,2,"mat-option",8),c.Rb(),c.Rb(),c.Rb(),c.Sb(54,"div",3),c.Sb(55,"mat-form-field"),c.Sb(56,"mat-label"),c.Cc(57,"Zona"),c.Rb(),c.Sb(58,"mat-select",17),c.Sb(59,"mat-option",7),c.Cc(60,"Sin zona"),c.Rb(),c.Bc(61,R,2,2,"mat-option",8),c.Rb(),c.Rb(),c.Rb(),c.Sb(62,"div",3),c.Sb(63,"mat-form-field",4),c.Nb(64,"textarea",18),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&n&&(c.Bb(2),c.Ec("Editar ",o.ENTIDAD,""),c.Bb(1),c.jc("formGroup",o.datosBasicosForm),c.Bb(11),c.jc("ngForOf",o.contactos),c.Bb(23),c.jc("ngForOf",o.modos_reunion),c.Bb(8),c.jc("ngForOf",o.motivos_reunion),c.Bb(8),c.jc("ngForOf",o.entidades_target),c.Bb(8),c.jc("ngForOf",o.zonas))},directives:[b.g,a.w,a.p,a.i,u.c,s.b,a.c,a.o,a.g,a.k,a.u,u.f,l.a,f.n,e.k],styles:[".container[_ngcontent-%COMP%]{width:52em;text-align:center}.mat-dialog-content[_ngcontent-%COMP%]{margin-left:5%} .mat-dialog-actions{display:block;text-align:center}.importe[_ngcontent-%COMP%]{width:100%}mat-icon.incidencia[_ngcontent-%COMP%]{color:#f18f1f}mat-icon.predcio[_ngcontent-%COMP%]:hover{cursor:pointer}.ultimo[_ngcontent-%COMP%]{margin-bottom:4em!important}.musical[_ngcontent-%COMP%]{color:#f18f1f}.imagenPortada[_ngcontent-%COMP%]{width:20em}.alineado[_ngcontent-%COMP%]{text-align:left}button[_ngcontent-%COMP%]{margin-left:2em}"]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({factory:function(o){return new(o||n)},imports:[[t.f.forChild(_)],t.f]}),n})();var C=i("ah4G");let w=(()=>{class n{}return n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({factory:function(o){return new(o||n)},imports:[[e.c,g,C.a]]}),n})()}}]);