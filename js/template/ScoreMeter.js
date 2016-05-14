function ScoreMeter(width,height,scoreTemplate,questionFlag,timeFlag,smartScoreFlag){
	var wd=width,
		ht=height,
		qFlag=questionFlag,
		tFlag=timeFlag,
		smartFlag=smartScoreFlag,
		scoreTemp=scoreTemplate,
		intervalChecker,
		timer,
		stopWatchDisplay= function(){
			var mins=0,
				secs=0;
			if(secs>60){
				mins=secs/60;
				secs=timer%60;
			}

			return mins+" : "+secs;
		};

	this.startTimer = function(){
		timer=0;
		clearInterval(intervalChecker);
		intervalChecker=setInterval( function(){ 
			var disp=stopWatchDisplay();
			$('#clock').text(parseInt(timer/60)+" m:"+timer%60+" s");
			timer++;
			}  , 1000 );
	};
	this.updateScoreMeter = function(questionAnsered,score){
		console.log('updating score');
		$('#scoreId').text(score);
		$('#noQAns').text(questionAnsered);
		clearInterval(intervalChecker);

	};
	this.getTimeToAnswer = function(){
		return (timer-1);
	};


	this.createScoreMeter = function (){
		var scoreTemp=$(scoreTemplate);

		scoreTemp.append(
			'<table id="scoreTable" border="3" ></table>'
		);
		var scoretable=$('#scoreTable');
		scoretable.append('<tr><td id="row1"></td></tr> <tr><td id="row2"></td></tr> <tr><td id="row3"></td></tr> <tr><td id="row4"></td></tr> <tr><td></td></tr> <tr><td id="row5"></td></tr> <tr><td id="row6"></td></tr>');
		var qAnswered='<div id="qAns">Correctly Answered</div>';
		$('#row1').append(qAnswered).css(
			{
				'font-size':'20px',
				 'color':'white',
				'border' : '1px solid black',
				'background-color':'#8CC713',
				'font-family' : 'cursive'

			});
		$('#row2').append('<div>0</div>').css({
			'font-size':'40px',
			'font-family' : 'cursive',
				'border' : '1px solid black',
				'background-color':'#F5F5F5',
				'height' : '100px'

			}).attr('id','noQAns');
		$('#row3').
			append("<div id='timeElapsed'>Time Elapsed</div>").css(
			{
				'font-size':'20px',
				'font-family' : 'cursive',
				'color' : 'white',
				'border' : '1px solid black',
				'background-color':'#1FB2E4'
			});
			$('#row4').append('<div ></div>').css({
				'font-size':'30px',
				'font-family' : 'cursive',
				'border' : '1px solid black',
				'background-color':'#F5F5F5',
				'height' : '100px','width':'100px'

			}).attr('id','clock');
			$('#row5').
			append("<div id='score'>SCORE</div>").css(
			{
				'font-size':'20px',
				'font-family' : 'cursive',
				'color' : 'white',
				'border' : '1px solid black',
				'background-color':'red'
			});
			$('#row6').append('<div>'+0+'</div>').css({
				'font-size':'40px',
				'font-family' : 'cursive',
				'border' : '1px solid black',
				'background-color':'#F5F5F5',
				'height' : '100px'

			}).attr('id','scoreId');


	};

	
}