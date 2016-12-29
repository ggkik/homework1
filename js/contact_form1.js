(function($){
	var el = {
		$name:   $('#name'),
		$email:  $('#exampleInputEmail1'),
		$message:$('#textarea'),
		$submit:$('#submit')
	}, initStatus = false
	
	function setSuccess(element) {
		element.addClass("form-success").removeClass("form-error");
		element.parent().find(".errorTextDiv").remove();
	}
	
	function setError(element, errorText) {
		element.removeClass("form-success").addClass("form-error");
		element.parent().find(".errorTextDiv").remove();
		var errorTextDiv = "<div class='errorTextDiv'>" + errorText + "</div>";
		element.after(errorTextDiv);
		
	}
	
	var validation = function() {
		var errorText = "";
		if(initStatus) {
			var name = $.trim(el.$name.val()),
				email= $.trim(el.$email.val()),
				message= $.trim(el.$message.val()),
				success = true;
				
			if(name.length < 2) {
				errorText = "Name must be at least 2 symbols";
				setError(el.$name, errorText);
				success = false;
			} else {
				setSuccess(el.$name);
			}
			
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test(email)) {
				setSuccess(el.$email)
			} else {
				errorText = "Incorrect email address";
				setError(el.$email, errorText);
				success = false;
			}
			
			if(message.length < 4) {
				errorText = "Message must be at least 4 symbols";
				setError(el.$message, errorText);
				success = false;
			} else {
				setSuccess(el.$message);
			}
			
			return success;
		}
		return null;
	}
	
	
	el.$submit.on('click', function(){
		initStatus = true;
		if(validation()){
			alert("Валидация прошла успешно");
		}
		return false;
	})
	
	el.$name.keyup(validation);
	el.$email.keyup(validation);
	el.$message.keyup(validation);
	
})(jQuery)