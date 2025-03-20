$(document).ready(function() {
    $("#day").click(function() { 
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let today = new Date().getDay(); 
        $("#dayShow").text("Today is: " + days[today]);
    });
    $("#date").click(function() {
        setInterval(() => {
            $("#dateShow").text(new Date());
        },);
    });
    
    $("#whileLoop").click(function(){
      let num = $("#table").val();
      let i = 1;
      let output ="";
      if(num === ""){
        output="Please enter a number"
        ;
      }
      else{
        num = parseInt(num);
        while (i <= 10){
            output += `${num} * ${i} = ${num * i} <br>`; 
            i++;
        }
      }
      $("#result").html(output);
    });

    $("#forLoop").click(function(){
        let num = $("#factorial").val();
        let fact = 1 ;
        let output = "";
        if(num===""|| num <0){
            output="Please enter a number"
        }
        else{
            for(let i = 1; i <= num; i++){
                fact *=i;
            }
            output = `${fact}`;
        }
        $("#results").html(output);
    });

    $(document).ready(function () {
        $("#doWhileLoop").click(function () {
            let num1 = $("#num1").val();
            let num2 = $("#num2").val();
            let output = "";
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            if (isNaN(num1) || isNaN(num2) || num1 > num2) {
                output = "Please enter valid numbers ";
            } else {
                let i = num1;
                do {
                    output += i + "<br>";
                    i++;
                } while (i <= num2);
            }
            $("#output").html(output); 
        });
    });
});