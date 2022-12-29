// data.js

// Define the shape of a todo item
const todoItem = {
    id: 1,
    title: 'Buy groceries',
    description: 'Need to buy milk, bread, and eggs',
    dueDate: '2022-12-30'
  };
  
  // Define the structure of the list
  const todoList = [
    todoItem,
    {
      id: 2,
      title: 'Write report',
      description: 'Need to write a report for the meeting on Friday',
      dueDate: '2022-12-29'
    },
    {
      id: 3,
      title: 'Go for a run',
      description: 'Need to go for a run to stay healthy',
      dueDate: '2022-12-28'
    }
  ];
  
  export { todoList, todoItem };
  