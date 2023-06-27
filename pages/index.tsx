import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import siteConfig from '../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

import Script from 'next/script'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800 shit">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl p-4">
          <nav className="mb-4 flex items-center justify-between pl-1">
            
          </nav>
		  <div></div>

		    <div className="td1 center">
			<div className="th1-padding">
			<div className="th1-blur">
			</div>
			<div id="anime" className="th1"></div>
			</div>

			<div className="series">
			 <p id="qoute" className="idqoute"></p>
			<p className="idpark">~ <span id="char"></span></p>
			</div>
			</div>
		
        </div>
      </main>
		<Script src="https://cdn.jsdelivr.net/gh/xerzo/iamzero.github.io@master/js/some.js" />
      <Footer />
    </div>
	
	
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
