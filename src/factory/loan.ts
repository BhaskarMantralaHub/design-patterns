export abstract class Loan {

    abstract getLoanAmount(): number;

    abstract offerName(): string;

    abstract setVehicle(vin: string): void;

    abstract getVehicle(): string;
}