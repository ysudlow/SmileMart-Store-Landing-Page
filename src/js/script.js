function customOpenForm() {
  document.getElementById("customMyForm").style.display = "block";
}

function customCloseForm() {
  document.getElementById("customMyForm").style.display = "none";
}

async function setIframeSrc() {
  const response = await fetch('https://asa-yt7xyaocl7xlo-demo.azuremicroservices.io/get-chatbot-token',{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  debugger

  document.getElementById("chatbot-iframe").src = "https://webchat.botframework.com/embed/smileMartBot-bot?s=" + json.key;
}

setIframeSrc()