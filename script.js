function jokeGenerator(response) {
  let joke = document.querySelector("#joke");
  joke.innerHTML = response.data.answer;
}

let apiKey = "75ea6de5c64t62643f0of2d771bd9f16";
let prompt = "Tell me a joke";
let context = "Very funny jokes";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(jokeGenerator);

let jokeBtn = document.querySelector("button");
jokeBtn.addEventListener("click", jokeGenerator);
