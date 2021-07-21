import React from 'react'
//disclosure
import { Disclosure } from '@headlessui/react'
//icons 
import { BiChevronUp, BiChevronDown } from "react-icons/bi"


const Filters = (props) => {
    return (
        <>
            <Disclosure>
                {
                    ({ open }) => {
                        return (
                            <>
                                <Disclosure.Button className="w-full py-2 flex items-center gap-3 bg-gray-100  border-2 my-4 shadow">

                                    {open ? <BiChevronUp /> : <BiChevronDown />}

                                    <span className={open ? "text-red-500" : "text-gray-70="}>{props.title}</span>
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-gray-500 ">
                                    <div className="flex flex-wrap gap-2 items-center">
                                        {props.tags.map(tag => {
                                            return (
                                                <div className="border border-gray-700 px-5 my-1">
                                                    <span className="text-red-500">{tag}</span>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </Disclosure.Panel>
                            </>

                        );

                    }
                }
            </Disclosure>

        </>
    )
}

export default Filters;


