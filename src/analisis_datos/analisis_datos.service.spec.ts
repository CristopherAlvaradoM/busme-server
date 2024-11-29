import { Test, TestingModule } from '@nestjs/testing';
import { AnalisisDatosService } from './analisis_datos.service';

describe('AnalisisDatosService', () => {
  let service: AnalisisDatosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalisisDatosService],
    }).compile();

    service = module.get<AnalisisDatosService>(AnalisisDatosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
