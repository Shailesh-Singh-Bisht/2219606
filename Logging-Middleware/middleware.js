function Logs(stack, level, package, message) {
  const logsData = {
    stack: stack,
    level: level,
    package: package,
    message: message,
  };

  sendLogToAPI(logsData);
}

async function sendLogToAPI(logsData) {
  try {
    const response = await fetch(
      "http://20.244.56.144/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          Authorization: import.meta.env.VITE_HEADER_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logsData),
      }
    );

    if (response.ok) {
      console.log("Log sent succesfully");
    }
  } catch (error) {
    console.error("Failed to send log", error);
  }
}
