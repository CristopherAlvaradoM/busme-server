import { Test, TestingModule } from '@nestjs/testing';
import { AnalisisDatosController } from './analisis_datos.controller';
import { AnalisisDatosService } from './analisis_datos.service';

describe('AnalisisDatosController', () => {
  let controller: AnalisisDatosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalisisDatosController],
      providers: [AnalisisDatosService],
    }).compile();

    controller = module.get<AnalisisDatosController>(AnalisisDatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
