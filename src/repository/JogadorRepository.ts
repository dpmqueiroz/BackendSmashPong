import { PrismaClient } from '@prisma/client'

export class JogadorRepository {

    prisma = new PrismaClient()

    async createJogador(jogador : Partial<Jogador>) {

        await this.prisma.jogador.create({
            data: {
                nome: jogador.nome || "Nome não informado",
                email: jogador.email || "Email não informado",
                nickname: jogador.nickname || "Nickname não informado",
                urlFoto: jogador.urlFoto || "URL não informada"
            }
        }).then(async () => {
            await this.prisma.$disconnect()
          })
          .catch(async (e) => {
            console.error(e)
            await this.prisma.$disconnect()
            process.exit(1)
          })
        return 
    }

    async listJogadores() {
        return await this.prisma.jogador.findMany();
    }
    
}

interface Jogador {
  email:      string
  nome:       string
  nickname:   string
  urlFoto:    string
  createdAt: Date
}