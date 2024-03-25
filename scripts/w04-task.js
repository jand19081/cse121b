/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Jarom Andrson",
    photo : "../images/linkedinprofile.jpg",
    favoriteFoods : [ "Rice & Beans", "Pizza", "Cobbler", "Steak", "Chicken" ],
    hobbies : [ "Hiking", "Camping", "Backpacking", "Waterskiing", "Paddleboarding" ],
    placesLived : []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place : "Orem, UT",
        length :"~1 year"
    },
    {
        place : "Penguitch, UT",
        length : "~3 years"
    },
    {
        place : "Lakeview, OR",
        length : "3 years"
    },
    {
        place : "Bountiful, UT",
        length : "2 years"
    },
    {
        place : "Willard, UT",
        length : "2 years"
    },
    {
        place : "Brigham City, UT",
        length : "4 years"
    },
    {
        place : "Fairfield, CA",
        length : "2 years"
    },
    {
        place : "Rexburg, ID",
        length : "2 years"
    },
    {
        place : "Heber City, UT",
        length : "< 1 year"
    },
    )



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach ( food => {
        let listItem = document.createElement("li");
        listItem.textContent = food;
        document.querySelector("#favorite-foods").appendChild(listItem);
    }
);

/* Hobbies List */
myProfile.hobbies.forEach ( hobby => {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    document.querySelector("#hobbies").appendChild(listItem);
}
);

/* Places Lived DataList */
myProfile.placesLived.forEach ( location => {
    let dataTerm = document.createElement("dt");
    let dataDesc = document.createElement("dd");
    dataTerm.textContent = location.place;
    dataDesc.textContent = location.length;
    document.querySelector("#places-lived").appendChild(dataTerm);
    document.querySelector("#places-lived").appendChild(dataDesc);
}
);
