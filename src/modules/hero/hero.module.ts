import { Module } from '@nestjs/common';

import { HeroController } from './controllers';
import { HeroMockService, IHeroService } from './services';

@Module({
  controllers: [HeroController],
  providers: [
    {
      provide: IHeroService,
      useClass: HeroMockService,
    },
  ],
})
export class HeroModule {}
