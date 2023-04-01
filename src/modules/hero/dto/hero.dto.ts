import { IsString, MinLength } from 'class-validator';

export class HeroDto {
  @IsString()
  id: string;

  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  @MinLength(2)
  secondName: string;

  @IsString()
  @MinLength(2)
  superHeroName: string;
}
