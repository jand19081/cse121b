# Final Project - Jarom Anderson

## Project Summary: Simple Text Editor with Local File Access (Markdown)

**Purpose:** Create a web application that allows users to edit text files directly on their computers, supporting basic editing, line numbering, and file management (open, save, download).

**Technology Stack:**

* **HTML:** For UI structure and text editing area.
* **JavaScript:** To implement functionalities, interact with the DOM, and use the FileSystem API.
* **Optional:** Syntax highlighting libraries like Highlight.js or Prism.js (low priority).

**Features:**

* **Basic editing:** Copy-paste (using clipboard API or custom elements).
* **Line numbering:** Dynamically updated separate HTML elements.
* **File management:**
    * Open files: Use FileSystem API with user permission prompts.
    * Save & download files: Create downloadable Blob files with current content.
* **Optional:** Syntax highlighting for various languages (later integration).
* **Optional:** Script to parse text file into a JSON structured summary of the contained code.

**Fulfillment of Project Requirements:**

* **JavaScript application hosted on GitHub Pages:** ✅
* **DOM interaction:** ✅ (HTML and JavaScript interaction)
* **Conditional branching:** ✅ (conditional logic for various functions)
* **Array methods:** ✅ (potential use for line numbering or other features)
* **Template literals:** ✅ (exclusively using them for string construction)
* **External data (low priority):** Implemented using the welcome screen.
* **Submission:** Store project in a subfolder within `cse121b` and submit URL. ✅

**Additional Notes:**

* Users grant permission for each file access.
* Consider security, user privacy, and clear communication of data usage.
* Syntax highlighting is optional and can be added later.
* Explore alternative approaches if FileSystem API proves challenging.


*(Generated Using Google Gemini 02-12-2024, modified by Jarom Anderson)*

*(No AI used below)*

## Project Outline:

### File Structure -
**index.html** - The homepage/welcome screen that welcomes the user, asks for file permission, and allows the user to open the editor.
   **- editor.html** - The editor page. Consisting of a the NAV, divs for the file explorer and text editior, and footer.

## Project Reources:

### Filesystem Links:
 * [MDN Docs FileSystemAPI](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API)
 * [Chrome Docs - Filesystem Access API](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
 * [Example: File System Access API Tutorial](https://www.youtube.com/watch?v=8EcBJV0sOSU)

 ### Other:
 * [HTML5 File API](https://developer.mozilla.org/en-US/docs/Web/API/File)
 * [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)
 * [Highlight.js](https://highlightjs.org/)
 * [Prism.js](https://prismjs.com/)
