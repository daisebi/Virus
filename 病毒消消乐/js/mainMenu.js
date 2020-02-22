initMenu = function(){
		
	
	var mainMenu = "<div class='mainMenu'></div>";
	var mHeader = "<div class='menu header'>病毒消消乐</div>";
	var mEazy = "<div class='menu gameStart Eazy'>简单模式</div>";
	var mNormal = "<div class='menu gameStart Normal'>普通模式</div>"
	var mDifficult = "<div class='menu gameStart Difficult'>困难模式</div>";
	var mExplain = "<div class='menu explain'>游戏说明</div>";
	
	$("body").append(mainMenu);
	$(".mainMenu").append(mHeader);
	$(".mainMenu").append(mEazy);
	$(".mainMenu").append(mNormal);
	$(".mainMenu").append(mDifficult);
	$(".mainMenu").append(mExplain);
	
	menuClick();
	
	
};
menuClick = function(){
	
	$(".gameStart").click(function(){
		
		var thisDifficulty = $(this).attr("class");
		thisDifficulty = thisDifficulty.substring(15);
		
		initGame(thisDifficulty);
		timeStart();
		
		$(".frame").css("animation","0.5s clearDim forwards");
		$(".menu").css("animation","0.5s clearFont forwards");
		$(".mainMenu").css("animation","0.5s clearBoder forwards");
		
		var timeAnimation = setInterval(function(){
			var nowColor = $(".menu").css("opacity");
			if(nowColor == "0"){
				$(".mainMenu").css("display","none");
				$(".baffle").css("display","none");
				window.clearInterval(timeAnimation);
			}
		},1);
		
		initTips();
		
	});
	
};