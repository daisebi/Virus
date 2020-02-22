initGame = function(thisDifficulty){
	
	$(".ui").empty();
	
	var dTime = 10;
	
	
	if(thisDifficulty == "Difficult"){
		dTime = 10;
	}else if(thisDifficulty == "Normal"){
		dTime = 10;
	}else if(thisDifficulty == "Eazy"){
		dTime = 12;
	}
	
	var uiD = "<div class='font difficulty'>"+thisDifficulty+"</div>";
	var uiL = "<div class='font nowLevel'>Level:1</div>";
	var uiRT = "<div class='font restTime'>RestTime:<div>"+dTime+"s</div></div>";
	var uiCB = "<div class='font comeBack'>返回主菜单</div>";
	
	$(".ui").append(uiD);
	$(".ui").append(uiL);
	$(".ui").append(uiRT);
	$(".ui").append(uiCB);
	
	var timeInterval = null;
	
	initOption();
	comeBackClick();
	
};

gameRule = function(level,thisMedicine){
	
	var cName = thisMedicine.attr("class");
	var RNA = cName.substring(cName.length-1);
	var clear = ".viruss .virus"+RNA;
	var vLength = $(clear).length;
	var gameOver = Number(level) * 5 ;
	
	if(vLength > 0){
		$(clear).css("animation","200 dim forwards");
		
		var cureAnimation = setInterval(function(){
			
			load_sound("bgm/clearVB.mp3");
			
			var nowFilter = $(clear).css("filter");
			if(nowFilter == "blur(8px)"){
				
				$(clear).css("animation","200 clearDim forwards");
				$(clear).attr("class","virus cure");
				$(".cure").unbind('click');
				thisMedicine.attr("class","");
				
				var RNALength = $(".medicine").length;
				var cLength = $(".cure").length;
				var difficulty = $(".difficulty").text();
				
				if(cLength == gameOver){
					
					var restTime = $(".restTime div").text();
					restTime = restTime.substring(0,restTime.length-1);
					var restMedicine = $(".medicine").length;
				
					nextLevel(difficulty,level,restTime,restMedicine);
					
				}else{
					
					if(RNALength == 0){
						
						downWindows("defeat");
						
					}
				
				}
				
				window.clearInterval(cureAnimation);
			}
		},200);
		
		
		
		
	}
};
nextLevel = function(difficulty,level,restTime,restMedicine){
	
	initUi(difficulty,level,restTime,restMedicine);
	initOption();
	
};
restartGame = function(difficulty){
	
	$(".ui").empty();
	initGame(difficulty);
	initOption();
	initTips();
	
};
initOption = function(){
	
	var levelContent = $(".nowLevel").text();
	levelContent = levelContent.substring(levelContent.length-1);
	var level = Number(levelContent);
	
	initVirus(level);
	initMedicine(level);
	
};
timeStart = function(){
	
	timeInterval = setInterval(function(){
		
		var restTime = $(".restTime div").text();
		restTime = restTime.substring(0,restTime.length-1);
		var time = Number(restTime) - 1;
		
		var windowsTop = $(".alterWindows").css("top");
		
		
		if(windowsTop == "200px"){
			
		}else{
			if( time > 0){
				
				$(".restTime div").text(time+"s");
				
			}else if(time == 0){
				
				$(".restTime div").text(time+"s");
				downWindows("defeat");
				
			}
		}
		
	},1000);
	
	
};
comeBackClick = function(){
	
	$(".comeBack").click(function(){
		
		clearInterval(timeInterval);
		
		$(".baffle").css("display","block");
		$(".mainMenu").css("display","block");
		$(".frame").css("animation","0.5s dim forwards");
		$(".menu").css("animation","0.5s createFont forwards");
		$(".mainMenu").css("animation","0.5s createBoder forwards");
		
		
	});
	
};



load_sound = function (url_data) {
	
	var AudioContext = window.AudioContext || window.webkitAudioContext;
	var con = AudioContext ? new AudioContext() : '';
	
	var req = new XMLHttpRequest();
	req.open('GET', url_data, true);
	req.responseType = 'arraybuffer';
	
	req.onload = function() {
		con.decodeAudioData(req.response, function(buffer) {
			var source = con.createBufferSource();
			source.buffer = buffer;
			source.connect(con.destination);
			source.start(0);
		}, function(e) {
			console.info('错误');
		});
	}
	req.send();
};
