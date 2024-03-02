import { PartialType } from '@nestjs/mapped-types';
import { CreateAnswerTypeDto } from './create-answer-type.dto';

export class UpdateAnswerTypeDto extends PartialType(CreateAnswerTypeDto) {}
