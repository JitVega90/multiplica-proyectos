export class Project{
    constructor(
        public name: string,
        public description: string,
        public status: boolean
    ){}
    update?(params: Partial<Project>): void {
        Object.assign(this, params);
    }
}