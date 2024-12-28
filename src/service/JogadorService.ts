import { Jogador } from "@prisma/client";
import { JogadorRepository } from "../repository/JogadorRepository";

export class JogadorService {

    async createJogador(jogador: Partial<Jogador>){
        const jogadorRepository: JogadorRepository = new JogadorRepository();
        let newPlayer = await jogadorRepository.createJogador(jogador);
        return newPlayer
    }
}