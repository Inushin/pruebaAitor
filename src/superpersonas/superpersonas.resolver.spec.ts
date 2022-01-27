import { Test, TestingModule } from '@nestjs/testing';
import { SuperpersonasResolver } from './superpersonas.resolver';

describe('SuperpersonasResolver', () => {
  let resolver: SuperpersonasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperpersonasResolver],
    }).compile();

    resolver = module.get<SuperpersonasResolver>(SuperpersonasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
