import { useEffect, useState } from "react";
import { getWeb3 } from "~/lib/getWeb3";

export function Web3Container() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  return (
    <>
      <div>AAA</div>
    </>
  );
}
