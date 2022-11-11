import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import AxiosAdapter from "./AxiosAdapter";
import PgPromiseAdapter from "./PgPromiseAdapter";
import InvoiceController from "./InvoiceController";
import ExpressAdapter from "./ExpressAdapter";

const connection = new PgPromiseAdapter();
const transactionDAO = new TransactionDAODatabase(connection);
const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:3001";
const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl);
const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
const httpServer = new ExpressAdapter();
new InvoiceController(httpServer, calculateInvoice);
httpServer.listen(3000);