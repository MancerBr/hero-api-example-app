import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { IHeroService } from '../services';
import { CreateHeroRequestDto, HeroDto, UpdateHeroRequestDto } from '../dto';
import { ParamIdDto } from '../../../core/dto/param-id.dto';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: IHeroService) {}

  @Get()
  getAll(): Promise<HeroDto[]> {
    return this.heroService.getHeroes();
  }

  @Get(':id')
  getOne(@Param() param: ParamIdDto): Promise<HeroDto> {
    console.log('param', param);
    return this.heroService.getHeroById(param.id);
  }

  @Post()
  create(@Body() hero: CreateHeroRequestDto): Promise<HeroDto> {
    return this.heroService.create(hero);
  }

  @Put(':id')
  update(
    @Param() param: ParamIdDto,
    @Body() hero: UpdateHeroRequestDto,
  ): Promise<HeroDto> {
    return this.heroService.update(param.id, hero);
  }

  @Delete(':id')
  delete(@Param() param: ParamIdDto): Promise<HeroDto> {
    return this.heroService.delete(param.id);
  }
}
