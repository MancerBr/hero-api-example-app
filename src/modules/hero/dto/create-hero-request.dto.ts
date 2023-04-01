import { OmitType } from '@nestjs/mapped-types';

import { HeroDto } from './hero.dto';

export class CreateHeroRequestDto extends OmitType(HeroDto, ['id']) {}
