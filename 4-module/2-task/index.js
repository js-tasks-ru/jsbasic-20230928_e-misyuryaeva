function makeDiagonalRed(table) {
  for (let tr of table.rows) {
  
    let rowIndex = tr.rowIndex;
    
    for (let td of tr.cells) {
    
      let cellIndex = td.cellIndex;
    
      ( cellIndex == rowIndex) ? (td.style.backgroundColor = 'red'):(td.style.backgroundColor = '');
    
    };  
  }  
  // ваш код...
}
