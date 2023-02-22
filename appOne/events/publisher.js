const { Kafka } = require("kafkajs");
const msg = process.argv[2];

const run = async () => {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["192.168.1.127:9092"],
    });

    const producer = kafka.producer();

    await producer.connect();

    console.log("connected");

    const partition = msg[0] < "N" ? 1 : 1;

    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: msg,
          partition: partition,
        },
      ],
    });

    console.log("Created successfully", JSON.stringify(result));

    await producer.disconnect();
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
};

run();
