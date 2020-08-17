import { NestFactory } from '@nestjs/core';
import * as mongoose from 'mongoose';
import * as signale from 'signale';
import { AppModule } from './animals/animals.module';

async function startServer() {
  const app = await NestFactory.create(AppModule);

  mongoose
    .connect(
      'mongodb://localhost:27017/dbNest?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(async () => {
      signale.success('MongoDB Connected');
    })
    .catch((error: any) => signale.error(`Mongo DB: ${error}`));

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    signale.success(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
