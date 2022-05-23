//making sure my js is linked 
console.log("Howdy");

//the current date 
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

//creating my times array
let times = ["9AM", "10AM", "11AM","12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function renderTimeBlocks() {
    for (let i = 0; i < times.length; i++) {
        let timeBlock = `<div class="row">
        
        <div class="col-md-1">${times[i]}</div> 
        <textarea id="${i + 9}" class="col-md-10"></textarea>
        <button class="col-md-1 saveBtn">Save</button>
     </div>`
     $("#time-block").append(timeBlock)
    }
}
renderTimeBlocks() 


//save button and local storage 
$('.saveBtn').on('click', function(){
   let saveText = $(this).siblings('textarea').val()
   let saveTime = $(this).siblings('textarea').attr('id')
   
   localStorage.setItem(saveTime, saveText)
})

$('#9').val(localStorage.getItem(9))
$('#10').val(localStorage.getItem(10))
$('#11').val(localStorage.getItem(11))
$('#12').val(localStorage.getItem(12))
$('#13').val(localStorage.getItem(13))
$('#14').val(localStorage.getItem(14))
$('#15').val(localStorage.getItem(15))
$('#16').val(localStorage.getItem(16))
$('#17').val(localStorage.getItem(17))

