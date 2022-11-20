import { Loan } from './loan';
import { SecuredLoan, securedLoan } from './secured-loan';
import {  UnSecuredLoan, unSecuredLoan } from './unsecured-loan';

const State = ['CA', 'FL', 'UT', 'TX', 'AZ'] as const;
type State = typeof State[number];

const SecuredLoanAvailableStates: State[] = [
    'CA', 'TX'
]


class ProductOfferFactory {

    getOffer(params: {state: State}): SecuredLoan | UnSecuredLoan {
        if (SecuredLoanAvailableStates.includes(params.state)) {
            return securedLoan;
        } return unSecuredLoan
    }

}

export const productOfferFactory = new ProductOfferFactory();