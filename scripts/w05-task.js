/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templesList = [];

/* other functions */
function createTempleArticle(temple) {
  let templeArticle = document.createElement("article");
  
  templeImage = document.createElement("img");
  templeImage.src = `${temple.imageUrl}`;
  templeImage.alt = `${temple.location}`;

  templeName = document.createElement("h3")
  templeName.innerHTML=`${temple.templeName}`

  templeArticle.appendChild(templeName);
  templeArticle.appendChild(templeImage);

  return templeArticle;
}

/* async displayTemples Function */
const displayTemples = (temples) => {
    for (let temple of temples)
    {
        templesElement.appendChild(createTempleArticle(temple))
    };
}
 
/* async getTemples Function using fetch()*/
const getTemples =  async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        templesList = await response.json();
        console.log(`Temples: ${templesList}`);
      }

      displayTemples(templesList);
}

/* reset Function */
const reset = () => { templesElement.innerHTML = ``; console.log(`Temples Reset: ${templesElement.length == 0}`); };

/* filterTemples Function */

const filterTemples = (temples) => {
  reset();
  

  const filter = document.querySelector("#filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)))
      break;
    default:
      displayTemples(templesList);
  }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templesList) });