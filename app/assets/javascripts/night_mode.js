function set_mode(night_mode)
{
    mode = night_mode ? 'dark' :'light'
    Cookies.set("night_mode", night_mode, { expires: 365 })
    document.documentElement.setAttribute('data-theme', mode)
    $("#fs").prop("checked",night_mode)
}

$(document).ready(function() {
	var night_mode = Cookies.get("night_mode")

	set_mode(night_mode=="true")
	
	$("#fs").on("change",function() {
   		set_mode(this.checked)
	});

});
