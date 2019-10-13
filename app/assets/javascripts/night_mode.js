function set_night_mode(){
	Cookies.set("night_mode",true)
	document.documentElement.setAttribute('data-theme', 'dark')
	$("#fs").prop("checked",true)


}

function set_day_mode(){
	Cookies.set("night_mode",false)
	document.documentElement.setAttribute('data-theme', 'light')
	$("#fs").prop("checked",false)
}

function set_mode(night_mode){
	if(night_mode){
		console.log("goodnight")
		set_night_mode();
				}
	else{
		console.log("good morning")
		set_day_mode();
		}


}

$(document).ready(function() {
	var night_mode = Cookies.get("night_mode")

	set_mode(night_mode=="true")
	
	$("#fs").on("change",function() {
   		set_mode(this.checked)
	});

});
