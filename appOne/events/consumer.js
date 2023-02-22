const { Kafka } = require("kafkajs");

const run = async () => {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["192.168.1.127:9092"],
    });

    const consumer = kafka.consumer({ groupId: "test" });
    console.log("Connecting.....");
    
    await consumer.connect();
    console.log("Connected!");

    await consumer.subscribe({
      topic: "Users",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(`RVD Msg ${result.message.value} on partition ${result.partition}`);
      },
    });
  } catch (error) {
    console.log(error);
  }
};

run();
