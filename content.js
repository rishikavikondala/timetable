// Used for storing the current tab URL

$(document).ready(function() {
    $(location).attr('href');
    var tabUrl = document.location.href;
    fetch(`https://timetable-python-webscraper.appspot.com?url=${encodeURIComponent(tabUrl)}`).then(r => r.text()).then(result => {
        alert(result)
    })
    //console.log(tabUrl);
})
//const functionUrl = "https://us-central1-timetable-255723.cloudfunctions.net/function-1";
//1. Get URL
//2. make an XML HTTP request
//3. Get URL from cloud function and set it to a const
//4. Open URL
//5. Send HTTP