import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class CoordinatesGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected: ', client.id);
  }

  @SubscribeMessage('gpsData')
  handleGpsData(client: Socket, payload: any) {
    console.log('Received GPS data:', payload);
    this.server.emit('gpsData', payload);
  }
}
