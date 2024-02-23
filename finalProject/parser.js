// Supported Languages
const supportedLanguages = {
  "JavaScript" : ".js",
  // "Header files" : ".h",
  // "C" : ".c",
  // "C++" : ".cpp"
};

// Global Variables
let url = null;
let storedText = "";
let ast = null;
const container = document.getElementById('ast-container');
const fileExtension = document.getElementById("fileExtension");


// Raw Text Functions
function setUrl() {
  url = document.getElementById('codeUrl').value;
  setFileExtension();
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
  } catch (error) {
    console.error(error);
    storedText = "Error fetching code";
    displayText();
  }
}

function displayText() {
  document.getElementById('rawText').textContent = "Here's what I got! \n" + storedText;
}


// AST Functions
async function getAst() {
  ast = await parseTree(storedText);
  console.log(ast);
  displayAst(ast, container);
}

async function parseTree(storedText) {
  // Parse the raw text
  try {
    const tree = acorn.parse(storedText, { ecmaVersion: 2020 });
    return tree;
  } catch (error) {
    console.error("Error parsing text:", error);
    return null;
  }
}

function analyzeFunctions(ast) {
  const results = [];
  // Implement walking through the tree and analysis logic
  return results;
}

function displayAst(node, container) {
  console.log(analyzeFunctions(ast));

  
}


// Summarize Functions
async function summarizeText() {
  acorn.walk.ancestor(ast, {
    Literal(_node, _state, ancestors) {
      console.log("This literal's ancestors are:", ancestors.map(n => n.type))
    }
  })


  const summary = await summarizeCode(storedText);
  document.getElementById('summary').textContent = summary;
}

// Other Functions

function setFileExtension() {
  
  str = url;
  let extensionIndex = str.length;
  let extension = '';

  // Loop through a the string backwards to get the file extension
  while(str[extensionIndex] != '.' && extensionIndex >= 0) {
    extensionIndex --;
  }

  if (str[extensionIndex] == '.') { extension = `${str.slice(extensionIndex)}` }
  else { extension = 'Error: Could not determine file extension.'}
  
  fileExtension.innerText = `File Extension: ${extension}`;

}

// Define the function to display supported languages
function displaySupportedLangs(supportedLanguages) {
  let languagesString = "Supported Languages: ";
  for (let lang in supportedLanguages) {
    languagesString += `${lang}, `;
  }
    languagesString += '[more coming soon]'
  document.getElementById("supportedLanguages").innerHTML = languagesString;
}

// Call the function to display languages upon page load
displaySupportedLangs(supportedLanguages);
