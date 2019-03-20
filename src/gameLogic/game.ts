import { State } from './../renderer/state';
import { TicTacToeBoard } from '../gameLogic/TicTacToeBoard'

export class Game extends TicTacToeBoard {
    public state : State
    public winer : number
    public currentPlay : number
    public tie : number 

    constructor(){
        super()
        this.currentPlay = 1
        this.state = new State()
        this.winer = 0
        this.tie = 0
    }

    public onPlay = (id : string)=>{
        this.tie++
        let i = id[0]
        let j = id[id.length -1]
        this.tie === 9 ? this.state.openPopUp("It's a tie!") : null
        if(this.matrix[parseInt(i)][j] == 0){
            this.matrix[parseInt(i)][j] = this.currentPlay
            this.state.drawNewState(id, this.currentPlay)
            this.checkIfWiner(parseInt(i) , parseInt(j))
            this.currentPlay === 1 ? this.currentPlay = 2 : this.currentPlay = 1
        }

    }

  public  checkRow=(arr : [])=>{
        for(let i =0; i < 2; i ++){
            if(arr[i] == arr[i+1]){
                this.winer = arr[i]
            }
            else{
                this.winer = 0
                break
            }
        }
    }

    public  checkCol=(col : number)=>{
        for(let i =0; i < 2; i ++){
            if(this.matrix[i][col] == this.matrix[i +1][col]){
                this.winer = this.matrix[i][col] 
            }
            else{
                this.winer = 0
                break
            }
        }
    }

    public checkSlantDown = () =>{
        let j = 0;
        for(let i =0; i < 2; i ++){
            if(this.matrix[i][j] == this.matrix[i +1][j + 1]){
                this.winer = this.matrix[i][j] 
                j++
            }
            else{
                this.winer = 0
                break
            }
        }
    }

    public checkSlantUp = () =>{
        let j = 2;
        for(let i =0; i < 2; i ++){
            if(this.matrix[i][j] == this.matrix[i +1][j - 1]){
                this.winer = this.matrix[i][j] 
                j--
            }
            else{
                this.winer = 0
                break
            }
        }
    }
    

    checkIfWiner = (row : number , col : number) =>{
                this.checkRow(this.matrix[row])
                this.winer != 0 ? this.state.drawWinerRow(row, `Player ${this.winer} is the winer`) : null
                this.checkCol(col)
                this.winer != 0 ? this.state.drawWinerCol(col , `Player ${this.winer} is the winer`) : null
                this.checkSlantDown()
                this.winer != 0 ? this.state.drawSlantDown(`Player ${this.winer} is the winer`) : null
                this.checkSlantUp()
                this.winer != 0 ? this.state.drawSlantUp(`Player ${this.winer} is the winer`) : null
    }

}