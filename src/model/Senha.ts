import IdesCaracteres from './IdsCaracteres';
import OpcaoCaractere from './OpcaoCaractere';

export default class Senha {

    static opcoesTem(id: string, opcoes: OpcaoCaractere[]){
        const opcao = opcoes.find(o => o.id === id)
        return opcao!.valor
    }

    static gerarSenha(tamanho: number, opcoes:OpcaoCaractere[]) {
        let caracteresPossiveis = ''

        if (Senha.opcoesTem(IdesCaracteres.NUMEROS, opcoes)) {
            caracteresPossiveis+='0123456789'
        }
    
        if (Senha.opcoesTem(IdesCaracteres.MAIUSCULAS, opcoes)) {
            caracteresPossiveis+=' ABCDEFZHIKLMNOPQRSTVXYZ'
        }
    
        if (Senha.opcoesTem(IdesCaracteres.MINUSCULAS, opcoes)) {
            caracteresPossiveis+='abcdefghijklmnopqrstuvwxyz'
        }
    
        if (Senha.opcoesTem(IdesCaracteres.ESPECIAS, opcoes)) {
            caracteresPossiveis+='!@$%&*()+-?.,:;'
        }

        let senha = ''
        for(let i = 0; i < tamanho; i++){
            const aleatorio = Math.floor(Math.random() * caracteresPossiveis.length)
            senha += caracteresPossiveis.charAt(aleatorio)
        }
        return senha
    }

    static calcularForca(tamanho: number, opcoes:OpcaoCaractere[]){
        const temNumeros = +Senha.opcoesTem(IdesCaracteres.NUMEROS, opcoes)
        const temMaiusculas = +Senha.opcoesTem(IdesCaracteres.MAIUSCULAS, opcoes)
        const temMinusculas = +Senha.opcoesTem(IdesCaracteres.MINUSCULAS, opcoes)
        const temEspeciais = +Senha.opcoesTem(IdesCaracteres.ESPECIAS, opcoes)
        const qtdeTipos = temNumeros + temMaiusculas + temMinusculas + temEspeciais

        if(tamanho < 8 || qtdeTipos < 2){
            return 1
        }
        if( qtdeTipos === 4 && tamanho >= 10){
            return 3
        }
        return 2
    }
}