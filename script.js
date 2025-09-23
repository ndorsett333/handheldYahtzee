document.addEventListener('DOMContentLoaded',function(){
    console.log('Page Loaded');



    document.getElementById('roll-btn').addEventListener('click',function(){
        var dice = Array.from(document.querySelectorAll("div.roll-die"));
        console.log('The dice: ' + dice);
    })




});
  