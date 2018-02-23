import { TestBed, inject } from '@angular/core/testing';

import { ApiTeamService } from './api-team.service';

describe('ApiTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiTeamService]
    });
  });

  it('should be created', inject([ApiTeamService], (service: ApiTeamService) => {
    expect(service).toBeTruthy();
  }));
});
