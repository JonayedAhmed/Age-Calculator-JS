let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate(){
    setDefault();

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

    var validDate = checkValidity(birthDateDetails, currentDateDetails)
    
    if(validDate){
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
    }
    else{
        alert("Invalid Date");
        setDefault();
    }

    displayResult(birthDate, birthMonth, birthYear);
}




function checkLeapYear(yearCheck){
    if(yearCheck%4 == 0 || yearCheck%100 == 0){
        return true;
    }
    return false;
}

function checkValidity(birthDetails, currentDetails){
    if(birthDetails.year>currentDetails.year){
        return false;
    }
    else if((birthDetails.year==currentDetails.year) && (birthDetails.month > currentDetails.month)){
        return false;
    }
    else if((birthDetails.year==currentDetails.year) && (birthDetails.month == currentDetails.month) 
    && (birthDetails.date > currentDetails.date)){
        return false;
    }
    return true;
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

function displayResult(bDate, bMonth, bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function setDefault(){
    document.getElementById("years").textContent = "-";
    document.getElementById("months").textContent = "-";
    document.getElementById("days").textContent = "-";
}
