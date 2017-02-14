/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExportingService } from './exporting.service';

describe('ExportingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportingService]
    });
  });

  it('should ...', inject([ExportingService], (service: ExportingService) => {
    expect(service).toBeTruthy();
  }));
});
