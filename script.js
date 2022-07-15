
function currentTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "A.M.";


    switch(hh){
        case 12:
            hh = 12;
            session = "P.M.";
        break;
        case 0:
            hh = 12;
            session = "A.M.";
        break;
        case hh > 12:
            hh = hh - 12;
            session = "P.M.";
        break;
    };
    
   

    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0' + mm : mm;
    ss = (ss < 10) ? '0' + ss : ss;

    let time = hh  + ':' + mm + ':' + ss + ' ' + session;
    document.getElementById('clock').innerText = time;
    let t = setTimeout(function(){currentTime() }, 1000);
};

currentTime();


function currentDate(){
    let date = new Date();

    let month = date.getMonth();
    let dayOfTheMonth = date.getDate();  //number
    let dayOfTheWeek = date.getDay();    //MonTuesWed...
    let year = date.getFullYear();

    switch(month){
        case 0:
            month = 'January';
        break;
        case 1:
            month = 'February';
        break;
        case 2:
            month = 'March';
        break;
        case 3:
            month = 'April';
        break;
        case 4:
            month = 'May';
        break;
        case 5:
            month = 'June';
        break;
        case 6:
            month = 'July';
        break;
        case 7:
            month = 'August';
        break;
        case 8:
            month = 'September';
        break;
        case 9:
            month = 'October';
        break;
        case 10:
            month = 'November';
        break;
        case 11:
            month = 'December';
        break;
    };

    switch(dayOfTheWeek){
        case 0:
            dayOfTheWeek = 'Sunday';
        break;
        case 1:
            dayOfTheWeek = 'Monday';
        break;
        case 2:
            dayOfTheWeek = 'Tuesday';
        break;
        case 3:
            dayOfTheWeek = 'Wednesday';
        break;
        case 4:
            dayOfTheWeek = 'Thursday';
        break;
        case 5:
            dayOfTheWeek = 'Friday';
        break;
        case 6:
            dayOfTheWeek = 'Saturday';
        break;
    };

    let todaysDate = dayOfTheWeek  + ', ' + month + ' ' + dayOfTheMonth + ', ' + year;
    document.getElementById('calendar').innerHTML = todaysDate;

};

currentDate();