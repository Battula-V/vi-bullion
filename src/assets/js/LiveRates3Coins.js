
function removeAllRowsFromTable() {
    //alert("11");
    $("#gvData").empty();
}

function removeAllRowsFromTable_top3() {
    //alert("11");
    $("#gvData_top3").empty();
}
function removeAllRowsFromTable_top4() {
    //alert("11");
    $("#gvData_top4").empty();
}


function gvData_Trending() {
    $("#gvData_Trending").empty();

}


function removeAllRowsFromTable_SilverBar() {
    //alert("11");
    $("#gvData_SilverBar").empty();
}

function removeAllRowsFromTable_top3_SilverBar() {
    //alert("11");
    $("#gvData_top3_SilverBar").empty();
}





function removeAllRowsFromTableGCSC() {
    //alert("11");
    $("#gvDataGCSC").empty();
}

function removeAllRowsFromTableGCSC_Silver() {
    //alert("11");
    $("#gvData_SilverRates_GCSC").empty();
}


function gvData_Trending() {
    $("#gvData_Trending").empty();

}



//Silver Rates
function removeAllRowsFromTable_gvData_SilverRates() {
    $("#gvData_SilverRates").empty();
}

function gvData_Trending_gvData_Trending_SilverRates() {
    $("#gvData_Trending_SilverRates").empty();

}




function gvData_Gold_Silver_INR_coinss() {
    $("#gvData_Gold_Silver_INR_coinss").empty();
}

function removeAllRowsFromTable_gvData_Trending_GoldRates() {
    $("#gvData_Trending_GoldRates").empty();
}









function fnStartClock_0() {

    try {
        //startSpinner();
        CallWebServiceFromJqueryMarquee();
        CallWebServiceFromJqueryLiveRateMessage();
        CallWebServiceFromJquery();
        oInterval_0 = setInterval("CallWebServiceFromJquery()", 500); //500
        setInterval("resetLiveRateTable()", 10000); //500
        //float_Message();
    }
    catch (e) {
        // alert("fnStartClock" + e);
    }
}

function fnStartClock_1() {

    try {
        //startSpinner();
        CallWebServiceFromJqueryLiveRateMessage();

        CallWebServiceFromJqueryGoldCoins();
        oInterval_1 = setInterval("CallWebServiceFromJqueryGoldCoins()", 500); //500
        setInterval("resetLiveRateTable_coins()", 10000); //500
        //float_Message();
    }
    catch (e) {
        // alert("fnStartClock" + e);
    }
}





function fnStartClock_2() {

    try {

        //startSpinner();
        CallWebServiceFromJqueryLiveRateMessage();
        CallWebServiceFromJquerySilverCoins();
        oInterval_2 = setInterval("CallWebServiceFromJquerySilverCoins()", 500); //500
        setInterval("resetLiveRateTable_Silver()", 10000); //500
        //float_Message();
    }
    catch (e) {
        // alert("fnStartClock" + e);
    }
}



function fnStartClock_SilverBar() {

    try {
        //startSpinner();
        CallWebServiceFromJqueryLiveRateMessage();
        CallWebServiceFromJquery();
        oInterval_SilverBar = setInterval("CallWebServiceFromJquery_SilverBar()", 500); //500
        //setInterval("resetLiveRateTable()", 10000); //500
        //float_Message();
    }
    catch (e) {
        // alert("fnStartClock" + e);
    }
}




function resetLiveRateTable() {
    showOnce = "0";
}

function resetLiveRateTable_Silver() {
    showOnce_silver = "0";
}

function resetLiveRateTable_coins() {
    showOnce_coins = "0";
}



function fnStopClock_0() {
    try {
        clearInterval(oInterval_0);
    }
    catch (e) {
        //  alert("fnStopClock" + e);
    }
}

function fnStopClock_1() {
    try {
        clearInterval(oInterval_1);
    }
    catch (e) {
        //  alert("fnStopClock" + e);
    }
}


function fnStopClock_2() {
    try {
        clearInterval(oInterval_2);
    }
    catch (e) {
        //  alert("fnStopClock" + e);
    }
}

function fnStopClock_SilverBar() {
    try {
        clearInterval(oInterval_SilverBar);
    }
    catch (e) {
        //  alert("fnStopClock" + e);
    }
}



function callBuySell(scripCode, scripName) {

    var UserID_M = localStorage.getItem("username");
    var Password_M = localStorage.getItem("password");


    if (!UserID_M || !Password_M) {
        window.location.href = "www/Login.htm";
    }
    else {


        //alert(scripCode);
        startSpinner();

        sessionStorage.scripname = scripName;
        sessionStorage.scripcode = scripCode;

        window.location.href = "www/BuySell.htm";

    }


}



function callBuySell_Coins(scripCode, scripName) {

    var UserID_M = localStorage.getItem("username");
    var Password_M = localStorage.getItem("password");


    if (!UserID_M && !Password_M) {
        window.location.href = "www/Login.htm";
    }
    else {


        //alert(scripCode);
        startSpinner();

        sessionStorage.scripname = scripName;
        sessionStorage.scripcode = scripCode;
        window.location.href = "www/BuySell.htm";

        // window.location.href = "www/BuySell_Coins.htm";

    }


}



