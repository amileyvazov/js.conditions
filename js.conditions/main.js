var i=prompt("3reqemli eded daxil edin:");
if(i>99 && i<1000){
    var teklik=i%10;
    var onluq=((i-teklik)/10)%10;
    var a=(onluq*10)+teklik;
    var yuzluk=(i-a)/100;
  if(teklik!=onluq!=yuzluk){
    alert("butun reqemler beraber deyil!")
  }
  else{
    alert("butun reqemler beraberdir!")
  }
}
else{
 alert("butun reqemler beraberdi!")
}
