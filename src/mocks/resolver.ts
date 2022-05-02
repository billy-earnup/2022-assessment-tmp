import {v4} from 'uuid';
const rootResolver = {
    loans: () => {
      return Array.from({length: 100}).map((_, index) => {
        const seed = Math.random();
        const isPartnerLoan = index % 13 === 0;
        return {
            id: btoa(`Loan:${v4()}`),
            amount: Math.floor(seed * (index + 1) * 10000),
            interestRate: (Math.floor((seed * 100000) % 89) + 1)  / 1000,
            partnerId: isPartnerLoan ? v4() : undefined,
        }
      });
    },
  };

export default rootResolver;