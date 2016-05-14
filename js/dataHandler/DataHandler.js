function DataHandler(){
	var valueParser = function(value){

			if(isFloat(value))
				return {val:value,flag:'float'};
			else if(isInt(value))
				return {val:value,flag:'numeric'};
			else if(isAlphaNumeric(value))
				return {val :value,flag:'alphanumeric'};
			else
				return {val:value,flag:'alphabets'};
		},
		getValidValue= function(){
			for(var i=0;i<arguments.length;i++){
				var val=arguments[i];
				if(val !=="" && val!== undefined){
					//This function will parse each val and return its proper value with type
					return val;
				}
			}
			return undefined;
		},
		isAlphaNumeric = function(value){
			var parsedValue=parseInt(value,10);
			if(!isNaN(parsedValue)){
				if(parsedValue.toString().length !== value.toString.length)
					return true;
			}

		},
		isAlphaFloat = function(){

		},
		isInt = function(n){
			return Number(n) == n && Number(n) % 1 === 0;
		},
		isFloat = function(n){
			return Number(n) == n && Number(n) % 1 !== 0;
		};
	this.parseData = function(data){

		var i=0,
			dataObjectArray=[],
			defaultPath="path",
			defaultQuestion="Enter your answer here",
			defaultAnswer="ans",
			defaultHint="",
			defaultSize="300*400",
			path,
			size,
			question,
			ansObj,
			ans,
			answer,
			hint;

		while(i<data.length){
			path=getValidValue(data[i].path,defaultPath);
			size=getValidValue(data[i].size,defaultSize);
			question=getValidValue(data[i].question,defaultQuestion);
			ans=getValidValue(data[i].answer,defaultAnswer);
			if(ans !== undefined){
				ansObj=valueParser(ans);
				answer=ansObj.val;
				answerFlag=ansObj.flag;
			}
			hint=getValidValue(data[i].hint,defaultHint);
			var dataObject={
				path : path,
				size : size,
				question : question,
				answer : answer,
				ansFlag: false,
				timeTakenToAnswer : 0,
				type : answerFlag,
				hint : hint
			};
			dataObjectArray.push(dataObject);



			i++;

		}
		return dataObjectArray;

	};
	this.shuffle=function(array){
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}

		return array;

	};
}