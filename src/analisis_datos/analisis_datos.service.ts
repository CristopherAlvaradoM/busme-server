import { Injectable } from '@nestjs/common';
import { CreateAnalisisDatoDto } from './dto/create-analisis_dato.dto';
import { UpdateAnalisisDatoDto } from './dto/update-analisis_dato.dto';
import axios from 'axios';

@Injectable()
export class AnalisisDatosService {
  create(createAnalisisDatoDto: CreateAnalisisDatoDto) {
    return 'This action adds a new analisisDato';
  }

  async findAll() {
    const graph = await axios.get("http://localhost:5000/generate_visualization");
    console.log("chi")
    return graph.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} analisisDato`;
  }

  update(id: number, updateAnalisisDatoDto: UpdateAnalisisDatoDto) {
    return `This action updates a #${id} analisisDato`;
  }

  remove(id: number) {
    return `This action removes a #${id} analisisDato`;
  }
}
