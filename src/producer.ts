import { Kafka, Producer } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app-producer',
    brokers: ['localhost:9092'],
})

const runProducer = async (): Promise<void> => {
    const producer: Producer = kafka.producer()
    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello World!' },
        ],
    })

    await producer.disconnect()
}

runProducer()
    .then(() => {
        console.log('Producer executed successfully');
    })
    .catch((error) => {
        console.error('Failed to run kafka producer: ', error);
    });
