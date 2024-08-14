import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="w-60 h-72 rounded-xl bg-slate-950/90 p-5 text-white relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m0-13.75a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                <p className="text-xs leading-tight mt-5 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea impedit quisquam asperiores libero beatae accusantium
                </p>
                <div className="footer absolute bottom-0 bg-sky-200 w-full py-2 left-0">
                    <button className="text-sky-900 p-2 text-center">
                        Donwload
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;