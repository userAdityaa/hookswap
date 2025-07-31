import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen min-w-screen"
      style={{
        backgroundImage: 'url(/background_image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hero Section */}
      <main className="flex justify-between h-[80vh] w-full px-8">
        <div className="bg-opacity-70 flex flex-col items-start text-left pl-12 mt-[2.5rem]">
          <h1 className="text-7xl font-bold mb-4 w-[100%] text-white">Trade Smarter Tokens</h1>
          <p className="text-2xl mb-6 w-[80%] px-2 text-white">
            AMM trading for programmable Token-2022 assets
          </p>
          <div className="space-x-4 px-2">
            <button className="bg-[#5d6dfff6] text-white px-8 py-4 rounded text-xl">Launch App</button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded text-xl">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex -mr-[3rem] -mt-[5rem] h-[70vh]">
          <Image
            src="/locker.png"
            alt="Locker"
            height={600}
            width={2000}
            style={{ width: 'auto', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </main>

      {/* Cards Section */}
      <section className="w-full flex justify-center gap-8 px-12 py-12 -mt-[15rem]">
      <div className="flex items-start gap-4 bg-transparent border border-[#3f3f3f] rounded-xl p-6 w-[320px]">
        <Image
          src="/intelligent_transfers.png"
          alt="Transfers"
          width={55}
          height={40}
        />
        <div className="text-white">
          <h3 className="text-xl font-semibold">Intelligent Transfers</h3>
          <p className="text-md text-gray-300 mt-1">
            Leverage Transfer Hooks for customizable token logic and permissions.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-transparent border border-[#3f3f3f] rounded-xl p-6 w-[320px]">
        <Image
          src="/built_in_security.png"
          alt="Security"
          width={55}
          height={40}
        />
        <div className="text-white">
          <h3 className="text-xl font-semibold">Built-In Security</h3>
          <p className="text-md text-gray-300 mt-1">
            Ensure safe and compliant swaps with advanced on-chain enforcement.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-transparent border border-[#3f3f3f] rounded-xl p-6 w-[320px]">
        <Image
          src="/liquidity_solutions.png"
          alt="Liquidity"
          width={55}
          height={40}
        />
        <div className="text-white">
          <h3 className="text-xl font-semibold">Liquidity Solutions</h3>
          <p className="text-md text-gray-300 mt-1">
            Create pools and enable trading for Transfer Hook-enabled tokens.
          </p>
        </div>
      </div>
    </section>

    </div>
  );
}
