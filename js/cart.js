"use strict";

let lezh_type;
let lezh_size;

function Type(el){

  $(".lezh_types").removeClass("selected-cart-type");
  $(el).addClass("selected-cart-type");

  if($(el).hasClass("type_1")){
    lezh_type = 1;
  }
  else{ 
    lezh_type = 2;
  }

  ChangeLezh()

}

function Size(el){

  $(".lezh_sizes").removeClass("selected-cart-size");
  $(el).addClass("selected-cart-size");

  if($(el).hasClass("size_1")){   
    lezh_size = 1; 
  }
  else if($(el).hasClass("size_2")){
    lezh_size = 2;  
  }
  else if($(el).hasClass("size_3")){
    lezh_size = 3;
  }
  else{
    lezh_size = 4;
  }

  ChangeLezh()

  $(".size_svg").attr("src", "img/svg/green.svg");
  $(".blur_step3").removeClass("cart_blur");
  $(".color_svg").attr("src", "img/svg/icon_important.svg");
} 




function ChangeLezh(){
 
  if(!lezh_size){
    console.log(`Тип: ${lezh_type}`);
    $(".type_svg").attr("src", "img/svg/green.svg");
    $(".blur_step2").removeClass("cart_blur");
    $(".size_svg").attr("src", "img/svg/icon_important.svg");
    if(lezh_type==1){
      $(".cart-options__photo").attr("src", "img/zagl/type1/default/Standart/1.jpg");
      $(".cart-options__photo").attr("alt", `Тип: ${lezh_type}`);
      $(".cart-options__rose-type_active").text("Круглая");
    }
    else{
      $(".cart-options__photo").attr("src", "img/zagl/type1/default/Standart/1.jpg");
      $(".cart-options__photo").attr("alt", `Тип: ${lezh_type}`);
      $(".cart-options__rose-type_active").text("Прямоугольная");
    }
  }
  else{
    console.log(`Тип: ${lezh_type} | Размер: ${lezh_size}`);
    if(lezh_type==1){
      $(".cart-options__rose-type_active").text("Круглая");
      if(lezh_size==1){   
        $(".cart-options__photo").attr("src", "img/zagl/type1/size1/Standart/1.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
      else if(lezh_size==2){   
        $(".cart-options__photo").attr("src", "img/zagl/type1/size2/Standart/2.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
      else if(lezh_size==3){ 
        $(".cart-options__photo").attr("src", "img/zagl/type1/size3/Standart/3.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
      else{ 
        $(".cart-options__photo").attr("src", "img/zagl/type1/default/Standart/4.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
    }
    else{
      $(".cart-options__rose-type_active").text("Прямоугольная");
      if(lezh_size==1){   
        $(".cart-options__photo").attr("src", "img/zagl/type2/size1/Standart/1.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
      else if(lezh_size==2){     
        $(".cart-options__photo").attr("src", "img/zagl/type2/size2/Standart/2.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
      else if(lezh_size==3){
        $(".cart-options__photo").attr("src", "img/zagl/type2/size3/Standart/3.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
      else{   
        $(".cart-options__photo").attr("src", "img/zagl/type2/default/Standart/4.jpg");
        $(".cart-options__photo").attr("alt", `Тип: ${lezh_type} | Размер: ${lezh_size}`);
      }
    }    
  }
}
