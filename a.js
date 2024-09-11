document.addEventListener("DOMContentLoaded", () => {
    var btn = document.getElementById("btn");
    var cont = document.getElementById("cont");
    var btn1 = document.getElementById("btn1");
    var userName = document.getElementById("username");
    var userdata = document.querySelector(".userdata");
    var greetingContainer = document.getElementById("greeting-container"); // New container for greeting

    // Array of funny quotes
    // let quotes = [
    //     "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    //     "Why don’t scientists trust atoms? Because they make up everything!",
    //     "I’m reading a book on anti-gravity. It’s impossible to put down!",
    //     "Why don’t programmers like nature? It has too many bugs.",
    //     "Parallel lines have so much in common. It’s a shame they’ll never meet."
    // ];

    // Event listener for 'Enter' button
    var so=document.getElementsByClassName("some")[0]

    btn1.addEventListener("click", () => {
        userdata.style.display = "none";
        cont.style.visibility = "visible";
        so.style.display="none"

        // Create and append greeting element
        var greeting = document.createElement("h1");
        greeting.className = "greeting";
        greeting.innerHTML = "Hello " + userName.value +" <h5> Enter your note here. Think of it as a digital sticky note that won’t peel off your screen 😂</h5>";
        greetingContainer.innerHTML = ''; // Clear any previous greeting
        greetingContainer.appendChild(greeting);

        // Create and append quote element
        var quote = document.createElement("p");
        quote.className = "quote";
        quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
        cont.insertBefore(quote, cont.firstChild); // Insert quote at the top of cont
    });

    // Event listener for 'Add your task' button
    btn.addEventListener("click", () => {
        var userInput = document.getElementById("user");

        let col = [
            "#FDE2E4",
            "#FFD700",
            "#87CEFA",
            "#F0F0F0",
            "#F4A261",
            "#FFB6C1",
            "#FFFACD"
        ];
        let colrnd = Math.floor(Math.random() * col.length);

        let tc = [
            "#333333",
            "#2F4F4F",
            "#1C1C1C",
            "#333333",
            "#2D2926",
            "#2E4053",
            "#000000",
            "#01796F",
            "#00FF7F"
        ];
        let tcrnd = Math.floor(Math.random() * tc.length);

        if (userInput.value === "") {
            alert("Please enter a task!");
            return;
        }

        var card2 = document.createElement("div");
        card2.className = "card2";
        card2.style.backgroundColor = col[colrnd];

        var iconDiv = document.createElement("div");
        iconDiv.className = "icon";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var deleteBtn = document.createElement("p");
        deleteBtn.id = "del";
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        iconDiv.appendChild(checkbox);
        iconDiv.appendChild(deleteBtn);

        var taskText = document.createElement("p");
        taskText.innerHTML = userInput.value;

        card2.appendChild(iconDiv);
        card2.appendChild(taskText);

        cont.appendChild(card2);

        userInput.value = "";

        deleteBtn.addEventListener("click", () => {
            cont.removeChild(card2);
        });

        checkbox.addEventListener("click", () => {
            card2.classList.toggle("new");
        });
    });
});
