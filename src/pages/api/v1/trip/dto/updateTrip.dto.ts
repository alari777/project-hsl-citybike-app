import { IsDate, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateTripDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  public id!: number;

  @IsOptional()
  @IsDate()
  public departureDate?: Date;

  @IsOptional()
  @IsDate()
  public returnDate?: Date;

  @IsOptional()
  @IsNumber()
  @Min(1)
  public departureStationId?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  public returnStationId?: number;

  @IsOptional()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public coveredDistance?: number;

  @IsOptional()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public duration?: number;
}
