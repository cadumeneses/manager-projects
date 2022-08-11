export class Project {
    id!: number;
    name!: string;
    team!: string;
    tasks?: Array<{
        nameTask?: string,
        member?: string,
    }>;
    status?: string;
    description!: string;
}
