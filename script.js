function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal == 0 || isNaN(principal) || principal < 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    location.reload();
    return false;
  }
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;

    var simpleInterest = ((principal*years*rate)/100);
    var year = new Date().getFullYear()+parseInt(years);
   
   document.getElementById("result").innerHTML = "<br>If you deposit <mark>"+ principal+"</mark>,</br>"
                                                +"at an interest rate of <mark>"+rate+"%</mark>.</br>"
                                                +"You will receive an amount of <mark>"+simpleInterest+"</mark>,</br>"
                                                +"in the year <mark>"+year+"</mark>";
   
}
