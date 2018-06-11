function toDoList(task, instruction) {
  this.task = task;
  this.instruction = instruction;
}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask= $("input#new-task").val();
    var inputtedInstruction = $("input#new-instruction").val();

    var newTask = new toDoList(inputtedTask, inputtedInstruction);

    $("ul#task-list").append("<li><span class='toDo'>" + newTask.task + "</span></li>");

    $(".toDo").last().click(function() {
    $("#completed-list").show();
    // $("#completed-list").text(newTask.task);
    $("ul#completed-list").append("<li><span class='toDo'>" + newTask.task + "</span></li>");
      $("li").last().click(function() {
        $(this).remove();
    });
  });

    $("input#new-task").val("");
    $("input#new-instruction").val("");


    $("li#completed-list").last().click(function(){
      $(this).remove();


  });
});
});
