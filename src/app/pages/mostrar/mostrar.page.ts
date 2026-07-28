import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
],
})
export class MostrarPage implements OnInit {
  constructor(private supabaseService: SupabaseService) {}

  registros: any[] = [];

  ionViewWillEnter() {
    this.cargarDatos();
  }

  async cargarDatos() {
    const { data, error } = await this.supabaseService.supabase
      .from('formulario_demo')
      .select('*');
    if (!error) {
      this.registros = data;
    }
  }
  ngOnInit() {}
}
