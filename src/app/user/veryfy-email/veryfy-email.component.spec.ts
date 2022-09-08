import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryfyEmailComponent } from './veryfy-email.component';

describe('VeryfyEmailComponent', () => {
  let component: VeryfyEmailComponent;
  let fixture: ComponentFixture<VeryfyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeryfyEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeryfyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
