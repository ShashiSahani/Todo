function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const msg = document.getElementById("msg");
      msg.innerText="";
    if (inputBox.value.trim() === "") {
      let message = document.createElement("span");
      message.innerText = "Enter something";
      msg.appendChild(message);
    } else {
      let li = document.createElement("li");
      li.innerText = inputBox.value;
      listContainer.appendChild(li);
      inputBox.value = ""; // Clear input after adding task
    }
  }

  // Clear the error message when user starts typing again
  document.getElementById("input-box").addEventListener("input", function () {
    document.getElementById("msg").innerText = ""; // Clear any previous error message
  });