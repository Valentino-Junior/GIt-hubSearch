import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRepositoryComponent } from './c-repository.component';

describe('CRepositoryComponent', () => {
  let component: CRepositoryComponent;
  let fixture: ComponentFixture<CRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
