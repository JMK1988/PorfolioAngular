import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbieSkillComponent } from './hobbie-skill.component';

describe('HobbieSkillComponent', () => {
  let component: HobbieSkillComponent;
  let fixture: ComponentFixture<HobbieSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbieSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbieSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
