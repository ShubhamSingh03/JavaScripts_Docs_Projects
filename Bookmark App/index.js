let mySites = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const sitesFromLocalStorage = JSON.parse( localStorage.getItem("mySites") );

if (sitesFromLocalStorage) {
    mySites = sitesFromLocalStorage;
    sitesRender(mySites);
}

// for displaying listItems 
function sitesRender(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}

// on double clicking delete button localstorage and mysites array cleared
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    mySites = [];
    sitesRender(mySites);
})

// on clicking save input btn event listener
inputBtn.addEventListener("click", function() {
    if (!inputEl.value) {
        alert("Please enter link to save!");
    } else {
    mySites.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("mySites", JSON.stringify(mySites) );
    sitesRender(mySites);
    }
})