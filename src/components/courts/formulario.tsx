import Entrada from "./entrada"
import Court from "@/core/Court"
import { useState } from "react";
import Button from "./button";

interface FormularioProps {
    court: Court
    courtMudou?: (court: Court) => void
    cancelado?: () => void
}

export default function Formulario(
    props: FormularioProps){
        const id = props.court?.id
        const [description, setDescription] = useState(props.court?.description)
        const [status, setStatus] = useState(props.court?.status)



        return(
            <div>
                {id ? (<Entrada texto="id" valor={id} somenteLeitura ></Entrada>) : false}
                <Entrada texto="Description" valor={description} onChange={setDescription}></Entrada>
                <Entrada texto="Status" valor={status} onChange={setStatus}></Entrada>
                <div className="flex justify-end mt-5" >
                    <Button className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                        onClick={() => props.courtMudou?.(new Court(
                            id, description, status))}>

                            {id ? 'Alterar' : 'Salvar'}
                    </Button>
                    <Button cor="bg-gradient-to-r from-gray-500 to-gray-700"
                        onClick={props.cancelado}> Cancelar
                    </Button>
                </div>
            </div>
        )
    }