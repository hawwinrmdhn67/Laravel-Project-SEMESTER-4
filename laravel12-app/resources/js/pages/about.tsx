import { Head, Link } from "@inertiajs/react";

export default function About() {
    return (
        <>
            <Head title="About" />

            <div className="min-h-screen bg-gray-200 flex items-start justify-center px-4 sm:px-6 pt-20 sm:pt-16 pb-12 relative">

                {/* Tombol Kembali */}
                <div className="absolute top-6 left-4 sm:left-10 lg:left-50 z-50">
                    <Link
                        href="/"
                        className="flex items-center gap-2
                                text-gray-600 
                                hover:text-black 
                                transition 
                                text-sm sm:text-base font-medium"
                    >
                        <span className="text-lg sm:text-xl">←</span>
                        Kembali
                    </Link>
                </div>

                <div className="relative bg-white rounded-[30px] sm:rounded-[40px] shadow-xl 
                                w-full max-w-5xl 
                                p-6 sm:p-10 md:p-14 
                                flex flex-col lg:flex-row 
                                items-center gap-8 sm:gap-10 overflow-hidden">

                    {/* diagonal background warna biru */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br 
                                        from-sky-300 to-sky-200 
                                        clip-diagonal"></div>
                    </div>

                    {/* foto */}
                    <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
                        <img
                            src="/assets/hawwin.png"
                            alt="Hawwin Romadhon"
                            className="max-w-[160px] sm:max-w-[220px] md:max-w-[320px] 
                                       -translate-y-4 sm:-translate-y-6 md:-translate-y-10
                                       grayscale hover:grayscale-0 
                                       transition duration-500"
                        />
                    </div>

                    {/* teks */}
                    <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">

                        <span className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">
                            Frontend Developer
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-3 leading-tight text-black">
                            Hawwin <br /> Romadhon
                        </h1>

                        <div className="text-gray-700 font-medium mb-6 text-sm sm:text-base">
                            <p>Kelas: IT-A</p>
                            <p>NRP: 3124521003</p>
                            <p>Hobi: Coding</p>
                            <p>Politeknik Elektronika Negeri Surabaya</p>
                        </div>

                        <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
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