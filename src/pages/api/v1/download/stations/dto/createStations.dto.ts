import { IsNotEmpty } from 'class-validator';

export class CreateStationsDTO {
  @IsNotEmpty()
  public url!: string;
}