function CallWebServiceFromJquery() {
    try {

        //alert("TemplateID" + "->" + TemplateID);

        var template = localStorage.defaultScripTemplateId;

        // if (TemplateID) {
        //     template = TemplateID;
        // }

        $.ajax({
            type: "GET",
            //url: urlLink,
            url: "https://" + localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/viindhyacoin",
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccess1,
            error: OnError1,
            cache: false
        });
    }
    catch (e) {
        //alert("CallWebServiceFromJquery " + e);
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


var maxRows = 0;
var oldData;
var oldData01;
var oldData02;
var oldData03;

var oldData_Gold_silver_INR_coins;
var screenFontSize = 14;

var oldDataTop;
var oldDataGoldCoins;


var oldDataSilverCoins;
var oldDataTrending_SilverRates

var oldDataMCX;

var SwiperHeading;

var counterRefresh = 0;


var showOnce = "0";
var showOnce_silver = "0";
var showOnce_coins = "0";






function updateOnlyData(data) {
    try {
        var messages = data.split("\n");
        //var messagesOld = oldData.split("\n");

        if (typeof oldData != 'undefined') {
        }
        else {
            oldData = data.toString();
        }
        var messagesOld = oldData.split("\n");


        for (var i = 0; i < 3; i++) {


            var ret = messages[i].split("\t");
            var oldRet = messagesOld[i].split("\t");


            //For Rates
            if (ret[3] > oldRet[3]) {

                trowString = "<span class=\"top5span\" style=\"background: #2db919;color: #FFF;\">" + ret[3] + "</span>";

                $('#' + ret[1] + 'BUY').html(trowString);

            }
            else if (ret[3] < oldRet[3]) {

                trowString = "<span class=\"top5span\" style=\"background: red;color: #FFF;\">" + ret[3] + "</span>";

                $('#' + ret[1] + 'BUY').html(trowString);

            }
            else {

                trowString = "<span class=\"top5span\" style=\"\">" + ret[3] + "</span>";

                $('#' + ret[1] + 'BUY').html(trowString);

            }


        }
        var trowString = "";

        for (var i = 3; i < messages.length; i++) {


            var ret = messages[i].split("\t");
            var oldRet = messagesOld[i].split("\t");



            //$('#' + ret[1] + 'BUY').html(ret[3]);

            //For BUY
            if (ret[3] > oldRet[3]) {

                trowString = "<span class=\"top6span\" style=\"font-weight:600;background: #2db919;color: #FFF;\">" + ret[3] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>";

                document.getElementById(ret[1] + 'BUY').innerHTML = trowString;
            }
            else if (ret[3] < oldRet[3]) {

                trowString = "<span class=\"top6span\" style=\"font-weight:600;background: red;color: #FFF;\">" + ret[3] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>";

                document.getElementById(ret[1] + 'BUY').innerHTML = trowString;
            }
            else {

                trowString = "<span class=\"top6span\" style=\"color:#FFF;font-weight:600;\">" + ret[3] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>";

                document.getElementById(ret[1] + 'BUY').innerHTML = trowString;
            }
            //////END Buy




            //For sell
            if (ret[4] > oldRet[4]) {


                trowString = "<span class=\"top6span\" style=\"font-weight:600;background: #2db919;color: #FFF;\">" + ret[4] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>";

                //$('#' + ret[1] + 'SELL').html(trowString);
                document.getElementById(ret[1] + 'SELL').innerHTML = trowString;
            }
            else if (ret[4] < oldRet[4]) {

                trowString = "<span class=\"top6span\" style=\"font-weight:600;background: red;color: #FFF;\">" + ret[4] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>";

                document.getElementById(ret[1] + 'SELL').innerHTML = trowString;
            }
            else {

                trowString = "<span class=\"top6span\" style=\"color:#FFF;font-weight:600;\">" + ret[4] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>";

                //$('#' + ret[1] + 'SELL').html(trowString);
                document.getElementById(ret[1] + 'SELL').innerHTML = trowString;
            }
            //END SELL


            oldData = data.toString();

        }



        oldData = data.toString();


    }
    catch (e) {
        //alert("OnSuccess Mnk" + e);
    }
}



function OnSuccess1(data, status) {
    //alert(data);
    try {

        // if (showOnce == "0") {
        //     showOnce = "1";
        // }
        // else {
        //     updateOnlyData(data);
        //     return;
        // }

        stopSpinner();
        var messagesDesktopp = "";
        messagesDesktopp = data.split("\n");
        //alert(messagesDesktopp.length);
        if (typeof oldData != 'undefined') {

        }
        else {
            //alert("1");
            oldData = data.toString();
        }
        var messagesOldDesktop = oldData.split("\n");

        if (typeof messagesDesktopp != 'undefined') {
            if (maxRows == 0) {
                maxRows = messagesDesktopp.length;
            }

            removeAllRowsFromTable_top4();
            removeAllRowsFromTable_top3();
            removeAllRowsFromTable();



            var zebra = "";
            var zebra_top3 = document.getElementById("gvData_top3");
            var zebra_top4 = document.getElementById("gvData_top4"); //Desktopppppppppppppppppppppppppppp
            zebra = document.getElementById("gvData"); //Desktopppppppppppppppppppppppppppp
            var trow = "";
            var trow_top3 = "";
            var trow_top4 = "";
            //GOLD
            var retDesktop = "";
            retDesktop = messagesDesktopp[0].split("\t");
            //alert(retDesktop.length);
            var oldRetDesktop = "";
            var trowString = "";
            var trowString_top3 = "";
            var trowString_top4 = "";
            oldRetDesktop = messagesOldDesktop[0].split("\t");

            if (typeof retDesktop[2] != 'undefined') {

                trowString_top3 = trowString_top3 + "<table class=\"table1001\"><tr><td align=\"center\">";

                if (retDesktop[4] > oldRetDesktop[4]) {
                    trowString_top3 = trowString_top3 + "<table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"background: #2db919;color: #FFF;\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                                                //    "<tr>" +
                                                                //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                                                //    "</tr>" +
                                                "</table>";
                }
                else if (retDesktop[4] < oldRetDesktop[4]) {
                    trowString_top3 = trowString_top3 + "<table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"background: red;color: #FFF;\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                                                //    "<tr>" +
                                                                //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                                                //    "</tr>" +
                                                "</table>";
                }
                else {
                    trowString_top3 = trowString_top3 + "<table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                                                //    "<tr>" +
                                                                //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                                                //    "</tr>" +
                                              "</table>";
                }

                trowString_top3 = trowString_top3 + "</td>";

                //}
            }
            //SILVER
            retDesktop = messagesDesktopp[1].split("\t");
            oldRetDesktop = messagesOldDesktop[1].split("\t");
            if (typeof retDesktop[2] != 'undefined') {

                if (retDesktop[4] > oldRetDesktop[4]) {

                    trowString_top3 = trowString_top3 + "<td align=\"center\"><table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"background: #2db919;color: #FFF;\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                        //    "<tr>" +
                                        //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                        //    "</tr>" +
                    "</table></td>";

                }
                else if (retDesktop[4] < oldRetDesktop[4]) {
                    trowString_top3 = trowString_top3 + "<td align=\"center\"><table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"background: red;color: #FFF;\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                            //    "<tr>" +
                                            //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                            //    "</tr>" +
                            "</table></td>";
                }
                else {
                    trowString_top3 = trowString_top3 + "<td align=\"center\"><table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                        //    "<tr>" +
                                        //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                        //    "</tr>" +
                    "</table></td>";
                }

            }
            //INR
            retDesktop = messagesDesktopp[2].split("\t");
            oldRetDesktop = messagesOldDesktop[2].split("\t");
            if (typeof retDesktop[2] != 'undefined') {
                var trowString_top3;
                //if (deletedScrips[2] != "0") {
                if (retDesktop[4] > oldRetDesktop[4]) {


                    trowString_top3 = trowString_top3 + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"background: #2db919;color: #FFF;\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                                                //    "<tr>" +
                                                                //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                                                //    "</tr>" +
                    "</table></td>"

                }
                else if (retDesktop[4] < oldRetDesktop[4]) {

                    trowString_top3 = trowString_top3 + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"background: red;color: #FFF;\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                                                //    "<tr>" +
                                                                //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                                                //    "</tr>" +
                    "</table></td>";
                }
                else {

                    trowString_top3 = trowString_top3 + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#fff;text-align: center !Important;\"><div class=\"RateBox\"><span class=\"top5span\" style=\"\">" + retDesktop[4] + "</span><br><span class=\"bloc_GS\" style=\"color:#fff;\">L: " + retDesktop[6] + " H: " + retDesktop[5] + "</span></div></td></tr>" +
                                                                //    "<tr>" +
                                                                //        "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                                                                //    "</tr>" +
                    "</table></td>";
                }


                //}
            }

            trowString_top3 = trowString_top3 + "</tr></table>";


            retDesktop = messagesDesktopp[3].split("\t");
            oldRetDesktop = messagesOldDesktop[3].split("\t");
            if (typeof retDesktop[2] != 'undefined') {

                trowString_top4 = trowString_top4 + "<table class=\"table1002\"><tr><td style=\"width: 50%;\" align=\"center\"><table width=\"100%\" class=\"goldd\" style=\"\"><tr><td colspan = \"2\"; class=\"sell\" style=\"text-align:center !Important;color:#fff;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr class=\"goldd\"><td style=\"text-align: center !Important;\"><div class=\"RateBox\">";

                if (retDesktop[3] > oldRetDesktop[3]) {
                    trowString_top4 = trowString_top4 +"<span id=\"" + retDesktop[1] + "BUY2\"><span class=\"top5span\" style=\"background-color:#2db919;color:#FFF;padding:3px 15px;margin:0 7%;\">" + retDesktop[3] + "</span></span>";
                }
                else if (retDesktop[3] < oldRetDesktop[3]) {
                    trowString_top4 = trowString_top4 +"<span id=\"" + retDesktop[1] + "BUY2\"><span class=\"top5span\" style=\"background-color:red;color:#FFF;padding:3px 15px;margin:0 7%;\">" + retDesktop[3] + "</span></span>";
                }
                else {
                    trowString_top4 = trowString_top4 +"<span id=\"" + retDesktop[1] + "BUY2\"><span class=\"top5span\" style=\"color:#FFF;padding:3px 15px;margin:0 7%;\">" + retDesktop[3] + "</span></span>";
                }



                if (retDesktop[4] > oldRetDesktop[4]) {
                    trowString_top4 = trowString_top4 + "<span id=\"" + retDesktop[1] + "SELL2\"><span class=\"top5span\" style=\"background-color:#2db919;color:#fff;padding:3px 15px;margin:0 7%;\">" + retDesktop[4] + "</span></span><br>" +
                    "<span class=\"bloc_GS1\" style=\"color:#fff;\">L: " + retDesktop[6] +"  /  " +" H: " + retDesktop[5] + "</span></div></td></tr>" +
                                        
                    "</tr>" + "</table>";

                }
                else if (retDesktop[4] < oldRetDesktop[4]) {
                    trowString_top4 = trowString_top4 + "<span id=\"" + retDesktop[1] + "SELL2\"><span class=\"top5span\" style=\"background-color:red;color:#fff;padding:3px 15px;margin:0 7%;\">" + retDesktop[4] + "</span></span><br>" +
                    "<span class=\"bloc_GS1\" style=\"color:#fff;\">L: " + retDesktop[6] +"  /  " +" H: " + retDesktop[5] + "</span></div></td></tr>" +
                                        
                    "</tr>" + "</table>";
                }
                else {
                    trowString_top4 = trowString_top4 + "<span id=\"" + retDesktop[1] + "SELL2\"><span class=\"top5span\" style=\"color:#fff;padding:3px 15px;margin:0 7%;\">" + retDesktop[4] + "</span></span><br>" +
                    "<span class=\"bloc_GS1\" style=\"color:#fff;\">L: " + retDesktop[6] +"  /  " +" H: " + retDesktop[5] + "</span></div></td></tr>" +
                                        
                    "</tr>" + "</table>";
                }


                trowString_top4 = trowString_top4 + "</td>";

                //}
            }
            //SILVER COSTING
            retDesktop = messagesDesktopp[4].split("\t");
            oldRetDesktop = messagesOldDesktop[4].split("\t");
            if (typeof retDesktop[2] != 'undefined') {

                trowString_top4 = trowString_top4 + "<td style=\"width: 50%;\" align=\"center\"><table  width=\"100%\" class=\"goldd\"><tr style=\"\"><td colspan = \"2\"; class=\"sell\" style=\"text-align:center !Important;color:#fff;\"><div class=\"RateBox\">" + retDesktop[2] + "</div></td></tr><tr class=\"goldd\"><td style=\"text-align: center !Important;\"><div class=\"RateBox\">";

                if (retDesktop[3] > oldRetDesktop[3]) {
                    trowString_top4 = trowString_top4 + 
                    
                    "<span id=\"" + retDesktop[1] + "BUY2\" ><span class=\"top5span\" style=\"background-color:#2db919;color:#FFF;padding:3px 15px;margin:0 7%;\">" + retDesktop[3] + "</span></span>";

                }
                else if (retDesktop[3] < oldRetDesktop[3]) {
                    trowString_top4 = trowString_top4 +
                    "<span id=\"" + retDesktop[1] + "BUY2\" ><span class=\"top5span\" style=\"background-color:red;color:#FFF;padding:3px 15px;margin:0 7%;\">" + retDesktop[3] + "</span></span>";

                }
                else {
                    trowString_top4 = trowString_top4 +
                    "<span id=\"" + retDesktop[1] + "BUY2\"><span class=\"top5span\" style=\"color:#fff;padding:3px 15px;margin:0 7%;\">" + retDesktop[3] + "</span></span>";

                }



                if (retDesktop[4] > oldRetDesktop[4]) {
                    trowString_top4 = trowString_top4 + "<span id=\"" + retDesktop[1] + "SELL2\"><span class=\"top5span\" style=\"background-color:#2db919;color:#FFF;padding:3px 15px;margin:0 7%;\">" + retDesktop[4] + "</span></span><br>" +
                    "<span class=\"bloc_GS1\" style=\"color:#fff;\">L: " + retDesktop[6] +"  /  " +" H: " + retDesktop[5] + "</span></div></td></tr>" +
                    
                     "</table>";
                }
                else if (retDesktop[4] < oldRetDesktop[4]) {
                    trowString_top4 = trowString_top4 + "<span id=\"" + retDesktop[1] + "SELL2\"><span class=\"top5span\" style=\"background-color:red;color:#FFF;padding:3px 15px;margin:0 7%;\">" + retDesktop[4] + "</span></span><br>" +
                    "<span class=\"bloc_GS1\" style=\"color:#fff;\">L: " + retDesktop[6] +"  /  " +" H: " + retDesktop[5] + "</span></div></td></tr>" +
                    
                     "</table>";
                }
                else {
                    trowString_top4 = trowString_top4 + "<span id=\"" + retDesktop[1] + "SELL2\"><span class=\"top5span\" style=\"color:#fff;padding:3px 15px;margin:0 7%;\">" + retDesktop[4] + "</span></span><br>" +
                    "<span class=\"bloc_GS1\" style=\"color:#fff;\">L: " + retDesktop[6] +"  /  " +" H: " + retDesktop[5] + "</span></div></td></tr>" +
                    
                     "</table>";
                }


                trowString_top4 = trowString_top4 + "</td>";

            }
            trowString_top4 = trowString_top4 + "</tr></table>";






            trowString = trowString + "<table class=\"tt_33\" width=\"100%\" style=\"\"> " +
                                            " <tr > " +
                                                " <td style=\"padding: 0px 3px 0;\"> " +
                                                    "<table class=\"RateBox\" width=\"100%\" style=\"margin: 0 0 5px 0;\"> " +
                                                    "<tr>" +
                                                        "<td  width=\"75%\" style=\"font-size: 12px;color:#000;font-weight:600;padding: 5px 10px;text-align:left; \">" +
            												"<span class=\"top4span\" style=\"color: #FFF;padding: 5px 10px;\">PRODUCT</span>" +
                                                        "</td>" +
                                                        // "<td width=\"25%\" style=\"font-size: 12px;padding:5px 10px;color:#000;font-weight:600;\" >" +
                                                        //     "<span class=\"top4span\" style=\"color: #FFF;padding: 5px 10px;\">BUY</span>" +
                                                        // "</td>" +

                                                        "<td width=\"25%\" style=\"font-size: 12px;padding:5px 10px;color:#000;font-weight:600;text-align:cente\" >" +
                                                            "<span class=\"top4span\" style=\"color: #FFF;padding: 5px 10px;text-align:center\">PRICE</span>" +
                                                        "</td>" +

            //                                                                "<td style=\"width:20%; text-align: center !Important\" >" +
            //                                                                    "<span></span>" +
            //                                                                "</td>" +

            // "<td style=\"width:15%; text-align: center !Important\" >" +
            //   "<span>LOW</span>" +
            // "</td>" +
                                                        "</tr>" +
                                                    "</table>"
            "</td>" +
                                                "</tr>" +
            //Second Row
                                                     " <tr> " +
                                                  " <td> ";
            //messages.length
            for (var i = 0; i < messagesDesktopp.length; i++) {
                //var ret = jQuery.parseJSON(messages[i]);
                var ret = messagesDesktopp[i].split("\t");
                var oldRet;
                var displayy = "block";
                        if (i == 8 || i == 9) {
                            displayy = "block";
                        }


                oldRet = messagesOldDesktop[i].split("\t");
                if (typeof ret[1] != 'undefined') {




                    if (ret[3] > oldRet[3]) {

                        trowString = trowString +
                                            "<table class=\"res_mob_font_width\"  width=\"100%\" style=\"\"> " +
                                                "<tr onclick=\"callBuySell2('" + ret[1] + "','" + ret[2] + "');\" style=\"text-align: center;\"> " +
                                                    "<td class=\"buy_sell_label\" style=\"width:75%;text-align:left;color:#FFF\">" + ret[2] + "</td> " ;  // small;
                                                    // "<td id=\"" + ret[1] + "BUY\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    // "<span class=\"top6span\" style=\"font-weight:600;background: #2db919;color: #FFF;\">" + ret[3] + "</span>" +
                                                    // "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                    // "</td>";

                    }
                    else if (ret[3] < oldRet[3]) {

                        trowString = trowString +

                                            "<table class=\"res_mob_font_width\" width=\"100%\" style=\"\">" +
                                                "<tr onclick=\"callBuySell2('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                                    "<td class=\"buy_sell_label\" style=\"width:75%;text-align:left;color:#FFF\">" + ret[2] + "</td>" ;
                                                    // "<td id=\"" + ret[1] + "BUY\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    // "<span class=\"top6span\" style=\"font-weight:600;background: red;color: #FFF;\">" + ret[3] + "</span>" +
                                                    // // "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                    // "</td>";

                    }
                    else {
                        trowString = trowString +

                                                "<table class=\"res_mob_font_width\" width=\"100%\" style=\"\">" +
                                                    "<tr onclick=\"callBuySell2('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                                        "<td class=\"buy_sell_label\" style=\"width:75%;text-align:left;color:#FFF\">" + ret[2] + "</td>" ;
                                                        // "<td id=\"" + ret[1] + "BUY\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                        // "<span class=\"top6span\" style=\"color:#FFF;font-weight:600;\">" + ret[3] + "</span>" +
                                                        // // "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                        // "</td>";

                    }





                    //For Sell

                    if (ret[4] > oldRet[4]) {

                        trowString = trowString +
                                                    "<td id=\"" + ret[1] + "SELL\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    "<span class=\"top6span\" style=\"font-weight:600;background: #2db919;color: #FFF;\">" + ret[4] + "</span>" +
                                                    // "<span class=\"price-info\" style=\"display: " + displayy + ";text-align:center\">H :" + ret[5] + " | L : " + ret[6] + "</span>" + //<br/><span style=\"color:#8ce08c;\">H : " + ret[5] + "</span>
                                                    // "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                    "</td>";

                    }
                    else if (ret[4] < oldRet[4]) {

                        trowString = trowString +
                                                    "<td id=\"" + ret[1] + "SELL\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    "<span class=\"top6span\" style=\"font-weight:600;background: red;color: #FFF;\">" + ret[4] + "</span>" +
                                                    // "<span class=\"price-info\" style=\"display: " + displayy + ";text-align:center\">H :" + ret[5] + " | L : " + ret[6] + "</span>" +
                                                    // "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                    "</td>";
                    }
                    else {
                        trowString = trowString +

                                                        "<td id=\"" + ret[1] + "SELL\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                        "<span class=\"top6span\" style=\"font-weight:600;color:#C7A251;\">" + ret[4] + "</span>" +
                                                        // "<span class=\"price-info\" style=\"display: " + displayy + ";text-align:center\">H :" + ret[5] + " | L : " + ret[6] + "</span>" +
                                                        // "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                        "</td>";
                    }


                    trowString = trowString + "</tr></table>";



                }
                oldData = data.toString();

            }
            
            trowString = trowString + "</td></tr></table>"; //</td></tr>









            trow = $(trowString);
            trow.prependTo(zebra);



            trow_top3 = $(trowString_top3);
            trow_top3.prependTo(zebra_top3);

            trow_top4 = $(trowString_top4);
            trow_top4.prependTo(zebra_top4);



        }

        if (counterRefresh == 0) {
            //myScroll.refresh();
            counterRefresh = counterRefresh + 1;
        }
        oldData = data.toString();
        //OnSuccessMobileTop(data, status);

    }
    catch (e) {
        //alert("OnSuccess" + e);
        oldData = data.toString();
        //alert(oldData);
    }





}



function OnError1(request, status, error) {
    //alert("Webservice Error: " + request.statusText + " " + error);
}











//Silver Rates Monank ###########################################################################################
function CallWebServiceFromJquerySilverCoins() {
    try {


        //alert(localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/kakagoldcoins");

        //alert('CallWebServiceFromJquery');
        $.ajax({
            type: "GET",
            //url: urlLink,
            //url: localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/srbullion",
            //url: localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/" + localStorage.coinsScripTemplateId,
            url: "https://" + localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/viindhyacoins",
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccess_SilverRates,
            error: OnError_SilverRates,
            cache: false
        });
    }
    catch (e) {
        //alert("CallWebServiceFromJquery " + e);
    }
}






function updateOnlyData_Silver(data) {

    var messages = data.split("\n");
    //var messagesOld = oldDataTrending_SilverRates.split("\n");

    if (typeof oldDataTrending_SilverRates != 'undefined') {
    }
    else {
        oldDataTrending_SilverRates = data.toString();
    }
    var messagesOld = oldDataTrending_SilverRates.split("\n");


    var trowString = "";

    for (var i = 0; i < messages.length; i++) {



        var ret = messages[i].split("\t");
        var oldRet = messagesOld[i].split("\t");



        //$('#' + ret[1] + 'BUY').html(ret[3]);

//        //For BUY
//        if (ret[3] > oldRet[3]) {

//            trowString = "<span class=\"top6span\" style=\"color:#fff;background:#00D600;\">" + ret[3] + "</span>";


//            $('#' + ret[1] + 'BUYSILVER').html(trowString);
//            //document.getElementById(ret[1] + 'BUYSILVER').innerHTML = trowString;
//        }
//        else if (ret[3] < oldRet[3]) {

//            trowString = "<span class=\"top6span\" style=\"color:#fff;background:red;\">" + ret[3] + "</span>";
//            $('#' + ret[1] + 'BUYSILVER').html(trowString);
//            //document.getElementById(ret[1] + 'BUYSILVER').innerHTML = trowString;
//        }
//        else {

//            trowString = "<span class=\"top6span\" style=\"color:white;\">" + ret[3] + "</span>";
//            $('#' + ret[1] + 'BUYSILVER').html(trowString);
//            //document.getElementById(ret[1] + 'BUYSILVER').innerHTML = trowString;
//        }
//        //////END Buy




        //For sell
        if (ret[4] > oldRet[4]) {


            trowString = "<span class=\"top6span\" style=\"background: #2db919;color: #FFF;\">" + ret[4] + "</span>";

            $('#' + ret[1] + 'SELLSILVER').html(trowString);
            //document.getElementById(ret[1] + 'SELLSILVER').innerHTML = trowString;
        }
        else if (ret[4] < oldRet[4]) {

            trowString = "<span class=\"top6span\" style=\"background: red;color: #FFF;\">" + ret[4] + "</span>";

            $('#' + ret[1] + 'SELLSILVER').html(trowString);
            //document.getElementById(ret[1] + 'SELLSILVER').innerHTML = trowString;
        }
        else {

            trowString = "<span class=\"top6span\" style=\"color: #FFF;\">" + ret[4] + "</span>";

            $('#' + ret[1] + 'SELLSILVER').html(trowString);
            //document.getElementById(ret[1] + 'SELLSILVER').innerHTML = trowString;
        }
        //END SELL




    }



    oldDataTrending_SilverRates = data.toString();


}



function OnSuccess_SilverRates(data, status) {
    //alert(data);
    try {
        stopSpinner();
        //        var messages = data.split("\n");


        //        if (typeof oldDataSilverCoins != 'undefined') {

        //        }
        //        else {
        //            //alert("1");
        //            oldDataSilverCoins = data.toString();
        //        }
        //        var messagesOld = oldDataSilverCoins.split("\n");

        //        if (typeof messages != 'undefined') {
        //            if (maxRows == 0) {
        //                maxRows = messages.length;
        //            }

        //            removeAllRowsFromTable_gvData_SilverRates();

        //            var zebra_SilverRates = document.getElementById("gvData_SilverRates");

        //            var trow_SilverRates;

        //            var trowString = "";


        //            //GOLD
        //            var ret = messages[0].split("\t");
        //            var oldRet;
        //            var trowString = "";
        //            oldRet = messagesOld[0].split("\t");
        //            if (typeof ret[1] != 'undefined') {


        //                trowString = trowString + "<tr><td align=\"center\" style=\"width: 33%;\">";

        //                //alert(retDesktop[3] + '-->' + oldRetDesktop[3]);
        //                if (ret[3] > oldRet[3]) {
        //                    trowString = trowString + "<table width=\"100%\" class=\"goldd\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr ><td class=\"sell\" style=\"background-color:#fff;background:#00D600;; color:white;text-align:center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-color:#00D600; color:white;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table>"
        //                }
        //                else if (ret[3] < oldRet[3]) {
        //                    trowString = trowString + "<table width=\"100%\" class=\"goldd\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr ><td class=\"sell\" style=\"background-color:red; color:white;text-align:center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-color:red;color:white;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table>"
        //                }
        //                else {
        //                    trowString = trowString + "<table width=\"100%\" class=\"goldd\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr ><td class=\"sell\" style=\"background-image: linear-gradient(to right, #646ffc, #726bfc, #8664fc, #8e62fd, #9372f0);color: #FFF;text-align:center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-image: linear-gradient(to right, #646ffc, #726bfc, #8664fc, #8e62fd, #9372f0);color: #FFF;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table>"
        //                }

        //                trowString = trowString + "</td>";



        //            }
        //            //SILVER
        //            ret = messages[1].split("\t");
        //            oldRet = messagesOld[1].split("\t");
        //            if (typeof ret[1] != 'undefined') {


        //                if (ret[3] > oldRet[3]) {

        //                    trowString = trowString + "<td align=\"center\" style=\"width: 33%;\"><table  width=\"100%\" class=\"goldd\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr><td style=\"background-color:#00D600;color:white;text-align: center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-color:#00D600;color:white;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table></td>"

        //                }
        //                else if (ret[3] < oldRet[3]) {
        //                    trowString = trowString + "<td align=\"center\" style=\"width: 33%;\"><table  width=\"100%\" class=\"goldd\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr><td style=\"background-color:red;color:white;text-align: center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-color:red;color:white;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table></td>"
        //                }
        //                else {
        //                    trowString = trowString + "<td align=\"center\" style=\"width: 33%;\"><table  width=\"100%\" class=\"goldd\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr><td style=\"background-image: linear-gradient(to right, #646ffc, #726bfc, #8664fc, #8e62fd, #9372f0);color: #FFF;text-align: center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-image: linear-gradient(to right, #646ffc, #726bfc, #8664fc, #8e62fd, #9372f0);color: #FFF;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table></td>"
        //                }


        //            }
        //            //INR
        //            ret = messages[2].split("\t");
        //            oldRet = messagesOld[2].split("\t");
        //            if (typeof ret[2] != 'undefined') {
        //                var trowString;

        //                //For Rates
        //                if (ret[3] > oldRet[3]) {


        //                    trowString = trowString + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr><td style=\"background-color:#00D600;color:white;text-align: center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-color:#00D600;color:white;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table></td>"

        //                }
        //                else if (ret[3] < oldRet[3]) {

        //                    trowString = trowString + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr><td style=\"background-color:red;color:white;text-align: center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-color:red;color:white;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table></td>"
        //                }
        //                else {

        //                    trowString = trowString + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\" style=\"border-collapse: separate;border-spacing: 0 5px;\"><tr><td style=\"background-image: linear-gradient(to right, #646ffc, #726bfc, #8664fc, #8e62fd, #9372f0);color: #FFF;text-align: center !Important;font-size: 100%;border-top-left-radius: 5px;border-top-right-radius: 5px;\">" + ret[2] + "</td></tr><tr><td style=\"background-image: linear-gradient(to right, #646ffc, #726bfc, #8664fc, #8e62fd, #9372f0);color: #FFF;text-align: center !Important;font-size: x-large;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;\">" + ret[3] + "</td></tr></table></td>"
        //                }



        //            }

        //            trowString = trowString + "</tr>";








        //            trowString = trowString;
        //            trow_SilverRates = $(trowString);
        //            trow_SilverRates.prependTo(zebra_SilverRates);
        //            oldDataSilverCoins = data.toString();

        //        }

        //        if (counterRefresh == 0) {
        //            //myScroll.refresh();
        //            counterRefresh = counterRefresh + 1;
        //        }


        Success2_Trending_SilverRates(data, status); //OnSuccess2 Function 2

    }
    catch (e) {
        //alert("OnSuccess" + e);
    }


}
function OnError_SilverRates(request, status, error) {
    //alert("Webservice Error: " + request.statusText + " " + error);
}





function Success2_Trending_SilverRates(data, status) {
    //alert(data);
    try {

        if (showOnce_silver == "0") {
            showOnce_silver = "1";
        }
        else {

            updateOnlyData_Silver(data);
            return;
        }

        stopSpinner();
        var messages = "";
        messages = data.split("\n");

        if (typeof oldDataTrending_SilverRates != 'undefined') {
        }
        else {
            oldDataTrending_SilverRates = data.toString();
        }
        var messagesOld = oldDataTrending_SilverRates.split("\n");

        if (typeof messages != 'undefined') {
            if (maxRows == 0) {
                maxRows = messages.length;
            }

            gvData_Trending_gvData_Trending_SilverRates();
            var zebra1_SilverRates = "";
            zebra1_SilverRates = document.getElementById("gvData_Trending_SilverRates"); //Trending Lower Portion
            var trow1_SilverRates = "";
            var trowString = "";

            var ret = "";
            ret = messages[0].split("\t");

            if (typeof ret[1] != 'undefined') {
                //alert(ret[3] + '-->' + oldRet[3]);

                trowString = trowString + "<table width=\"100%\"> " +
                                                  " <tr> " +
                                                     " <td> " +
                                                         "<table  width=\"100%\" style=\"color: #000;margin-bottom: 5px;\"> " +
                                                            "<tr>" +
                                                               "<td style=\"width:70%;\">" +

                                                               "</td>" +
//                                                               "<td style=\"width:25%; text-align: center !Important;padding: 5px 3px;font-weight: 700;\" >" +
//                                                                    "<span>995</span>" +
//                                                               "</td>" +

                                                                "<td style=\"width:30%; text-align: center !Important;font-weight: 700;\" >" +
                                                                    "<span class=\"top4span\" style=\"background: #000;color: #FFF;padding: 5px 10px;border-radius: 10px 0;\">PRICE</span>" +
                                                               "</td>" +

                //"<td style=\"width:15%; text-align: center !Important\" >" +
                //    "<span>HIGH</span>" +
                //"</td>" +

                //"<td style=\"width:15%; text-align: center !Important\" >" +
                //   "<span>LOW</span>" +
                //"</td>" +
                                                             "</tr>" +
                                                           "</table>"
                "</td>" +
                                                        "</tr>" +
                //Second Row
                                                     " <tr> " +
                                                  " <td> ";
                //messagesDesktopp.length
                for (var i = 0; i < messages.length; i++) {


                    //var retDesktop = jQuery.parseJSON(messages[i]);
                    var retDesktop = messages[i].split("\t");
                    var oldRetDesktop;

                    oldRetDesktop = messagesOld[i].split("\t");
                    if (typeof retDesktop[1] != 'undefined') {


                        if (retDesktop[3] > oldRetDesktop[3]) {

                            trowString = trowString +
                            //"<table width=\"100%\"><tr><td onclick=\"callBuySell('" + retDesktop[1] + "')\" >" +
                                            "<table class=\"res_mob_font_width\"  width=\"100%\" style=\"border-bottom: 0px solid #FFD700;\"> " +
                                                "<tr onclick=\"callBuySell_Coins('" + retDesktop[1] + "','" + retDesktop[2] + "');\" style=\"text-align: center;\"> " +
                                                    "<td class=\"buy_sell_label\" style=\"width:70%; text-align: left !Important;font-size:" + Change_ScriptNameFont + ";\">" + retDesktop[2] + "</td> "; // small;
                                                    //"<td id=\"" + retDesktop[1] + "BUYSILVER\" style=\"width:25%;text-align: center !Important;\"><span class=\"top6span\" style=\"color:#fff;background:#00D600;\">" + retDesktop[3] + "</span></td>"; //<br/><span style=\"color:red;\">L : " + retDesktop[5] + "</span>

                        }
                        else if (retDesktop[3] < oldRetDesktop[3]) {

                            trowString = trowString +
                                            "<table class=\"res_mob_font_width\" width=\"100%\" style=\"border-bottom: 0px solid #FFD700;\">" +
                                                "<tr onclick=\"callBuySell_Coins('" + retDesktop[1] + "','" + retDesktop[2] + "');\"  style=\"text-align: center;\">" +
                                                    "<td class=\"buy_sell_label\" style=\"width:70%; text-align: left !Important;font-size: " + Change_ScriptNameFont + ";\">" + retDesktop[2] + "</td>";
                                                   // "<td id=\"" + retDesktop[1] + "BUYSILVER\" style=\"width:25%;text-align: center !Important;\"><span class=\"top6span\" style=\"color:#fff;background:red;\">" + retDesktop[3] + "</span></td>" //<br/><span style=\"color:red;\">L : " + retDesktop[5] + "</span>

                        }
                        else {
                            trowString = trowString +
                                                "<table class=\"res_mob_font_width\" width=\"100%\" style=\"border-bottom: 0px solid #FFD700;\">" +
                                                    "<tr onclick=\"callBuySell_Coins('" + retDesktop[1] + "','" + retDesktop[2] + "');\"  style=\"text-align: center;\">" +
                                                        "<td class=\"buy_sell_label\" style=\"width:70%;text-align: left !Important;font-size: " + Change_ScriptNameFont + ";\">" + retDesktop[2] + "</td>";
                                                        //"<td id=\"" + retDesktop[1] + "BUYSILVER\" style=\"width:25%;text-align: center !Important;\"><span class=\"top6span\" style=\"color:#FFF;\">" + retDesktop[3] + "</span></td>" //<br/><span style=\"color:red;\">L : " + retDesktop[5] + "</span>

                        }





                        //For Sell

                        if (retDesktop[4] > oldRetDesktop[4]) {

                            trowString = trowString +
                                                    "<td id=\"" + retDesktop[1] + "SELLSILVER\" style=\"width:30%;text-align: center !Important;\"><span class=\"top6span\" style=\"background: #2db919;color: #FFF;\">" + retDesktop[4] + "</span></td> " +
                                                "</tr> " +
                                            "</table>"; 
                        }
                        else if (retDesktop[4] < oldRetDesktop[4]) {

                        trowString = trowString +
                                                    "<td id=\"" + retDesktop[1] + "SELLSILVER\" style=\"width:30%;text-align: center !Important;\"><span class=\"top6span\" style=\"background: red;color: #FFF;\">" + retDesktop[4] + "</span></td>" +
                                                  "</tr>" +
                                              "</table>";
                        }
                        else {
                            trowString = trowString +
                                                        "<td id=\"" + retDesktop[1] + "SELLSILVER\" style=\"width:30%;text-align: center !Important;\"><span class=\"top6span\" style=\"color: #FFF;\">" + retDesktop[4] + "</span></td>" +
                                                     "</tr>" +
                                                 "</table>";
                        }



                    }
                    oldDataTrending_SilverRates = data.toString();

                }
                trowString = trowString + "</td></tr></table>"; //</td></tr>
                //                trow = $(trowString);
                //                trow.prependTo(zebra);


            } //End If



        } // End -> if (typeof messagesDesktopp != 'undefined') {



        trowString = trowString + "<br><br><br><br><br><br><br><br><br>"; //</td></tr>



        //trowString = trowString + "<br><br><br><br><br><br><br><br><br>"; //</td></tr>

        trow1_SilverRates = $(trowString);
        trow1_SilverRates.prependTo(zebra1_SilverRates);
        //alert(oldData_Gold_silver_INR_coins);
        oldDataTrending_SilverRates = data.toString();

        //OnSuccessGCSC_Silver(data, status); //OnSuccess2 Function 2

    }
    catch (e) {
        // alert("OnSuccess : " + e);
        oldDataTrending_SilverRates = data.toString();
        //alert(oldData_Gold_silver_INR_coins);
    }


}












//// ################################### Coins   #####################################################


function CallWebServiceFromJqueryGoldCoins() {
    try {

        //alert(localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/rajharshgoldcoins");

        $.ajax({
            type: "GET",
            //            url: "https://website.ronakgold.com:" + GoldCoinsPort + "/VOTSBroadcast/Services/xml/GetLiveRate",
            url: "https://" + localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/viindhyaunfixcut",
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccessGoldCoins,
            error: OnErrorGoldCoins,
            cache: false
        });


    }
    catch (e) {
        // alert("CallWebServiceFromJquery " + e);
    }


}







function updateOnlyData_coins(data) {
    try {

        var messages = data.split("\n");
        //var messagesOld = oldDataTrending_SilverRates.split("\n");

        if (typeof oldDataGoldCoins != 'undefined') {
        }
        else {
            oldDataGoldCoins = data.toString();
        }
        var messagesOld = oldDataGoldCoins.split("\n");


//        var trowString = "";
//        for (var i = 0; i < 3; i++) {


//            var ret = messages[i].split("\t");
//            var oldRet = messagesOld[i].split("\t");

//            //$('#' + ret[1] + 'SELL').html(ret[3]);
//

//            //For Rates
//            if (ret[4] > oldRet[4]) {


//                trowString = "<span style=\"background-color:transparent;color:#fff;background:#00D600;\">" + ret[4] + "</span>";

//                $('#' + ret[1] + 'SELLSILVERR').html(trowString);

//            }
//            else if (ret[4] < oldRet[4]) {

//                trowString = "<span style=\"background-color:transparent;color:#fff;background:red;\">" + ret[4] + "</span>";

//                $('#' + ret[1] + 'SELLSILVERR').html(trowString);

//            }
//            else {

//                trowString = "<span style=\"background-color:transparent;color:white;\">" + ret[4] + "</span>";

//                $('#' + ret[1] + 'SELLSILVERR').html(trowString);

//            }


//        }
        var trowString = "";

        for (var i = 0; i < messages.length; i++) {



            var ret = messages[i].split("\t");
            var oldRet = messagesOld[i].split("\t");


            //For BUY
            if (ret[3] > oldRet[3]) {

                trowString = "<span class=\"top6span\" style=\" color:#fff;background:#00D600;;font-weight:600\">" + ret[3] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>";

                $('#' + ret[1] + 'BUYCOINS').html(trowString);
                //document.getElementById(ret[1] + 'SELLSILVERR').innerHTML = trowString;
            }
            else if (ret[3] < oldRet[3]) {

                trowString = "<span class=\"top6span\" style=\" color:#fff;background:red;;font-weight:600\">" + ret[3] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>";

                $('#' + ret[1] + 'BUYCOINS').html(trowString);
                //document.getElementById(ret[1] + 'SELLSILVERR').innerHTML = trowString;
            }
            else {

                trowString = "<span class=\"top6span\" style=\" color:#FFF;font-weight:600\">" + ret[3] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>";

                $('#' + ret[1] + 'BUYCOINS').html(trowString);
                //document.getElementById(ret[1] + 'SELLSILVERR').innerHTML = trowString;

            }
            //////END Buy




            //For sell
            if (ret[4] > oldRet[4]) {


                trowString = "<span class=\"top6span\" style=\" color:#fff;background:#00D600;;font-weight:600\">" + ret[4] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>";

                $('#' + ret[1] + 'SELLCOINS').html(trowString);
                //document.getElementById(ret[1] + 'SELLSILVERR').innerHTML = trowString;
            }
            else if (ret[4] < oldRet[4]) {

                trowString = "<span class=\"top6span\" style=\" color:#fff;background:red;;font-weight:600\">" + ret[4] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>";

                $('#' + ret[1] + 'SELLCOINS').html(trowString);
                //document.getElementById(ret[1] + 'SELLSILVERR').innerHTML = trowString;
            }
            else {

                trowString = "<span class=\"top6span\" style=\" color:#FFF;font-weight:600\">" + ret[4] + "</span>" +
                             "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>";

                $('#' + ret[1] + 'SELLCOINS').html(trowString);
                //document.getElementById(ret[1] + 'SELLSILVERR').innerHTML = trowString;
            }
            //END SELL


            oldDataGoldCoins = data.toString();

        }



        oldDataGoldCoins = data.toString();

    }
    catch (e) {
        //alert("OnSuccess" + e);
    }
}







//Gold Coinsssssssssssssssssssssssssss
function OnSuccessGoldCoins(data, status) {
    //alert(data);
    try {


        if (showOnce_coins == "0") {
            showOnce_coins = "1";
        }
        else {

            updateOnlyData_coins(data);
            return;
        }
        stopSpinner();
        var messagesDesktopp = "";
        messagesDesktopp = data.split("\n");
        //alert(messagesDesktopp.length);
        if (typeof oldDataGoldCoins != 'undefined') {

        }
        else {
            //alert("1");
            oldDataGoldCoins = data.toString();
        }
        var messagesOldDesktop = oldDataGoldCoins.split("\n");

        if (typeof messagesDesktopp != 'undefined') {
            if (maxRows == 0) {
                maxRows = messagesDesktopp.length;
            }


            removeAllRowsFromTable_gvData_Trending_GoldRates();

            var zebra = "";
            zebra = document.getElementById("gvData_Trending_GoldRates"); //Desktopppppppppppppppppppppppppppp
            var trow = "";
            var trowString = "";


            trowString = trowString + "<table class=\"tt_33\" width=\"100%\" style=\"\"> " +
                                            " <tr > " +
                                                " <td style=\"padding: 0px 3px 0;\"> " +
                                                    "<table  width=\"100%\" style=\"margin: 0 0 5px 0;\"> " +
                                                    "<tr>" +
                                                        "<td width=\"50%\" style=\"font-size: 12px;color:#000;font-weight:600;padding: 5px 10px;text-align:left; \">" +
            												"<span class=\"top4span\" style=\"background: #000;color: #FFF;padding: 5px 10px;border-radius: 10px 0;\">PRODUCT</span>" +
                                                        "</td>" +
                                                        "<td width=\"25%\" style=\"font-size: 12px;padding:5px 10px;color:#000;font-weight:600;\" >" +
                                                            "<span class=\"top4span\" style=\"background: #000;color: #FFF;padding: 5px 10px;border-radius: 10px 0;\">BUY</span>" +
                                                        "</td>" +

                                                        "<td width=\"25%\" style=\"font-size: 12px;padding:5px 10px;color:#000;font-weight:600;\" >" +
                                                            "<span class=\"top4span\" style=\"background: #000;color: #FFF;padding: 5px 10px;border-radius: 10px 0;\">SELL</span>" +
                                                        "</td>" +

            //                                                                "<td style=\"width:20%; text-align: center !Important\" >" +
            //                                                                    "<span></span>" +
            //                                                                "</td>" +

            //"<td style=\"width:15%; text-align: center !Important\" >" +
            //   "<span>LOW</span>" +
            //"</td>" +
                                                        "</tr>" +
                                                    "</table>"
            "</td>" +
                                                "</tr>" +
            //Second Row
                                                     " <tr> " +
                                                  " <td> ";
            //messages.length
            for (var i = 0; i < messagesDesktopp.length; i++) {
                //var ret = jQuery.parseJSON(messages[i]);
                var ret = messagesDesktopp[i].split("\t");
                var oldRet;


                oldRet = messagesOldDesktop[i].split("\t");
                if (typeof ret[1] != 'undefined') {



                    if (ret[3] > oldRet[3]) {

                        trowString = trowString +
                        //"<table width=\"100%\"><tr><td onclick=\"callBuySell('" + ret[1] + "')\" >" +
                                            "<table class=\"res_mob_font_width\"  width=\"100%\" style=\"\"> " +
                                                "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\" style=\"text-align: center;\"> " +
                                                    "<td class=\"buy_sell_label\" style=\"width:50%;text-align:left;color:#FFF\">" + ret[2] + "</td> " +  // small;
                                                    "<td id=\"" + ret[1] + "BUYCOINS\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                        //"<span style=\"font-size: 15px;background-color:#44ad4f;border-radius:10px;color:#FFF;font-weight:500\">" + buySmall + "</span>
                                                    "<span class=\"top6span\" style=\" color:#fff;background:#00D600;;font-weight:600\">" + ret[3] + "</span>" +
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                    "</td>";

                    }
                    else if (ret[3] < oldRet[3]) {

                        trowString = trowString +
                        //                                "<table width=\"100%\">"+
                        //                                    "<tr>"+
                        //                                        "<td>"+
                                            "<table class=\"res_mob_font_width\" width=\"100%\" style=\"\">" +
                                                "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                                    "<td class=\"buy_sell_label\" style=\"width:50%;text-align:left;color:#FFF\">" + ret[2] + "</td>" +
                                                    "<td id=\"" + ret[1] + "BUYCOINS\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                        //"<span style=\"font-size: 15px; background-color:#d0161e;border-radius:10px;color:#FFF;font-weight:500\">" + buySmall + "</span>
                                                    "<span class=\"top6span\" style=\" color:#fff;background:red;;font-weight:600\">" + ret[3] + "</span>" +
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                    "</td>";

                    }
                    else {
                        trowString = trowString +
                        //                                    "<table width=\"100%\">"+
                        //                                        "<tr>"+
                        //                                            "<td>"+
                                                "<table class=\"res_mob_font_width\" width=\"100%\" style=\"\">" +
                                                    "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                                        "<td class=\"buy_sell_label\" style=\"width:50%;text-align:left;color:#FFF\">" + ret[2] + "</td>" +
                                                        "<td id=\"" + ret[1] + "BUYCOINS\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                        //"<span style=\"font-size: 15px; font-weight:500; \">" + buySmall + "</span>
                                                        "<span class=\"top6span\" style=\"color:#FFF;font-weight:600;\">" + ret[3] + "</span>" +
                                                        "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                        "</td>";

                    }





                    //For Sell

                    if (ret[4] > oldRet[4]) {

                        trowString = trowString +


                                                    "<td id=\"" + ret[1] + "SELLCOINS\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                        //"<span style=\"font-size: 15px; background-color:#44ad4f;border-radius:10px;color:#FFF;font-weight:500\">" + sellSmall + "</span>
                                                    "<span class=\"top6span\" style=\"color:#fff;background:#00D600;font-weight:600;\">" + ret[4] + "</span>" + //<br/><span style=\"color:#8ce08c;\">H : " + ret[5] + "</span>
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                    "</td>";

                    }
                    else if (ret[4] < oldRet[4]) {

                        trowString = trowString +
                        //                                "<table width=\"100%\">"+
                        //                                    "<tr>"+
                        //                                        "<td>"+

                                                    "<td id=\"" + ret[1] + "SELLCOINS\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                        //"<span style=\"font-size: 15px;background-color:#d0161e;border-radius:10px;color:#FFF;font-weight:500\">" + sellSmall + "</span>
                                                    "<span class=\"top6span\" style=\"color:#fff;background:red;font-weight:600\">" + ret[4] + "</span>" +
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                    "</td>";



                    }
                    else {
                        trowString = trowString +
                        //                                    "<table width=\"100%\">"+
                        //                                        "<tr>"+
                        //                                            "<td>"+

                                                        "<td id=\"" + ret[1] + "SELLCOINS\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                        //<span style=\"font-size: 15px; padding:1px 5px;font-weight:500;color:black\">" + sellSmall + "</span>
                                                        "<span class=\"top6span\" style=\" padding:1px 5px;font-weight:600;color:#FFF\">" + ret[4] + "</span>" +
                                                        "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                        "</td>";


                    }


                    trowString = trowString + "</tr></table>";




                }
                oldDataGoldCoins = data.toString();

            }
            trowString = trowString + "</td></tr></table>"; //</td></tr>









            trow = $(trowString);
            trow.prependTo(zebra);




        }

        if (counterRefresh == 0) {
            //myScroll.refresh();
            counterRefresh = counterRefresh + 1;
        }
        oldDataGoldCoins = data.toString();
        //OnSuccessMobileTop(data, status);

    }
    catch (e) {
        //alert("OnSuccess" + e);
        oldDataGoldCoins = data.toString();
        //alert(oldDataGoldCoins);
    }


}



function OnErrorGoldCoins(request, status, error) {
    // alert("Webservice Error: " + request.statusText);
}



 



//##################################################################
//##################################################################
//SilverBar
//##################################################################
//##################################################################

function CallWebServiceFromJquery_SilverBar() {
    try {

        //alert(localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/kakasilverbar");

        $.ajax({
            type: "GET",
            //url: urlLink,
            url: "https://" + localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/viindhya",
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccess1_SilverBar,
            error: OnError1_SilverBar,
            cache: false
        });
    }
    catch (e) {
        //alert("CallWebServiceFromJquery " + e);
    }
}

function OnSuccess1_SilverBar(data, status) {
    //alert(data);
    try {

        stopSpinner();
        var messagesDesktopp = "";
        messagesDesktopp = data.split("\n");
        //alert(messagesDesktopp.length);
        if (typeof oldData_SilverBar != 'undefined') {

        }
        else {
            //alert("1");
            oldData_SilverBar = data.toString();
        }
        var messagesOldDesktop = oldData_SilverBar.split("\n");

        if (typeof messagesDesktopp != 'undefined') {
            if (maxRows == 0) {
                maxRows = messagesDesktopp.length;
            }

            removeAllRowsFromTable_top3_SilverBar();
            removeAllRowsFromTable_SilverBar();



            var zebra = "";
            var zebra_top3 = document.getElementById("gvData_top3_SilverBar"); //Desktopppppppppppppppppppppppppppp
            zebra = document.getElementById("gvData_SilverBar"); //Desktopppppppppppppppppppppppppppp
            var trow = "";
            var trow_top3 = "";
            //GOLD
            var retDesktop = "";
            retDesktop = messagesDesktopp[0].split("\t");
            //alert(retDesktop.length);
            var oldRetDesktop = "";
            var trowString = "";
            var trowString_top3 = "";
            oldRetDesktop = messagesOldDesktop[0].split("\t");

            if (typeof retDesktop[2] != 'undefined') {

                trowString_top3 = trowString_top3 + "<table class=\"table1001\"><tr><td align=\"center\">";

                if (retDesktop[3] > oldRetDesktop[3]) {
                    trowString_top3 = trowString_top3 + "<table  width=\"100%\" class=\"goldd\"><tr style=\"\"><td class=\"sell\" style=\"color:#000;text-align:center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\" color:#FFF;text-align: center !Important;\"><span class=\"top5span\" style=\"background: #2db919;color: #FFF;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                                                "<tr>" +
                    //                                                    "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                                                "</tr>" +
                                                "</table>";
                }
                else if (retDesktop[3] < oldRetDesktop[3]) {
                    trowString_top3 = trowString_top3 + "<table  width=\"100%\" class=\"goldd\"><tr style=\"\"><td class=\"sell\" style=\"color:#000;text-align:center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#FFF;text-align: center !Important;\"><span class=\"top5span\" style=\"background: red;color: #FFF;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                                                "<tr>" +
                    //                                                    "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                                                "</tr>" +
                                                "</table>";
                }
                else {
                    trowString_top3 = trowString_top3 + "<table  width=\"100%\" class=\"goldd\"><tr style=\"\"><td class=\"sell\" style=\"color:#000;text-align:center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#000;text-align: center !Important;\"><span class=\"top5span\" style=\"color:#000;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                                                "<tr>" +
                    //                                                    "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                                                "</tr>" +
                                              "</table>";
                }

                trowString_top3 = trowString_top3 + "</td>";

                //}
            }
            //SILVER
            retDesktop = messagesDesktopp[1].split("\t");
            oldRetDesktop = messagesOldDesktop[1].split("\t");
            if (typeof retDesktop[2] != 'undefined') {

                if (retDesktop[3] > oldRetDesktop[3]) {

                    trowString_top3 = trowString_top3 + "<td align=\"center\"><table  width=\"100%\" class=\"goldd\"><tr><td class=\"sell\" style=\"color:#000;text-align: center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#FFF;text-align: center !Important;\"><span class=\"top5span\" style=\"background: #2db919;color: #FFF;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                        "<tr>" +
                    //                            "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                        "</tr>" +
                    "</table></td>";

                }
                else if (retDesktop[3] < oldRetDesktop[3]) {
                    trowString_top3 = trowString_top3 + "<td align=\"center\"><table  width=\"100%\" class=\"goldd\"><tr><td class=\"sell\" style=\"color:#000;text-align: center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#FFF;text-align: center !Important;\"><span class=\"top5span\" style=\"background: red;color: #FFF;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                            "<tr>" +
                    //                                "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                            "</tr>" +
                            "</table></td>";
                }
                else {
                    trowString_top3 = trowString_top3 + "<td align=\"center\"><table  width=\"100%\" class=\"goldd\"><tr><td class=\"sell\" style=\"color:#000;text-align: center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#000;text-align: center !Important;\"><span class=\"top5span\" style=\"color:#000;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                        "<tr>" +
                    //                            "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                        "</tr>" +
                    "</table></td>";
                }

            }
            //INR
            retDesktop = messagesDesktopp[2].split("\t");
            oldRetDesktop = messagesOldDesktop[2].split("\t");
            if (typeof retDesktop[2] != 'undefined') {
                var trowString_top3;
                //if (deletedScrips[2] != "0") {
                if (retDesktop[3] > oldRetDesktop[3]) {


                    trowString_top3 = trowString_top3 + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\" ><tr><td class=\"sell\" style=\"color:#000;text-align: center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#FFF;text-align: center !Important;\"><span class=\"top5span\" style=\"background: #2db919;color: #FFF;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                                                "<tr>" +
                    //                                                    "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                                                "</tr>" +
                    "</table></td>"

                }
                else if (retDesktop[3] < oldRetDesktop[3]) {

                    trowString_top3 = trowString_top3 + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\" ><tr><td class=\"sell\" style=\"color:#000;text-align: center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#FFF;text-align: center !Important;\"><span class=\"top5span\" style=\"background: red;color: #FFF;\">" + retDesktop[3] + "</span></td></tr>" +
                    //                                                "<tr>" +
                    //                                                    "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                                                "</tr>" +
                    "</table></td>";
                }
                else {

                    trowString_top3 = trowString_top3 + "<td style=\"width:33%;\" align=\"center\"><table class=\"goldd\" width=\"100%\"><tr><td class=\"sell\" style=\"color:#000;text-align: center !Important;\">" + retDesktop[2] + "</td></tr><tr><td id=\"" + retDesktop[1] + "BUY\" style=\"color:#000;text-align: center !Important;\"><span class=\"top5span\" style=\"\">" + retDesktop[3] + "</span></td></tr>" +
                    //                                                "<tr>" +
                    //                                                    "<td style=\"color: #000;text-align: center !Important;\"><span class=\"bloc_GS\" style=\"color:#000;\">L: " + retDesktop[6] + "</span>  <span class=\"bloc_GS\" style=\"color:#000;\">H: " + retDesktop[5] + "</span></td>" +
                    //                                                "</tr>" +
                    "</table></td>";
                }


                //}
            }

            trowString_top3 = trowString_top3 + "</tr></table>";






            trowString = trowString + "<table class=\"tt_33\" width=\"100%\" style=\"margin-top:5px\"> " +
                                            " <tr > " +
                                                " <td style=\"padding: 0px 3px 0;\"> " +
                                                    "<table width=\"100%\" style=\"margin: 0 0 5px 0;\"> " +
                                                    "<tr>" +
                                                        "<td width=\"50%\" style=\"font-size: 12px;color:#000;font-weight:600;padding: 5px 10px;text-align:left; \">" +
            												"<span class=\"top4span\" style=\"background: #000;color: #FFF;padding: 5px 10px;border-radius: 10px 0;\">PRODUCT</span>" +
                                                        "</td>" +
                                                        "<td width=\"25%\" style=\"font-size: 12px;padding:5px 10px;color:#000;font-weight:600;\" >" +
                                                            "<span class=\"top4span\" style=\"background: #000;color: #FFF;padding: 5px 10px;border-radius: 10px 0;\">BUY</span>" +
                                                        "</td>" +

                                                        "<td width=\"25%\" style=\"font-size: 12px;padding:5px 10px;color:#000;font-weight:600;\" >" +
                                                            "<span class=\"top4span\" style=\"background: #000;color: #FFF;padding: 5px 10px;border-radius: 10px 0;\">SELL</span>" +
                                                        "</td>" +

            //                                                                "<td style=\"width:20%; text-align: center !Important\" >" +
            //                                                                    "<span></span>" +
            //                                                                "</td>" +

            //"<td style=\"width:15%; text-align: center !Important\" >" +
            //   "<span>LOW</span>" +
            //"</td>" +
                                                        "</tr>" +
                                                    "</table>"
            "</td>" +
                                                "</tr>" +
            //Second Row
                                                     " <tr> " +
                                                  " <td> ";
            //messages.length
            for (var i = 3; i < messagesDesktopp.length; i++) {
                //var ret = jQuery.parseJSON(messages[i]);
                var ret = messagesDesktopp[i].split("\t");
                var oldRet;


                oldRet = messagesOldDesktop[i].split("\t");
                if (typeof ret[1] != 'undefined') {




                    if (ret[3] > oldRet[3]) {

                        trowString = trowString +
                                            "<table class=\"res_mob_font_width\"  width=\"100%\" style=\"\"> " +
                                                "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\" style=\"text-align: center;\"> " +
                                                    "<td class=\"buy_sell_label\" style=\"width:50%;text-align:left;color:#FFF\">" + ret[2] + "</td> " +  // small;
                                                    "<td id=\"" + ret[1] + "BUY\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    "<span class=\"top6span\" style=\"font-weight:600;background: #2db919;color: #FFF;\">" + ret[3] + "</span>" +
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                    "</td>";

                    }
                    else if (ret[3] < oldRet[3]) {

                        trowString = trowString +

                                            "<table class=\"res_mob_font_width\" width=\"100%\" style=\"\">" +
                                                "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                                    "<td class=\"buy_sell_label\" style=\"width:50%;text-align:left;color:#FFF\">" + ret[2] + "</td>" +
                                                    "<td id=\"" + ret[1] + "BUY\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    "<span class=\"top6span\" style=\"font-weight:600;background: red;color: #FFF;\">" + ret[3] + "</span>" +
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                    "</td>";

                    }
                    else {
                        trowString = trowString +

                                                "<table class=\"res_mob_font_width\" width=\"100%\" style=\"\">" +
                                                    "<tr onclick=\"callBuySell('" + ret[1] + "','" + ret[2] + "');\"  style=\"text-align: center;\">" +
                                                        "<td class=\"buy_sell_label\" style=\"width:50%;text-align:left;color:#FFF\">" + ret[2] + "</td>" +
                                                        "<td id=\"" + ret[1] + "BUY\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                        "<span class=\"top6span\" style=\"color:#FFF;font-weight:600;\">" + ret[3] + "</span>" +
                                                        "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">H : " + ret[5] + "</span>" +
                                                        "</td>";

                    }





                    //For Sell

                    if (ret[4] > oldRet[4]) {

                        trowString = trowString +
                                                    "<td id=\"" + ret[1] + "SELL\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    "<span class=\"top6span\" style=\"font-weight:600;background: #2db919;color: #FFF;\">" + ret[4] + "</span>" + //<br/><span style=\"color:#8ce08c;\">H : " + ret[5] + "</span>
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                    "</td>";

                    }
                    else if (ret[4] < oldRet[4]) {

                        trowString = trowString +
                                                    "<td id=\"" + ret[1] + "SELL\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                    "<span class=\"top6span\" style=\"font-weight:600;background: red;color: #FFF;\">" + ret[4] + "</span>" +
                                                    "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                    "</td>";
                    }
                    else {
                        trowString = trowString +

                                                        "<td id=\"" + ret[1] + "SELL\" style=\"width:25%;text-align: center !Important;padding-top: 5px;\">" +
                                                        "<span class=\"top6span\" style=\"font-weight:600;color:#FFF;\">" + ret[4] + "</span>" +
                                                        "<span style=\"font-size: 11px;border-radius:10px;color:#FFF;font-weight:600;display:block;\">L : " + ret[6] + "</span>" +
                                                        "</td>";
                    }


                    trowString = trowString + "</tr></table>";



                }
                oldData_SilverBar = data.toString();

            }
            trowString = trowString + "</td></tr></table>"; //</td></tr>









            trow = $(trowString);
            trow.prependTo(zebra);



            trow_top3 = $(trowString_top3);
            trow_top3.prependTo(zebra_top3);



        }

        if (counterRefresh == 0) {
            //myScroll.refresh();
            counterRefresh = counterRefresh + 1;
        }
        oldData_SilverBar = data.toString();
        //OnSuccessMobileTop(data, status);

    }
    catch (e) {
        //alert("OnSuccess" + e);
        oldData_SilverBar = data.toString();
        //alert(oldData_SilverBar);
    }





}



function OnError1_SilverBar(request, status, error) {
    //alert("Webservice Error: " + request.statusText + " " + error);
}







































$(document).ready(function () {
    //fnStartClock();
});




function CallWebServiceFromJqueryMarquee() {
    try {
        // alert("CallWebServiceFromJqueryMarquee");
        // //alert(localStorage.webPanel + "/WebServiceGetMarquee.asmx/getMarquee?username=" + localStorage.appnameWithMiniadminId);

        $.ajax({
            type: "GET",
            //            url: "https://message.arihantspot.com/WebServiceGetMarquee.asmx/getMarquee",
            url: "https://" + localStorage.webPanel + "/WebServiceGetMarquee.asmx/getMarquee?username=" + localStorage.appnameWithMiniadminId,
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccessMarquee,
            error: OnErrorMarquee,
            cache: false
        });
    }
    catch (e) {
        //alert("CallWebServiceFromJqueryMarquee " + e);
    }


}

function OnSuccessMarquee(data, status) {
    //alert(data);
    try {

        var message = data.split("|");

        if (typeof message != 'undefined') {

            removeAllRowsFromMarquee();

            var zebra = document.getElementById("marqueeData");
            var trow;
            var trowString = "";
            trowString = trowString + convert(message[1]);

            //trow = $(trowString);
            //trow.prependTo(zebra);

            $("#marqueeData").html(trowString);
            $('.marquee').marquee({
                //speed in milliseconds of the marquee
                duration: 30000,
                //gap in pixels between the tickers
                gap: 50,
                //time in milliseconds before the marquee will start animating
                delayBeforeStart: 0,
                //'left' or 'right'
                direction: 'left',
                //true or false - should the marquee be duplicated to show an effect of continues flow
                duplicated: false,
                pauseOnHover: true
            });
        }


    }
    catch (e) {
        // alert("OnSuccessMarquee" + e);
    }


}



function OnErrorMarquee(request, status, error) {
    //alert("Webservice Error: " + request.statusText);
}

function removeAllRowsFromMarquee() {

    $("#marqueeData").empty();

}

var convert = function (convert) {

    return $("<span />", { html: convert }).text();

};
