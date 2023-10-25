function customOpenForm() {
  document.getElementById("customMyForm").style.display = "block";
}

function customCloseForm() {
  document.getElementById("customMyForm").style.display = "none";
}

async function setIframeSrc() {
  const response = await fetch('https://demo.redwater-75eedb1d.eastus.azurecontainerapps.io/get-chatbot-token',{
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  document.getElementById("chatbot-iframe").src = "https://webchat.botframework.com/embed/smileMartBot-bot?s=" + json.key;
}

setIframeSrc()