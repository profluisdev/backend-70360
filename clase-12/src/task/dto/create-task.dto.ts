import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {
  @IsString({message: "Tiene que ser tipo string"})
  @MinLength(3)
  description: string;
  
  @IsString()
  userId: string;
}
