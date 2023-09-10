/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
export default function App() {
  return (
    <>
      <aside
        className="fixed  flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
        aria-expanded="false">
        <div className="h-19">
          <i className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
            sidenav-close></i>
          <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
            href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html" target="_blank" rel="noreferrer">
            <img src="./assets/img/logo-ct-dark.png"
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
              alt="main_logo" />
            <img src="./assets/img/logo-ct.png"
              className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
              alt="main_logo" />
            <span className="ml-1 text-xl font-semibold transition-all duration-200 ease-nav-brand">Roidev Tools</span>
          </a>
        </div>

        <hr
          className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full">
          <ul className="flex flex-col pl-0 mb-0">
            <li className="mt-0.5 w-full">
              <a className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                href="./pages/dashboard.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Dashboard</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="./pages/tables.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-orange-500 fa fa-download"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Download Tools</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="./pages/billing.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-emerald-500 fa fa-moon-o"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Islamic Tools</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="./pages/virtual-reality.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-cyan-500 fa fa-play"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Anime Tools</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="./pages/rtl.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-red-600 ni ni-world-2"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Meme Tools</span>
              </a>
            </li>

            <li className="w-full mt-4">
              <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">Education Tools
              </h6>
            </li>

            <li className="mt-0.5 w-full">
              <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="./pages/profile.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Profile</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="./pages/sign-in.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign In</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="./pages/sign-up.html">
                <div
                  className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- <div className="mx-4"> -->
          <!-- load phantom colors for card after: -->
          <!-- <p
            className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400">
          </p> -->
          <!-- <div
            className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
            sidenav-card>
            <img className="w-1/2 mx-auto" src="./assets/img/illustrations/icon-documentation.svg"
              alt="sidebar illustrations" />
            <div className="flex-auto w-full p-4 pt-0 text-center">
              <div className="transition-all duration-200 ease-nav-brand">
                <h6 className="mb-0 dark:text-white text-slate-700">Need help?</h6>
                <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Please check our docs
                </p>
              </div>
            </div>
          </div> -->
          <!-- <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/" target="_blank"
            className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px">Documentation</a> -->
          <!-- pro btn  -->
          <!-- <a className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px"
            href="https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree" target="_blank">Upgrade
            to pro</a> -->
          <!-- </div> --> */}
      </aside>

      {/* <!-- end sidenav --> */}

      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        {/* <!-- Navbar --> */}
        <nav
          className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
          navbar-main navbar-scroll="false">
          <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <nav>
              {/* <!-- breadcrumb --> */}
              <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li className="text-sm leading-normal">
                  <a className="text-white opacity-50" href="javascript:;">Halaman</a>
                </li>
                <li
                  className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
                  aria-current="page">Dashboard</li>
              </ol>
              <h6 className="mb-0 font-bold text-white capitalize">Dashboard</h6>
            </nav>

            <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
              <div className="flex items-center md:ml-auto md:pr-4">
                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                  <span
                    className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <i className="fas fa-search"></i>
                  </span>
                  <input type="text"
                    className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                    placeholder="Cari disini..." />
                </div>
              </div>
              <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">

                <li className="flex items-center pl-4 xl:hidden">
                  <a href="javascript:;" className="block p-0 text-sm text-white transition-all ease-nav-brand" sidenav-trigger>
                    <div className="w-4.5 overflow-hidden">
                      <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                      <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                      <i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
                    </div>
                  </a>
                </li>
                <li className="flex items-center px-4 text-white">
                  <i fixed-plugin-button-nav className="hidden ursor-pointer fa fa-sun-o pr-2"></i>
                  <i className="cursor-pointer fa fa-sun-o pr-2"></i>
                  <div className="block pl-0 ml-auto min-h-6">
                    <input dark-toggle
                      className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                      type="checkbox" />
                  </div>
                  <i className="cursor-pointer fa fa-moon-o pl-2"></i>
                </li>
              </ul>
            </div>

          </div>
        </nav>


        {/* <!-- end Navbar --> */}

        {/* <!-- cards --> */}
        <div className="w-full px-6 py-6 mx-auto">
          {/* <!-- row 1 --> */}
          <div className="flex flex-wrap -mx-3">
            {/* <!-- card1 --> */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <a href="#"
                className="relative flex flex-col min-w-0 break-words hover:bg-gray-200 dark:hover:bg-slate-750 bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p
                          className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Owner</p>
                        <h5 className="mb-2 font-bold dark:text-white">Roynaldi</h5>
                        {/* <!-- <a href="https://github.com/roynaldi3301" className="mb-0 dark:text-white dark:opacity-60"><i className="fab fa-github"></i> roynaldi3301</a><br>
                          <a href="https://wa.me/6281882898488" className="mb-0 dark:text-white dark:opacity-60"><i className="fab fa-whatsapp"></i> 081882898488</span></a> --> */}
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div
                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                        <i className="fa leading-none fa-user text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* <!-- card2 --> */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <a href="#"
                className="relative flex flex-col min-w-0 break-words hover:bg-gray-400 dark:hover:bg-slate-750 bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p
                          className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Total Request</p>
                        <h5 className="mb-2 font-bold dark:text-white" id="request">192</h5>
                        {/* <!-- <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500">+3%</span>
                          since last week
                        </p> --> */}
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div
                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                        <i className="fa leading-none fa-refresh text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* <!-- card3 --> */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
              <a href="#"
                className="relative flex flex-col min-w-0 break-words hover:bg-gray-400 dark:hover:bg-slate-750 bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p
                          className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Request Today</p>
                        <h5 className="mb-2 font-bold dark:text-white" id="today">12</h5>
                        {/* <!-- <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-red-600">-2%</span>
                          since last quarter
                        </p> --> */}
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div
                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                        <i className="fa leading-none fa-bolt text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* <!-- card4 --> */}
            <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
              <a href="#"
                className="relative flex flex-col min-w-0 break-words hover:bg-gray-400 dark:hover:bg-slate-750 bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p
                          className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                          Credit</p>
                        <h5 className="mb-2 font-bold dark:text-white">LoL Human</h5>
                        {/* <!-- <p className="mb-0 dark:text-white dark:opacity-60">
                          <span className="text-sm font-bold leading-normal text-emerald-500">+5%</span>
                          than last month
                        </p> --> */}
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div
                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                        <i className="fa leading-none fa-credit-card-alt text-lg relative top-3.5 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* <!-- cards row 2 --> */}
          <div className="flex flex-wrap mt-6 -mx-3">
            <div className="flex-none w-full max-w-full px-3">
              <div
                className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h6 className="dark:text-white">Fitur Unggulan</h6>
                </div>
                <div className="flex-auto px-0 pt-0 pb-2">
                  <div className="p-0 overflow-x-auto">
                    <div className="py-2 px-5">
                      <h5>1. Pengantar</h5>
                      <p>Terima kasih telah menggunakan layanan [Nama Website] ("Kami" atau "Kami"). Dengan menggunakan
                        layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini. Harap baca dengan seksama sebelum
                        menggunakan layanan kami.</p>

                      <h5>2. Deskripsi Layanan</h5>
                      <p>[Nama Website] menyediakan alat dan layanan yang memanfaatkan API pihak ketiga untuk memberikan
                        berbagai fitur dan fungsionalitas. Anda setuju untuk menggunakan layanan kami hanya untuk tujuan
                        yang sah dan sesuai dengan ketentuan yang berlaku.</p>

                      <h5>3. Penggunaan Layanan</h5>
                      <p>a. <strong>Pendaftaran</strong>: Untuk mengakses beberapa bagian dari layanan kami, Anda mungkin
                        diminta untuk mendaftar dan memberikan informasi pribadi yang akurat dan lengkap. Anda bertanggung
                        jawab atas menjaga kerahasiaan informasi akun Anda.</p>
                      <p>b. <strong>Penggunaan yang Sah</strong>: Anda setuju untuk menggunakan layanan kami hanya untuk
                        tujuan yang sah, termasuk penggunaan yang sesuai dengan hukum dan peraturan yang berlaku.</p>
                      <p>c. <strong>Larangan</strong>: Anda dilarang melakukan tindakan apa pun yang dapat merusak atau
                        mengganggu operasi layanan kami, termasuk tetapi tidak terbatas pada upaya peretasan, pembajakan,
                        atau serangan DDoS.</p>

                      <h5>4. Penggunaan API Pihak Ketiga</h5>
                      <p>a. <strong>Izin</strong>: Anda setuju untuk mematuhi syarat dan ketentuan dari penyedia API pihak
                        ketiga yang digunakan oleh [Nama Website]. Kami tidak bertanggung jawab atas perubahan atau
                        pembatalan API pihak ketiga.</p>
                      <p>b. <strong>Konten</strong>: Anda mengerti bahwa sebagian besar data dan konten yang ditampilkan
                        dalam layanan kami berasal dari API pihak ketiga. Kami tidak bertanggung jawab atas keakuratan atau
                        ketersediaan data tersebut.</p>

                      <h5>5. Hak Kekayaan Intelektual</h5>
                      <p>a. <strong>Hak Cipta</strong>: Hak cipta dan semua hak kekayaan intelektual lainnya dalam layanan
                        kami dan kontennya tetap milik [Nama Website] atau pihak ketiga yang memiliki lisensi. Anda tidak
                        diberikan hak apapun untuk menggunakan hak cipta kami tanpa izin tertulis.</p>

                      <h5>6. Pembatalan dan Perubahan Layanan</h5>
                      <p>[Nama Website] berhak untuk menghentikan atau mengubah layanan kami kapan saja tanpa pemberitahuan
                        sebelumnya. Kami tidak bertanggung jawab atas kerugian atau kerugian yang timbul akibat pembatalan
                        atau perubahan tersebut.</p>

                      <h5>7. Privasi</h5>
                      <p>Informasi pribadi yang Anda berikan kepada kami akan diperlakukan sesuai dengan Kebijakan Privasi
                        kami. Anda dapat mengakses kebijakan privasi kami di [tautan ke kebijakan privasi].</p>

                      <h5>8. Perubahan pada Syarat dan Ketentuan</h5>
                      <p>Kami dapat mengubah syarat dan ketentuan ini dari waktu ke waktu. Perubahan tersebut akan berlaku
                        segera setelah kami memposting syarat dan ketentuan yang diperbarui di situs web kami. Anda dianggap
                        menerima perubahan tersebut dengan melanjutkan penggunaan layanan kami.</p>

                      <h5>9. Penutupan</h5>
                      <p>Kami berharap Anda akan menikmati menggunakan layanan [Nama Website]. Jika Anda melanggar syarat
                        dan ketentuan ini atau jika kami memiliki alasan yang sah, kami dapat menghentikan akses Anda ke
                        layanan kami tanpa pemberitahuan sebelumnya.</p>

                      <h5>10. Hubungi Kami</h5>
                      <p>Jika Anda memiliki pertanyaan atau komentar tentang syarat dan ketentuan ini, Anda dapat
                        menghubungi kami di [alamat email atau kontak lainnya].</p>

                      <p>Terima kasih atas penggunaan layanan [Nama Website]. Kami berharap Anda akan mendapatkan manfaat
                        dari alat dan layanan kami.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


          <footer className="pt-4">
            <div className="w-full px-6 mx-auto">
              <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                  <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
                    ©
                    <script>
                      document.write(new Date().getFullYear() + ",");
                    </script>
                    made with <i className="fa fa-heart"></i> by
                    <a href="https://www.creative-tim.com" className="font-semibold text-slate-700 dark:text-white"
                      target="_blank" rel="noreferrer">Creative Tim</a>
                    for a better web.
                  </div>
                </div>
                <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                  <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com"
                        className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank" rel="noreferrer">Creative Tim</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/presentation"
                        className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank" rel="noreferrer">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://creative-tim.com/blog"
                        className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank" rel="noreferrer">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/license"
                        className="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
                        target="_blank" rel="noreferrer">License</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* <!-- end cards --> */}
      </main>
      <div fixed-plugin>
        <a fixed-plugin-button
          className="fixed hidden px-4 py-2 text-xl bg-white shadow-lg cursor-pointer bottom-8 right-8 z-990 rounded-circle text-slate-700">
          <i className="py-2 pointer-events-none fa fa-cog"> </i>
        </a>
        {/* <!-- -right-90 in loc de 0--> */}
        <div fixed-plugin-card
          className="z-sticky backdrop-blur-2xl backdrop-saturate-200 dark:bg-slate-850/80 shadow-3xl w-90 ease -right-90 fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white/80 bg-clip-border px-2.5 duration-200">
          <div className="px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
            <div className="float-left">
              <h5 className="mt-4 mb-0 dark:text-white">Argon Configurator</h5>
              <p className="dark:text-white dark:opacity-80">See our dashboard options.</p>
            </div>
            <div className="float-right mt-6">
              <button fixed-plugin-close-button
                className="inline-block p-0 mb-4 text-sm font-bold leading-normal text-center uppercase align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:-translate-y-px tracking-tight-rem bg-150 bg-x-25 active:opacity-85 dark:text-white text-slate-700">
                <i className="fa fa-close"></i>
              </button>
            </div>
            {/* <!-- End Toggle Button --> */}
          </div>
          <hr
            className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex-auto p-6 pt-0 overflow-auto sm:pt-4">
            {/* <!-- Sidebar Backgrounds --> */}
            <div>
              <h6 className="mb-0 dark:text-white">Sidebar Colors</h6>
            </div>
            <a href="javascript:void(0)">
              <div className="my-2 text-left" sidenav-colors>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-500 to-violet-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  active-color data-color="blue" onclick="sidebarColor(this)"></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="gray" onclick="sidebarColor(this)"></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-700 to-cyan-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="cyan" onclick="sidebarColor(this)"></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-emerald-500 to-teal-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="emerald" onclick="sidebarColor(this)"></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-orange-500 to-yellow-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="orange" onclick="sidebarColor(this)"></span>
                <span
                  className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-red-600 to-orange-600 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                  data-color="red" onclick="sidebarColor(this)"></span>
              </div>
            </a>
            {/* <!-- Sidenav Type --> */}
            <div className="mt-4">
              <h6 className="mb-0 dark:text-white">Sidenav Type</h6>
              <p className="text-sm leading-normal dark:text-white dark:opacity-80">Choose between 2 different sidenav types.
              </p>
            </div>
            <div className="flex">
              <button transparent-style-btn
                className="inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center text-white capitalize align-middle transition-all bg-blue-500 border border-transparent border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-blue-500 to-violet-500 hover:border-blue-500"
                data-className="bg-transparent" active-style>White</button>
              <button white-style-btn
                className="inline-block w-full px-4 py-2.5 mb-2 ml-2 font-bold leading-normal text-center text-blue-500 capitalize align-middle transition-all bg-transparent border border-blue-500 border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-none hover:border-blue-500"
                data-className="bg-white">Dark</button>
            </div>
            {/* <!-- <p className="block mt-2 text-sm leading-normal dark:text-white dark:opacity-80 xl:hidden">You can change the
              sidenav type just on desktop view.</p> --> */}
            {/* <!-- Navbar Fixed --> */}
            <div className="flex my-4">
              <h6 className="mb-0 dark:text-white">Navbar Fixed</h6>
              <div className="block pl-0 ml-auto min-h-6">
                <input navbarFixed
                  className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                  type="checkbox" />
              </div>
            </div>
            <hr
              className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
            <div className="flex mt-2 mb-12">
              <h6 className="mb-0 dark:text-white">Light / Dark</h6>
              <div className="block pl-0 ml-auto min-h-6">
                <input dark-toggle
                  className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                  type="checkbox" />
              </div>
            </div>
            <a target="_blank"
              className="dark:border dark:border-solid dark:border-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-transparent border border-solid border-transparent rounded-lg cursor-pointer text-sm ease-in hover:shadow-xs hover:-translate-y-px active:opacity-85 tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850"
              href="https://www.creative-tim.com/product/argon-dashboard-tailwind" rel="noreferrer">Free Download</a>
            <a target="_blank"
              className="dark:border dark:border-solid dark:border-white dark:text-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-xs hover:-translate-y-px active:opacity-85 text-sm ease-in tracking-tight-rem bg-150 bg-x-25 border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none"
              href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/" rel="noreferrer">View
              documentation</a>
            <div className="w-full text-center">
              <a className="github-button" href="https://github.com/creativetimofficial/argon-dashboard-tailwind"
                data-icon="octicon-star" data-size="large" data-show-count="true"
                aria-label="Star creativetimofficial/argon-dashboard on GitHub">Star</a>
              <h6 className="mt-4 dark:text-white">Thank you for sharing!</h6>
              <a href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23tailwindcss&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard-tailwind"
                className="inline-block px-5 py-2.5 mb-0 mr-2 font-bold text-center text-white align-middle transition-all border-0  rounded-lg cursor-pointer hover:shadow-xs hover:-translate-y-px active:opacity-85 leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                target="_blank" rel="noreferrer"> <i className="mr-1 fab fa-twitter"></i> Tweet </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-tailwind"
                className="inline-block px-5 py-2.5 mb-0 mr-2 font-bold text-center text-white align-middle transition-all border-0  rounded-lg cursor-pointer hover:shadow-xs hover:-translate-y-px active:opacity-85 leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 me-2 border-slate-700 bg-slate-700"
                target="_blank" rel="noreferrer"> <i className="mr-1 fab fa-facebook-square"></i> Share </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}