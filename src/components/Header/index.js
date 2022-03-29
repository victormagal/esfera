import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from '../Guide';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = element => {
    document.getElementById(element).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <>
      <Head>
        <title>Esfera | Arena e Negócios</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='lg:py-4'>
        <Container>
          <div className='lg:col-span-2 col-span-3 flex items-center'>
            <Image
              alt='Esfera - Arena e Negócios'
              height={43}
              quality={100}
              src='/logo_header.svg'
              width={210}
            />
          </div>
          <ul className='col-span-1 lg:hidden flex justify-end'>
            <li>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <Image
                  alt='Menu'
                  height={50}
                  quality={100}
                  src='/menu.svg'
                  width={50}
                />
              </button>
            </li>
          </ul>
          {menuOpen &&
            <ul className='col-span-4 lg:hidden flex flex-col items-center space-y-3 pb-8'>
              <li className='border-b px-4 pb-2' onClick={() => scrollTo('quemsomos')}>
                <a className='text-gray' href='#this' title='Quem Somos'>Quem Somos</a>
              </li>
              <li  className='border-b px-4 pb-2' onClick={() => scrollTo('servicos')}>
                <a className='text-gray' href='#this' title='Serviços'>Serviços</a>
              </li>
              <li  className='border-b px-4 pb-2' onClick={() => scrollTo('contato')}>
                <a className='text-gray' href='#this' title='Contato'>Contato</a>
              </li>
              <li  className='border-b px-4 pb-2'>
                <a className='text-gray' href='https://docs.google.com/document/d/1b3F29LEdROC-EkqcWVzmnNry0gdsyyZ62Z2OzW5MFvI/edit' rel='noreferrer'  target='_blank' title='Área do Cliente'>Área do Cliente</a>
              </li>
              <li  className='border-b px-4 pb-2'>
                <Link href='/'>
                  <a className='text-gray' title='Registrar'>Registrar</a>
                </Link>
              </li>
            </ul>
          }
          <ul className='lg:col-span-4 lg:flex hidden items-center justify-between'>
            <li onClick={() => scrollTo('quemsomos')}>
              <a className='text-gray' href='#this' title='Quem Somos'>Quem Somos</a>
            </li>
            <li onClick={() => scrollTo('servicos')}>
              <a className='text-gray' href='#this' title='Serviços'>Serviços</a>
            </li>
            <li onClick={() => scrollTo('contato')}>
              <a className='text-gray' href='#this' title='Contato'>Contato</a>
            </li>
          </ul>
          <ul className='lg:col-span-3 lg:col-end-13 lg:flex hidden items-center justify-between'>
            <li>
              <a className='text-gray' href='https://docs.google.com/document/d/1b3F29LEdROC-EkqcWVzmnNry0gdsyyZ62Z2OzW5MFvI/edit' rel='noreferrer'  target='_blank' title='Área do Cliente'>Área do Cliente</a>
            </li>
            <li>
              <Link href='/'>
                <a className='text-gray' title='Registrar'>Registrar</a>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
