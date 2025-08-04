import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export default class ContactDto{  
      @ApiProperty({
        description: 'Name of the person contacting',
        example: 'John Doe',
      })
      name?: string;
    
      @ApiProperty({
        description: 'Email address of the person contacting',
        example: 'www.example.com',
      })
      @IsEmail()
      email?: string;
    
      @ApiProperty({
        description: 'Telephone number of the person contacting',
        example: '+1234567890',
      })
      @IsNotEmpty()
      telephone!: string;
    
      @ApiProperty({
        description: 'Message from the person contacting',
        example: 'Hello, I would like to know more about your services.',
      })    
      @IsNotEmpty()
      message!: string;
        
}