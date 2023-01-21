import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreateStationDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  public id!: number;

  @IsNotEmpty()
  @IsString()
  public nameFi!: string;

  @IsNotEmpty()
  @IsString()
  public nameSwe!: string;

  @IsNotEmpty()
  @IsString()
  public nameEn!: string;

  @IsNotEmpty()
  @IsString()
  public addressFi!: string;

  @IsNotEmpty()
  @IsString()
  public addressSwe!: string;

  @IsNotEmpty()
  @IsString()
  public cityFi!: string;

  @IsNotEmpty()
  @IsString()
  public citySwe!: string;

  @IsNotEmpty()
  @IsString()
  public operator!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  public capacities!: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public coordinateX!: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public coordinateY!: number;
}
