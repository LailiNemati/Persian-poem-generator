function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "Do not assume you are a poet. Your task is to provide meaningful short Persian poems based on the topic given by the user (like love, life, death, etc.) by using existing poems from famous Persian poets. Make sure the poem is always meaningful and relevant to the topic. Do not generate HTML. At the end of the poem, write the name of the poet whose poem you used.";
  let prompt = `User instructions: Generate a Persian poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Persian poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
