import { Component, OnInit } from '@angular/core';
import { BuServiceService } from '../services/bu-service.service';
import { Funcionario } from '../models/Fucionarios/Funcionario';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-funcionarios-table',
  templateUrl: './funcionarios-table.component.html',
  styleUrls: ['./funcionarios-table.component.css']
})
export class FuncionariosTableComponent implements OnInit {

  public funcionarios!: Funcionario[];


  constructor(
    private buService: BuServiceService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.refreshList();
  }


  deletarFuncionario(id: number)
  {
    this.buService.deleteFuncionario(id).subscribe(result=>{
      if(result.status == "Ok"){
        this.removerFunc(id);
      }
      this._snackBar.open(result.status.toString(),result.mensagem);
    });

  }

  editarFuncionario(funcionario : Funcionario)
  {
    console.log("teste");
    this._dialog.open<UpdateDialogComponent,any,Funcionario>(UpdateDialogComponent,{
      data : {
        funcionario
      }
    }).afterClosed().subscribe(x=>{
        console.log(x!);
        this.alterarInformacoes(x!);
    });

  }

  refreshList(){
    this.buService.getAllFuncionarios().subscribe(result=>{
      this.funcionarios = result;
    });
  }


  removerFunc(id: number){
    let deletedFunc = this.funcionarios.find(x=>x.id==id);

    this.funcionarios.splice(this.funcionarios.indexOf(deletedFunc!,0),1)
  }

  alterarInformacoes(funcionario: Funcionario)
  {
    let index = this.funcionarios.indexOf(funcionario);

    this.funcionarios[index] = funcionario;
  }
}
