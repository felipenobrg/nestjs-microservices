import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway/gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  // Start HTTP server
  await app.listen(3000);

  // Optionally, if you want to configure microservice transport separately, you can
  // const microservice = app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.TCP,
  //   options: { host: 'localhost', port: 3001 },
  // });
  // await app.startAllMicroservicesAsync();
}

bootstrap().catch((err) => console.error('Error during bootstrap:', err));
