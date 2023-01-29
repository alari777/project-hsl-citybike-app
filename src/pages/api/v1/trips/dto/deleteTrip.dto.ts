import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class DeleteTripDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  public id!: number;
}
