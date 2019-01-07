import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBioComponent } from './dog-bio.component';

describe('DogBioComponent', () => {
  let component: DogBioComponent;
  let fixture: ComponentFixture<DogBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
