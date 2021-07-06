const charCodes = {
    A: 65,
    Z: 90
}

const toCell = () => {
    return `
    <div class="cell" contenteditable></div>
    `
}

const toColumn = (el) => {
    return `
        <div class="column">
        ${el}
        </div>
    `
}

const createRow = (contnent, i) => {
  
    return `
    <div class="row">
        <div class="row-info">${i ? i : ''}</div>
        <div class="row-data">${contnent}</div>
    </div>
`
}


export const createTable = (rowsCount = 20) => {
    const rows = []
    const cols = new Array(rowsCount)
        .fill('')
        .map((i, idx) => String.fromCharCode(charCodes.A + idx))
        .map(toColumn)
        .join('')

    rows.push(createRow(cols, null))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(rowsCount)
        .fill('')
        .map(toCell)
        .join('')
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}