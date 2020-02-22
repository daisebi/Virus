initMedicine=function(level){
	$(".medicines").empty();
	
	$(".medicines").append("<div class='medicinesTitle'>药物栏</div>");
	var difficulty = $(".difficulty").text();
	
	for(var i=0;i<level;i++){
		if(difficulty == "Difficult" && i < 2){
			
			var num = parseInt(Math.random()*5)+1;
			var medicine = "<div class='medicine medicine"+num+"'></div>";
			$(".medicines").append(medicine);
			
		}else if(difficulty == "Normal" && i < 3){
			
			var num = parseInt(Math.random()*4)+1;
			var medicine = "<div class='medicine medicine"+num+"'></div>";
			$(".medicines").append(medicine);
			
		}else if(difficulty == "Eazy" && i < 2){
			
			var num = parseInt(Math.random()*3)+1;
			var medicine = "<div class='medicine medicine"+num+"'></div>";
			$(".medicines").append(medicine);
			
		}
		
	}
	checkMedicine(level);
};

checkMedicine=function(level){
	
	$(".medicine").click(function(){
		
		var thisMedicine = $(this);
			
		gameRule(level,thisMedicine);
		
	});
};