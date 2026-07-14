/*=====================================================
    STUDENT PORTFOLIO WEBSITE
    COS 106 Practical Project
    Academic Planner
    File: js/planner.js
======================================================*/


// ==========================================
// HTML ELEMENTS
// ==========================================

const taskForm = document.getElementById("taskForm");

const taskTitle = document.getElementById("taskTitle");

const course = document.getElementById("course");

const priority = document.getElementById("priority");

const deadline = document.getElementById("deadline");

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const pendingTasks = document.getElementById("pendingTasks");


// ==========================================
// TASK ARRAY
// ==========================================

let tasks = [];


// ==========================================
// LOAD TASKS FROM LOCAL STORAGE
// ==========================================

const savedTasks = localStorage.getItem("academicTasks");

if (savedTasks) {

    tasks = JSON.parse(savedTasks);

}


// ==========================================
// SAVE TASKS TO LOCAL STORAGE
// ==========================================

function saveTasks() {

    localStorage.setItem("academicTasks", JSON.stringify(tasks));

}


// ==========================================
// CLEAR FORM
// ==========================================

function clearForm() {

    taskTitle.value = "";

    course.value = "";

    priority.value = "High";

    deadline.value = "";

}


// ==========================================
// ADD NEW TASK
// ==========================================

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Remove extra spaces

    const titleValue = taskTitle.value.trim();

    const courseValue = course.value.trim();

    const priorityValue = priority.value;

    const deadlineValue = deadline.value;


    // Validation

    if (

        titleValue === "" ||

        courseValue === "" ||

        deadlineValue === ""

    ) {

        alert("Please complete all fields.");

        return;

    }


    // Create Task Object

    const task = {

        id: Date.now(),

        title: titleValue,

        course: courseValue,

        priority: priorityValue,

        deadline: deadlineValue,

        completed: false

    };


    // Add to Array

    tasks.push(task);


    // Save

    saveTasks();


    // Render Tasks
    // (This function will be created in Part 2)

    renderTasks();


    // Reset Form

    clearForm();


    // Success Message

    alert("Task Added Successfully!");

});


// ==========================================
// PLACEHOLDER FUNCTIONS
// (These will be completed in Part 2)
// ==========================================
// ==========================================
// RENDER TASKS
// ==========================================

function renderTasks() {

    // Clear existing tasks

    taskList.innerHTML = "";

    // Show message if no tasks exist

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <div class="empty-message">
                <h3>No Academic Tasks Yet</h3>
                <p>Add your first task using the form above.</p>
            </div>
        `;

        updateStatistics();

        return;

    }

    // Loop through every task

    tasks.forEach(function(task){

        const taskCard = document.createElement("div");

        taskCard.className = "task-card";

        if(task.completed){

            taskCard.classList.add("completed");

        }

        taskCard.innerHTML = `

            <h3>${task.title}</h3>

            <p><strong>Course:</strong> ${task.course}</p>

            <div class="task-details">

                <span class="priority ${task.priority.toLowerCase()}">

                    ${task.priority}

                </span>

                <span class="deadline">

                    📅 ${task.deadline}

                </span>

            </div>

            <div class="task-buttons">

                <button class="complete-btn"
                    onclick="toggleComplete(${task.id})">

                    ${task.completed ? "Undo" : "Complete"}

                </button>

                <button class="delete-btn"
                    onclick="deleteTask(${task.id})">

                    Delete

                </button>

            </div>

        `;

        taskList.appendChild(taskCard);

    });

    updateStatistics();

}



// ==========================================
// COMPLETE / UNDO TASK
// ==========================================

function toggleComplete(id){

    tasks = tasks.map(function(task){

        if(task.id === id){

            task.completed = !task.completed;

        }

        return task;

    });

    saveTasks();

    renderTasks();

}



// ==========================================
// DELETE TASK
// ==========================================

function deleteTask(id){

    const confirmDelete = confirm(

        "Are you sure you want to delete this task?"

    );

    if(!confirmDelete){

        return;

    }

    tasks = tasks.filter(function(task){

        return task.id !== id;

    });

    saveTasks();

    renderTasks();

}



// ==========================================
// UPDATE DASHBOARD STATISTICS
// ==========================================

function updateStatistics(){

    totalTasks.textContent = tasks.length;

    const completed = tasks.filter(function(task){

        return task.completed;

    }).length;

    completedTasks.textContent = completed;

    pendingTasks.textContent = tasks.length - completed;

}/*=====================================================
        PART 3
    INITIALIZATION & EXTRA FEATURES
======================================================*/


// ==========================================
// LOAD TASKS WHEN PAGE OPENS
// ==========================================

window.addEventListener("DOMContentLoaded", function () {

    renderTasks();

    console.log("Academic Planner Loaded Successfully");

});


// ==========================================
// SORT TASKS BY DEADLINE
// ==========================================

function sortTasksByDeadline() {

    tasks.sort(function (a, b) {

        return new Date(a.deadline) - new Date(b.deadline);

    });

}


// ==========================================
// SAVE THEN SORT
// ==========================================

const originalSaveTasks = saveTasks;

saveTasks = function () {

    sortTasksByDeadline();

    localStorage.setItem("academicTasks", JSON.stringify(tasks));

};


// ==========================================
// KEYBOARD SHORTCUT
// Press ENTER while inside any input
// ==========================================

const plannerInputs = document.querySelectorAll(
    "#taskTitle, #course, #priority, #deadline"
);

plannerInputs.forEach(function (input) {

    input.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            taskForm.requestSubmit();

        }

    });

});


// ==========================================
// TODAY'S DATE AS MINIMUM DEADLINE
// ==========================================

const today = new Date().toISOString().split("T")[0];

deadline.min = today;


// ==========================================
// COURSE CODE TO UPPERCASE
// ==========================================

course.addEventListener("input", function () {

    this.value = this.value.toUpperCase();

});


// ==========================================
// TASK TITLE CAPITALIZATION
// ==========================================

taskTitle.addEventListener("blur", function () {

    let text = this.value.trim();

    if (text.length > 0) {

        this.value =

            text.charAt(0).toUpperCase() +

            text.slice(1);

    }

});


// ==========================================
// SIMPLE WELCOME MESSAGE
// ==========================================

setTimeout(function () {

    console.log("Welcome to your Academic Planner!");

}, 1000);


// ==========================================
// DISPLAY TOTAL TASKS EVERY 30 SECONDS
// ==========================================

setInterval(function () {

    console.log("Current Tasks:", tasks.length);

}, 30000);


// ==========================================
// END OF FILE
// ==========================================