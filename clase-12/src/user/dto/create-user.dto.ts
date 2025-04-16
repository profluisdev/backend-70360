import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "Nombre del usuario", example: "Juan Perez" })
  @IsString()
  name: string;

  @ApiProperty({description: "Email del usuario", example: "example@example.com"})
  @IsEmail()
  email: string;
}
