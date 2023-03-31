let count = document.getElementById("count-el").innerText
function increment(){
    count++
    document.getElementById("count-el").innerText=count
}

let prevEntry="Your Saved Entries Are: "

function save()
{
    prevEntry+=" - "+document.getElementById("count-el").innerText
    document.getElementById("prev").innerText=prevEntry
    document.getElementById("count-el").innerText=0
    count=0
}
