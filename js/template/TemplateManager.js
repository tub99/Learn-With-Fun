function TemplateManager(){

	this.initTemplate=function(){
		var questionAnswered=0,
			item,template,index=0,rnd,score=0,
			parsedData,
			dataHandler = new DataHandler();
					

		$.getJSON('data/source.json', function(data) {
		var	scoreMeter = new ScoreMeter(100,300,'#scoremeter');
		scoreMeter.startTimer();
			scoreMeter.createScoreMeter(0);

			
		parsedData=dataHandler.parseData(data);
		item = dataHandler.shuffle(parsedData);
		console.log(item);
		// console.log(item);
		 template= new Template(item);
		 console.log("Length"+item.length);
		 



		 template.generateTemplate("#template","#imgDiv","#question","#answer","#check",index);

		$('#prev').hide();

		$('#next').on('click',function(){
			if(index>=0 && index<item.length-1){
				index++;
				if(index=== item.length-1)
					$('#next').hide();
				$('#prev').show();
				console.log("Next"+index);
				template.generateTemplate("#template","#imgDiv","#question","#answer","#check",index);
				scoreMeter.startTimer();
			}
		});

		 
		$('#prev').on('click',function(){
			if(index>0){
				index--;
				$('#next').show();
				if(index===0)
					$('#prev').hide();
				console.log("Prev"+index);
				template.generateTemplate("#template","#imgDiv","#question","#answer","#check",index);
				scoreMeter.startTimer();
			 }
			});

		 $('#check').on('click',function(){
			answer=$("#answer").val().trim().toLowerCase();
			if(answer == item[index].answer.toString().toLowerCase()){
				if(item[index].ansFlag===false) {
					qMarks = item[index].marks || 10;
					score+=qMarks;
					item[index].ansFlag=true;
					questionAnswered++;
					swal("Awesome Job", "You are absolutely correct!", "success");
					//var	score = new ScoreMeter(100,300,'#scoremeter');
						scoreMeter.updateScoreMeter(questionAnswered,score,0);
						var timeTaken= scoreMeter.getTimeToAnswer();
						item[index].timeTakenToAnswer=timeTaken;
						
				}
				else
					swal("Good Job", "You have already answered this!", "success");
			}
			else
				swal("Oops!", "You are wrong!", "error");
				template.generateTemplate("#template","#imgDiv","#question","#answer","#check",index);
			
			//$('#answer').val("");

		});



		});

	};
}