import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Guide';

export default function Header() {
  return (
    <div className='py-4'>
      <Container>
        <div className='lg:col-span-2 flex items-center'>
          <Image
            alt='Esfera - Arena e Negócios'
            height={43}
            quality={100}
            src='/logo_header.svg'
            width={210}
          />
        </div>
        <ul className='lg:col-span-4 flex items-center justify-between'>
          <li>
            <Link href='/'>
              <a className='text-gray' title='Quem Somos'>Quem Somos</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-gray' title='Serviços'>Serviços</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-gray' title='Contato'>Contato</a>
            </Link>
          </li>
        </ul>
        <ul className='lg:col-span-2 lg:col-end-13 flex items-center justify-between'>
          <li>
            <Link href='/'>
              <a className='text-gray' title='Área do Cliente'>Área do Cliente</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-gray' title='Registrar'>Registrar</a>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
