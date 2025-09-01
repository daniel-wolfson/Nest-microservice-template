import { EachMessagePayload } from 'kafkajs';
import { IConsumerDeliveryStrategy } from './consumer-delivery-strategy,interface';
import { KafkaSettings } from './kafka-settings';

// Consumer Strategy Implementations

export abstract class BaseConsumerDeliveryStrategy implements IConsumerDeliveryStrategy {
    constructor(protected readonly settings: KafkaSettings) {}

    abstract processMessage(
        payload: EachMessagePayload,
        handler: (payload: EachMessagePayload) => Promise<void>,
    ): Promise<void>;
    abstract configure(): Promise<void>;
}
