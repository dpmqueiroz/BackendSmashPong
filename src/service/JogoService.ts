import { JogosRepository, JogoToSave, reqJogos } from "../repository/JogosRepository";

export class JogoService {

    async addJogo(jogo: reqJogos){
        
        const jogosRepository: JogosRepository = new JogosRepository();

        let newJogo: JogoToSave = {
            season: jogo.season,
            j1Id: jogo.j1Id,
            j2Id: jogo.j2Id,
            j1FS: jogo.j1FS,
            j2FS: jogo.j2FS,
            j1SS: jogo.j1SS,
            j2SS: jogo.j2SS,
            j1TS: jogo.j1TS,
            j2TS: jogo.j2TS,
            j1SW: this.getSetsWinFirstPlayer(jogo),
            j2SW: this.getSetsWinSecondPlayer(jogo),
            j1SL: this.getSetsLoseFirstPlayer(jogo),
            j2SL: this.getSetsLoseSecondPlayer(jogo),
            aprovacaoP2: "Nao Aprovado",
            aprovacaoAdm: "Nao Aprovado",
            createdAt: jogo.createdAt
        }

        jogosRepository.createJogo(newJogo);
        return "Jogo Inserido com sucesso"
    }

    getSetsWinFirstPlayer(jogo: reqJogos): number{
        let result = 0;
        if(jogo.j1FS > jogo.j2FS){
            result++;
        }
        if(jogo.j1SS > jogo.j2SS){
            result++;
        }
        if(jogo.j1TS > jogo.j2TS){
            result++;
        }
        return result;
    }

    getSetsWinSecondPlayer(jogo: reqJogos): number{
        let result = 0;
        if(jogo.j1FS < jogo.j2FS){
            result++;
        }
        if(jogo.j1SS < jogo.j2SS){
            result++;
        }
        if(jogo.j1TS < jogo.j2TS){
            result++;
        }
        return result;
    }

    getSetsLoseFirstPlayer(jogo: reqJogos): number{
        let result = 0;
        if(jogo.j1FS < jogo.j2FS){
            result++;
        }
        if(jogo.j1SS < jogo.j2SS){
            result++;
        }
        if(jogo.j1TS < jogo.j2TS){
            result++;
        }
        return result;
    }

    getSetsLoseSecondPlayer(jogo: reqJogos): number{
        let result = 0;
        if(jogo.j1FS > jogo.j2FS){
            result++;
        }
        if(jogo.j1SS > jogo.j2SS){
            result++;
        }
        if(jogo.j1TS > jogo.j2TS){
            result++;
        }
        return result;
    }

}