import OpcaoCaractere from "@/model/OpcaoCaractere"
import IdesCaracteres from "@/model/IdsCaracteres"

const opcoes: OpcaoCaractere[] = [
    {id: IdesCaracteres.NUMEROS, nome: 'Numeros', valor: true},
    {id: IdesCaracteres.MAIUSCULAS, nome: 'Letras Maiusculas', valor: false},
    {id: IdesCaracteres.MINUSCULAS, nome: 'Letras Minusculas', valor: false},
    {id: IdesCaracteres.ESPECIAS, nome: 'Caracteres Especiais', valor: false}
]

export default opcoes