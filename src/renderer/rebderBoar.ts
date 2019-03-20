import { Game } from '../gameLogic/Game'


export class RenderBoard extends Game{
    // public board = new TicTacToeBoard()
    // public matrix : any[]
    // constructor(){
    //     this.matrix = this.board.getMatix()
    // }

    public draw(){
        let j : number = 0
        let i : number = 0
        let mainDiv = document.getElementById("board")

        for(let row of this.matrix){
            for(let col in this.matrix[0]){
                let div : HTMLElement =  document.createElement('div');
                div.classList.add(`col`);
                div.setAttribute("id", `${i}-${j}`);
                div.onclick = () => this.onPlay(div.id)
                mainDiv.appendChild(div);
                j === 2 ? j= 0 : j++
            }
            i++
        }
    }
}