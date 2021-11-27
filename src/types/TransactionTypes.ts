import { HeaderReponse } from './GenericTypes'

export interface FraudInfo {
    risk_score: number;
}

export interface Transaction {
    dateTms: string;
    codOper: string;
    status: number;
    cardholderFullName: string;
    email: string;
    cardType: string;
    displayCardNum?: string;
    fraudInfo?: FraudInfo;
    amount: number;
}

export interface TransactionResponse {
    headerStatus: HeaderReponse;
    data: Array<Transaction>;
}