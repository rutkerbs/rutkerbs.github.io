$(document).ready(function() {

  $("#submit-button").click(function() {
      let hours = []
      for (let i = 0; i < 7; i++) {
        hours.push($("#sleep-box").val());
      }
      alert("Average hours of sleep: " + hours[0])
  });
  
});
