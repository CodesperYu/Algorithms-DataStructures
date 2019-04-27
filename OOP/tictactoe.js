class TicTacToe {
  constructor() {
    this.gameOver = false;
    this.board = null;
    this.currentPlayer = 'X';
    this.player1 = null;
    this.player2 = null;
  }

  initialize(player1Name, player2Name) {
    this.board = new Board();
    this.board.createBoard();
    this.player1 = new Player(player1Name, 'X');
    this.player2 = new Player(player2Name, '0');
  }

  chooseSquare(row, col) {
    if (!this.gameOver && this.board.isValidSquare(row, col)) {
      console.log('curr game board ', this.board.board);
      this.board.addPiece(row, col, this.currentPlayer);
      this.checkWin();
      this.currentPlayer = this.currentPlayer === 'X' ? '0' : 'X';
    }
  }

  checkWin() {
    const { board } = this.board;
    if (this.checkThreeEqualSquare(board[0][0], board[0][1], board[0][2])
			|| this.checkThreeEqualSquare(board[1][0], board[1][1], board[1][2])
			|| this.checkThreeEqualSquare(board[2][0], board[2][1], board[2][2])
			|| this.checkThreeEqualSquare(board[0][0], board[1][0], board[2][0])
			|| this.checkThreeEqualSquare(board[0][1], board[1][1], board[2][1])
			|| this.checkThreeEqualSquare(board[0][2], board[1][2], board[2][2])
			|| this.checkThreeEqualSquare(board[0][0], board[1][1], board[2][2])
			|| this.checkThreeEqualSquare(board[0][2], board[1][1], board[2][0])
    ) {
      this.endGame();
    }
  }

  endGame() {
    console.log(`${this.player1.name} of (${this.player1.letter}) wins!`);
    console.log('winning game board ', this.board.board);
    this.gameOver = true;
  }

  checkThreeEqualSquare(sq1, sq2, sq3) {
    return sq1 === sq2 && sq1 === sq3 && sq1 === this.currentPlayer;
  }
}

class Board {
  constructor() {
    this.board = null;
  }

  createBoard() {
    const board = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push('');
      }
      board.push(row);
    }
    this.board = board;
  }

  addPiece(row, col, piece) {
    this.board[row][col] = piece;
  }

  isValidSquare(row, col) {
    return this.board[row][col] === '';
  }
}

class Player {
  constructor(name, letter) {
    this.name = name;
    this.letter = letter;
  }

  isThisPlayerTurn(playerTurn) {
    return playerTurn === this.player;
  }
}

const game1 = new TicTacToe();
game1.initialize('Tom', 'Jerry');
game1.chooseSquare(0, 0); // X
game1.chooseSquare(0, 0); // 0
game1.chooseSquare(0, 1); // 0
game1.chooseSquare(2, 1); // X
game1.chooseSquare(2, 2); // 0
game1.chooseSquare(2, 0); // X
game1.chooseSquare(1, 2); // 0
game1.chooseSquare(0, 2); // X
game1.chooseSquare(1, 1); // 0
game1.chooseSquare(1, 0); // X
game1.chooseSquare(1, 1); // 0
