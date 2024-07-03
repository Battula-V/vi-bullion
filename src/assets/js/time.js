function updateDateTime() {
    var indianTime = new Date(new Date().getTime() + (330 + new Date().getTimezoneOffset()) * 60000); 
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dayIndex = indianTime.getDay();
    var day = days[dayIndex];
    var time = indianTime.toLocaleTimeString();
    var date = indianTime.getDate();
    var month = months[indianTime.getMonth()];
    var year = indianTime.getFullYear();

    var clockIcon = '<i class="fa fa-clock-o"></i>';

    var dateTimeString = time + '</span>';
    document.getElementById('datetime').innerHTML = dateTimeString;
}

window.onload = function () {
    setInterval(updateDateTime, 1000);
};
