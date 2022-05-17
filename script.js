
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

//event listener and local storage 
saveBtn = $(".saveBtn");

    saveBtn.on("click", function(event) {
    data = $(input);
    // data.push({
    //     description: ''
    // })
    // localStorage.setItem("data")
    console.log("saving info")
    localStorage.setItem(data);
    event.preventDefault();

    // $(`.saveBtn`).save('load');
});
$('input[]')(localStorage.getItem());

// localStorage.setItem('test', 1);
// alert( localStorage.getItem('test') ); // 1