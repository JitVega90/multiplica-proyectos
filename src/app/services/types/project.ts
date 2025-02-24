export class Project{
    constructor(
        public name: string,
        public description: string,
        public status: 'Activo' | 'Inactivo'
    ){}
    update?(params: Partial<Project>): void {
        Object.assign(this, params);
    }
}