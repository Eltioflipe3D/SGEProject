!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"QO/t":function(e,o,i){"use strict";i.r(o),i.d(o,"ResultadoModule",(function(){return y}));var r,a,c,u=i("ofXK"),s=i("tyNb"),f=i("3Pt+"),l=i("Xksa"),d=i("6rgx"),m=i("fXoL"),g=i("2/A8"),b=i("5hAj"),p=i("0IaG"),h=i("Q6Ar"),v=[{path:"",component:(r=function(){function e(t,o){n(this,e),this.datosReunion=t,this.reunionService=o,this.editorConfig=d.a}var o,i,r;return o=e,(i=[{key:"ngOnInit",value:function(){var n=this;this.ENTIDAD=l.i,this.setForm(),this.resultadoForm.valueChanges.subscribe((function(t){n.reunionService.setResultadoReunion(t)}))}},{key:"setForm",value:function(){this.resultadoForm=new f.h({id_reunion:new f.e(this.reunionService.reunion.id_reunion,f.v.required),resultado:new f.e(this.reunionService.reunion.resultado,f.v.required)})}},{key:"ngOnDestroy",value:function(){}}])&&t(o.prototype,i),r&&t(o,r),e}(),r.\u0275fac=function(n){return new(n||r)(m.Mb(g.a),m.Mb(b.a))},r.\u0275cmp=m.Gb({type:r,selectors:[["app-resultado"]],decls:6,vars:3,consts:[[1,"container"],["mat-dialog-title",""],[1,"mat-dialog-content",3,"formGroup"],[1,"form"],["formControlName","resultado","required","",3,"config"]],template:function(n,t){1&n&&(m.Sb(0,"div",0),m.Sb(1,"h3",1),m.Cc(2),m.Rb(),m.Sb(3,"form",2),m.Sb(4,"div",3),m.Nb(5,"angular-editor",4),m.Rb(),m.Rb(),m.Rb()),2&n&&(m.Bb(2),m.Ec("Resultados: ",t.ENTIDAD,""),m.Bb(1),m.jc("formGroup",t.resultadoForm),m.Bb(2),m.jc("config",t.editorConfig))},directives:[p.g,f.w,f.p,f.i,h.a,f.o,f.g,f.u],styles:[".container[_ngcontent-%COMP%]{text-align:center;padding-bottom:10em}.mat-dialog-content[_ngcontent-%COMP%]{margin-left:.75em} .mat-dialog-actions{display:block;text-align:center}.importe[_ngcontent-%COMP%]{width:100%}mat-icon.incidencia[_ngcontent-%COMP%]{color:#f18f1f}mat-icon.predcio[_ngcontent-%COMP%]:hover{cursor:pointer}.ultimo[_ngcontent-%COMP%]{margin-bottom:4em!important}.musical[_ngcontent-%COMP%]{color:#f18f1f}.imagenPortada[_ngcontent-%COMP%]{width:20em}.alineado[_ngcontent-%COMP%]{text-align:left}button[_ngcontent-%COMP%]{margin-left:2em}"]}),r)}],w=((a=function t(){n(this,t)}).\u0275mod=m.Kb({type:a}),a.\u0275inj=m.Jb({factory:function(n){return new(n||a)},imports:[[s.f.forChild(v)],s.f]}),a),C=i("ah4G"),y=((c=function t(){n(this,t)}).\u0275mod=m.Kb({type:c}),c.\u0275inj=m.Jb({factory:function(n){return new(n||c)},imports:[[u.c,w,C.a,h.b]]}),c)}}])}();