import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Constants } from '../../../constants';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Fucionarios/Funcionario';

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

   updateFuncionario(id: number, funcionario: Funcionario ) : Observable<Response>
   {
      return this.http.put<Response>(this.api + `/${id}`,funcionario);
   }

   deleteFuncionario(id:number) : Observable<Response>
   {
      return this.http.delete<Response>(this.api + `/${id}`);
   }



}
