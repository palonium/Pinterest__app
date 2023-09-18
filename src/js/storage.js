export const storage = {
    saveBoards: (boards) => {
      localStorage.setItem('boards', JSON.stringify(boards));
    },
    
    getBoards: () => {
      const boardsJSON = localStorage.getItem('boards');
      return boardsJSON ? JSON.parse(boardsJSON) : [];
    },
    
    clearBoards: () => {
      localStorage.removeItem('boards');
    }
  };
  