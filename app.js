

var days_html = document.getElementById("days")
var hours_html = document.getElementById("hours")
var minutes_html = document.getElementById("minutes")
var second_html = document.getElementById("second")

var now = new Date()

var baqraEid = new Date("6/17/2024")

var diff = baqraEid.getTime()- now.getTime()




var interval = setInterval(function(){
    var currentDate =new Date()
diff = diff - 1000

//var second = diff / 1000
  var second = 60 - currentDate.getSeconds()
//var minutes = diff / 1000 / 60
  var minutes = 60 - currentDate.getMinutes()
//var hours = diff / 1000 / 60 / 60
var hours = 24 - currentDate.getHours()
var days = diff / 1000 / 60 / 60 / 24

days_html.innerText = Math.floor(days)
hours_html.innerText = Math.floor(hours)
minutes_html.innerText = Math.floor(minutes)
second_html.innerText = Math.floor(second)
},1000)