import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '../layout/Default.layout';

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={() => {
                    return (<>
                        <DefaultLayout >
                            <Component />
                        </DefaultLayout>
                    </>)
                }
                }
            // component  ={DefaultLayout}

            />
        </>
    );
}

export default DefaultHOC;