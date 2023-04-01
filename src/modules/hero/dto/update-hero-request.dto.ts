import { PartialType } from '@nestjs/mapped-types';

import { CreateHeroRequestDto } from './create-hero-request.dto';

export class UpdateHeroRequestDto extends PartialType(CreateHeroRequestDto) {}
