# KafkaJS Practice with Zookeeper

## Installing dependencies

Run `npm install` in the project root to install dependencies.

## Downloading Kafka

Download Kafka at [its official site](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.7.0/kafka_2.13-3.7.0.tgz) and then extract the folder to a location of your choosing.

## Start the ZooKeeper service

Navigate to the directory for the Kafka that you just donwloaded and extracted and run the following command:

`bin/zookeeper-server-start.sh config/zookeeper.properties`

## Start the Kafka broker service

Open another terminal session in the same location and run:

`bin/kafka-server-start.sh config/server.properties`

## Create a new topic for testing purposes

Still in the Kafka folder, run the following command to create a new topic to hold the events we will create:

`bin/kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092`

## Running the consumer and the producer

Prepare two more terminal sessions that are not occupied by a process. Next run the following commands in each terminal in the project root folder to compile and run the producer and the consumer, respectively:

`npx tsc --project tsconfig.json && node dist/producer.js`

`npx tsc --project tsconfig.json && node dist/consumer.js`

The latter will start listening on the producer.

## Useful commands

### List all topics

bin/kafka-topics.sh --bootstrap-server localhost:9092 --list

### List and view information about created topics

`bin/kafka-topics.sh --describe --bootstrap-server localhost:9092`

### Listen on and view all events sent to a topic

The "--from-beginning" flag shows all the ones already sent over as well

``bin/kafka-console-consumer.sh --bootstrap-server [YOUR BROKER HERE]  --topic [YOUR TOPIC HERE] --from-beginning``

for example:

``bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-topic --from-beginning``

Otherwise the command will listen to new events being added to the topic.

## Terminate the Kafka environment

When you are done and want to start fresh the next time, disable the running instances with `Ctrl-C`, and finally run the following command in the Kafka directory to get rid of any locally created events:

`rm -rf /tmp/kafka-logs /tmp/zookeeper /tmp/kraft-combined-logs`

To delete all topics on Windows in a bulk, remove the contents of the folder ``C:\tmp``.

## References:

[Building a Sample Project with Kafka and kafkajs.](https://medium.com/@obaff/learn-to-build-a-sample-project-with-kafka-and-kafkajs-1cf50c92e00a)

[Getting Started at KafkaJS](https://kafka.js.org/docs/getting-started)

[Official Documentation for Kafka: Quickstart](https://kafka.apache.org/documentation/#quickstart)

