import { Loan } from "./loan";

export class UnSecuredLoan extends Loan {
    offerName(): string {
        return 'Unsecured';
    }
    
    getLoanAmount() {
        return 20000;
    }

}

export const unSecuredLoan = new UnSecuredLoan();