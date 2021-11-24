import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ChartDataSets } from 'chart.js'
import { Label } from 'ng2-charts'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-grafica-bar',
  templateUrl: './grafica-bar.component.html',
  styles: []
})
export class GraficaBarComponent implements OnInit {
  public barChartLabels: Label[] = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4']

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Preguntas' }
  ]

  constructor (
    private readonly http: HttpClient,
    public wsService: WebsocketService
  ) { }

  ngOnInit (): void {
    this.getData()
    this.escucharSocket()
  }

  // Mostrar datos en la gráfica desde el servidor
  getData (): void {
    this.http.get('http://localhost:5000/grafica-barras')
      .subscribe((data: any) => (this.barChartData = data))
  }

  escucharSocket (): void {
    this.wsService.listen('cambio-grafica-barras')
      .subscribe((data: any) => (this.barChartData = data))
  }
}
