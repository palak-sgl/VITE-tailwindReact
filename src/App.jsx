function App() {
  return (
    <>
      {/* <h2>Hello World</h2>
      <h1 class="text-3xl font-bold text-red-500">Hello world!</h1> */}
      <div className="flex items-center justify-center">
        <div className="mt-10">
          <label htmlFor="">Price</label>
          <div className="mt-3">
            <div className="flex items-center border border-gray-300 rounded-md mb-3 focus-within:ring-1 focus-within:ring-indigo-600 w-72">
              <span className="text-gray-500 sm:text-sm px-2">$</span>
              <input
                type="text"
                className="block px-2 py-1 flex-1 border-0 text-gray-900 focus:outline-none"
                placeholder="0.00"
              />
              <select className="h-full border-0 rounded-md text-gray-500 pr-2 bg-transparent focus:outline-none">
                <option value="">USD</option>
                <option value="">CAD</option>
                <option value="">EUR</option>
              </select>
            </div>

            <label htmlFor="">Company Website</label>
            <div className="flex items-center border border-gray-300 rounded-md mb-3 focus-within:ring-1 focus-within:ring-indigo-600 w-72">
              <span className="text-gray-500 sm:text-sm px-2  rounded-md border border-gray-100 py-2">
                http://
              </span>
              <input
                type="text"
                className="block px-2 py-1 flex-1 border-0 text-gray-900 focus:outline-none"
                placeholder="www.example.com"
              />
            </div>

            <label htmlFor="">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md mb-3 mt-3 w-72 focus-within:ring-1 focus-within:ring-indigo-600">
              <span className="text-gray-500 sm:text-sm px-2">
                <i class="fa-solid fa-envelope text-gray-400 pl-1 pt-1"></i>
              </span>
              <input
                type="text"
                className="block px-2 py-1 flex-1 border-0 text-gray-900 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* input with inset label */}
            <p className="text-blue-600 text-lg">Input with inset label</p>
            <div className="flex border border-gray-300 rounded-md mb-3 mt-3 w-72 focus-within:ring-1 focus-within:ring-indigo-600 flex-col">
              <label htmlFor="" className="px-2 pt-1 text-xs">
                Name
              </label>

              <input
                type="text"
                className="block px-2 pb-1 flex-1 border-0 text-gray-900 focus:outline-none"
                placeholder="Jane Smith"
              />
            </div>

            {/* card details */}
            <label htmlFor="">Card Details</label>
            <div className="grid cols-2  border-gray-300 mt-3">
              <input
                type="text"
                className="block border-t-2 border-l-2 border-r-2 border-b-2 rounded-t-md  px-2 py-1 col-span-2 text-gray-900 focus:ring-1 focus:outline-indigo-600"
                placeholder="Card Number"
              />
              <input
                type="text"
                className="block border-b-2 border-l-2 border-r-2 rounded-bl-md px-2 text-gray-900 pb-1 focus:ring-1 focus:outline-indigo-600"
                placeholder="MM / YY"
              />
              <input
                type="text"
                className="block border-r-2 border-b-2 rounded-br-md px-2 pb-1 focus:ring-1 focus:outline-indigo-600  text-gray-900"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
