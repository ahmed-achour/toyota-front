import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPapperComponent } from './add-papper.component';

describe('AddPapperComponent', () => {
  let component: AddPapperComponent;
  let fixture: ComponentFixture<AddPapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
