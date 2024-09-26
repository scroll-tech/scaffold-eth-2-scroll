"use client";

import { BanknotesIcon } from "@heroicons/react/24/outline";

/**
 * Faucet modal which lets you send ETH to any address.
 */
export const RemoteFaucet = () => {
  return (
    <div>
      <label htmlFor="remote-faucet-modal" className="btn btn-primary btn-sm font-normal gap-1">
        <BanknotesIcon className="h-4 w-4" />
        <span>Remote Faucet</span>
      </label>
      <input type="checkbox" id="remote-faucet-modal" className="modal-toggle" />
      <label htmlFor="remote-faucet-modal" className="modal cursor-pointer">
        <label className="modal-box relative">
          {/* dummy input to capture event onclick on modal box */}
          <input className="h-0 w-0 absolute top-0 left-0" />
          <h3 className="text-xl font-bold mb-3">Remote Faucet</h3>
          <label htmlFor="remote-faucet-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
            ✕
          </label>
          <div className="space-y-3">
            <div className="space-x-4 flex flex-col gap-4">
              <div></div>
              <div>
                <span className="text-sm font-bold">Scroll Sepolia Faucet</span> <br />
                <a href="https://docs.scroll.io/en/user-guide/faucet/">https://docs.scroll.io/en/user-guide/faucet/</a>
              </div>
              <div>
                <span className="text-sm font-bold">Scroll Sepolia thirdweb Faucet</span> <br />
                <a href="https://thirdweb.com/scroll-sepolia-testnet">https://thirdweb.com/scroll-sepolia-testnet</a>
              </div>
              <div>
                <span className="text-sm font-bold">L1SLOAD testnet Faucet</span> <br />
                <a href="https://scrollzkp.notion.site/L1SLOAD-Guide-2be3c335005b4bd28da38c62cf3e6a9b">
                  https://scrollzkp.notion.site/L1SLOAD-Guide-2be3c335005b4bd28da38c62cf3e6a9b
                </a>
              </div>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};
