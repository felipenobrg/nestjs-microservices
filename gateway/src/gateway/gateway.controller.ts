import { Controller, Post, Body } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('auth')
export class GatewayController {
  @Client({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3001 },
  })
  private client: ClientProxy;

  @Post('login')
  login(@Body() data: { email: string; password: string }): Observable<any> {
    return this.client.send({ cmd: 'login' }, data);
  }

  @Post('register')
  register(@Body() data: { email: string; password: string }): Observable<any> {
    return this.client.send({ cmd: 'register' }, data);
  }
}
