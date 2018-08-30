import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsearchComponent } from './claimsearch.component';

describe('ClaimsearchComponent', () => {
  let component: ClaimsearchComponent;
  let fixture: ComponentFixture<ClaimsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
