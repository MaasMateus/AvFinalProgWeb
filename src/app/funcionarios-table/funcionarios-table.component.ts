import { Component, OnInit } from '@angular/core';
import { BuServiceService } from '../services/bu-service.service';
import { Funcionario } from '../models/Fucionarios/Funcionario';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
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
      this._snackBar.open(result.status.toString(),"deletado");
    });

    this.refreshList();

  }

  editarFuncionario(funcionario : Funcionario)
  {
    let console = this._dialog.open(UpdateDialogComponent,{
      data : {
        funcionario
      }
    });
  }

  refreshList(){
    this.buService.getAllFuncionarios().subscribe(result=>{
      this.funcionarios = result;
    });
  }

}
