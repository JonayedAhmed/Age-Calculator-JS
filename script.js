let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate(){
    let birthDate = new Date(document.getElementById("start-date-input").value)
    
    let birthDateDetails = {
        date: birthDate.getDate(),
        month: birthDate.getMonth(),
        year: birthDate.getFullYear(),
        leapYear: false
    }

    let currentDate = new Date(document.getElementById("end-date-input").value)

    let currentDateDetails = {
        date: currentDate.getDate(),
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
        leapYear: false
    }

    isLeapYear = checkLeapYear(birthDateDetails.year);
    birthDateDetails.leapYear = isLeapYear;

    isLeapYear = checkLeapYear(currentDateDetails.year);
    currentDateDetails.leapYear = isLeapYear;

    //var validYear = checkYearValidity(currentDateDetails, birthDateDetails)
    
    birthYear = currentDateDetails.year - birthDateDetails.year;
    
    if(currentDateDetails.month >= birthDateDetails.month){
        birthMonth = currentDateDetails.month - birthDateDetails.month;
    }

    else{
        birthYear--;
        if(birthYear < 0){
            birthYear = 0;  
        }
        birthMonth = 12 + currentDateDetails.month - birthDateDetails.month;
    }

    if(currentDateDetails.date >= birthDateDetails.date){
        birthDate = currentDateDetails.date - birthDateDetails.date;
    }
    else{
        birthMonth--;
        days = checkDays(currentDateDetails);
        console.log(days);
        birthDate = days + currentDateDetails.date - birthDateDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(bDate, bMonth, bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function checkDays(currentDateDetails){
    
    if(currentDateDetails.leapYear){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }

    console.log(currentDateDetails.month - 2);

    if(currentDateDetails.month - 1 < 0){
        return 31;
    }

    return months[currentDateDetails.month - 1];
}

function checkLeapYear(yearCheck){
    if(yearCheck%4 == 0 || yearCheck%100 == 0){
        return true;
    }
    return false;
}