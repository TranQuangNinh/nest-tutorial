import { Module } from '@nestjs/common';
import { AnimalController } from './animals.controller';
import { AnimalService } from './animals.service';

@Module({
  imports: [],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AppModule {}
