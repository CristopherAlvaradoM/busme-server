import { Controller, Get, Query, Req, UnauthorizedException } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { Request } from 'express';

@Controller('verify')
export class VerifyController {
  constructor(private verifyService: VerifyService) {}

  @Get()
  async verify(@Req() req: Request, @Query('route') route: string){
    const token = req.headers.authorization
    if(!token) throw new UnauthorizedException({mensaje: 'No tienes acceso a esta ruta'})    
   const access = await this.verifyService.hasAcces(token, route)
   if(!access) throw new UnauthorizedException({mensaje: 'No tienes acceso a esta ruta'})
    return true
  }
}
