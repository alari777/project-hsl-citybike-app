import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class DeleteStationDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  public fid!: number;
}
