/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WarrantyKeyAssignManualComponent } from './warranty-key-assign-manual.component';

describe('WarrantyKeyAssignManualComponent', () => {
  let component: WarrantyKeyAssignManualComponent;
  let fixture: ComponentFixture<WarrantyKeyAssignManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyKeyAssignManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyKeyAssignManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
