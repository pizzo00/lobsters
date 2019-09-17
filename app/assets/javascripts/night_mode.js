function set_night_mode(){
	Cookies.set("night_mode","true")
	document.documentElement.setAttribute('data-theme', 'dark')
}

function set_day_mode(){
	Cookies.set("night_mode","false")
	document.documentElement.setAttribute('data-theme', 'light')
}

$(document).ready(function() {
	var night_mode = Cookies.get("night_mode")
	if(night_mode == "true"){
		set_night_mode();
		}
	else{
		set_day_mode();
		}
});
