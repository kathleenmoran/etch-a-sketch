function createGrid(dimension) {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < dimension; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        for (let i = 0; i < dimension; i++) {
            const square = document.createElement('div')
            square.classList.add('square');
            gridRow.appendChild(square);
        }
        grid.appendChild(gridRow);
    }
}

function colorSquare(e) {
    e.target.style.backgroundColor = 'black';
}

function resetGrid(e) {
    deleteGrid();
    const newGridDimension = parseInt(prompt('Please enter a new grid dimension between 10 and 100 inclusive.'));
    if (newGridDimension >= 10 && newGridDimension <= 100) {
        createGrid(newGridDimension);
        colorGrid();
    }
    else {
        alert('Invalid grid dimension.');
        resetGrid(e);
    }
}

function deleteGrid() {
    const grid = document.querySelector('.grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function colorGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', colorSquare));

    const clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', resetGrid);
}

createGrid(16);
colorGrid();
