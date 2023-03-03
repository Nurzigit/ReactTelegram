import React from 'react';
import { useMarvelItems } from './../../hooks/useMarvel';
import { Cards } from './../Cards/Cards';
export const Comics = () => {

    const {items} = useMarvelItems();

    return (
        <div className="container">
            <div className='row'>
            {
                    
                items.map((item) => (
                    <div className="col-sm-4">
                        <Cards item={item}/>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

