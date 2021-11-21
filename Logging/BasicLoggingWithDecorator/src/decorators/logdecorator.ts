import { LoggerFactory } from '../log/logger.factory'

const logger = LoggerFactory.getInstance()

export function simpleLog() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    logger.log(`Calling ${propertyKey}`)
  }
}

export function usefulLog() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const targetMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      logger.log(`Calling ${propertyKey}`)
      return targetMethod.apply(this, args)
    }

    return descriptor
  }
}