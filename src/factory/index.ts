import {productOfferFactory} from './product-offer';
import { SecuredLoan } from './secured-loan';
import { UnSecuredLoan } from './unsecured-loan';

const offer = productOfferFactory.getOffer({state: 'CA'}) as SecuredLoan;

console.log(offer.getLoanAmount());

console.log(offer.offerName());

offer.setVehicle('NEW VIN');
console.log(offer.getVehicle());


const offer1 = productOfferFactory.getOffer({state: 'UT'}) as UnSecuredLoan;

console.log(offer1.getLoanAmount());

console.log(offer1.offerName());

// console.log(offer1.setVehicle('NEW VIN')); //error