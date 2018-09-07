import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewclaimmodalComponent } from './newclaimmodal.component';

describe('NewclaimmodalComponent', () => {
  let component: NewclaimmodalComponent;
  let fixture: ComponentFixture<NewclaimmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewclaimmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewclaimmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
