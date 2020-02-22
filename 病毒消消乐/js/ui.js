initUi = function(difficulty,level,restTime,restMedicine){
	
	level = level + 1;
	$(".nowLevel").text("Level:"+level);
	
	if(level>5){
		
		downWindows("success");
		
	}else if(level<=5&&level>0){
		
		
		if(difficulty == "Difficult"){
			var time = Number(restTime) + restMedicine * 6 + 10 ;
		}else if(difficulty == "Normal"){
			var time = Number(restTime) + restMedicine * 5 + 10 ;
		}else if(difficulty == "Eazy"){
			var time = Number(restTime) + restMedicine * 4 + 12 ;
		}
		
		$(".restTime div").text(time+"s");
	}

};

