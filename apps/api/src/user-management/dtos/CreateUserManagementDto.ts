import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserManagementDto {
  @ApiProperty({ description: 'The name of user' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The age of the cat', example: 1 })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @ApiProperty({ description: 'The role of user' })
  @IsString()
  role: string;
}
