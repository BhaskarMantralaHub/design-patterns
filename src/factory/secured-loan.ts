import { Loan } from "./loan";

export class SecuredLoan extends Loan {
    offerName(): string {
        return 'Secured';
    }

    private vin: string = '';

    getLoanAmount() {
        return 4000;
    }

    setVehicle(vin: string) {
        this.vin = vin;
    }

    getVehicle() {
        return this.vin;
    }

}

export const securedLoan = new SecuredLoan();