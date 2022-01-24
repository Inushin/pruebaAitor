import { Test, TestingModule } from '@nestjs/testing';
import { SuperpersonasService } from './superpersonas.service';

describe('SuperpersonasService', () => {
  let service: SuperpersonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperpersonasService],
    }).compile();

    service = module.get<SuperpersonasService>(SuperpersonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
