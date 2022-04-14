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
      <div className='bg-gray py-24'>
        <Container>
          <div className='lg:col-span-3 lg:col-start-3'>
            <Link href='/'>
              <a title='Esfera - Arena e Negócios'>  
                <Image
                  alt='Esfera - Arena e Negócios'
                  height={55}
                  quality={100}
                  src='/logo_footer.svg'
                  width={246}
                />
              </a>
            </Link>
          </div>
          <ul className='lg:col-span-2 col-span-4 flex flex-col space-y-2'>
            <li onClick={() => scrollTo('quemsomos')}>
              <a className='font-light text-sm text-white' href='#this' title='Quem Somos'>Quem Somos</a>
            </li>
            <li onClick={() => scrollTo('servicos')}>
              <a className='font-light text-sm text-white' href='#this' title='Serviços'>Serviços</a>
            </li>
            <li onClick={() => scrollTo('depoimentos')}>
              <a className='font-light text-sm text-white' href='#this' title='Depoimentos'>Depoimentos</a>
            </li>
            <li>
              <Link href='/'>
                <a className='font-light text-sm text-white' title='Política de privacidade'>Política de privacidade</a>
              </Link>
            </li>
          </ul>
          <ul className='lg:col-span-2 col-span-4 flex flex-col space-x-2'>
            <li onClick={() => scrollTo('contato')}>
              <a className='font-light text-sm text-white' href='#this' title='Contato'>Contato</a>
            </li>
          </ul>
          <ul className='lg:col-span-1 col-span-4 flex space-x-4'>
            <li>
              <a href='https://www.instagram.com/esferabsb/' target='_blank' rel='noreferrer' title='Instagram'>
                <Image
                  alt='Instagram'
                  height={15}
                  quality={100}
                  src='/instagram.svg'
                  width={15}
                />
              </a>
            </li>
            <li>
              <a href='https://api.whatsapp.com/send?phone=5561995526025' target='_blank' rel='noreferrer' title='WhatsApp'>
                <Image
                  alt='WhatsApp'
                  height={15}
                  quality={100}
                  src='/whatsapp.svg'
                  width={15}
                />
              </a>
            </li>
          </ul>
        </Container>
      </div>
      <div className='bg-almost-black py-8'>
        <Container>
          <h1 className='col-span-2 lg:col-start-6 col-start-2 font-light text-center text-xs text-white uppercase'>© ESFERA, 2022.</h1>
        </Container>
      </div>
    </>
  );
}
