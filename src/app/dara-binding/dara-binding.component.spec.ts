import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaraBindingComponent } from './dara-binding.component';

describe('DaraBindingComponent', () => {
  let component: DaraBindingComponent;
  let fixture: ComponentFixture<DaraBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaraBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaraBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
