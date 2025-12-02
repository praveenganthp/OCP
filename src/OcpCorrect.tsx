import React from "react";

//  1. Create small/extensible components (each is a "strategy")
const cardPayment = () => <div>Card payment is processing</div>;
const upiPayment = () => <div>UPI payment is processing</div>;
const walletPayment = () => <div>Wallet payment is processing</div>;

/*
 2. Create a lookup configuration (EXTENSION happens here)
    → Adding a new payment method does NOT modify the main logic.
*/
const paymentStrategies: Record<string, React.FC> = {
  card: cardPayment,
  upi: upiPayment,
  wallet: walletPayment,

  // New type? Just add here → no changes to PaymentProcessor.
  // Example: netbanking: NetBankingPayment
};

export const OcpCorrect = ({ type }: { type: string }) => {
  const Payment = paymentStrategies[type];
  if (!Payment) {
    return <div>Invalid payment</div>;
  }
  return <Payment />;
};
