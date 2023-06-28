"use client"
import React from "react";

export default function Home() {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');

    const handleName = (e: any) => {
        setName(e.target.value)
    }
    const handlePrice = (e: any) => {
        setPrice(e.target.value)
    }

    const handleCreateUser = async () => {
        // TODO: create user
        alert(name)
    }
  return (
      <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div
                  className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Create a Product
                      </h1>
                      <div className="space-y-4 md:space-y-6">
                          <div>
                              <label htmlFor="name"
                                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                              <input type="text" name="name" id="name"
                                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                     placeholder="Awesome Keyboard" required
                                        onChange={handleName}
                                     value={name}
                              />
                          </div>
                          <div>

                              <label htmlFor="price"
                                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                                          <line x1="12" y1="1" x2="12" y2="23"></line>
                                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                      </svg>
                                  </div>
                                  <input type="number" id="price"
                                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                         placeholder="100"
                                            required
                                            onChange={handlePrice}
                                            value={price}
                                  />
                              </div>

                          </div>
                          <button
                              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={handleCreateUser}
                          >
                              Create Product
                          </button>

                      </div>
                  </div>
              </div>
          </div>
      </section>  )
}
