let summaryUrl = "";

async function getFileAndType(summaryUrl) {
    const response = await fetch(summaryUrl);
    const filename = summaryUrl.split('/').pop();
    const type = filename.split('.').pop().toLowerCase();
    if (type !== 'js') {
      throw new Error('Currently only supports .js files');
    }
    const text = await response.text();
    return { text, type };
  }

  
  function parseCode(text) {
    const ast = {}; // This object will store parsed data
  
    // Regular expressions for different constructs
    const regexes = {
      function: /function\s+([\w_]+)\s*\((.*)\)\s*{\s*(.*)\s*}$/,
      variable: /const|let|var\s+([\w_]+)\s*=\s*(.*);/,
      object: /const|let|var\s+([\w_]+)\s*=\s*\{(.*)\}/,
      enum: /enum\s+([\w_]+)\s*{\s*(.*)\s*};/,
      switch: /switch\s*\((.*)\)\s*{\s*(.*)\s*}$/,
      
    };
  
    // Loop through each line of code
    const lines = text.split('\n');
    for (const line of lines) {
      for (const [type, regex] of Object.entries(regexes)) {
        const match = line.match(regex);
        if (match) {
          ast[type] = ast[type] || [];
          ast[type].push({ line, content: match.slice(1).join('\n') });
          break; // Stop checking other regexes after a match
        }
      }
    }
  
    return ast;
  }

  function displayAST(ast) {
    let output = '{}';
    for (const [type, data] of Object.entries(ast)) {
      output += `\n"${type}": [`;
      for (const item of data) {
        output += `\n  { "line": ${item.line}, "content": "${item.content.replace(/\n/g, '\\n')}" },`;
      }
      output += '\n]';
    }
    console.log(output);
  }

  function summarize() {
    console.log("summary clicked")
    summaryUrl = document.getElementById('codeUrl').value;

    getFileAndType(summaryUrl)
    .then(data => parseCode(data.text))
    .then(ast => displayAST(ast))
    .catch(err => console.error(err));
  }