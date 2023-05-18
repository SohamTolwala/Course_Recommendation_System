import maindata from './main'
console.log(maindata)
function set(){

    window.location = "/mainPage.html"
    document.getElementById("1").innerHTML = `${i[0].course_title}`
    document.getElementById("2").innerHTML = `${i[0].course_difficulty}`
    document.getElementById("3").innerHTML = `${i[0].course_Certificate_type}`
    document.getElementById("4").innerHTML = `${i[0].overall_rating}`
            
    document.getElementById("5").innerHTML = `${i[1].course_title}`
    document.getElementById("6").innerHTML = `${i[1].course_difficulty}`
    document.getElementById("7").innerHTML = `${i[1].course_Certificate_type}`
    document.getElementById("8").innerHTML = `${i[1].overall_rating}`

    document.getElementById("9").innerHTML = `${i[2].course_title}`
    document.getElementById("10").innerHTML = `${i[2].course_difficulty}`
    document.getElementById("11").innerHTML = `${i[2].course_Certificate_type}`
    document.getElementById("12").innerHTML = `${i[2].overall_rating}`

    document.getElementById("13").innerHTML = `${i[3].course_title}`
    document.getElementById("14").innerHTML = `${i[3].course_difficulty}`
    document.getElementById("15").innerHTML = `${i[3].course_Certificate_type}`
    document.getElementById("16").innerHTML = `${i[3].overall_rating}`
}