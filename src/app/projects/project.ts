export class Project {
    id!: number;
    name!: string;
    team!: string;
    tasks?: [
        {
            nameTask: string,
            member: string,
            dateInit: Date,
            dateEnd: Date
        }
    ];
    status?: string;
    description!: string;
}
