let currentYear= new Date().getFullYear()
console.log(currentYear);

let tr = new Audio('./correct.mp3')
let er = new Audio('./whaha.mp3')

const OnResolve=()=>{
    let incorrect=document.getElementById("incorrect")
    let result = document.getElementById("result")
    let year = document.getElementById("year").value;
    year= parseInt(year);
        console.log(year);
        if(Number.isNaN(year)){
            incorrect.style.display="block"
            incorrect.style.color="red"
            result.style.display="none"
            er.play()
        }else{
            let res = currentYear - year
            result.style.display="block";
            result.innerHTML="Your age ٩(｡•́‿•̀｡)۶ > "+ res;
            result.style.color="lime"
            result.style.textShadow="0px 0px 30px blue"
            tr.play()
        }
}
