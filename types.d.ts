type todo = {
  id: number,
  title: string,
  description:string
  completed: boolean
}


interface todosType {
  todos: todo[],
  addTodos: (todo:todo) => void,
  updateTodos: (id:number,todo:todo) => void,
  deleteTodos: (id:number) => void
  toogleCompleted : (id:number) => void
}