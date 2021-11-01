"use strict";

function oplCheck(){

	let oplName = $("#oplName").val();
	let oplSurName = $("#oplSurName").val();
	let oplPhone = $("#oplPhone").val();
	let oplEmail = $("#oplEmail").val();

	let oplCity = $('#oplCity').val();
	let oplStr = $('#oplStr').val();
	let oplHouse = $('#oplHouse').val();
	let oplAps = $('#oplAps').val();

	let oplDel = $('#oplDel').val();

	if(oplName && oplSurName && oplPhone && oplEmail){
		console.log("Шаг 1 пройден");
		$('.step1svg').attr("src", 'img/svg/green.svg');
		$('.step2svg').attr("src", 'img/svg/icon_important.svg');
		$(".step2blur").removeClass('opl_blur');

		if(oplCity && oplStr && oplHouse){

			console.log("Шаг 2 пройден");
			$('.step2svg').attr("src", 'img/svg/green.svg');
			$('.step3svg').attr("src", 'img/svg/icon_important.svg');
			$(".step3blur").removeClass('opl_blur');

			if(oplDel){
				console.log("Шаг 3 пройден");
				$('.step3svg').attr("src", 'img/svg/green.svg');
				$('.step4svg').attr("src", 'img/svg/icon_important.svg');
				$(".step4blur").removeClass('opl_blur');
			}

		} else{
			$('.step2svg').attr("src", 'img/svg/icon_important.svg');
		}


	} else{
		$('.step1svg').attr("src", 'img/svg/icon_important.svg');
	}

}