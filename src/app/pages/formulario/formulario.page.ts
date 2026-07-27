import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonRadio, IonSelectOption, IonToggle, IonRange, IonButton, IonDatetime, IonInput, IonTextarea, IonSelect, IonCheckbox, IonRadioGroup } from '@ionic/angular/standalone';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonList,
    IonRadio,
    IonSelectOption,
    IonToggle,
    IonRange,
    IonButton,
    IonDatetime,
    IonInput,
    IonTextarea,
    IonSelect,
    IonCheckbox,
    IonRadioGroup
],
})
export class FormularioPage implements OnInit {
  formulario = {
    nombre: '',
    email: '',
    edad: null,
    dob: new Date(),
    genero: '',
    pais: '',
    newsletter: false,
    tecnologias: [],
    observaciones: '',
  };

  constructor(private supabaseService: SupabaseService) {}


  async guardar() {
    const { error } = await this.supabaseService.supabase
      .from('formulario_demo')
      .insert([
        {
          nombre: this.formulario.nombre,
          email: this.formulario.email,
          edad: this.formulario.edad,
          dob: this.formulario.dob,
          genero: this.formulario.genero,
          pais: this.formulario.pais,
          recibe_newsletter: this.formulario.newsletter,
          tecnologias:this.formulario.tecnologias.join(','),
          observaciones: this.formulario.observaciones,
        },
      ]);
    if (!error) {
      alert('Registro insertado');
    }
  }

  ngOnInit() {}
}
