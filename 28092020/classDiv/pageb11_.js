
class Div{
     constructor(mleft,mtop){
         // var   thenode = document.write('<div></div>');
     var  thenode = document.createElement("div");

//    addproperties(this,mleft,mtop){
          thenode.style.marginLeft = mleft ;
          thenode.style.marginTop = mtop ;
          thenode.style.backgroundColor = "yellow"
          thenode.style.width = "50px" ;
          thenode.style.height = "50px" ;
          }
/*     makeit(){
         document.body.appendChild(this);
     }*/


}
 const lediv = new  Div("100px","100px");
/*
 var thenode = function addnode(){
       document.write('<div></div>');
 }
 */
/*
 function makeit(){
    document.body.appendChild(lediv);
}
 function init(){
  //  lediv.addproperties("100px","100px");
    makeit() ;

 }
 init() ;
 
*/