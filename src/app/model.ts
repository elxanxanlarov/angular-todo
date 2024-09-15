export class Model{
    user;
    items: TodoItem[] = [];
    constructor() {
      this.user = "Elxan";
    }
}

export class TodoItem{
    description;
    action;
    constructor(description:string,action:boolean){
        this.description=description;
        this.action=action;
    }
}