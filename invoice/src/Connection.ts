export default interface Connection {
	query (statement: string, params: any): Promise<any>;
	close (): Promise<any>;
}
