function compute()
{
    var p = document.getElementById("principal").value;
    var t = document.getElementById("years").value;
    var r = document.getElementById("rate").value;

    var simpleInterest = ((p*t*r)/100);
   
   document.getElementById("result").innerHTML = "<br>If you deposit <mark>"+ p+"</mark>,</br>"
                                                +"at an interest rate of <mark>"+r+"%</mark>.</br>"
                                                +"You will receive an amount of <mark>"+simpleInterest+"</mark>,</br>"
                                                +"in the year <mark>"+202+t+"</mark>";
   
}
