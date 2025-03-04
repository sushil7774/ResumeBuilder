import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSkillComponent } from './dialog-skill.component';

describe('DialogSkillComponent', () => {
  let component: DialogSkillComponent;
  let fixture: ComponentFixture<DialogSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogSkillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
