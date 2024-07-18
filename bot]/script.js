async function getResponse() {
    const name = document.getElementById("name").value;
    const problem = document.getElementById("problem").value;

    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Loading...";

    const response = await fetch(
      "https://govindji.onrender.com/getResponse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, problem }),
      }
    );

    const text = await response.text();
    responseDiv.innerHTML = text;
  }