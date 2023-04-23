import "daisyui/dist/full.css";
const Home_stuff = () => {
    return (
        <div className="flex flex-row justify-between">
            <div className="contacts">
                <div className="collapse">
                    <input type="checkbox" className="" />
                    <div className="underline collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Mail professor..
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p><a href="mailto:hela.limam@isi.utm.tn">Mme Hela Limam</a></p>
                        <p><a href="mailto:faten.kateb@isi.utm.tn">Mme Faten Kateb</a></p>
                        <p><a href="mailto:rania.mzid@isi.utm.tn">Mme Rania Mzid</a></p>
                        <p><a href="mailto:riadh.zaafrani@isi.utm.tn">Mr Riadh Zaafrani</a></p>
                        <p><a href="mailto:sahbi.zahaf@isi.utm.tn">Mr Sahbi Zahaf</a></p>
                        <p><a href="mailto:bakhta.haouari@isi.utm.tn">Mme Bakhta Haouari</a></p>
                        <p><a href="mailto:dorra.benayed@isi.utm.tn">Mme Dorra Benayed</a></p>
                        <p><a href="mailto:sahbi.bahroun@isi.utm.tn">Mr Sahbi Bahroun</a></p>
                    </div>
                </div>
            </div>
            <div className="online">
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="underline collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Online classmates :
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <div className="flex items-center space-x-2 py-1">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-3xl">Y</span>
                                </div>
                            </div>
                            <p>Yassine</p>
                        </div>
                        <div className="flex items-center space-x-2 py-1">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-3xl">A</span>
                                </div>
                            </div>
                            <p>Amal</p>
                        </div>
                        <div className="flex items-center space-x-2 py-1">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-3xl">M</span>
                                </div>
                            </div>
                            <p>Mouhammed</p>
                        </div>
                        <div className="flex items-center space-x-2 py-1">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-3xl">S</span>
                                </div>
                            </div>
                            <p>Samir</p>
                        </div>
                        <div className="flex items-center space-x-2 py-1">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-3xl">L</span>
                                </div>
                            </div>
                            <p>Louay</p>
                        </div>
                        <div className="flex items-center space-x-2 py-1">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-3xl">A</span>
                                </div>
                            </div>
                            <p>Ahmed</p>
                        </div>
                        <div className="flex items-center space-x-2 py-1">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-3xl">J</span>
                                </div>
                            </div>
                            <p>Johnny</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home_stuff;
