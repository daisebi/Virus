initTips = function(){
	
	$(".tip").remove();
	addTips();
	
};
addTips = function(){
	
	var tips1 = "减少公共场所聚会、活动";
	var tips2 = "外出戴口罩有用，可以阻挡飞沫传播";
	var tips3 = "多清洁,手、口、鼻、眼等卫生很重要";
	var tips4 = "不要吃野味,改变饮食习惯，拒绝野味";
	var tips5 = "谨慎出行,不要带病工作、带病旅游";
	var tips6 = "注意保暖、预防感冒，多休息、运动";
	var tips7 = "不要带纸口罩、活性炭口罩、棉布口罩、海绵口罩";
	var tips8 = "请使用外壳口罩或N95口罩";
	var tips9 = "要用流动的水洗手";
	var tips10 = "手心、手背、手腕、手指缝，指甲缝都要洗到";
	var tips11 = "洗手后要用干净的毛巾或者一次性纸巾擦干";
	var tips12 = "不建议放一盆水洗手，最好使用手龙头洗手";
	var tips13 = "错峰用餐,隔位而坐";
	var tips14 = "佩戴口罩,保持通风,酒精擦拭办公用品";
	var tips15 = "减少面对面讨论,多用线上视频";
	var tips16 = "咳嗽不用手掌捂,用手肘或纸巾遮挡";
	var tips17 = "见面不问好,保持一米距离";
	var tips18 = "乘电梯用面巾纸按电梯,或按后洗手";
	var tips19 = "用纸巾触碰水龙头,避免二次污染";
	var tips20 = "勤洗手,便后盖好马桶盖,再冲水";
	
	var arrTips = [tips1,tips2,tips3,tips4,tips5,tips6,tips7,tips8,tips9,tips10,
	tips11,tips12,tips13,tips14,tips15,tips16,tips17,tips18,tips19,tips20];
	
	for(var i = 1;i <= 6;i++){
		
		var num = parseInt(Math.random()*(21-i));
		
		var tip = arrTips[num];
		
		
		var addTip = "<div class='tip'>Tip"+i+":"+tip+"</div>";
		$(".label").append(addTip);
		
		arrTips.splice(num,1);
		
	}
	
};


