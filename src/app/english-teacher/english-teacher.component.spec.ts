import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTeacherComponent } from './english-teacher.component';

describe('EnglishTeacherComponent', () => {
  let component: EnglishTeacherComponent;
  let fixture: ComponentFixture<EnglishTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
