import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclaimmodalComponent } from './viewclaimmodal.component';

describe('ViewclaimmodalComponent', () => {
  let component: ViewclaimmodalComponent;
  let fixture: ComponentFixture<ViewclaimmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewclaimmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewclaimmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
