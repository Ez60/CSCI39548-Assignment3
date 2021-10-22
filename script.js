let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    const grid1 = document.querySelector("#grid");
    const rowAdd = document.createElement("tr");
    if (numCols === 0)
    {
        numCols = 1;
    }
    for (let i = 0; i < numCols; i++)
    {
        const tdAdd = document.createElement("td");
        tdAdd.innerHTML = "td";
        rowAdd.appendChild(tdAdd);
    }
    grid1.appendChild(rowAdd);
    numRows++;
    alert("Clicked Add Row")
}

//Add a column
function addC() {
    const grid1 = document.querySelector("#grid");
    if (numRows === 0)
    {
        const rowAdd = document.createElement("tr");
        grid1.appendChild(rowAdd);
        numRows++;
    }
    for (let row of grid.rows)
    {
        const tdAdd = document.createElement("td");
        tdAdd.innerHTML = "td";
        row.appendChild(tdAdd);
    }
    numCols++;
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    const grid1 = document.querySelector("#grid");
    if (numRows > 0)
    {
        if (numRows === 1)
        {
            numCols = 0;
        }
        const rowDelete = grid1.lastElementChild;
        grid1.removeChild(rowDelete);
        numRows--;
    }
    alert("Clicked Remove Row")
}

//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}