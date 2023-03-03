import React from 'react';
import './Cards.css'
import Button from './../Button/Button';

export const Cards = ({item}) => {
    return (
        <div>
            <div className="card" style={{ width: "150px" }}>
                <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.series.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <Button className={'add-btn'}>
                        Узнать больше
                    </Button>
                </div>
            </div>
        </div>
    );
};

