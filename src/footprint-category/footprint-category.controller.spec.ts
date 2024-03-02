import { Test, TestingModule } from '@nestjs/testing';
import { FootprintCategoryController } from './footprint-category.controller';
import { FootprintCategoryService } from './footprint-category.service';

describe('FootprintCategoryController', () => {
  let controller: FootprintCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FootprintCategoryController],
      providers: [FootprintCategoryService],
    }).compile();

    controller = module.get<FootprintCategoryController>(FootprintCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
