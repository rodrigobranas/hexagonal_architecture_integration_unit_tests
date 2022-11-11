import CurrencyGateway from "./CurrencyGateway";
import HttpClient from "./HttpClient";

export default class CurrencyGatewayHttp implements CurrencyGateway {

	constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {

	}

	async getCurrencies(): Promise<any> {
		const currencies = await this.httpClient.get(`${this.baseUrl}/currencies`);
		return currencies;
	}

}