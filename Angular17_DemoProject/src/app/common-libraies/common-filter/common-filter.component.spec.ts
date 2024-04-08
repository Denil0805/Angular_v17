import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFilterComponent } from './common-filter.component';

describe('CommonFilterComponent', () => {
  let component: CommonFilterComponent;
  let fixture: ComponentFixture<CommonFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
