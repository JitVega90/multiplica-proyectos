import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { Project } from './project';

describe('ProjectService', () => {
  let service: ProjectService;
  const mockProject: Project = { name: 'Test Project', description: 'Test Description', status: 'Activo' };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of projects on getProjects', (done: DoneFn) => {
    service.getProjects().subscribe(projects => {
      expect(projects).toBeDefined();
      expect(projects.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should add a new project on addProject', () => {
    const initialProjects = service['projects'].length; // Accedemos a los proyectos privados
    service.addProject(mockProject);
    expect(service['projects'].length).toBe(initialProjects + 1);
    expect(service['projects'].find(p => p.name === mockProject.name)).toBeDefined();
  });

  it('should return false if project exists in ifExists', () => {
    // Simulamos que el proyecto ya existe
    service.addProject(mockProject); 
    const result = service.ifExists(mockProject);
    expect(result).toBe(false); // No debe agregarlo nuevamente
  });

  it('should return true and add a project if it does not exist in ifExists', () => {
    const newProject: Project = { name: 'New Project', description: 'New Description', status: 'Inactivo' };
    const result = service.ifExists(newProject);
    expect(result).toBe(true); // Debe agregar el proyecto ya que no existe
    expect(service['projects'].find(p => p.name === newProject.name)).toBeDefined();
  });

  it('should update an existing project on updateProject', () => {
    // Primero agregamos el proyecto
    service.addProject(mockProject);
    
    const updatedProject: Project = { name: 'Test Project', description: 'Updated Description', status: 'Inactivo' };
    service.updateProject(updatedProject);

    const updated = service['projects'].find(p => p.name === mockProject.name);
    expect(updated).toBeDefined();
    expect(updated?.description).toBe('Updated Description');
    expect(updated?.status).toBe('Inactivo');
  });
});
