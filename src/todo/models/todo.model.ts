export class Todo {
    
    key : string | null = null;

    constructor(
        public name: string,
        public priorityOrder: number,
        public isDone: boolean,
    ){}
}