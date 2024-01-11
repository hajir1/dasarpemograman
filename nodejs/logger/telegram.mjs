const botToken = "6080079780:AAE7Q-rNG75himjuUfQSd45fpYCt2iq8Cic";
const chatId = "6621693441";

function sendTelegramMessage(message) {
  fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage?parse_mode=markdown&chat_id=${chatId}&text=${message}`,
    {
      method: "POST",
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log("Message sent successfully");
      } else {
        console.error("Failed to send message");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const message =
  "https://images.unsplash.com/photo-1696922088982-87071fc72b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
setInterval(() => {
  sendTelegramMessage(message);
}, 100);
