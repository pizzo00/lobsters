function set_mode(night_mode)
{
    mode = night_mode ? 'dark' :'light'
    window.localStorage.setItem("night_mode", night_mode)
    document.documentElement.setAttribute('data-theme', mode)
    $("#fs").prop("checked",night_mode)
}

$(document).ready(function() {
	var night_mode = window.localStorage.getItem("night_mode")

	set_mode(night_mode=="true")
	
	$("#fs").on("change",function() {
   		set_mode(this.checked)
	});

});
