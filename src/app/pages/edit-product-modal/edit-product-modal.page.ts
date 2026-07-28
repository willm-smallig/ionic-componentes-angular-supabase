import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  ModalController,
  IonLabel,
  IonItem,
  IonButton,
  IonInput,
  IonTextarea,
} from '@ionic/angular/standalone';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.page.html',
  styleUrls: ['./edit-product-modal.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
    IonItem,
    IonInput,
    IonTextarea,
    IonButton,
  ],
})
export class EditProductModalPage implements OnInit {
  @Input() producto: any = {};

  constructor(
    private supabaseService: SupabaseService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    if (!this.producto) {
      this.producto = {
        nombre: '',
        email: '',
        edad: null,
        dob: '',
        genero: '',
        pais: '',
        recibe_newsletter: false,
        tecnologias: '',
        observaciones: '',
      };
    }
  }

  async guardar() {
    const { error } = await this.supabaseService.supabase
      .from('formulario_demo')
      .update({
        nombre: this.producto.nombre,
        email: this.producto.email,
        edad: this.producto.edad,
        dob: this.producto.dob,
        genero: this.producto.genero,
        pais: this.producto.pais,
        recibe_newsletter: this.producto.recibe_newsletter,
        tecnologias: this.producto.tecnologias,
        observaciones: this.producto.observaciones,
      })
      .eq('id', this.producto.id);
    if (error) {
      console.error(error);
      return;
    }
    this.modalCtrl.dismiss(true);
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
