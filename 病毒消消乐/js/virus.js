initVirus = function(level){
	
	var difficulty = $(".difficulty").text();
	
	if(level == 6){
		
	}else{
		$(".viruss").empty();
		for(var l=0;l<level;l++){
			var rank ="<div id='L"+l+"' class=level></div>";
			$(".viruss").append(rank);
			
			for(var i=1;i<6;i++){
				var num = 1;
				if(difficulty == 'Eazy'){
					num = parseInt(Math.random()*3)+1;
				}else if(difficulty == 'Normal'){
					num = parseInt(Math.random()*4)+1;
				}else if(difficulty == 'Difficult'){
					num = parseInt(Math.random()*5)+1;
				}
				
				var child = "<div id="+l+"-"+i+" class='virus virus"+num+"'></div>";
				var LevelId = "#L"+l;
				$(LevelId).append(child);
			}
			rank = "#L"+l;
			var clear = "<div class='clear'></div>";
			$(rank).append(clear);
			
		}
	}
	
	nextVirus(difficulty);
};

nextVirus = function(difficulty){
	$(".virus").click(function(){
		
		load_sound("bgm/nextVirusBGM.mp3");
		
		var virusStyle = $(this).attr("class");
		
		var virusColor = virusStyle.substring(virusStyle.length-1);
		
		var number = Number(virusColor);
		
		
		if(difficulty == 'Eazy'){
			if(number == 3){
				number = 1;
			}else{
				number = number+1;
			}
		}else if(difficulty == 'Normal'){
			if(number == 4){
				number = 1;
			}else{
				number = number+1;
			}
		}else if(difficulty == 'Difficult'){
			if(number == 5){
				number = 1;
			}else{
				number = number+1;
			}
		}
		
		
		virusStyle = "virus virus"+number;
		$(this).attr("class",virusStyle);	
	});
};