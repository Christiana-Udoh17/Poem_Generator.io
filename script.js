function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

function generatePoem(event) {
  event.preventDefault();
  // let poem = document.querySelector("#poem");
  // poem.innerHTML = "I love light";
  let inputElement = document.querySelector("#title");
  let inputInstruction = inputElement.value;
  let apiKey = "75ea6de5c64t62643f0of2d771bd9f16";
  let prompt = `UserInstructions:Generate a poem about ${inputInstruction}`;
  let context = `Your a elegy poem writer. Generate a 7 line extremely  sorrowful poem about${inputInstruction}seperating each line with a<br/>in HTML. sign at the end  with the authors name  wrapped in <strong/> tag without any asteriks symbol.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemContainer = document.querySelector("#poem");
  poemContainer.classList.remove("hidden");
  poemContainer.innerHTML = `<div class="blink">⌛ Generating poem about ${inputInstruction}... </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
