import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlibComponent } from './formlib.component';

describe('FormlibComponent', () => {
  let component: FormlibComponent;
  let fixture: ComponentFixture<FormlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
