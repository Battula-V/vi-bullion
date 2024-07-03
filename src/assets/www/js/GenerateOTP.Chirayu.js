		function CallWebServiceFromJqueryGenerateOTP(name, mobile) {
            try {
				
				//alert('1');
				try{
					startSpinner();
				}
				catch (e)
				{
					
				}
						
                        $.ajax({
                            type: "GET",
							url : "https://" + localStorage.ipAddressOrder + ":" + localStorage.step2Port + "/VOTSMobile/Services/xml/generateOTP/" + name + "/" + mobile + "/1/1/Android/" + localStorage.appnameWithMiniadminId,
                            dataType: "text",
                            crossDomain: true,
                            processData: false,
                            success: OnSuccessGenerateOTP,
                            error: OnErrorGenerateOTP,
                            cache: false
                        });
                   
                }
            catch (e) {
              // alert("CallWebServiceFromJquery " + e);
            }


        }
		
		
        function OnSuccessGenerateOTP(data, status) {
			try{
					stopSpinner();
				}
				catch (e)
				{
					
				}
            	
            //alert(data);
            try {
				
				if (data >= 1)
				{
					window.localStorage.setItem("username", data);
					$('#tblGenerateOTP').css("visibility", 'visible');
					$('#tblLoginViaOTP').css("visibility", 'visible');
					alert1('OTP Sent, Please Login');
					return;
				}
				else{
					$('#tblGenerateOTP').css("visibility", 'visible');
					$('#tblLoginViaOTP').css("visibility", 'visible');
					alert1('Error, OTP Could not be sent');
					return;
				}
				
            }
            catch (e) {
                //alert(e);
            }


        }


        function OnErrorGenerateOTP(request, status, error) {
				try{
					stopSpinner();
				}
				catch (e)
				{
					
				}
			
             //alert("error : " + error);
        }
		