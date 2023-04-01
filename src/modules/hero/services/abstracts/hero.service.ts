import {
  CreateHeroRequestDto,
  HeroDto,
  UpdateHeroRequestDto,
} from '../../dto';

export abstract class IHeroService {
  public abstract getHeroes(): Promise<HeroDto[]>;

  public abstract getHeroById(id: string): Promise<HeroDto>;

  public abstract create(hero: CreateHeroRequestDto): Promise<HeroDto>;

  public abstract update(
    id: string,
    hero: UpdateHeroRequestDto,
  ): Promise<HeroDto>;

  public abstract delete(id: string): Promise<HeroDto>;
}
