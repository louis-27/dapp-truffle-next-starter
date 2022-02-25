import Web3 from "web3";

/**
 * Declare window object as type "any" to prevent the following error:
 * "Property 'ethereum' does not exist on type 'Window & typeof globalThis'.ts(2339)"
 */
declare let window: any;

export const getWeb3 = () => {
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      const { ethereum } = window;

      if (ethereum) {
        const web3 = new Web3(ethereum);

        try {
          await ethereum.enable();

          resolve(web3);
        } catch (error) {
          if (!ethereum) {
            console.log("Make sure you have Metamask!");

            reject(error);
          }
        }
      } else if (window.web3) {
        const { web3 } = window;

        resolve(web3);
      } else {
        const localProvider = `http://127.0.0.1:8545`;
        const provider = new Web3.providers.HttpProvider(localProvider);
        const web3 = new Web3(provider);

        resolve(web3);
      }
    });
  });
};
