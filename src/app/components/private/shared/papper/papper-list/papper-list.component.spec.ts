import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapperListComponent } from './papper-list.component';

describe('PapperListComponent', () => {
  let component: PapperListComponent;
  let fixture: ComponentFixture<PapperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapperListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
