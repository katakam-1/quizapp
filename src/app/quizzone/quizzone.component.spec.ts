import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzoneComponent } from './quizzone.component';

describe('QuizzoneComponent', () => {
  let component: QuizzoneComponent;
  let fixture: ComponentFixture<QuizzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
