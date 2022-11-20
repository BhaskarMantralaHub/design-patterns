import { Loan } from "./loan";

export class UnSecuredLoan extends Loan {
    setVehicle(vin: string): void {
        throw new Error("Vehicle is not eligible for unsecured offer");
    }
    getVehicle(): string {
        throw new Error("Vehicle is not eligible for unsecured offer");
    }
    offerName(): string {
        return 'Unsecured';
    }
    
    getLoanAmount() {
        return 20000;
    }

}

export const unSecuredLoan = new UnSecuredLoan();