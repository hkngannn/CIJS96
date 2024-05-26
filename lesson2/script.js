// bài 12:

// const employees = [
//     { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
// ];

// let result = employees.map(item => ({
//     name: item.name,
//     email: item.email,
//     workInfo: {
//         workingDays: item.workingDays,
//         lateDays: item.lateDays
//     }
// }))
// console.log(result);

// bài 13:

let tasks = [
  {
    name: "Hoàn thành bài tập JavaScript",
    description: "Làm xong bài tập về Array và Object",
    completed: false,
  },
  { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
  {
    name: "Đi mua hàng",
    description: "Mua thêm thức ăn cho tuần",
    completed: false,
  },
];

// 13.1

// let newTask = (name, description, completed) => {
//     const task = {
//         name: name,
//         description: description,
//         completed: completed
//     };
//     tasks.push(task);
// }
// newTask("Đọc sách", "Đọc xong chương 3", false)
// console.log(tasks);

// 13.2

// let completedTask = (tasks, ...idx) => {
//     idx.forEach(index => {
//         if (index >= 0 && index < tasks.length) {
//             tasks[index].completed = true;
//         }
//     });
// }

// completedTask(tasks, 0)
// console.log(tasks);

// 13.2

let sortTasks = (tasks, order) => {
  return tasks.slice().sort((a, b) => {
    let taskA = a.name.toLowerCase();
    let taskB = b.name.toLowerCase();

    if (order === "asc") {
      if (taskA < taskB) return 1;
      if (taskA > taskB) return -1;
    } else if (order === "desc") {
      if (taskA < taskB) return -1;
      if (taskA > taskB) return 1;
    }

    return 0;
  });
};

// hàm sắp xếp công việc theo thứ tự A -> Z
let sortedTasksAsc = sortTasks(tasks, "asc");
console.log(sortedTasksAsc);

//hàm sắp xếp công việc theo thứ tự Z -> A
let sortedTasksDesc = sortTasks(tasks, "desc");
console.log(sortedTasksDesc);
