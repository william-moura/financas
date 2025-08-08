import { TestBed } from '@angular/core/testing';

import { AIAgentService } from './aiagent.service';

describe('AIAgentService', () => {
  let service: AIAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
