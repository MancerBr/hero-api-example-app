import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Hero } from '../models';
import { IHeroService } from './abstracts';
import { CreateHeroRequestDto, HeroDto, UpdateHeroRequestDto } from '../dto';

@Injectable()
export class HeroMockService implements IHeroService {
  private heroes: Hero[] = [];

  public getHeroById(id: string): Promise<HeroDto> {
    return this.findHeroByIdAsync(id);
  }

  public getHeroes(): Promise<HeroDto[]> {
    return this.findAllHeroesAsync();
  }

  public async create(item: CreateHeroRequestDto): Promise<HeroDto> {
    const hero: Hero = {
      id: uuidv4(),
      ...item,
    };
    this.heroes.push(hero);

    return hero;
  }

  public async delete(id: string): Promise<HeroDto> {
    const hero = await this.findHeroByIdAsync(id);
    this.heroes = this.heroes.filter((hero: Hero) => hero.id !== id);
    return hero;
  }

  public async update(
    id: string,
    updateHeroObject: UpdateHeroRequestDto,
  ): Promise<HeroDto> {
    this.heroes = this.heroes.map((hero: Hero) => {
      if (hero.id === id) {
        return {
          ...hero,
          ...updateHeroObject,
        };
      }
      return hero;
    });
    return this.findHeroByIdAsync(id);
  }

  // Imitate request to database
  private findHeroByIdAsync(id: string): Promise<HeroDto> {
    return new Promise((resolve, reject) => {
      const hero = this.heroes.find((hero: Hero) => hero.id === id);

      if (!hero) {
        reject(new NotFoundException());
        return;
      }
      resolve(hero);
    });
  }

  // Imitate request to database
  private findAllHeroesAsync(): Promise<Hero[]> {
    return new Promise((resolve) => {
      resolve(this.heroes);
    });
  }
}
