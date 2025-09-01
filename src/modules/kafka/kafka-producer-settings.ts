import { ProducerConfig } from 'kafkajs';
import { DeliverySemantics } from './delivery-semantics.strategy';

export interface KafkaProducerSettings extends ProducerConfig {
    maxInFlightRequests?: number;
    idempotent?: boolean;
    transactionTimeout?: number;
    deliveryStrategy?: DeliverySemantics;
}
