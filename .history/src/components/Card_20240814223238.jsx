import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="w-60 h-72 rounded-xl bg-slate-950/90 p-5 text-white relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m0-13.75a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                <p className="text-xs leading-tight mt-5 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea impedit quisquam asperiores libero beatae accusantium
                </p>
                
                <div className="footer absolute bottom-0 bg-sky-200 w-full py-2 left-0 text-center">
                    <button className="text-sky-900 p-2 font-medium">
                        <div className="flex justify-between items-center w-full px-2">
                           <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-800 " viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2" opacity="0.5"/><path fill="currentColor" fill-rule="evenodd" d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.75-3a.75.75 0 0 0-1.5 0v4.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22z" clip-rule="evenodd"/></svg>
                            Donwload File
                           </div>
                            <h5 className="text-slate-800 text-xs ml-auto">
                                150
                                <span className="font-bold px-1">
                                    MB
                                </span>
                            </h5>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;