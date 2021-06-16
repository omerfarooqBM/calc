	function calcNumbers(result){
		console.log(result)
		// form.displayResult.value +=result;
		var lastVal=form.displayResult.value.slice(form.displayResult.value.length -1);
		var opt = ['+','-','*','/'];
		if(opt.indexOf(lastVal) !== -1 && opt.indexOf(result) !== -1){
			form.displayResult.value=form.displayResult.value.slice(0,-1)+result

		}else{
			form.displayResult.value +=result
		}

		
	}

	function del(result){
		form.displayResult.value=result;
		
	}

	function cl(){
		form.displayResult.value =form.displayResult.value.slice(0, - 1);
	}

