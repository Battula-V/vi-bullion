$(document).ready(function(){
	var UserID_M = localStorage.getItem("username");
    var Password_M = localStorage.getItem("password");


    if (!UserID_M || !Password_M) 
	{
		$("#IdTrades").hide();
		$("#IdOrders").hide();
        $("#LogIn1").show();
        $("#LogOut1").hide();
    }
    else 
	{
        $("#IdTrades").show();
		$("#IdOrders").show();
        $("#LogIn1").hide();
        $("#LogOut1").show();
	}
});
