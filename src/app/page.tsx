'use client'
import { useEffect, useState } from "react"
import opcoes from "@/data/OpcaoCaracteres"
import CheckBox from "@/components/CheckBox"
import Senha from "@/model/Senha"
import ExibeSenha from "@/components/ExibeSenha"
import ForcaSenha from "@/components/ForcaSenha"

export default function Home() {
  const [tamanho, setTamanho] = useState<number>(8)
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes)
  const [senha, setSenha] = useState('')
  const [forcaSenha, setForcaSenha] = useState(1)

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres))
  },[tamanho, tiposCaracteres])

  const lidaComMudanca= (indice: number)=>{
    const aux = [...tiposCaracteres]
    aux [indice].valor = !aux[indice].valor
    setTiposCaracteres([...aux])
  }

  const geraSenha = () => {
    const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres)
    setSenha(novaSenha)
  }

  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">Gerador de Senhas</h1>
      <div className="w-1/3 bg-slate-700 text-gray-200 rounded-md p-4">
          <div className="flex gap-3 text-2xl flex-col">
            <label className="flex justify-between">
              <span>Tamanho da Senha:</span>              
              <span className="text-blue-500">{tamanho}</span>              
              </label>
            <input type="range" min={5} max={30} value={tamanho} 
              onChange={(e)=>setTamanho(+e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col my-3">
              {tiposCaracteres.map((opcao, i) =>{
                return (
                  <CheckBox
                    key={opcao.id}
                    id={opcao.id}
                    texto={opcao.nome}
                    selecionado={opcao.valor}
                    lidaComMudanca={()=>lidaComMudanca(i)}
                />
                )
            })}
          </div>
          <ForcaSenha forca={forcaSenha}/>
          <button className="
          text-white bg-blue-500 text-lg font-bold
            w-full rounded-lg p-3 mt-5" 
            onClick={geraSenha}
            >
            Gerar Senha</button>
            <ExibeSenha
              senha={senha}
            />
      </div>
    </main>
  )
}
