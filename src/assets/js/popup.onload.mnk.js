function CallWebServiceFromJqueryPopup() {
    try {
        //alert('hi');
        //startSpinner();

        //alert("https://" + localStorage.webPanel + "/WebServiceLiveRatePageMessage.asmx/getPopUpMessage?username=" + localStorage.appnameWithMiniadminId);

        $.ajax({
            type: "GET",
            //url: "https://bulliontrading.chirayusoft.com/WebServiceLiveRatePageMessage.asmx/getLiveRatePageMessage?username=shimmers",
            url: "https://" + localStorage.webPanel + "/WebServiceLiveRatePageMessage.asmx/getPopUpMessage?username=" + localStorage.appnameWithMiniadminId,
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccessPopup,
            error: OnErrorPopup,
            cache: false
        });
    }
    catch (e) {
        //alert("CallWebServiceFromJquery " + e);
    }


}

var convertPopup = function (convert) {

    return $("<span />", { html: convert }).text();

};

var PopupLiveRateMessage = "";

function OnSuccessPopup(data, status) {
    //alert(data);
    try {

        //stopSpinner();
        var messages = data.split("|");

        if (typeof messages != 'undefined') {


            //var zebra = document.getElementById("gvDataLiveRateMessage");

            //var trow;

            var msg = messages[1];

            if (msg.length > 5) {

                //alert(msg);
                var trowString = convertPopup(msg);
                //PopupLiveRateMessage = trowString;
                $("#gvDataPopup").html(trowString);
                $('#myModal').modal('show');

                //trowString.prependTo(zebra);
                //trow = $(trowString);
                //alert(trow);
                //trow.prependTo(zebra);
            }
            else {
                PopupLiveRateMessage = "";

            }


        }
        else {
            PopupLiveRateMessage = "";

        }

    }
    catch (e) {
        //alert("OnSuccess" + e);
    }


}




function OnErrorPopup(request, status, error) {
    //stopSpinner();
    //alert("Webservice Error: " + request.statusText);
}



$(document).ready(function () {
    CallWebServiceFromJqueryPopup();
    //$('#myModal').modal('show');
});