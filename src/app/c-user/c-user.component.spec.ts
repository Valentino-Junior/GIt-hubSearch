import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserComponent } from './c-user.component';

describe('CUserComponent', () => {
  let component: CUserComponent;
  let fixture: ComponentFixture<CUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
