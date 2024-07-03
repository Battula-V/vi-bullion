
function removeAllRowsFromTable() {

    //            $("#gvData tbody tr").remove();
    $("#gvData").empty();

}

function removeAllRowsFromTable2() {

    //            $("#gvData tbody tr").remove();
    $("#gvData2").empty();

}



function fnStartClock() {

    try {
        //startSpinner();
        //alert1("fnStartClock");
        refreshData();
        oInterval = setInterval("refreshData()", 1000);
        CallWebServiceFromJqueryLiveRateMessage();

    }
    catch (e) {
        // alert1("fnStartClock" + e);
    }
}

function refreshData() {
    CallWebServiceFromJquery();
    //            CallWebServiceFromJqueryGoldCoins();
    //            CallWebServiceFromJquerySilverCoins();
}

function fnStopClock() {
    try {
        clearInterval(oInterval);
    }
    catch (e) {
        //  alert1("fnStopClock" + e);
    }
}


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function updateTime() {
    var d = new Date();
    var x = document.getElementById("cur_time");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    x.innerHTML = h + ":" + m + ":" + s;
}
var maxRows = 0;
var oldData;
var oldData01;
var oldData02;
var oldData03;
var screenFontSize = 14;
var oldDataTop;
var oldDataGoldCoins;
var oldDataSilverCoins;
var counterRefresh = 0;



//Spotttttttttttttttttttt
function CallWebServiceFromJquery() {
    try {
        //alert1('CallWebServiceFromJquery');
        $.ajax({
            type: "GET",
            //url: "https://bcast.eternajewellers.com:7767/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/eternajewellers",
            url: "https://" + localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/viindhyaprivate1",
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccess,
            error: OnError,
            cache: false
        });
    }
    catch (e) {
        //alert1("CallWebServiceFromJquery " + e);
    }

}

