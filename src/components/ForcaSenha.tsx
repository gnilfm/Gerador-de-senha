import Barra from "./Barra"

interface ForcaSenhaProps{
    forca: number
}

export default function ForcaSenha(props: ForcaSenhaProps){
    return(
        <div className="flex text-xl items-center">
            <span className="font-bold">Forca da Senha:</span>
            <Barra corFundo={props.forca === 3 ? 'bg-green-600': (props.forca === 2 ? 'bg-yellow-500' : 'bg-red-500')}/>
            <Barra corFundo={props.forca === 3 ? 'bg-green-600': (props.forca === 2 ? 'bg-yellow-500' : '')}/>
            <Barra corFundo={props.forca === 3 ? 'bg-green-600':''}/>
        </div>
    )
}