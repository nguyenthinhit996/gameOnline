function addEventListenerSlider(){
    console.log("dsfdasfsdfdf");
    const input = document.getElementById("slider");
    const label = document.querySelector("label");
    console.log(input);
    input.addEventListener("input", event => {
        console.log(input.value);
      const value = Number(input.value) / 100;
      input.style.setProperty("--thumb-rotate", `${value * 720}deg`);
      label.innerHTML = Math.round(value * 100);
      console.log("dsfdsfdsf");
    });

     
}

function countDown(){
    var timeleft = 0;
    var downloadTimer = setInterval(function(){
    timeleft++;
    console.log(timeleft);
    document.getElementById("slider").value=timeleft;
    const input = document.getElementById("slider");
    const label = document.querySelector("label");
    const value = Number(timeleft) / 100;
    input.style.setProperty("--thumb-rotate", `${value * 720}deg`);
    label.innerHTML = Math.round(value * 100);
    console.log(Math.round(value * 100));


    // document.getElementById("slider").style.border= "none";
    // document.getElementById("slider").style.height= "30px";
    // document.getElementById("slider").style.width= "30px";
    // document.getElementById("slider").style.backgroundColor= "transparent";
    // document.getElementById("slider").style.backgroundImage=" url('https://storage.googleapis.com/pw-stuff/thumbs-sprite.png')";
    // document.getElementById("slider").style.backgroundPosition = "100% 0px";
    // document.getElementById("slider").style.backgroundSize= "cover";
    // document.getElementById("slider").style.transform="scale(2) rotateZ(var(--thumb-rotate, 10deg)";
    
    if(timeleft > 100)
        clearInterval(downloadTimer);
    },1000);
}

 

function genaratorTable(){
    var parentTable=document.getElementById("gameBody");
    var table="<table>";
    for(i=1;i<=9;i++){
        var tr="<tr>";
        for(j=1;j<=9;j++){
            var td="<td>"+i+""+j+"</td>";
            var td="<td>"+
            " <input type='text' id="+i+""+j+" value="+i+""+j+">"+
            "</td>";
            tr=tr+td;
        }
        tr=tr+"</tr>";
        table=table+tr;
    }
    table=table+"</table>";
    parentTable.innerHTML=table;
    console.log( table);
}
// -------------------

