import { Kafka, Consumer } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app-consumer',
  brokers: ['localhost:9092'],
})

const runConsumer = async (): Promise<void> => {
  const consumer: Consumer = kafka.consumer({ groupId: 'test-group' })
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

runConsumer()
  .then(() => {
    console.log('Consumer is running...');
  })
  .catch((error) => {
    console.error('Failed to run kafka consumer: ', error);
  });
