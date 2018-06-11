function toDoList(task, instruction, date) {
  this.task = task;
  this.instruction = instruction;
  this.date = date;
}
// toDoList.prototype.tasks = function() {
//   return this.task + ", " + this.instruction + ", " + this.date;
// }
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask= $("input#new-task").val();
    var inputtedInstruction = $("input#new-instruction").val();
    var inputtedDate = $("#date").val();

    var newTask = new toDoList(inputtedTask, inputtedInstruction, inputtedDate);

    $("ul#task-list").append("<li><span class='toDo'>" + newTask.task+ "</span>| <a class='delete'>Delete this task</a></li>");

    $(".delete").last().click(function() {
     $(this).parent().remove();
     if ($("#complete-instruction h3").text() == newTask.task) {
       $("#complete-instruction").hide();
     }
   });

    $(".toDo").last().click(function() {
      $("#complete-instruction").show();
      $("#complete-instruction h3").text(newTask.task);
      $(".task").text(newTask.task);
      $(".instruction").text(newTask.instruction);
      $(".date").text(newTask.date);

      // $("ul#completed-list").append("<li><span class='toDo'>" + newTask.tasks() + "</span></li>");
    });
    //   $("ul").last().click(function() {
    //     $(this).remove();
    // });
    // $("li").last().click(function() {
    //   $(this).remove();
    // });

    $("input#new-task").val("");
    $("input#new-instruction").val("");
    $("#date").val("");

  });
});
