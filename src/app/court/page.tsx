'use client';

import Layout from "@/components/courts/layout";
import Court from "@/core/Court"
import Tabela from "@/components/courts/table";
import Button from "@/components/courts/button";
import Formulario from "@/components/courts/formulario";
import { excluirCourt, atualizarCourt, cadastrarCourt, fetchCourts } from "@/service/courtService";
import { useEffect, useState } from "react";

export default function Courts() {
    const [court, setCourt] = useState<Court>(Court.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [courts, setCourts] = useState<Court[]>([]);
    
    useEffect(() => {
        if (visivel === 'tabela') {
            const loadCourts = async () => {
                try { const dados = await fetchCourts();
                    setCourts(dados);
                } catch (error) {
                    console.error("Erro ao buscar Quadras:", error);
                }
            }
            loadCourts();
        }
    }, [visivel]);

    function courtSelecionado(court: Court) {
        setCourt(court)
        setVisivel('form')
    }

    function novoCourt() {
        setCourt(Court.vazio())
        setVisivel("form")
    }

    async function salvarCourt(court: Court) {
        try {
            const novoCourt = await cadastrarCourt(court);
            setVisivel("tabela");
        } catch (error) {
            console.error("Erro ao salvar quadra:", error);
        }
    }

    async function alterarCourt(court: Court) {
        try {
        const courtAtualizado = await atualizarCourt(court);
        setVisivel("tabela");
        } catch (error) {
        console.error("Erro ao atualizar quadra:", error);
        }
       }

    function salvarOuAlterarCourt(court: Court) {
        if (court.id) {
            alterarCourt(court)
        } else {
            salvarCourt(court)
        }
    }


    async function courtExcluido(court: Court) {
        const confirmacao = window.confirm("Tem certeza de que deseja excluir esta quadra?");
        if (confirmacao) {
            try {
                if (court.id !== null) {
                    await excluirCourt(court.id);
                } else {
                    console.error("courtID é null!");
                }
                setCourts(prevCourts => prevCourts.filter(co => co.id !== court.id));
            } catch (error) {
                console.error("Erro ao excluir quadra:", error);
            }
        }
    }
       
    return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-white`}>
        <Layout titulo="Cadastro de quadras">
            {visivel === `tabela` ? (
                <>
                <div className="flex justify-end">
                <Button className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
                    onClick={() => novoCourt()}>
                    Novo Court
                </Button>
                </div>
                <Tabela courts={courts}
                    courtSelecionado={courtSelecionado}
                    courtExcluido={courtExcluido}
                ></Tabela>
                </>
            ) : (
                <Formulario court={court} 
                            courtMudou={salvarOuAlterarCourt} 
                            cancelado={() => setVisivel('tabela')}/>
            )}
        </Layout>
    </div>
 )
}
