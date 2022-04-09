function createGrid() {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        for (let i = 0; i < 16; i++) {
            const square = document.createElement('div')
            square.classList.add('square');
            gridRow.appendChild(square);
        }
        grid.appendChild(gridRow);
    }
}

createGrid();