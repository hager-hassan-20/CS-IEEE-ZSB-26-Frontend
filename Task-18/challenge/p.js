let days = document.querySelector(".day")
let months = document.querySelector(".month")
let years = document.querySelector(".year")

let dayres = document.querySelector(".days")
let monthres = document.querySelector(".months")
let yearres = document.querySelector(".years")

function calcAge(day,month,year){
    let birthDay = new Date(year,month-1,day)
    let today = new Date()
    let dayb = today.getDate() - birthDay.getDate()
    let monthb = today.getMonth() - birthDay.getMonth()
    let yearb = today.getFullYear() - birthDay.getFullYear()

    if(dayb < 0){
        monthb--
        dayb +=30
    }
    if(monthb < 0){
        yearb--
        monthb +=12
    }
    return {yearb,monthb,dayb}
}
years.addEventListener("blur",function () {
    let day = +days.value
    let month = +months.value
    let year = +years.value

    let age = calcAge(day,month,year)
    yearres.textContent = age.yearb
    monthres.textContent= age.monthb
    dayres.textContent = age.dayb
})
