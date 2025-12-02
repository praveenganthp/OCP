import React from "react";

export const OcpViolation = ({ type }: { type: string }) => {
  if (type === "card") {
    return <div>Card payment is processing</div>;
  }
  if (type === "upi") {
    return <div>UPI payment is processing</div>;
  }
  if (type === "wallet") {
    return <div>Wallet payment is processing</div>;
  }
  return <div>OcpViolation</div>;
};

//OCP Violation (Adding new payment types requires editing old code)
// If any new payment type is added, we must modify THIS component again.
// That’s a DIRECT OCP violation.

/*
  Why this violates OCP?
 - You must OPEN this component and MODIFY its conditions 
   whenever a new type (crypto, netbanking, etc.) is added.
 - This makes the component tightly coupled and non-scalable.
*/