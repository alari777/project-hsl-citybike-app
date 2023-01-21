import { IsDate, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateTripDTO {
  @IsNotEmpty()
  @IsDate()
  public departureDate!: Date;

  @IsNotEmpty()
  @IsDate()
  public returnDate!: Date;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  public departureStationId!: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  public returnStationId!: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public coveredDistance!: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public duration!: number;
}
