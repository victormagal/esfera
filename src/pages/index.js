import client from '../utils/client';
import { getProducts } from '../utils/queries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenAccount from '../components/OpenAccount';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import ContainerWithBackgroundVideo from '../components/ContainerWithBackgroundVideo';
import Product from '../components/Product';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../components/Guide';

export default function Home() {
  return (
    <>
      <Header />
      {/* <ContainerWithBackgroundVideo uri='/home.mp4'>
        <Container>
          <div className='col-span-6 col-start-4 flex flex-col items-center py-48'>
            <h1 className='font-bold text-5xl text-center text-white'>Invista agora e garanta o seu futuro</h1>
            <h2 className='my-11 text-xl text-center text-white'>Confie na autoridade de quem entende de verdade de investimento para conduzir você aos seus objetivos</h2>
            <a className="bg-white block font-bold py-6 rounded-full text-center text-2xl text-soft-blue uppercase w-1/2" href='https://cadastro.xpi.com.br/desktop/step/1' target='_blank' rel='noreferrer' title='Abra sua conta'>Abra sua conta</a>
          </div>
        </Container>
      </ContainerWithBackgroundVideo> */}
      <ContainerWithBackgroundImage uri='/bg-section-2.png'>
        <Container newClasses='pt-24 pb-52'>
          <h1 className='col-span-12 text-5xl text-gray'>O seu escritório dentro de um<br />monumento da cidade</h1>
          <div className='col-span-12 grid grid-cols-12 gap-8 mt-24'>
            <div className='bg-white col-span-4 flex items-center justify-center rounded-full'>
              <p className='text-2xl text-center text-gray px-16'>
                Nosso modelo de negócio, <span className='font-semibold'>além de entregar um escritório privativo nas áreas de camarote do Estádio Nacional...</span>  
              </p>  
            </div>
            <div className='bg-white col-span-4 flex items-center justify-center rounded-full'>
              <p className='text-2xl text-center text-gray px-16'>
                E a experiência de administração e <span className='font-semibold'>gestão de ativos imobiliários</span> da TRK imóveis
              </p>  
            </div>
            <div className='bg-white col-span-4 flex items-center justify-center rounded-full'>
              <p className='text-2xl text-center text-gray px-16 py-32'>
                Contando ainda, com a expertise do Grupo R2, <span className='font-semibold'>que proporciona todo o suporte necessário na criação de experiências únicas</span> (para você, seus clientes e colaboradores) e a administração de ativos imobiliários da TRK Imóveis.
              </p>  
            </div>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-4.png'>
        <Container>
          <div className='col-span-6 col-end-13 py-96'>
            <p className='text-4xl text-white'>
              Temos como vizinhança o <span className='font-semibold'>Mané Mercado Gastrônomico</span>, que atua com 17 operações culinárias ativas de domingo a domingo, com menus assinados por renomados chefs de cozinha da cidade.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-5.png'>
        <Container>
          <div className='col-span-7 col-end-13 pt-48 pb-96'>
            <h1 className='text-6xl text-right text-white'>É nisso que acreditamos...</h1>
            <p className='font-light mt-12 text-4xl text-right text-white'>
              <span className='font-semibold'>Trabalhar sem sentir que está trabalhando</span> e, por consequência, <span className='font-semibold'>fechar os melhores negócios da sua vida.</span>
            </p>
            <p className='font-light mt-8 text-4xl text-right text-white'>
              Afinal de contas, toda grande decisão também envolve um pouco de emoção, <span className='font-semibold'>e se for pro seu cliente lembrar de você, que seja com as melhores emoções possíveis!</span>
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-6.png'>
        <Container newClasses='pt-24'>
          <h1 className='col-span-8 col-start-5 font-bold pl-4 text-5xl text-white uppercase'>Nossos</h1>
          <h1 className='col-span-7 col-start-6 font-bold text-5xl text-gold uppercase'>Serviços</h1>
        </Container>
        <Container newClasses='py-12'>
          <div className='col-span-2 flex items-center'>
            <Image
              alt='Serviço de portaria'
              height={166}
              quality={100}
              src='/service-reception.svg'
              width={166}
            />  
          </div>
          <div className='col-span-10 flex items-center'>
            <p className='text-4xl text-white'>
              Serviço de portaria e recepção com controle de acesso às áreas comuns.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='col-span-2 flex items-center'>
            <Image
              alt='Ponto de acesso'
              height={166}
              quality={100}
              src='/service-wifi.svg'
              width={166}
            />  
          </div>
          <div className='col-span-10 flex items-center'>
            <p className='text-4xl text-white'>
              Ponto de acesso a serviço de internet básico.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='col-span-2 flex items-center'>
            <Image
              alt='Despesas acessórias'
              height={148}
              quality={100}
              src='/service-taxes.svg'
              width={148}
            />  
          </div>
          <div className='col-span-10 flex items-center'>
            <p className='text-4xl text-white'>
              Despesas acessórias do espaço privativo, tais como: IPTU, Energia elétrica, água/esgoto e seguro predial.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='col-span-2 flex items-center'>
            <Image
              alt='Serviço de conservação'
              height={148}
              quality={100}
              src='/service-cleanup.svg'
              width={148}
            />  
          </div>
          <div className='col-span-10 flex items-center'>
            <p className='text-4xl text-white'>
              Serviço de conservação e limpeza das áreas comuns.
            </p>
          </div>
        </Container>
        <Container newClasses='pt-12 pb-48'>
          <div className='col-span-2 flex items-center'>
            <Image
              alt='Serviço de portaria'
              height={148}
              quality={100}
              src='/service-parking.svg'
              width={148}
            />  
          </div>
          <div className='col-span-10 flex items-center'>
            <p className='text-4xl text-white'>
              Estacionamento privativo.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-7.png'>
        <Container newClasses='py-20'>
          <h1 className='col-span-9 col-start-4 font-bold pl-4 text-5xl text-white uppercase'>Depoimento de</h1>
          <h1 className='col-span-7 col-start-6 font-bold text-5xl text-gold uppercase'>Clientes ativos</h1>
        </Container>
        <Container newClasses='pb-20'>
          <div className='border border-white col-span-4 flex flex-col items-start px-20 py-12 rounded'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                className='rounded-full'
                height={280}
                quality={100}
                src='/solaris.png'
                width={280}
              />
            </div>
            <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
            <p className='font-light mb-6 text-xl text-white'>
              O ambiente do Esfera nos proporciona um <span className='font-semibold'>atendimento único com experiências e possibilidades de negócios</span> que não encontramos em outros centros empresariais de Brasília.
            </p>
            <p className='font-semibold text-xl text-white'>Solaris</p>
          </div>
          <div className='border border-white col-span-4 flex flex-col items-start px-20 py-12 rounded'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Lotus'
                className='rounded-full'
                height={280}
                quality={100}
                src='/lotus.png'
                width={280}
              />
            </div>
            <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
            <p className='font-light mb-6 text-xl text-white'>
              A Esfera passa uma <span className='font-semibold'>experiência incrível aos nossos funcionários e clientes</span>, além de oferecer um atendimento especializado, rápido e muito profissional.
            </p>
            <p className='font-semibold text-xl text-white'>Lotus</p>
          </div>
          <div className='border border-white col-span-4 flex flex-col items-start px-20 py-12 rounded'>
            <div className='flex justify-center w-full'>
              <Image
                alt='B2'
                className='rounded-full'
                height={280}
                quality={100}
                src='/b2.png'
                width={280}
              />
            </div>
            <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
            <p className='font-light mb-6 text-xl text-white'>
              O <span className='font-semibold'>networking e a estrutura</span> foram os principais motivos que nos fizeram trazer o escritório para a Esfera. Todo o projeto apresentado comprova que é um ambiente para negócios muito excepcional!
            </p>
            <p className='font-semibold text-xl text-white'>B2</p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <Footer />
    </>
  )
}
