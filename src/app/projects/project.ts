export class Project {
    id!: number;
    name!: String;
    team!: String;
    tasks!: [
        {
            name: string,
            member: string,
            dateInit: Date,
            dateEnd: Date
        }
    ];
    status!: String;
    description!: String;
}
