export default class Court {
    id: number | null;
    description: string;
    status: string;

    constructor(id: number | null, description: string, status: string) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    static geraCourtMock() {
        return [new Court(1, "Quadra de Futebol", "AVAILABLE"),
                new Court(2, "Quadra de Basquete", "AVAILABLE")
        ]
       }

    static vazio(): Court {
        return new Court(null, "", "");
    }
}