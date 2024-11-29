import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalisisDatoDto } from './create-analisis_dato.dto';

export class UpdateAnalisisDatoDto extends PartialType(CreateAnalisisDatoDto) {}
