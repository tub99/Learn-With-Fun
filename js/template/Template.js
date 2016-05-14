function Template(data){
	var sourceData=data,
		prevIndex=-1,
		score=0,
		updateIndex=function(ind){
			prevIndex=ind;
		},
		clearDom = function() {
			for(var i=0;i<arguments.length;i++){
				var id= arguments[i].toString();
				$(id).remove();
			}
		};
	this.generateTemplate= function(mainTemplate,imgId,qLabel,answerField,checkButton,index){
		
		var answer,
			but,
			qMarks,
			tempIndex=index;
		console.log("Index inside gTemplate() is"+tempIndex);
		
			clearDom("#theImg","#hintLabel","#hint",'#keyboard');
			//$(answerField.toString()).val("");
	
			//generate image
			$(imgId.toString()).prepend('<img id="theImg" src="'+sourceData[index].path+'"/>');
			// generating question
			$(qLabel.toString()).text(sourceData[index].question);
			//Creating the keyboard
			var keyboard='<div id="keyboard"></div>';
			$('#keypadHolder').append(keyboard);
			var keyPadHolder=document.getElementById("keyboard"),
					targetField=document.getElementById("answer"),
					kbObject=new MyKeyBoard(),
					keyType=new KeyType(),
					actionArr=[keyType.getAction().btSpace,keyType.getAction().btBackSpace],
					kTypeArr=[];
					if(sourceData[index].type === "numeric")
						kTypeArr=[[keyType.getNumerics()]];
					else if(sourceData[index].type === "float")
						kTypeArr=[[keyType.getNumerics()],[keyType.getSymbols()]];
					else if(sourceData[index].type === "alphabets")
						kTypeArr=[[keyType.getAlphabets().alp1],[keyType.getAlphabets().alp2],[keyType.getAlphabets().alp3]];
					else if(sourceData[index].type === "alphanumeric")
						kTypeArr=[[keyType.getAlphabets().alp1],[keyType.getAlphabets().alp2],[keyType.getAlphabets().alp3],[keyType.getNumerics()]];


			kbObject.addkeyPad(keyPadHolder,kTypeArr,actionArr,targetField,null,0,0);
			//generate hint if any
			if(sourceData[index].hint!=="" && sourceData[index].hint!==undefined){
				var r= $('<input type="button" value="hint" id="hint"/>').css({'font-size':'15px','border-radius': '5px'});
				$(mainTemplate.toString()).append(r);
				$("#hint").on('click',function(){
					var label='<label for="ans" id="hintLabel"></label>';
					$(mainTemplate.toString()).append(label);
					$("#hintLabel").text(sourceData[index].hint).css({
						'font-size':'15px'
					});
				
				});
			}
			//check the Answer
			// http://jsfiddle.net/W4Km8/9045/
			$(answerField.toString()).val("");
	};
	this.showData = function(){
		
	};

}