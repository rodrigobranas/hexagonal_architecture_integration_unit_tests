export default interface TransactionDAO {
	getTransactions (cardNumber: string, month: number, year: number): Promise<any>;
}
