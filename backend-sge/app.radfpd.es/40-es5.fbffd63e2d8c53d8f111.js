!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{dRTf:function(e,a,i){"use strict";i.r(a),i.d(a,"UnidadesDualModule",(function(){return T}));var r,o,u,d=i("ofXK"),c=i("tyNb"),s=i("mrSG"),l=i("M9IT"),f=i("+0xr"),b=i("Dh3D"),p=i("3Pt+"),m=i("fXoL"),h=((u=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||u)},u.\u0275cmp=m.Gb({type:u,selectors:[["app-add-unidad-dual"]],decls:2,vars:0,template:function(t,e){1&t&&(m.Sb(0,"p"),m.Cc(1,"add-unidad-dual works!"),m.Rb())},styles:[""]}),u),v=((o=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=m.Gb({type:o,selectors:[["app-edit-unidad-dual"]],decls:2,vars:0,template:function(t,e){1&t&&(m.Sb(0,"p"),m.Cc(1,"edit-unidad-dual works!"),m.Rb())},styles:[""]}),o),S=((r=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=m.Gb({type:r,selectors:[["app-delete-unidad-dual"]],decls:2,vars:0,template:function(t,e){1&t&&(m.Sb(0,"p"),m.Cc(1,"delete-unidad-dual works!"),m.Rb())},styles:[""]}),r),g=i("0IaG"),w=i("92VL"),y=i("rDax"),D=i("qFsG"),C=i("bTqV"),R=i("NFeN");function k(t,e){if(1&t&&(m.Sb(0,"th",12),m.Nb(1,"input",13),m.Nb(2,"span",14),m.Rb()),2&t){var n=m.dc();m.Bb(1),m.jc("formControl",n.idUnidadDualFilter)}}function _(t,e){if(1&t&&(m.Sb(0,"td",15),m.Cc(1),m.Rb()),2&t){var n=e.$implicit;m.Bb(1),m.Ec(" ",n.id_unidad_dual," ")}}function O(t,e){if(1&t&&(m.Sb(0,"th",12),m.Nb(1,"input",16),m.Nb(2,"span",14),m.Rb()),2&t){var n=m.dc();m.Bb(1),m.jc("formControl",n.unidadDualFilter)}}function x(t,e){if(1&t&&(m.Sb(0,"td",15),m.Cc(1),m.Rb()),2&t){var n=e.$implicit;m.Bb(1),m.Ec(" ",n.unidad_dual," ")}}function B(t,e){if(1&t){var n=m.Tb();m.Sb(0,"th",12),m.Sb(1,"button",17),m.Zb("click",(function(){return m.tc(n),m.dc().addUnidadDual()})),m.Sb(2,"mat-icon"),m.Cc(3," add_circle "),m.Rb(),m.Rb(),m.Rb()}}function j(t,e){if(1&t){var n=m.Tb();m.Sb(0,"td",15),m.Sb(1,"button",17),m.Zb("click",(function(){m.tc(n);var t=e.$implicit;return m.dc().editUnidadDual(t)})),m.Sb(2,"mat-icon"),m.Cc(3," mode_edit "),m.Rb(),m.Rb(),m.Sb(4,"button",17),m.Zb("click",(function(){m.tc(n);var t=e.$implicit;return m.dc().deleteUnidadDual(t)})),m.Sb(5,"mat-icon"),m.Cc(6," delete "),m.Rb(),m.Rb(),m.Rb()}}function U(t,e){1&t&&m.Nb(0,"tr",18)}function N(t,e){1&t&&m.Nb(0,"tr",19)}var I,F,P,G=function(){return[5,10,25]},J=[{path:"",component:(I=function(){function e(n,a,i){t(this,e),this.dialog=n,this.unidadesDualService=a,this.overlay=i,this.dataSource=new f.k,this.idUnidadDualFilter=new p.e,this.unidadDualFilter=new p.e,this.filterValues={id_unidad_dual:"",unidad_dual:""}}return n(e,[{key:"ngOnInit",value:function(){this.getUnidadesDual()}},{key:"getUnidadesDual",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.unidadesDualService.getAllUnidadesDual().toPromise();case 2:e=t.sent,this.permises=e.permises,e.ok&&(this.unidadesDualService.unidadDual=e.data,this.displayedColumns=["id_unidad_dual","unidad_dual","actions"],this.dataSource.data=this.unidadesDualService.unidadDual,this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.dataSource.filterPredicate=this.createFilter(),this.onChanges());case 4:case"end":return t.stop()}}),t,this)})))}},{key:"addUnidadDual",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.dialog.open(h,{scrollStrategy:this.overlay.scrollStrategies.noop()}),t.next=3,e.afterClosed().toPromise();case 3:(n=t.sent)&&n.ok&&this.ngOnInit();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"editUnidadDual",value:function(t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.dialog.open(v,{data:t,scrollStrategy:this.overlay.scrollStrategies.noop()}),e.next=3,n.afterClosed().toPromise();case 3:(a=e.sent)&&a.ok&&this.ngOnInit();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"deleteUnidadDual",value:function(t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.dialog.open(S,{data:t,scrollStrategy:this.overlay.scrollStrategies.noop()}),e.next=3,n.afterClosed().toPromise();case 3:(a=e.sent)&&a.ok&&this.ngOnInit();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"createFilter",value:function(){return function(t,e){var n=JSON.parse(e);return-1!==t.id_unidad_dual.toString().indexOf(n.id_unidad_dual)&&-1!==t.unidad_dual.toLowerCase().indexOf(n.unidad_dual.toLowerCase())}}},{key:"onChanges",value:function(){var t=this;this.idUnidadDualFilter.valueChanges.subscribe((function(e){t.filterValues.id_unidad_dual=e,t.dataSource.filter=JSON.stringify(t.filterValues)})),this.unidadDualFilter.valueChanges.subscribe((function(e){t.filterValues.unidad_dual=e,t.dataSource.filter=JSON.stringify(t.filterValues)}))}}]),e}(),I.\u0275fac=function(t){return new(t||I)(m.Mb(g.b),m.Mb(w.a),m.Mb(y.c))},I.\u0275cmp=m.Gb({type:I,selectors:[["app-unidades-dual"]],viewQuery:function(t,e){var n;1&t&&(m.xc(l.a,!0),m.xc(b.a,!0)),2&t&&(m.pc(n=m.ac())&&(e.paginator=n.first),m.pc(n=m.ac())&&(e.sort=n.first))},decls:16,vars:6,consts:[[1,"example-container","mat-elevation-z8"],[1,"example-table-container"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id_unidad_dual"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","unidad_dual"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["paginator",""],["mat-header-cell",""],["matInput","","placeholder","Id",3,"formControl"],["mat-sort-header",""],["mat-cell",""],["matInput","","placeholder","Unidad Dual",3,"formControl"],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(m.Sb(0,"div",0),m.Sb(1,"div",1),m.Sb(2,"table",2),m.Qb(3,3),m.Bc(4,k,3,1,"th",4),m.Bc(5,_,2,1,"td",5),m.Pb(),m.Qb(6,6),m.Bc(7,O,3,1,"th",4),m.Bc(8,x,2,1,"td",5),m.Pb(),m.Qb(9,7),m.Bc(10,B,4,0,"th",4),m.Bc(11,j,7,0,"td",5),m.Pb(),m.Bc(12,U,1,0,"tr",8),m.Bc(13,N,1,0,"tr",9),m.Rb(),m.Rb(),m.Nb(14,"mat-paginator",10,11),m.Rb()),2&t&&(m.Bb(2),m.jc("dataSource",e.dataSource),m.Bb(10),m.jc("matHeaderRowDef",e.displayedColumns),m.Bb(1),m.jc("matRowDefColumns",e.displayedColumns),m.Bb(1),m.jc("pageSize",10)("pageSizeOptions",m.mc(5,G)))},directives:[f.j,b.a,f.c,f.e,f.b,f.g,f.i,l.a,f.d,D.b,p.c,p.o,p.f,b.b,f.a,C.a,R.a,f.f,f.h],styles:[""]}),I)}],V=((F=function e(){t(this,e)}).\u0275mod=m.Kb({type:F}),F.\u0275inj=m.Jb({factory:function(t){return new(t||F)},imports:[[c.f.forChild(J)],c.f]}),F),z=i("ah4G"),T=((P=function e(){t(this,e)}).\u0275mod=m.Kb({type:P}),P.\u0275inj=m.Jb({factory:function(t){return new(t||P)},imports:[[d.c,V,z.a]]}),P)}}])}();