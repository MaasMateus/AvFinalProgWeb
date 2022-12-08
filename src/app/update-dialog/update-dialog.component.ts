import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from '../models/Fucionarios/Funcionario';
import { BuServiceService } from '../services/bu-service.service';
import { Observable } from 'rxjs';
import { resourceLimits } from 'worker_threads';
import { ResponseFuncionarios } from '../models/ResponseFuncionarios';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { config } from 'process';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css'],
})
export class UpdateDialogComponent implements OnInit {
  public func! : Funcionario;
  public form = new FormGroup({
      nome : new FormControl(''),
      departamento : new FormControl(''),
      endereco : new FormControl(''),
      email : new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {funcionario : Funcionario},
    private buService: BuServiceService,
    private _snackBar: MatSnackBar,
    public matDialogRef: MatDialogRef<UpdateDialogComponent>
  ) {
    matDialogRef.beforeClosed().subscribe(() => matDialogRef.close(data.funcionario));
    this.func = data.funcionario;
    this.form.get("nome")!.setValue(this.func.nome);
    this.form.get("departamento")!.setValue(this.func.departamento);
    this.form.get("endereco")!.setValue(this.func.endereco);
    this.form.get("email")!.setValue(this.func.email);

  }

  ngOnInit(): void {
  }


  updateFuncionario()
  {
    console.log("aqui")
    this.func.nome =this.form.get("nome")?.value,
    this.func.departamento= this.form.get("departamento")?.value,
    this.func.endereco = this.form.get("endereco")?.value,
    this.func.email= this.form.get("email")?.value;
    this.buService.updateFuncionario(this.func.id,this.func).subscribe(result=>{
      if(result.status == "Ok")
      {
        this._snackBar.open(result.status.toString(),result.mensagem,{
          duration: 500
        }).afterOpened().subscribe(x=>{

          this.matDialogRef.close(this.func);
        })
      }
    });

  }

}
