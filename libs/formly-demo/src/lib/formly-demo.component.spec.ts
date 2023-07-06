import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyDemoComponent } from './formly-demo.component';

describe('FormlyDemoComponent', () => {
  let component: FormlyDemoComponent;
  let fixture: ComponentFixture<FormlyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlyDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormlyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
