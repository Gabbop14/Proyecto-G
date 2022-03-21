import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project: any;
  public status: string = '';
  public filesToUpload: Array<File> = [];
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router

  ) { 
    this.title = "Crear proyecto";
    this.project = new Project('','','','', 2022,'','');
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){

    //* Guardar los datos

    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){

          //* Subir la imagen

          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              
              this.save_project = result.project;
              this.status = 'success';
          });
        }else{
          this.save_project = response.project;
          this.status = 'success';
          form.reset();
      }

          
        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
