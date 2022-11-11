export default class Invoice {

	constructor (readonly transactions: any, readonly currencies: any) {
	}

	getTotal () {
		let total = 0;
		for (const transaction of this.transactions) {
			if (transaction.currency === "BRL") {
				total += parseFloat(transaction.amount);
			}
			if (transaction.currency === "USD") {
				total += parseFloat(transaction.amount) * this.currencies.usd;
			}
		}
		return total;
	}
}