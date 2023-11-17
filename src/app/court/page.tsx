'use client';
import Layout from "@/components/courts/layout";
import Court from "@/core/Court"
import Table from "@/components/courts/table";
import Button from "@/components/courts/button";
import Formulario from "@/components/courts/formulario";

export default function Courts() {

    const courts = Court.geraCourtMock()

    function courtSelecionado(court: Court) {
        console.log(court.descricao)
    }

    function courtExcluido(court: Court) {
        console.log(court.descricao)
    }


    return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-white`}>
        <Layout titulo="Cadastro de quadras">
            <div className="flex justify-end">
                <Button className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700">
                    Novo evento
                </Button>
            </div>
            <Table courts={courts}
                courtSelecionado={courtSelecionado}
                courtExcluido={courtExcluido}
            ></Table>

            <Formulario court={courts[0]}></Formulario>
        </Layout>
    </div>
 )
}
