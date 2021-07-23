import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export const Payment = ({ isOpen, setIsOpen, price }) => {



    function closeModal() {
        setIsOpen(false)
    }

    const launchRazorPay = () => {
        const options = {
            key: "rzp_test_xKzgaVRCoAexBK",
            amount: price * 100,
            currency: "INR",
            name: "BMS CLONE",
            description: "Movie rent of buy",
            image: "https://logodix.com/logo/2011021.png",
            handler:() => {
                setIsOpen = false;
                alert("Payment Done")
            },
            theme: { color: "#c4242d" }

        }
        const rpz = new window.Razorpay(options);
        rpz.open()

    }


    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="z-50 fixed inset-0  overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Please pay the Payment
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Please click on the below button
                                    </p>
                                </div>

                                <div className="w-full mt-4">
                                    <button
                                        type="button"
                                        className=" w-full my-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={launchRazorPay}
                                    >
                                        Pay &#8377;{price}
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700  hover:bg-red-300 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={closeModal}
                                    >
                                        CANCEL PAYMENT
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Payment;





