import Court from "@/core/Court"
import { IconEdicao, IconTrash } from "../icons/table"

interface TableProps{
    courts: Court[]
    courtSelecionado?: (court: Court) => void
    courtExcluido?: (court: Court) => void

}

export default function Table(props: TableProps){
    const exibirAcoes = props.courtSelecionado || props.courtExcluido

    function renderHeader(){
        return(
            <tr>
                <th  className="text-left p-3">id</th>
                <th  className="text-left p-3">descricao</th>
                <th  className="text-left p-3">status</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }


    function renderDados(){
        return props.courts?.map((court,i) =>{
            return(
                <tr key={court.id}
                    className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                    <td className="text-left p-3">{court.id}</td>
                    <td className="text-left p-3">{court.description}</td>
                    <td className="text-left p-3">{court.status}</td>
                    {exibirAcoes ? renderizarAcoes(court) : false }
                </tr>
            )
        })
    }

    function renderizarAcoes(court: Court) {
        return (
            <td className="flex justify-center">
                {props.courtSelecionado
                ? ( 
                <button onClick={() => props.courtSelecionado?.(court)} className={`flex justify-center items text-green-600 rounded-full p-2 m-1 hover:bg-gray-100`}>
                    {IconEdicao}
                </button>)
                : false }
                {props.courtExcluido
                ? (
                <button onClick={() => props.courtExcluido?.(court)} className={`flex justify-center items text-red-600 rounded-full p-2 m-1 hover:bg-gray-100`}>
                    {IconTrash}
                </button>
                )
                : false}
            </td>
        )
    }


    return(
        <table className="w-full rounded-xl overflow-hidden">
        <thead className={`text-gray-100 bg-gradient-to-r from-indigo-500 to-indigo-800`}>
           {renderHeader()}
        </thead>
        <tbody>
            {renderDados()}
        </tbody>
        </table>
    )
}