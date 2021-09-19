$(document).ready(function() {

  $("#submit-button").click(function() {
      var hours = [$("#sleep-1").val(), $("#sleep-2").val(), $("#sleep-3").val(), $("#sleep-4").val(), $("#sleep-5").val(), $("#sleep-6").val(), $("#sleep-7").val()];
      var average = 0;
      var standard_deviation = 0;
      for (let i = 0; i < 7; i++) {
        average += parseInt(hours[i]);
      }
      average /= 7;
      for (let i = 0; i < 7; i++) {
        standard_deviation += (parseInt(hours[i]) - average)**2;
      }
      standard_deviation = (standard_deviation / 6)**(1/2);
      alert("Average hours of sleep: " + average + "Standard deviation: " + standard_deviation);
  });
  
});
