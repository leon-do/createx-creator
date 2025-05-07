"use client";
import createX from "./createX.json";

export default function Home() {
  async function handleCreateX() {
    console.log("Creating X", createX);
    // const createxFactory = await hre.ethers.getContractFactory(abi, initCode);
    // const receipt = await createxFactory.deploy();
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          Send 0.3 ETH to 0x12ec861579b63a3ab9db3b5a23c57d56402ad3061475b088f1
        </div>
        <button
          onClick={() => handleCreateX()}
          type="button"
          className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          CreateX
        </button>
      </main>
    </div>
  );
}
