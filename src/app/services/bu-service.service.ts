import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Constants } from '../../../constants';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Fucionarios/Funcionario';
import { ResponseFuncionarios } from '../models/ResponseFuncionarios';

@Injectable({
  providedIn: 'root'
})
export class BuServiceService {
  api: string;

  constructor(
    private http: HttpClient,
  ) {
    this.api = `${Constants.buApi.cadastro}`
   }

   getAllFuncionarios() : Observable<Funcionario[]>
   {
      return this.http.get<Funcionario[]>(this.api);
   }

   updateFuncionario(id: number, funcionario: Funcionario ) : Observable<ResponseFuncionarios>
   {
      return this.http.put<ResponseFuncionarios>(this.api + `/${id}`,funcionario);
   }

   deleteFuncionario(id:number) : Observable<ResponseFuncionarios>
   {
      return this.http.delete<ResponseFuncionarios>(this.api + `/${id}`);
   }



}
