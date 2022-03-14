import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import Image from 'next/image';
import { Container } from '../components/Guide';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className='w-full'>
        <iframe className='h-video w-full' src='https://www.youtube.com/embed/eGkSItKt-NM?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
      </div>
      <ContainerWithBackgroundImage uri='/bg-section-2.png'>
        <Container newClasses='pt-24 pb-52'>
          <h1 className='lg:col-span-12 col-span-4 text-5xl text-gray'>O seu escritório dentro de um<br />monumento da cidade</h1>
          <div className='lg:col-span-12 col-span-4 grid lg:grid-cols-12 grid-cols-4 gap-8 mt-24'>
            <div className='bg-white col-span-4 flex items-center justify-center rounded-3xl'>
              <p className='text-2xl text-center text-gray px-16 p-12'>
                Nosso modelo de negócio, <span className='font-semibold'>além de entregar um escritório privativo nas áreas de camarote do Estádio Nacional...</span>  
              </p>  
            </div>
            <div className='bg-white col-span-4 flex items-center justify-center rounded-3xl'>
              <p className='text-2xl text-center text-gray px-16 p-12'>
                E a experiência de administração e <span className='font-semibold'>gestão de ativos imobiliários</span> da TRK imóveis
              </p>  
            </div>
            <div className='bg-white col-span-4 flex items-center justify-center rounded-3xl'>
              <p className='text-2xl text-center text-gray px-16 p-8'>
                Contando ainda, com a expertise do Grupo R2, <span className='font-semibold'>que proporciona todo o suporte necessário na criação de experiências únicas</span> (para você, seus clientes e colaboradores) e a administração de ativos imobiliários da TRK Imóveis.
              </p>  
            </div>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <div className='flex overflow-x-scroll py-32 hide-scroll-bar'>
        <div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 '>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block px-3 w-96'>
            <div className='border border-gold inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_1.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light mb-6 text-xl text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
        </div>                    
      </div>
      <ContainerWithBackgroundImage uri='/bg-section-4.png'>
        <Container>
          <div className='lg:col-span-6 col-span-4 lg:col-end-13 py-96'>
            <p className='text-4xl text-white lg:text-left text-center'>
              Temos como vizinhança o <span className='font-semibold'>Mané Mercado Gastrônomico</span>, que atua com 17 operações culinárias ativas de domingo a domingo, com menus assinados por renomados chefs de cozinha da cidade.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-5.png'>
        <Container>
          <div className='lg:col-span-7 col-span-4 lg:col-end-13 pt-48 pb-96'>
            <h1 className='text-6xl lg:text-right text-center text-white'>É nisso que acreditamos...</h1>
            <p className='font-light mt-12 text-4xl lg:text-right text-center text-white'>
              <span className='font-semibold'>Trabalhar sem sentir que está trabalhando</span> e, por consequência, <span className='font-semibold'>fechar os melhores negócios da sua vida.</span>
            </p>
            <p className='font-light mt-8 text-4xl lg:text-right text-center text-white'>
              Afinal de contas, toda grande decisão também envolve um pouco de emoção, <span className='font-semibold'>e se for pro seu cliente lembrar de você, que seja com as melhores emoções possíveis!</span>
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-6.png'>
        <Container newClasses='pt-24'>
          <h1 className='lg:col-span-8 col-span-4 lg:col-start-5 font-bold text-5xl text-white lg:text-left text-center uppercase'>Nossos</h1>
          <h1 className='lg:col-span-7 col-span-4 lg:col-start-6 font-bold text-5xl text-gold lg:text-left text-center uppercase'>Serviços</h1>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-2 col-span-4 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Serviço de portaria'
              height={166}
              quality={100}
              src='/service-reception.svg'
              width={166}
            />  
          </div>
          <div className='lg:col-span-10 col-span-4 flex items-center'>
            <p className='text-4xl text-white lg:text-left text-center'>
              Serviço de portaria e recepção com controle de acesso às áreas comuns.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-2 col-span-4 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Ponto de acesso'
              height={166}
              quality={100}
              src='/service-wifi.svg'
              width={166}
            />  
          </div>
          <div className='lg:col-span-10 col-span-4 flex items-center'>
            <p className='text-4xl text-white lg:text-left text-center'>
              Ponto de acesso a serviço de internet básico.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-2 col-span-4 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Despesas acessórias'
              height={148}
              quality={100}
              src='/service-taxes.svg'
              width={148}
            />  
          </div>
          <div className='lg:col-span-10 col-span-4 flex items-center'>
            <p className='text-4xl text-white lg:text-left text-center'>
              Despesas acessórias do espaço privativo, tais como: IPTU, Energia elétrica, água/esgoto e seguro predial.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-2 col-span-4 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Serviço de conservação'
              height={148}
              quality={100}
              src='/service-cleanup.svg'
              width={148}
            />  
          </div>
          <div className='lg:col-span-10 col-span-4 flex items-center'>
            <p className='text-4xl text-white lg:text-left text-center'>
              Serviço de conservação e limpeza das áreas comuns.
            </p>
          </div>
        </Container>
        <Container newClasses='pt-12 pb-48'>
          <div className='lg:col-span-2 col-span-4 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Serviço de portaria'
              height={148}
              quality={100}
              src='/service-parking.svg'
              width={148}
            />  
          </div>
          <div className='lg:col-span-10 col-span-4 flex items-center'>
            <p className='text-4xl text-white lg:text-left text-center'>
              Estacionamento privativo.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-7.png'>
        <Container newClasses='py-20'>
          <h1 className='lg:col-span-9 col-span-4 lg:col-start-4 font-bold text-5xl text-white lg:text-left text-center uppercase'>Depoimento de</h1>
          <h1 className='lg:col-span-7 col-span-4 lg:col-start-6 font-bold text-5xl text-gold lg:text-left text-center uppercase'>Clientes ativos</h1>
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
      <ContainerWithBackgroundImage uri='/bg-section-8.png'>
        <Container newClasses='py-20'>
          <h1 className='lg:col-span-11 col-span-4 lg:col-start-2 font-bold text-5xl lg:text-left text-center uppercase'>Vamos criar negócios,</h1>
          <h1 className='lg:col-span-9 col-span-4 lg:col-start-4 font-bold text-5xl text-soft-gray lg:text-left text-center uppercase'>conexões e experiências?</h1>
        </Container>
        <Container>
          <div className='lg:col-span-12 col-span-4'>
            <Formik
              initialValues={{
                nome: '',
                telefone: '',
                email: '',
                mensagem: ''
              }}
              validationSchema={Yup.object({
                nome: Yup.string().required('Campo obrigatório'),
                email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
                telefone: Yup.string().required('Campo obrigatório'),
                mensagem: Yup.string().required('Campo obrigatório')
              })}
              onSubmit={async values => {
                fetch('/api/mail', {
                  method: 'POST',
                  body: JSON.stringify(values)
                }).then(res => {
                  res.status === 200 ? alert('foi') : alert('nao foi');
                })
              }}
            >
              {({ errors, values }) => (
                <Form>
                  <ul className='flex mb-12'>
                    <li className='w-full'>
                      {errors.nome && <p className='mt-2 text-soft-gray'>{errors.nome}</p>}
                      <Field
                        className={`${errors.nome ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray p-8 text-2xl text-dark-blue w-full`}
                        name='nome'
                        placeholder='NOME COMPLETO:'
                        type='text'
                        value={values.nome}
                      />
                    </li>
                  </ul>
                  <ul className='flex flex-col lg:flex-row mb-12'>
                    <li className='lg:mr-6 lg:w-1/2 w-full mb-12 lg:mb-0'>
                      {errors.telefone && <p className='mt-2 text-soft-gray'>{errors.telefone}</p>}
                      <Field 
                        className={`${errors.telefone ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray p-8 text-2xl text-dark-blue w-full`} 
                        name='telefone' 
                        placeholder='TELEFONE PARA CONTATO:' 
                        type='text' 
                        value={values.telefone} 
                      />
                    </li>
                    <li className='lg:ml-6 lg:w-1/2 w-full'>
                      {errors.email && <p className='mt-2 text-soft-gray'>{errors.email}</p>}
                      <Field 
                        className={`${errors.email ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray p-8 text-2xl text-dark-blue w-full`} 
                        name='email' 
                        placeholder='E-MAIL:' 
                        type='email' 
                        value={values.email} 
                      />
                    </li>
                  </ul>
                  <ul className='flex mb-12'>
                    <li className='w-full'>
                      {errors.mensagem && <p className='mt-2 text-soft-gray'>{errors.mensagem}</p>}
                      <Field 
                        as='textarea' 
                        className={`${errors.mensagem ? 'bg-baby-gray' : 'bg-white'} font-medium h-56 placeholder:text-soft-gray p-8 text-2xl text-dark-blue w-full`} 
                        name='mensagem' 
                        placeholder='MENSAGEM:' 
                        value={values.mensagem} 
                      />
                    </li>
                  </ul>
                  <ul className='flex pb-20'>
                    <li className='flex justify-center w-full'>
                      <button className='cursor-pointer bg-gold py-6 rounded-md text-lg text-white uppercase lg:w-1/6 w-3/4' type='submit'>Enviar</button>
                    </li>
                  </ul>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <Footer />
    </>
  )
}
