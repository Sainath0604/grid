var BoardContainer = document.getElementById("BoardContainer");

function CellButtonClicked(event)
{
    var Cell = document.getElementById(event.currentTarget.id)
    Cell.style.backgroundColor = "blue";
    Cell.style.color = "white";
}

function PopulateBoard(numOfCells)
{
    for (var i = 1; i < numOfCells + 1; i++)
    {
        var newCell = document.createElement("div");
        newCell.classList.add("grid-item");
        newCell.setAttribute("id", "cell-"+i)
        newCell.innerHTML = i;
        newCell.addEventListener("click", CellButtonClicked);
        BoardContainer.appendChild(newCell);
    }
}

window.onload = function() {
    PopulateBoard(25);
}