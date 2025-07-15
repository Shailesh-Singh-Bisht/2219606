export default function Logs(stack, level, pkg, message) {
  const logsData = {
    stack: stack,
    level: level,
    pkg: pkg,
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaGFpbGVzaHNpbmdoYmlzaHQwNDExQGdtYWlsLmNvbSIsImV4cCI6MTc1MjU1NjM1NywiaWF0IjoxNzUyNTU1NDU3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZjNmY2E3MjMtYzg1OS00ODFiLWI2NTctOGU5NWFkNWRjMTlhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2hhaWxlc2ggc2luZ2ggYmlzaHQiLCJzdWIiOiIwNDJkMTc1Yy00ODgyLTQ5NDktYjIwNS1kMWRlMGMyMzdjM2YifSwiZW1haWwiOiJzaGFpbGVzaHNpbmdoYmlzaHQwNDExQGdtYWlsLmNvbSIsIm5hbWUiOiJzaGFpbGVzaCBzaW5naCBiaXNodCIsInJvbGxObyI6IjIyMTk2MDYiLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiIwNDJkMTc1Yy00ODgyLTQ5NDktYjIwNS1kMWRlMGMyMzdjM2YiLCJjbGllbnRTZWNyZXQiOiJxVEtaWHJSSG5lTnhGR2piIn0.tkfE0pcTLC9cT2c-g11zXKGSkRG9uW3R3UvIr4n2s5A",
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
