import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="w-32 h-72 rounded-lg bg-slate-950/90 p-5 text-white">
                
                <p className="text-xs leading-tight mt-5 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea impedit quisquam asperiores libero beatae accusantium
                </p>
                <div className="footer absolute bottom-0 bg-sky-200 w-full h-20 left-0">
                    <button className="text-sky-900">
                        Donwload
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;