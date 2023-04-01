import { IsString } from 'class-validator';

export class ParamIdDto {
  @IsString()
  id: string;
}
