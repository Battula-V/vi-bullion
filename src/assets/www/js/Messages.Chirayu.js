
function removeAllRowsFromTable_Message() {

    $("#gvDataMessage tbody tr").remove();

}


function fnStartClock_Message() {

    try {
        //startSpinner();

        //oInterval = setInterval("CallWebServiceFromJquery()", 500);
        CallWebServiceFromJquery_Message();
    }
    catch (e) {
        // alert("fnStartClock" + e);
    }
}

function fnStopClock_Message() {
    try {
        //clearInterval(oInterval);
    }
    catch (e) {
        //  alert("fnStopClock" + e);
    }
}

function CallWebServiceFromJquery_Message() {
    try {

        //alert("https://" + localStorage.newsIpAddress + ":" + localStorage.newsPort + "/api/GetNewsList");

        $.ajax({
            type: "GET",
            url: "https://" + localStorage.newsIpAddress + ":" + localStorage.newsPort + "/api/GetNewsList",
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccess_Message,
            error: OnError_Message,
            cache: false
        });


    }
    catch (e) {
        //alert("CallWebServiceFromJquery " + e);
    }


}
var maxRows = 0;
var oldData;
var screenFontSize = 14;


var convert = function (convert) {

    return $("<span />", { html: convert }).text();

};

function OnSuccess_Message(data, status) {
    //alert(data);
    try {

        //stopSpinner();

        var JSONString = data;

        var JSONObject = JSON.parse(JSONString);
        //console.log(JSONObject);      // Dump all data of the Object in the console


        var tbl = $("<table class=\"News_Class\" width=\"100%\" style=\"color:#FFF;\" />").attr("id", "mytable");
        $("#div1").append(tbl);

        var trowString = "";
        //alert(JSONObject.length);
        //JSONString.length
        for (var i = 0; i < 4; i++) { //JSONObject.length




            //alert(JSONObject[0]["Title"]); // Access Object data

            //            trowString = trowString + "<table class=\"News_Class\" width=\"100%\" style=\"color: #000;background: #fff7d8;margin-bottom: 10px;\">" +
            //                                                "<tr>" +
            //                                                    "<td>" +
            //                                                        "<a style=\"cursor:pointer;\" class=\"aTag\" id=" + JSONObject[i]["Id"] + " onclick=\"javascript:myFunctionClick('" + JSONObject[i]["Id"] + "')\" >" + //href=\"News_Details.html\"
            //                                                        "<span class=\"Title_News\">" + JSONObject[i]["Title"] + "</span>" +
            //                                                        "<span class=\"Date_News\">" + JSONObject[i]["Date"] + "</span> " +
            ////                                                        "<span class=\"Date_News_second\">" + JSONObject[i]["Source"] + "</span>" +
            //                                                        "</a>" +
            //                                                    "</td> " +
            //                                                "</tr>" +
            //                                            "</table>";




            trowString = trowString +
                //onclick=\"javascript:myFunctionClick('" + JSONObject[i]["Id"] + "')\"
                "<table id=" + JSONObject[i]["Id"] + "     style=\"border-radius: 0px;border-collapse: separate;border-spacing: 1px;background: #fff; border:1px solid #000;box-shadow:2px 2px 4px 2px;font-size: 1rem;\" width=\"100%\">" +
                    "<tr style=\"color: #fff;background: #1e1d1c;text-align:left !Important;font-weight:900;font-size: 90%;text-transform:uppercase;\">" +
                        "<td style=\"border-top-left-radius: 00px;border-top-right-radius: 0px;padding-right: 10px;padding-bottom: 10px;padding-top: 10px;font-style: italic;padding-left:15px;box-shadow:2px 2px 4px 2px #000;\">" + JSONObject[i]["Date"] + "</td>" +
                    "</tr>" +
                    "<tr style=\"text-align:left;font-size: 100%;background:#\">" +
                        "<td style=\"padding: 10px;text-align: center;color: #7e5d08;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;box-shadow:2px 2px 4px 2px #000;\">" + JSONObject[i]["Title"] + "</td>" +
                    "</tr>" +
                 "</table><br/>"; //text-indent: 5px;




        }

        $("#mytable").append(trowString);


    }
    catch (e) {
        // alert("OnSuccess" + e);
    }


}



function OnError_Message(request, status, error) {
    // alert("Webservice Error: " + request.statusText);
}


$(document).ready(function () {

    fnStartClock_Message();
});
