function hex(){
    let a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let n=document.getElementById("text").value;
    var he="";
    if(isNaN(n)){
      document.getElementById("hx").innerHTML="Enter The Number";
    }
    else{
    while(n>0){
      var c=n%16;
      if(c<16){
         he=a[c]+he;
      }
      n=Math.floor(n/16);
    }
      document.getElementById("hx").innerHTML=he;
   }
}
function dec(){
  let r=document.getElementById("text").value;
  var by="";
  while(r>0){
    let b=r%2;
    by=b+by;
    r=Math.floor(r/2);
  }
  document.getElementById("deci").innerHTML=by;
}