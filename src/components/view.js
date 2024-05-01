import * as React from "react";

function DashboardHeader() {
  return (
    <header className="flex gap-5 justify-between px-5 py-3 w-full font-bold bg-orange-500 max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 text-xl text-orange-300">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98601f7c6418b1e3c52cfc8f79cfb3bb298569a78470211ad5feb1457f95220?apiKey=46a8d64327994e0384e818b39c402c26&" alt="" className="shrink-0 w-20 aspect-square" />
        <div className="flex-auto my-auto">
          Dashboard &gt; Student Register
        </div>
      </div>
      <div className="flex gap-5 text-2xl text-orange-500 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center items-start px-6 py-8 bg-orange-300 rounded-3xl w-fit max-md:px-5">
          Search
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/624340382bb5884b5eadc11b2fd447af3db8d711f0d1accaa90e4fb4b39bc791?apiKey=46a8d64327994e0384e818b39c402c26&" alt="" className="shrink-0 w-20 rounded-full border-2 border-black border-solid aspect-square" />
      </div>
    </header>
  );
}

function StudentNameInput() {
  return (
    <>
      <label htmlFor="studentName" className="text-xl font-bold text-black max-md:max-w-full">
        Student Name
      </label>
      <input type="text" id="studentName" className="shrink-0 mt-2.5 h-20 bg-red-100 rounded-3xl max-md:max-w-full" />
    </>
  );
}

function PaidAmountInput() {
  return (
    <>
      <label htmlFor="paidAmount" className="text-xl font-bold text-black">Paid Amount</label>
      <input type="text" id="paidAmount" className="shrink-0 mt-2.5 h-20 bg-red-100 rounded-3xl" />
    </>
  );
}

function ReferenceInput() {
  return (
    <>
      <label htmlFor="reference" className="mt-7">Reference</label>
      <input type="text" id="reference" className="shrink-0 mt-2.5 h-20 bg-red-100 rounded-3xl" />
    </>
  );
}

function PaidDateTimeInput() {
  return (
    <>
      <label htmlFor="paidDateTime" className="text-xl font-bold text-black">
        Paid Date and Time
      </label>
      <div className="flex flex-col justify-center items-end px-16 py-2 mt-2.5 bg-red-100 rounded-3xl max-md:pl-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0759239b683f47db6fe580176eb596864e4fa5ca87d6c826ee71ac0c56c9d352?apiKey=46a8d64327994e0384e818b39c402c26&" alt="" className="aspect-[0.7] w-[47px]" />
      </div>
    </>
  );
}

function WhatsAppNumberInput() {
  return (
    <>
      <label htmlFor="whatsAppNumber" className="mt-7 text-xl font-bold text-black">
        WhatsApp Number
      </label>
      <input type="tel" id="whatsAppNumber" className="shrink-0 mt-1.5 h-20 bg-red-100 rounded-3xl" />
    </>
  );
}

function ReceiptUpload() {
  return (
    <>
      <div className="mt-7 text-xl font-bold text-black max-md:max-w-full">
        Receipt upload
        <br />
      </div>
      <div className="flex justify-center items-center px-16 py-14 mt-1.5 bg-red-100 rounded-3xl border-8 border-orange-500 border-dashed max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-6 bg-orange-300 rounded-full h-[150px] w-[150px] max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03dd08681324933a25af1df35dfbb2b3c47529ca1b770f4d3485fe901643a3bd?apiKey=46a8d64327994e0384e818b39c402c26&" alt="" className="w-full aspect-square" />
        </div>
      </div>
    </>
  );
}

function SaveButton() {
  return (
    <button className="justify-center items-center px-16 py-8 mt-8 text-2xl font-bold text-white whitespace-nowrap rounded-3xl bg-stone-900 max-md:px-5 max-md:max-w-full">
      Save
    </button>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <DashboardHeader />
      <main className="flex flex-col self-center px-5 mt-14 max-w-full w-[676px] max-md:mt-10">
        <StudentNameInput />
        <div className="mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-bold text-black max-md:mt-6">
                <PaidAmountInput />
                <ReferenceInput />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-6">
                <PaidDateTimeInput />
                <WhatsAppNumberInput />
              </div>
            </div>
          </div>
        </div>
        <ReceiptUpload />
        <SaveButton />
      </main>
    </div>
  );
}

export default MyComponent;