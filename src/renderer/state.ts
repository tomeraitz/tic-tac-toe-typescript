export class State{
    drawNewState(id : string , player : number){
        let div = document.getElementById(id)
        player === 1 ? div.innerText = 'X' : div.innerText = 'O'
        
    }

    drawWinerRow(row : number, winer : string){
        for(let col = 0; col < 3; col++){
            let div = document.getElementById(`${row}-${col}`)
            div.style.color = "red"
            div.style.fontWeight = "bold"
            this.openPopUp(winer)
        }
    }

    drawWinerCol(col : number , winer : string){
        for(let row = 0; row < 3; row++){
            let div = document.getElementById(`${row}-${col}`)
            div.style.color = "red"
            div.style.fontWeight = "bold"
            this.openPopUp(winer)
        }
    }

    drawSlantDown(winer : string){
        let col = 0
        for(let row = 0; row < 3; row++){
            row === 0 ? col =0 : col++
            let div = document.getElementById(`${row}-${col}`)
            div.style.color = "red"
            div.style.fontWeight = "bold"
            this.openPopUp(winer)
        }
    }

    drawSlantUp(winer : string){
        let col = 2
        for(let row = 0; row < 3; row++){
            row === 0 ? col =2 : col--
            let div = document.getElementById(`${row}-${col}`)
            div.style.color = "red"
            div.style.fontWeight = "bold"
            this.openPopUp(winer)
        }
    }

    openPopUp(winer : string){
        let end = document.getElementById(`end-game`)
        let h1 = document.getElementById("end-title")
        h1.innerText = winer
        end.style.display = "block"
    }
}