import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Guide';

export default function Footer() {
  return (
    <>
      <div className='py-48'>
        <Container>
          <ul className='lg:col-span-10 col-span-4 lg:col-start-2 flex lg:flex-row flex-col items-center justify-between border-b pb-8'>
            <li className='lg:mb-0 mb-4'>
              <Link href='/'>
                <a className='font-bold' title='Quem Somos'>Quem Somos</a>
              </Link>
            </li>
            <li className='lg:mb-0 mb-4'>
              <Link href='/'>
                <a className='font-bold' title='Serviços'>Serviços</a>
              </Link>
            </li>
            <li className='lg:mb-0 mb-4'>
              <Link href='/'>
                <a className='font-bold' title='Contato'>Contato</a>
              </Link>
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
                <a href='https://api.whatsapp.com/send?phone=5561982040066' target='_blank' rel='noreferrer' title='WhatsApp'>
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
