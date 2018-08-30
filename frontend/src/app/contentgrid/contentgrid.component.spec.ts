import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentgridComponent } from './contentgrid.component';

describe('ContentgridComponent', () => {
  let component: ContentgridComponent;
  let fixture: ComponentFixture<ContentgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
