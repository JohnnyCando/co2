import { Test, TestingModule } from '@nestjs/testing';
import { FootprintCategoryService } from './footprint-category.service';

describe('FootprintCategoryService', () => {
  let service: FootprintCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootprintCategoryService],
    }).compile();

    service = module.get<FootprintCategoryService>(FootprintCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
