import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ResponseInterface } from '../interfaces/response.interface';
import { AnimalService } from './animals.service';
import { createAnimalDto, paramsAnimal } from './dto/animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('/all')
  findAll(): Promise<ResponseInterface> {
    return this.animalService.getAll();
  }

  @Post('/add')
  @HttpCode(201)
  addAnimal(@Body() animalDto: createAnimalDto): Promise<ResponseInterface> {
    return this.animalService.addAnimal(animalDto);
  }

  @Put('/update/:id')
  updateAnimal(
    @Param() { id }: paramsAnimal,
    @Body() animalDto: createAnimalDto,
  ): Promise<ResponseInterface> {
    return this.animalService.updateAnimal(id, animalDto);
  }

  @Delete('/remove/:id')
  deleteAnimal(@Param() { id }: paramsAnimal): Promise<ResponseInterface> {
    return this.animalService.removeAnimal(id);
  }
}
