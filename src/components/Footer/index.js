import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Guide';

export default function Footer() {
  const scrollTo = element => {
    document.getElementById(element).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <>
      <div className='py-48'>
        <Container>
          <ul className='lg:col-span-10 col-span-4 lg:col-start-2 flex lg:flex-row flex-col items-center justify-between border-b pb-8'>
            <li className='lg:mb-0 mb-4' onClick={() => scrollTo('quemsomos')}>
              <a className='font-bold' href='#this' title='Quem Somos'>Quem Somos</a>
            </li>
            <li className='lg:mb-0 mb-4' onClick={() => scrollTo('servicos')}>
              <a className='font-bold' href='#this' title='Serviços'>Serviços</a>
            </li>
            <li className='lg:mb-0 mb-4' onClick={() => scrollTo('contato')}>
              <a className='font-bold' href='#this' title='Contato'>Contato</a>
            </li>
            <li className='lg:mb-0 mb-4'>
              <Link href='/'>
                <a title='Esfera - Arena e Negócios'>  
                  <Image
                    alt='Esfera - Arena e Negócios'
                    height={70}
                    quality={100}
                    src='/logo_footer.svg'
                    width={172}
                  />
                </a>
              </Link>
            </li>
            <li className='lg:mb-0 mb-4'>
              <Link href='/'>
                <a className='font-bold' title='Localização'>Localização</a>
              </Link>
            </li>
            <li className='lg:mb-0 mb-4'>
              <Link href='/'>
                <a className='font-bold' title='Política de privacidade'>Política de privacidade</a>
              </Link>
            </li>
          </ul>
        </Container>
        <Container newClasses='mt-16'>
          <div className='col-span-2 lg:col-start-6 col-start-2 flex flex-col'>
            <ul className='flex items-center justify-around'>
              <li>
                <a href='https://www.instagram.com/esferabsb/' target='_blank' rel='noreferrer' title='Instagram'>
                  <Image
                    alt='Instagram'
                    height={38}
                    quality={100}
                    src='/instagram.svg'
                    width={38}
                  />
                </a>
              </li>
              <li>
                <a href='https://api.whatsapp.com/send?phone=5561995526025' target='_blank' rel='noreferrer' title='WhatsApp'>
                  <Image
                    alt='WhatsApp'
                    height={38}
                    quality={100}
                    src='/whatsapp.svg'
                    width={38}
                  />
                </a>
              </li>
            </ul>
            <h1 className='font-light mt-8 text-center uppercase'>© ESFERA, 2022.</h1>
          </div>
        </Container>
      </div>
    </>
  );
}
