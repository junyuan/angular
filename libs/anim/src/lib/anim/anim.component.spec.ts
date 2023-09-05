import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimComponent } from './anim.component';

describe('AnimComponent', () => {
  let component: AnimComponent;
  let fixture: ComponentFixture<AnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
