import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ChartDataSets } from 'chart.js'
import { Label } from 'ng2-charts'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: []
})
export class GraficaComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Ventas' }
  ]

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April']

  constructor (
    private readonly http: HttpClient,
    public wsService: WebsocketService
  ) { }

  ngOnInit (): void {
    this.getData()
    this.escucharSocket()
  }

  // Mostrar datos en la gráfica desde el servidor
  getData (): any {
    this.http.get('http://localhost:5000/grafica')
      .subscribe((data: any) => (this.lineChartData = data))
  }

  // Escuchar el evento 'cambio-grafica' del socket
  escucharSocket (): void {
    this.wsService.listen('cambio-grafica')
      .subscribe((data: any) => (this.lineChartData = data))
  }
}
