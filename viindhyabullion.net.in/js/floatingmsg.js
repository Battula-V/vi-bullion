
$(document).ready(function () {
    $(".close").click(function () {

        document.getElementById("snackbar").style.display = "none";
    });
});


$(document).ready(function () {
    $(".close").click(function () {
        $("#snackbar").alert("close");
    });
});


//Live Message

function float_Message() {
			showMessage();
			//checkHoursForFloatMessage();						
}





	function checkHoursForFloatMessage()
		{			
					if (window.localStorage.getItem("floatMessageDateTime"))
					{
					
						var lastOpenDate = new Date(window.localStorage.getItem("floatMessageDateTime"));
						
						var currDate = new Date();
												
						  if (lastOpenDate.getDate() === currDate.getDate())
							{
							
								if ((currDate.getHours() - lastOpenDate.getHours()) >= 6)
								{
								// show the message as 6 hours are complete
									showMessage();
									window.localStorage.setItem("floatMessageDateTime",currDate.toString());
								}
								else{
									//do not show the message as 6 hours are not complete
									document.getElementById("snackbar").style.display = "none";	
									
								}
							
							
							}
							else {
								showMessage();
								//show the message more than one day is over
								window.localStorage.setItem("floatMessageDateTime",currDate.toString());
							
							}
												
						
						
						
					}
					else{
						showMessage();
						//not openened before , show the message
						var date1 = new Date();

						//console.log(date1.toString());  
						window.localStorage.setItem("floatMessageDateTime",date1.toString());
						
					}
		}

		
		function showMessage(){
	
				if (LiveRateMessage != "") {

					document.getElementById("Float_Message").innerHTML = LiveRateMessage;
					
					var x = document.getElementById("snackbar");
					x.className = "show";
					
					setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
					
				}
	
}
           
        