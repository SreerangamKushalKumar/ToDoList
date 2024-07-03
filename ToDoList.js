// Select the form and input elements from the HTML
let button =document.getElementById('task-form');
let input =document.getElementById('task-el');

// Add an event listener to the form for the submit event
button.addEventListener('submit',function(val){
    val.preventDefault();// Prevent the default form submission behavior
    let message=input.value.trim();// Get the trimmed value from the input field
    //alert(message);
    let data=localStorage.getItem('message')?JSON.parse(localStorage.getItem('message')):[];// Retrieve existing tasks from localStorage or initialize an empty array
    data.unshift(message);// Add the new task to the beginning of the array
    localStorage.setItem('message',JSON.stringify(data));// Save the updated task array back to localStorage
    showing(); // Call the function to update the displayed task list
    input.value='';// Clear the input field
})
// Select the element where tasks will be displayed
let dis = document.getElementById('display');

// Function to display tasks from localStorage
function showing(){
    let data=localStorage.getItem('message')?JSON.parse(localStorage.getItem('message')):[];// Retrieve tasks from localStorage
    if(data != 0){// Check if there are any tasks to display
        let each=``;// Initialize an empty string to accumulate the HTML for tasks
        for(let num of data){// Iterate over each task
            each += `
            <li class="list-group-item">
                                    <i class="fa far fa-window-close float-end ms-2"></i>
                                    <i class="fa fa-edit float-end"></i>${num}
                                </li>`// Create an HTML list item for each task, including icons for editing and closing
        }
        dis.innerHTML=each;// Insert the accumulated HTML into the display element 
    }
}
// Initial call to display tasks when the page loads
showing();
