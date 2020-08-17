import { Injectable } from '@nestjs/common';
import { AnimalModel } from 'src/models/animal.model';
import { ResponseInterface } from '../interfaces/response.interface';
import { AnimalInterface } from './interfaces/animal.interface';

@Injectable()
export class AnimalService {
  async getAll(): Promise<ResponseInterface> {
    const animals = await AnimalModel.find();

    return {
      success: true,
      reason: 0,
      message: 'Get all animals successfully.',
      data: animals,
    };
  }

  async addAnimal(animal: AnimalInterface): Promise<ResponseInterface> {
    const newAnimal = await AnimalModel.create(animal);

    return {
      success: true,
      reason: 0,
      message: 'Add new animal successfully.',
      data: newAnimal,
    };
  }

  async updateAnimal(
    id: string,
    animal: AnimalInterface,
  ): Promise<ResponseInterface> {
    await AnimalModel.updateOne({ _id: id }, animal);

    return {
      success: true,
      reason: 0,
      message: 'Update animal successfully.',
    };
  }

  async removeAnimal(id: string): Promise<ResponseInterface> {
    await AnimalModel.deleteOne({ _id: id });

    return {
      success: true,
      reason: 0,
      message: 'Delete animal successfully.',
    };
  }
}
