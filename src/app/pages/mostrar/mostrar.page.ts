import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import { SupabaseService } from 'src/app/services/supabase.service';
import { EditProductModalPage } from '../edit-product-modal/edit-product-modal.page';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton } from '@ionic/angular/standalone';

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
    IonCardContent,
    IonButton
],
})
export class MostrarPage implements OnInit {
  registros: any[] = [];

  constructor(
    private supabaseService: SupabaseService,
    private modalCtrl: ModalController,
  ) {}

  async editarProducto(producto: any) {
    const modal = await this.modalCtrl.create({
      component: EditProductModalPage,
      componentProps: {
        producto,
      },
    });

    await modal.present();
    const resultado = await modal.onDidDismiss();
    if (resultado.data) {
      await this.cargarDatos();
    }
  }

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
