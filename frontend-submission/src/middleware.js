export default async function Logs(stack, level, pkg, message) {
  const logsData = {
    stack: stack,
    level: level,
    pkg: pkg,
    message: message,
  };

  try {
    await sendLogToAPI(logsData);
  } catch (error) {
    console.error("Failed to send log (outer)", error);
  }
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
      console.log("Log sent successfully");
    } else {
      console.error("Log API responded with status:", response.status);
    }
  } catch (error) {
    console.error("Failed to send log (inner)", error);
  }
}
