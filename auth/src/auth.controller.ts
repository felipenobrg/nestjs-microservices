import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { User } from './users/user.entity';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  async login(data: { email: string; password: string }) {
    const user: User = {
      email: data.email,
      password: data.password,
    };
    return this.authService.login(user);
  }

  @MessagePattern({ cmd: 'register' })
  async register(data: { email: string; password: string }): Promise<any> {
    return this.authService.register(data.email, data.password);
  }
}
