/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExportingComponent } from './exporting.component';

describe('ExportingComponent', () => {
  let component: ExportingComponent;
  let fixture: ComponentFixture<ExportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
