import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from '../models/Fucionarios/Funcionario';
import { BuServiceService } from '../services/bu-service.service';
import { Observable } from 'rxjs';
import { resourceLimits } from 'worker_threads';
import { ResponseFuncionarios } from '../models/ResponseFuncionarios';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
  public func! : Funcionario;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {funcionario : Funcionario},
    private buService: BuServiceService,
    public matDialogRef: MatDialogRef<UpdateDialogComponent>
  ) {
    matDialogRef.beforeClosed().subscribe(() => matDialogRef.close(data.funcionario));
    this.func = data.funcionario;
  }

  ngOnInit(): void {
  }


  updateFuncionario()
  {
    this.buService.updateFuncionario(this.func.id,this.func).subscribe(result=>{
      if(result.status == "Ok")
      {
        this.matDialogRef.close(this.func);
      }
    });

  }

}
