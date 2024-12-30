import { Jogos, PrismaClient } from '@prisma/client'

export class JogosRepository {

    prisma = new PrismaClient()

    async createJogo(jogo : JogoToSave) {

        await this.prisma.jogos.create({
            data: {
                season: jogo.season,
                j1Id: jogo.j1Id,
                j2Id: jogo.j2Id,
                j1FS: jogo.j1FS,
                j2FS: jogo.j2FS,
                j1SS: jogo.j1SS,
                j2SS: jogo.j2SS,
                j1TS: jogo.j1TS,
                j2TS: jogo.j2TS,
                j1SW: jogo.j1SW,
                j2SW: jogo.j2SW,
                j1SL: jogo.j1SL,
                j2SL: jogo.j2SL,
                aprovacaoP2: jogo.aprovacaoP2,
                aprovacaoAdm: jogo.aprovacaoAdm,
                createdAt: jogo.createdAt
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

    async listAllJogos() {
        return await this.prisma.jogos.findMany();
    }

    async listJogosById() {
        return await this.prisma.jogos.findMany();
    }
    
}

export interface InterfaceJogos {
    season: string
    j1Id: string
    j2Id: string
    j1FS: number
    j2FS: number
    j1SS: number
    j2SS: number
    j1TS: number
    j2TS: number
    j1SW: number
    j2SW: number
    j1SL: number
    j2SL: number
    createdAt: Date
}

export interface reqJogos {
    season: string
    j1Id: string
    j2Id: string
    j1FS: number
    j2FS: number
    j1SS: number
    j2SS: number
    j1TS: number
    j2TS: number
    createdAt: Date
}
export interface JogoToSave {
  season: string
  j1Id :string
  j2Id :string
  j1FS :number
  j2FS :number
  j1SS :number
  j2SS :number
  j1TS :number
  j2TS :number
  j1SW :number
  j2SW :number
  j1SL :number
  j2SL :number
  aprovacaoP2 :string
  aprovacaoAdm :string
  createdAt :Date
}