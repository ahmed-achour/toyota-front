import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePapperComponent } from './update-papper.component';

describe('UpdatePapperComponent', () => {
  let component: UpdatePapperComponent;
  let fixture: ComponentFixture<UpdatePapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
