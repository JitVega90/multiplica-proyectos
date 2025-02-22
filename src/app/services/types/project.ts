export class Project{
    constructor(
        public name: string,
        public description: string,
        public state: boolean
    ){}
    update?(params: Partial<Project>): void {
        Object.assign(this, params);
    }
}