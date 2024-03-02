import { PartialType } from '@nestjs/swagger';
import { CreateFrequentlyAskedQuestionDto } from './create-frequently-asked-question.dto';

export class UpdateFrequentlyAskedQuestionDto extends PartialType(CreateFrequentlyAskedQuestionDto) {}
