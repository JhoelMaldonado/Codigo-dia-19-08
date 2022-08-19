import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi_primera_vez_con_angular';
  public nombre: string = 'Jhoel';
  public apellido: string = 'Maldonado';
  public edad: number = 30;
  public estaVivo: boolean = false;
  public altura: number = 1.74;
  public resultado: number = 0;

  public sumarDosNumeros(n1: number, n2: number): number{
    return n1 + n2;
  }
  public dividirDosNumeros(n1: number, n2: number): number{
    return n1 / n2;
  }
  public restarDosNumeros(n1: number, n2: number): number{
    return n1 - n2;
  }
  public multiplicarDosNumeros(n1: number, n2: number): number{
    return n1 * n2;
  }
  public saludar(): void{
    alert('Me pinchastes :$');
  }
  public sumarDos(){
    this.resultado = this.resultado + 2;
  }
}
