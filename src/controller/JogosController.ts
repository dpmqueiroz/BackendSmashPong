import { Request, Response } from "express";
import { JogoService } from "../service/JogoService";
import { InterfaceJogos } from "../repository/JogosRepository";

export async function JogosController (request: Request, response: Response) :Promise<any> {
    try {

        let jogo: InterfaceJogos = request.body;

        const jogoService: JogoService = new JogoService();
        let jogoSalvo = jogoService.addJogo(jogo);
        return response.json()
    } catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}