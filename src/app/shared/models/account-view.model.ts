export interface IAccountView {
  name: string;
  type: string;
  number: number;
  currency: string;
  balance: number;
  lastTransfer: Date;
  trustworthiness: string;
  status: string;
}
