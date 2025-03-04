import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwAttendanceComponent } from './veiw-attendance.component';

describe('VeiwAttendanceComponent', () => {
  let component: VeiwAttendanceComponent;
  let fixture: ComponentFixture<VeiwAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwAttendanceComponent]
    });
    fixture = TestBed.createComponent(VeiwAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
