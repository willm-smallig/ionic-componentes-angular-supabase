import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProductModalPage } from './edit-product-modal.page';

describe('EditProductModalPage', () => {
  let component: EditProductModalPage;
  let fixture: ComponentFixture<EditProductModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
