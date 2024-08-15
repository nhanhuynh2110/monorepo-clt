import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class EventService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  /**
   * Phát một sự kiện
   * @param event Tên sự kiện
   * @param payload Dữ liệu gửi kèm
   */
  emit(event: string, payload: any) {
    this.eventEmitter.emit(event, payload);
  }

  /**
   * Lắng nghe một sự kiện
   * @param event Tên sự kiện
   * @param listener Hàm xử lý sự kiện
   */
  on(event: string, listener: (...args: any[]) => void) {
    this.eventEmitter.on(event, listener);
  }
}