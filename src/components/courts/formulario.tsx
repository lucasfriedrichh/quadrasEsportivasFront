import Entrada from "./entrada"
import Court from "@/core/Court"
import { useState } from "react";
import Button from "./button";
import EntradaSelect from "./entradaSelect";

interface FormularioProps {
    court: Court
    courtMudou?: (court: Court) => void
    cancelado?: () => void
}

export default function Formulario(
    props: FormularioProps
  ) {
    const id = props.court?.id;
    const [description, setDescription] = useState(props.court?.description);
    const [status, setStatus] = useState<string[] | string>(
      Array.isArray(props.court?.status) ? props.court?.status : [props.court?.status || ""]
    );
    const opcoes = ["AVAILABLE", "MAINTENANCE", "BROKEN"];

  
    return (
      <div>
        {id ? (
          <Entrada texto="id" valor={id} somenteLeitura></Entrada>
        ) : null}
        <Entrada
          texto="Description"
          valor={description}
          onChange={setDescription}
        ></Entrada>
  
        <EntradaSelect
            texto="Status"
            valor={status}
            opcoes={opcoes} // Certifique-se de passar a propriedade opcoes
            onChange={(newStatus) => setStatus(newStatus)}
            />
  
        <div className="flex justify-end mt-5">
          <Button
            className="mr-3"
            cor="bg-gradient-to-r from-blue-500 to-blue-700"
            onClick={() =>
              props.courtMudou?.(
                new Court(
                  id,
                  description,
                  status.toString()
                )
              )
            }
          >
            {id ? "Alterar" : "Salvar"}
          </Button>
          <Button
            cor="bg-gradient-to-r from-gray-500 to-gray-700"
            onClick={props.cancelado}
          >
            Cancelar
          </Button>
        </div>
      </div>
    );
  }