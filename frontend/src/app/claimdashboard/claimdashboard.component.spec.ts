import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimdashboardComponent } from './claimdashboard.component';

describe('ClaimdashboardComponent', () => {
  let component: ClaimdashboardComponent;
  let fixture: ComponentFixture<ClaimdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
