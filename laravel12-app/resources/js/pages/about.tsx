import { Head, Link } from "@inertiajs/react";

export default function About() {
    return (
        <>
            <Head title="About Hawwin" />

            <div className="min-h-screen bg-gray-200 flex items-start justify-center px-6 pt-12 pb-12 relative">

                {/* BACK BUTTON  */}
                <div className="absolute top-4 left-52 z-50">
                    <Link
                        href="/"
                        className="flex items-center gap-2
                                text-gray-600 
                                hover:text-black 
                                transition 
                                text-base font-medium"
                    >
                        <span className="text-xl">←</span>
                        Kembali
                    </Link>
                </div>

                <div className="relative bg-white rounded-[40px] shadow-xl 
                                w-full max-w-5xl 
                                p-10 md:p-16 
                                flex flex-col lg:flex-row 
                                items-center gap-10 overflow-hidden">

                    {/* DIAGONAL BACKGROUND */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br 
                                        from-sky-300 to-sky-200 
                                        clip-diagonal"></div>
                    </div>

                    {/* PHOTO */}
                    <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
                        <img
                            src="/assets/hawwin.png"
                            alt="Hawwin Romadhon"
                            className="max-w-[220px] md:max-w-[320px] 
                                       -translate-y-6 md:-translate-y-10
                                       grayscale hover:grayscale-0 
                                       transition duration-500"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">

                        <span className="text-sm tracking-widest text-gray-500 uppercase">
                            Frontend Developer
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-3 leading-tight text-black">
                            Hawwin <br /> Romadhon
                        </h1>

                        <div className="text-gray-700 font-medium mb-6">
                            <p>Kelas: IT A</p>
                            <p>NRP: 3124521003</p>
                            <p>Politeknik Elektronika Negeri Surabaya</p>
                        </div>

                        <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                            Mahasiswa Teknik Informatika yang fokus membangun 
                            antarmuka web modern, interaktif, dan berorientasi 
                            pada pengalaman pengguna.
                        </p>

                    </div>

                </div>
            </div>
        </>
    );
}