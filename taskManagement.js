// Add tasks with a title and status (pending by default).
// Mark tasks as complete using map.
// Filter tasks based on their status (pending or completed) using filter.
// List all tasks using forEach and log them properly.
// Sort tasks alphabetically using sort and localeCompare.
// Count tasks using reduce to return total counts of completed and pending tasks.
// Allow method chaining so multiple operations can be performed sequentially.

function taskManagement() {
  let tasks = [];
  return {
    addTasks(title) {
      tasks.push({ title: title, status: "pending" });
      return this;
    },
    markComplete(title) {
      tasks = tasks.map((ele) => ele.title==title?{...ele,status:"completed"}:ele);
      return this;
    },
    fiterTasks(status) {
      tasks.filter((ele) => {ele.status == status});
      return this;
    },
    listAllTasks() {
      tasks.forEach((ele) => console.log(`${ele.title} is ${ele.status}`));
      return this;
    },
    sortTasks() {
      tasks.sort((a, b) => a.title.localeCompare(b.title));
      return this;
    },
    countTasks() {
      let count = tasks.reduce((acc, curr) => {
        acc[curr.status]++
        return acc
      }, { pending: 0, completed: 0 });
      console.log(count)
      return this
    },
  };
}

let  management=taskManagement()
management.addTasks("coding")
.addTasks("msm").addTasks("mrm").markComplete("coding").fiterTasks("pending").listAllTasks().sortTasks().countTasks()