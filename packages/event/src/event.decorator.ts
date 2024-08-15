import { Inject } from "@nestjs/common";
import { EventService } from "./event.service";

/**
 * Custom decorator để inject EventService
 */
export const InjectEventService = () => Inject(EventService);

export function OnEvent(event: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    // Đăng ký sự kiện khi lớp được khởi tạo
    const originalConstructor = target.constructor;
    const existingOnEvents =
      Reflect.getMetadata("onEvents", originalConstructor) || [];
    existingOnEvents.push({ event, method: originalMethod });
    Reflect.defineMetadata("onEvents", existingOnEvents, originalConstructor);
  };
}

/**
 * Decorator để phát một sự kiện
 * @param event Tên sự kiện cần phát
 */
export function EmitEvent(event: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);

      // Truy cập vào `eventService` từ lớp chứa phương thức
      const eventService = this["eventService"] as EventService;
      if (eventService) {
        eventService.emit(event, args);
      } else {
        console.error("EventService is not available");
      }

      return result;
    };
  };
}