//Spottttttttttttttttttt
function OnSuccess(data, status) {
    //alert1(data);
    try {
        //updateTime();
        //alert1("onsuccess");
        //stopSpinner();
        var messagesDesktopp = "";
        messagesDesktopp = data.split("\n");

        if (typeof oldData != 'undefined') {

        }
        else {
            //alert1("1");
            oldData = data.toString();
        }
        var messagesOldDesktop = oldData.split("\n");



        if (typeof messagesDesktopp != 'undefined') {
            if (maxRows == 0) {
                maxRows = messagesDesktopp.length;
            }

            removeAllRowsFromTable();
            removeAllRowsFromTable2();
            var zebra = "";
            zebra = document.getElementById("gvData");
            zebra2 = document.getElementById("gvData2");
            var trow = "";
            var trow2 = "";

            var retDesktop = "";
            var oldRetDesktop = "";
            var trowString = "";
            var trowString2 = "";

            trowString = trowString + "<tr>";

            
            //messagesDesktopp.length
            for (var i = 0; i < messagesDesktopp.length; i++) {
                var retDesktop = messagesDesktopp[i].split("\t");
                var oldRetDesktop;
                oldRetDesktop = messagesOldDesktop[i].split("\t");

                var title = "";
                // if (i == 0) {
                //     title = "(22kt 916)";
                // }


                trowString = trowString + "<td class=\"text-right\" style=\"width:50%;padding: 0px 0;border: 2px solid #A50000;\">" +
		                                    "<table style=\"width:100%;line-height: 30px;color:#FFF;font-size:18px\">"; //background: #dec3a9;

                if (typeof retDesktop[1] != 'undefined') {



                    if (retDesktop[4] > oldRetDesktop[4]) {

                        trowString = trowString + "<tr>" +
					                                    "<td style=\"text-align: center;background-color:#A50000\"><span style=\"padding-left: 10px;\">" + retDesktop[2] + "</span> " + title + "<br/><span style=\"background:green;color:#FFF;font-weight: 600;font-size: 22px;padding: 4px 15px;display: block;\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i><span id=" + i + "> " + retDesktop[4] + "</span><span style=\"font-size:16px;\"> /g</span></span></td>" +
				                                    "</tr>";
                    }
                    else if (retDesktop[4] < oldRetDesktop[4]) {

                        trowString = trowString + "<tr>" +
					                                    "<td style=\"text-align: center;background-color:#A50000\"><span style=\"padding-left: 10px;\">" + retDesktop[2] + "</span> " + title + "<br/><span style=\"background:red;color:#FFF;font-weight: 600;font-size: 22px;padding: 4px 15px;display: block;\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i><span id=" + i + "> " + retDesktop[4] + "</span><span style=\"font-size:16px;\"> /g</span></span></td>" +
				                                    "</tr>";
                    }
                    else {

                        trowString = trowString + "<tr>" +
					                                    "<td style=\"text-align: center;background-color:#A50000\"><span style=\"padding-left: 10px;\">" + retDesktop[2] + "</span> " + title + "<br/><span style=\"background:#FFF;color:#A50000;font-weight: 600;font-size: 22px;padding: 4px 15px;display: block;\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i><span id=" + i + "> " + retDesktop[4] + "</span><span style=\"font-size:16px;\"> /g</span></span></td>" +
				                                    "</tr>";
                    }


                    trowString = trowString + "</table>" +
		                                "</td>";

                } // END IF
                oldData = data.toString();

            } // END FOR

           
            for (var i = 0; i < messagesDesktopp.length; i++) {
                //var ret = jQuery.parseJSON(messages[i]);
                var ret = messagesDesktopp[i].split("\t");
                var oldRet;

                var displayy = "block";
                if (i == 8 || i == 9) {
                displayy = "block";
                }


                oldRet = messagesOldDesktop[i].split("\t");

                var str = ret[2];
                var firstSixChars = str.slice(5, 8);


                if (typeof ret[1] != 'undefined') {

                //if (deletedScrips[i] != "0") {
                var buySmall = "";
                var buyLarge = "";
                var sellSmall = "";
                var sellLarge = "";

                if (ret[2].length == 5) {
                buySmall = ret[3].substring(0, 2);
                buyLarge = ret[3].substring(2, 5);
                buySmall = "";
                buyLarge = ret[3];
                }
                else {

                buySmall = "";
                buyLarge = ret[3];

                }

                if (ret[3].length == 5) {
                sellSmall = ret[4].substring(0, 2);
                sellLarge = ret[4].substring(2, 5);
                sellSmall = "";
                sellLarge = ret[4];
                }
                else {

                sellSmall = "";
                sellLarge = ret[4];

                }


               

                if (ret[4] > oldRet[4]) {

                    trowString2 = trowString2 +

                            "<table class=\"\"  width=\"100%\" style=\"\"> " +
                                "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\" style=\"text-align: center;\"> " +
                                "<td style=\"width:20%;padding: 0px 0px 0px 0px;text-align:left;\">" +

                                     "<span class=\"buy_sell_label\">" + firstSixChars + ": </span>" +
                                     //"<span class=\"buy_sell_label2\" style=\"display:block\">" + formatAMPM(date) + "</span>"+                                             
                                 "</td>" +

                                 "<td id=\"" + ret[1] + "SELL3\" style=\"width:80%;text-align: left !Important;\">" +
                                 "<span class=\"top55span\" style=\"background:green; color:#FFF;border-radius:4px\">₹" + ret[4] + "</span>" +
                                  "</span>" +
                                 "</td>";

                }

                else if (ret[4] < oldRet[4]) {

                    trowString2 = trowString2 +

                            "<table class=\"\" width=\"100%\" style=\"\">" +
                                "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                "<td style=\"width:20%;padding: 0px 0px 0px 0px;text-align:left;\">" +

                                     "<span class=\"buy_sell_label\">" + firstSixChars + ": </span>" +
                                     //"<span class=\"buy_sell_label2\" style=\"display:block\">" + formatAMPM(date) + "</span>"+                                             
                                 "</td>" +

                                 "<td id=\"" + ret[1] + "SELL3\" style=\"width:80%;text-align: left !Important;\">" +
                                 "<span class=\"top55span\" style=\"background:red; color:#FFF;border-radius:4px\">₹" + ret[4] + "</span>" +
                                  "</span>" +
                                 "</td>";

                }
                else {

                    trowString2 = trowString2 +

                                "<table class=\"\" width=\"100%\" style=\"\">" +
                                    "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                        "<td style=\"width:20%;padding: 0px 0px 0px 0px;text-align:left;\">" +

                                         "<span class=\"buy_sell_label\">" + firstSixChars + ": </span>" +
                                         //"<span class=\"buy_sell_label2\" style=\"display:block\">" + formatAMPM(date) + "</span>"+                                             
                                        "</td>" +

                                        "<td id=\"" + ret[1] + "SELL3\" style=\"width:80%;text-align: left !Important;\">" +
                                        "<span class=\"top55span\" style=\"background-image: linear-gradient(to bottom,  #C7A251, #C7A251);color:#fff;border-radius:4px\">₹" + ret[4] + "</span>" +
                                         "</span>" +
                                        "</td>";

                }


                trowString2 = trowString2 + "</tr></table>";


                }

                oldData = data.toString();

            }


            trowString = trowString + "</tr>";

            trow = $(trowString);
            trow.prependTo(zebra);

            trow2 = $(trowString2);
            trow2.prependTo(zebra2);

        }

        if (counterRefresh == 0) {
            // myScroll.refresh();
            counterRefresh = counterRefresh + 1;
        }


    }
    catch (e) {
        // alert1("OnSuccess" + e);
        oldData = data.toString();
        //alert1(oldData);
    }


}
function OnError(request, status, error) {
    //alert1("Webservice Error: " + request.statusText + " " + error);
}


$(document).ready(function () {
    fnStartClock();
    //CallWebServiceFromJqueryLiveRateMessage();
});






