import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-edition',
  templateUrl: './event-edition.component.html',
  styleUrls: ['./event-edition.component.scss']
})
export class EventEditionComponent implements OnInit {
  es: any;
  constructor() { }

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      dayNamesMin: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
      monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Augosto","Septiembre","Octubre","Noviembre","Diciembre" ],
      monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Hoy',
      clear: 'Limpiar'
    };
  }

}
