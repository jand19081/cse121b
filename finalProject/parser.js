// Supported Languages
const supportedLanguages = {
  "JavaScript" : ".js",
  "Header files" : ".h",
  "C" : ".c",
  "C++" : ".cpp"
};

let url = null;
let storedText = "";

function setUrl() {
  url = document.getElementById('codeUrl').value;
  getRawCode();
}

async function getRawCode() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching ${url}`);
    }

    storedText = await response.text();
    displayText();
    // Enable summarize button
    // enableSummarize();
  } catch (error) {
    console.error(error);
    storedText = "Error fetching code";
    displayText();
  }
}

function displayText() {
  document.getElementById('rawText').textContent = "Here's what I got! \n" + storedText;
}

function enableSummarize() {
  document.getElementById('summarizeText').disabled = false;
}

async function summarizeText() {
  // Implement your code summarization logic here
  const summary = await summarizeCode(storedText);
  document.getElementById('summary').textContent = summary;
}

function setFileExtension() {
  // ToDo: define a function that displays the file extension
}

// Define and call the function to display supported languages
function displaySupportedLangs(supportedLanguages) {
  let languagesString = "Supported Languages: ";
  for (let lang in supportedLanguages) {
    languagesString += `${lang}, `;
  }
  document.getElementById("supportedLanguages").innerHTML = languagesString;
}

// Call the function to display languages upon page load
displaySupportedLangs(supportedLanguages);
