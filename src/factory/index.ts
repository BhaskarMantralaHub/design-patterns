import {productOfferFactory} from './product-offer';
import { SecuredLoan } from './secured-loan';
import { UnSecuredLoan } from './unsecured-loan';

const offer = productOfferFactory.getOffer({state: 'CA'});

console.log(offer.getLoanAmount());

console.log(offer.offerName());

offer.setVehicle('NEW VIN');
console.log(offer.getVehicle());


const offer1 = productOfferFactory.getOffer({state: 'UT'});

console.log(offer1.getLoanAmount());

console.log(offer1.offerName());

// console.log(offer1.setVehicle('NEW VIN')); //error

//Let us assume, CA is removed as SPL state
const offer2 = productOfferFactory.getOffer({state: 'CA'});

console.log(offer2.getLoanAmount());

console.log(offer2.offerName());

offer2.setVehicle('NEW VIN'); //Error
console.log(offer2.getVehicle()); //Error
