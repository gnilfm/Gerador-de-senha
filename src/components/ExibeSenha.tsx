import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

interface ExibeSenhaProps{
   senha: string 
}

export default function ExibeSenha(props: ExibeSenhaProps){
    const [mostrarAviso, setMostrarAviso] = useState(false)

    const copiarSenha = () => {
        navigator.clipboard.writeText(props.senha)
        setMostrarAviso(true)
        setTimeout(() => {
           setMostrarAviso(false) 
        }, 2000);
    }

    return(
        <div className="mt-4 ">
            {props.senha.trim() !== '' && (
                <>
                    <span className="font-bold text-lg">Senha Gerada:</span>
                    <div className="
                        p-2 border bg-gray-100 rounded
                         text-slate-700 flex justify-between
                        ">
                        { props.senha }
                        <IconCopy 
                        className="hover:text-blue-400 cursor-pointer"
                        onClick={copiarSenha}
                        />
                    </div>
                </>              
            )}
            {mostrarAviso && <p className="mt-2 text-blue-500 text-center">Senha copiada para a área de transferencia!</p> }           
        </div>
    )
}