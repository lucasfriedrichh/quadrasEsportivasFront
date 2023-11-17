export default class Evento {
    id: number | null;
    descricao: string;
    status: string;

    constructor(id: number, descricao: string, status: string) {
        this.id = id;
        this.descricao = descricao;
        this.status = status;
    }

    static geraCourtMock() {
        return [new Evento(1, "Quadra de Futebol", "AVAILABLE"),
                new Evento(2, "Quadra de Basquete", "AVAILABLE")
        ]
       }
}