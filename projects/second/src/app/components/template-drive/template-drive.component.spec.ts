import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveComponent } from './template-drive.component';

describe('TemplateDriveComponent', () => {
  let component: TemplateDriveComponent;
  let fixture: ComponentFixture<TemplateDriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDriveComponent]
    });
    fixture = TestBed.createComponent(TemplateDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
