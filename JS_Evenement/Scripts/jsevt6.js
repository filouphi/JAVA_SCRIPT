function surface(){
    var nombreA=document.getElementById("inpuLongueur").value;
    var nombreB=document.getElementById("inputLargeur").value;
    if (nombreA==0  ) {
        document.getElementById("pbLongueur").innerHTML="vous avez entré un zero dans la case longueur";
    } else if (nombreB ==0 ) {
        document.getElementById("pbLargeur").innerHTML="vous avez entré un zero dans la case largeur";

    } else {

        var result=(nombreA*nombreB);
       // alert("result");
       document.getElementById("resultat").innerHTML=result;
    }
    
    //document.getElementById("resultat").innerHTML=result;
    
}