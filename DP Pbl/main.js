// BASE_URL = "http://127.0.0.1:5000/compare-strings"
function getText(){
//     console.log("Hii")
    const input1 = document.getElementById("1").value;
//     // console.log(input1);
    // const input2 = document.getElementById("2").value;
//     // console.log(input2);
//     // if(input1 == "" || input2 == ""){
//     //     alert("Enter both the strings!");
//     // }else if(input1 != "" && input2 != ""){
//     //     getData(input1, input2);
//     // }
    const l1 = document.getElementById("topic").value;
    const l2 = document.getElementById("level").value;
    const l3 = document.getElementById("language").value;
    const l4 = document.getElementById("uni").value;
    const l5 = document.getElementById("type").value;
    document.getElementById("cards").style.display = "flex";
    getData(l1, l2, l3, l4, l5);
}
// let maindata;
var getData = async (l1, l2, l3, l4, l5) => {
const url = 'http://127.0.0.1:5000/recommend';
const data = JSON.stringify({
    "topic" : l1,
    "level" : l2,
    "language" : l3,
    "uni" : l4,
    "course_type" :l5
});
fetch(url, {
  method: 'POST',
    headers: {
    'Content-Type': 'application/json'
  },
  body: data
})
.then(r => {
  if (r) {
    console.log(r);
    const temp = r.json();
    temp
    .then(
        (i) => 
        {
            // maindata = i
            console.log(i[1])
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
        })
    .catch((i) => console.log(i))
  } else {
    // handle the error
    console.error('Request failed:', r);
  }
})
.catch(error => {
  // handle any network errors
  console.error('Network error:', error);
});
}

function reset(){
    document.getElementById("1").value = ""
    document.getElementById("2").value = ""
}

getData()

function refresh(){
    location.reload();
}

// export {maindata};