import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateStationDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  public fid!: number;

  @IsOptional()
  @IsString()
  public nameFi?: string;

  @IsOptional()
  @IsString()
  public nameSwe?: string;

  @IsOptional()
  @IsString()
  public nameEn?: string;

  @IsOptional()
  @IsString()
  public addressFi?: string;

  @IsOptional()
  @IsString()
  public addressSwe?: string;

  @IsOptional()
  @IsString()
  public cityFi?: string;

  @IsOptional()
  @IsString()
  public citySwe?: string;

  @IsOptional()
  @IsString()
  public operator?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  public capacities?: number;

  @IsOptional()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public coordinateX?: number;

  @IsOptional()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 14,
  })
  public coordinateY?: number;
}
