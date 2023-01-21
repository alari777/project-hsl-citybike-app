import { IsNotEmpty } from 'class-validator';

export class CreateTripsDTO {
  @IsNotEmpty()
  public url!: string;
}
