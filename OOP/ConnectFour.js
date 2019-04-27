class ConnectFour {
  constructor() {
    this.gameOver = false;
    this.turn = 'R';
    this.player1 = null;
    this.player2 = null;
    this.connectFourBoard = null;
  }

  init() {
    this.connectFourBoard = new Board();
    this.connectFourBoard.createBoard();
    this.player1 = new Player('R');
    this.player2 = new Player('B');
  }

  boardClick(col) {
    if (!this.connectFourBoard.checkIfColumnFull(col)) {
      const player = this.turn === 'R' ? this.player1 : this.player2;
      const row = this.connectFourBoard.getEmptyRowOfColumn(col);
      player.placeChip(row, col, this.connectFourBoard);
      this.changeTurn();
      // check win;
      console.log(this.connectFourBoard.board);
    } else {
      console.log('invalid turn');
    }
  }

  changeTurn() {
    this.turn = this.turn === 'R' ? 'B' : 'R';
  }
}

class Board {
  constructor() {
    this.board = null;
    this.columns = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    };
  }

  createBoard() {
    const board = [];
    for (let rowI = 0; rowI < 7; rowI++) {
      const row = [];
      for (let colI = 0; colI < 7; colI++) {
        row.push('');
      }
      board.push(row);
    }
    this.board = board;
  }

  checkIfColumnFull(col) {
    return this.columns[col] > 6;
  }

  getEmptyRowOfColumn(col) {
    // console.log('column space ', col, this.columns[col]);
    return 6 - this.columns[col];
  }

  dropChip(chip) {
    this.board[chip.coords[0]][chip.coords[1]] = chip.chipColor;
    this.increaseColumnSize(chip.coords[1]);
  }

  increaseColumnSize(col) {
    this.columns[col] += 1;
  }
}

class Player {
  constructor(color) {
    this.color = color;
  }

  placeChip(row, col, board) {
    const currChip = new Chip(row, col, this.color);
    board.dropChip(currChip);
  }
}

class Chip {
  constructor(row, col, color) {
    this.coords = [row, col];
    this.chipColor = color;
  }
}

const game1 = new ConnectFour();
game1.init();
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(2);
game1.boardClick(3);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
game1.boardClick(1);
