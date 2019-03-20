export class TicTacToeBoard{
    public matrix : any[] = [];
 
    constructor(){
        this.matrix= this.generateMatrix(3, 3)
    }

   private generateMatrix(numRows : number, numColumns : number) {
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(0)
            }
        }
        return this.matrix
    }

    public getMatix(){
        return this.matrix
    }

}


