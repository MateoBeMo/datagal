import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reminder-creation',
  templateUrl: './reminder-creation.component.html',
  styleUrls: ['./reminder-creation.component.scss']
})
export class ReminderCreationComponent implements OnInit, AfterViewInit {

  rangeDates: Date[];
  es: any;
  eventForm: FormGroup;

  @ViewChild('title') private elementRef: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
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
  public ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

  initForm() {
    this.eventForm = this.fb.group ({
      'title': ['', Validators.required],
      'start': ['', Validators.required],
      'end': ['', Validators.required],
      'from': ['', Validators.required],
      'to': ['', Validators.required],
      'driver': ['']
    });
  }
}
