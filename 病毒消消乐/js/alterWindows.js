initAWindows = function(){
	
	
	var alterWindows = "<div class='alterWindows'></div>";
	var windowsTitle ="<div class='windowsTitle'>消灭病毒，抗疫到底！</div>";
	var windowsContent = "<div class='windowsContent'></div>";
	var score = "<div class='score'></div>";
	var windowsDifficulty = "<div class='windowsDifficulty'></div>";
	var windowsTip = "<div class='windowsTip'></div>";
	var windowsBody = "<div class='windowsBody'></div>";
	var bInitGame = "<div class='box initGame'>重新开始</div>";
	var bComeBackMenu = "<div class='box comeBackMenu'>返回主菜单</div>";
	
	$("body").append(alterWindows);
	$(".alterWindows").append(windowsTitle);
	$(".alterWindows").append(windowsContent);
	$(".alterWindows").append(score);
	$(".alterWindows").append(windowsDifficulty);
	$(".alterWindows").append(windowsTip);
	$(".alterWindows").append(windowsBody);
	$(".windowsBody").append(bInitGame);
	$(".windowsBody").append(bComeBackMenu);
	
	windowRestart();
	windowComeback();
	
};

downWindows = function(condition){
	
	windowsAddTip();
	
	$(".baffle").css("display","block");
	$(".alterWindows").css("animation","0.2s downWindows forwards");
	$(".frame").css("animation","0.2s dim forwards");
	appendWindows(condition);
	
};

windowRestart = function(){
	
	$(".initGame").click(function(){
		
		$(".alterWindows").css("animation","0.2s upWindows forwards");
		$(".baffle").css("display","none");
		$(".frame").css("animation","0.2s clearDim forwards");
		var difficulty = $(".difficulty").text();
		restartGame(difficulty);
	});
	
};

windowComeback = function(){
	
	$(".comeBackMenu").click(function(){
			
		
		$(".alterWindows").css("animation","0.2s upWindows forwards");
		
		$(".baffle").css("display","block");
		$(".mainMenu").css("display","block");
		$(".frame").css("animation","0.5s dim forwards");
		$(".menu").css("animation","0.5s createFont forwards");
		$(".mainMenu").css("animation","0.5s createBoder forwards");
		
	});
	
};

appendWindows = function(condition){
	
	var restTime = $(".restTime div").text();
	var time = Number(restTime.substring(0,restTime.length-1));
	
	var difficulty = $(".difficulty").text();
	$(".windowsDifficulty").text("难度："+difficulty);
	
	
	if(condition == "success"){
		
		$(".windowsContent").text("恭喜成功消灭病毒");
		
		
		
		load_sound('bgm/successBGM.mp3');
		
		if(difficulty == "Eazy"){
			var bestTime = $(".bestEazy").text();
			if(time >= bestTime){
				$(".score").text("本次剩余时间："+restTime+",最佳成绩："+time+"s");
				$(".bestEazy").text(time);
			}else {
				$(".score").text("本次剩余时间："+restTime+",最佳成绩："+bestTime+"s");
			}
		}else if(difficulty == "Normal"){
			var bestTime = $(".bestNormal").text();
			if(time >= bestTime){
				$(".score").text("本次剩余时间："+restTime+",最佳成绩："+time+"s");
				$(".bestNormal").text(time);
			}else {
				$(".score").text("本次剩余时间："+restTime+",最佳成绩："+bestTime+"s");
			}
		}else if(difficulty == "Difficult"){
			var bestTime = $(".bestDifficult").text();
			if(time >= bestTime){
				$(".score").text("本次剩余时间："+restTime+",最佳成绩："+time+"s");
				$(".bestDifficult").text(time);
			}else {
				$(".score").text("本次剩余时间："+restTime+",最佳成绩："+bestTime+"s");
			}
		};
		
		
	}else if(condition == "defeat"){
		
		$(".windowsContent").text("未能及时消灭病毒");
		
		load_sound('bgm/defeatBGM.mp3');
		
		if(difficulty == "Eazy"){
			
			var bestTime = $(".bestEazy").text();
			$(".score").text("本次剩余时间："+restTime+",最佳成绩："+bestTime+"s");
			
		}else if(difficulty == "Normal"){
			
			var bestTime = $(".bestNormal").text();
			$(".score").text("本次剩余时间："+restTime+",最佳成绩："+bestTime+"s");
			
		}else if(difficulty == "Difficult"){
			
			var bestTime = $(".bestDifficult").text();
			$(".score").text("本次剩余时间："+restTime+",最佳成绩："+bestTime+"s");
			
		};
		
	};
		
};
windowsAddTip = function(){
	
	var tip = $(".tip:eq(3)").text();
	tip = tip.substring(5);
	$(".windowsTip").text(tip);
	
}