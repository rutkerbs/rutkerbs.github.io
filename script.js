$(document).ready(function() {

  $("#submit-button").click(function() {
      var hours = [$("#sleep-1").val(), $("#sleep-2").val(), $("#sleep-3").val(), $("#sleep-4").val(), $("#sleep-5").val(), $("#sleep-6").val(), $("#sleep-7").val()];
      var average = 0;
      var deviation = 0;
      var message = ""
      for (let i = 0; i < 7; i++) {
        average += parseInt(hours[i]);
      }
      average /= 7;
      if (average < 8.5) {
        message += "That's less than 8.5 hours of sleep! Scroll down to find sleep resources."
      }
      alert("Average hours of sleep: " + average + "\n" + message);
  });
  
});
