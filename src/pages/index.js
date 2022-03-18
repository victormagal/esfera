import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import Image from 'next/image';
import { Container } from '../components/Guide';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { maskPhoneNumber } from '../utils/masks';

export default function Home() {
  const [formLoader, setFormLoader] = useState(false);
  const [failMessage, setFailMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <>
      <Header />
      <div className='w-full'>
        <iframe className='h-video w-full' src='https://www.youtube.com/embed/eGkSItKt-NM?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
      </div>
      <ContainerWithBackgroundImage uri='/bg-section-2.png'>
        <Container newClasses='pt-24 pb-52'>
          <h1 className='lg:col-span-10 col-span-4 lg:col-start-3 text-5xl text-gray'>O seu escritório dentro de um<br />monumento da cidade</h1>
          {/* <div className='lg:col-span-12 col-span-4 grid lg:grid-cols-12 grid-cols-4 gap-8 mt-24'> */}
          <div className='lg:col-span-12 col-span-4 flex lg:flex-row flex-col lg:justify-center items-center mt-24 lg:space-x-8 lg:space-y-0 space-y-8'>
            {/* <div className='bg-white lg:col-span-3 col-span-4 flex items-center justify-center rounded-3xl'> */}
            <div className='bg-white flex h-96 items-center justify-center rounded-3xl w-96'>
              <p className='text-lg text-center text-gray p-16'>
                Nosso modelo de negócio, <span className='font-semibold'>além de entregar um escritório privativo nas áreas de camarote do Estádio Nacional...</span>  
              </p>  
            </div>
            {/* <div className='bg-white col-span-4 flex items-center justify-center rounded-3xl'> */}
            <div className='bg-white flex h-96 items-center justify-center rounded-3xl w-96'>
              <p className='text-lg text-center text-gray p-16'>
                E a experiência de administração e <span className='font-semibold'>gestão de ativos imobiliários</span> da TRK imóveis
              </p>  
            </div>
            {/* <div className='bg-white col-span-4 flex items-center justify-center rounded-3xl'> */}
            <div className='bg-white flex h-96 items-center justify-center rounded-3xl w-96'>
              <p className='text-lg text-center text-gray p-16'>
                Contando ainda, com a expertise do Grupo R2, <span className='font-semibold'>que proporciona todo o suporte necessário na criação de experiências únicas</span> (para você, seus clientes e colaboradores) e a administração de ativos imobiliários da TRK Imóveis.
              </p>  
            </div>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <div className='flex overflow-x-scroll py-32 hide-scroll-bar'>
        <div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 '>
          <div className='inline-block min-h-96 px-3 w-96'>
            <div className='border border-gold h-full inline-block px-12 py-6 rounded'>
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
              <p className='font-light text-lg text-gray'>
                <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
              </p>
            </div>
          </div>
          <div className='inline-block min-h-96 px-3 w-96'>
            <div className='border border-gold h-full inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_2.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light text-lg text-gray'>
                O <span className='font-semibold'>Estádio Nacional Mané Garrincha</span> é um dos maiores ícones da arquitetura brasileira e por si só, um cartão postal a céu aberto. Aqui, você viverá suas maiores e mais importantes experiências de trabalho e de relacionamento...
              </p>
            </div>
          </div>
          <div className='inline-block min-h-96 px-3 w-96'>
            <div className='border border-gold h-full inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_3.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light text-lg text-gray'>
                <span className='font-semibold'>Além disso, você pode assistir a grandes shows e eventos esportivos do seu escritório com uma vista única para arena e com total privacidade.</span>
              </p>
            </div>
          </div>
          <div className='inline-block min-h-96 px-3 w-96'>
            <div className='border border-gold h-full inline-block px-12 py-6 rounded'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  className='rounded-full'
                  height={280}
                  quality={100}
                  src='/comment_4.png'
                  width={280}
                />
              </div>
              <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
              <p className='font-light text-lg text-gray'>
                Iremos te ajudar a realizar todas essas possibilidades com o <span className='font-semibold'>profissionalismo, capacidade de realização</span> e gestão que a sua empresa precisa.
              </p>
            </div>
          </div>
        </div>                    
      </div>
      <ContainerWithBackgroundImage uri='/bg-section-4.jpg'>
        <Container>
          <div className='lg:col-span-6 col-span-4 py-96'>
            <p className='text-3xl text-white lg:text-left text-center'>
              Temos como vizinhança o <span className='font-semibold'>Mané Mercado Gastrônomico</span>, que atua com 17 operações culinárias ativas de domingo a domingo, com menus assinados por renomados chefs de cozinha da cidade.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-5.png'>
        <Container>
          <div className='lg:col-span-5 col-span-4 lg:col-end-12 pt-48 pb-96'>
            <h1 className='text-5xl lg:text-right text-center text-white'>É nisso que acreditamos...</h1>
            <p className='font-light mt-24 text-3xl lg:text-right text-center text-white'>
              <span className='font-semibold'>Trabalhar sem sentir que está trabalhando</span> e, por consequência, <span className='font-semibold'>fechar os melhores negócios da sua vida.</span>
            </p>
            <p className='font-light mt-8 text-3xl lg:text-right text-center text-white'>
              Afinal de contas, toda grande decisão também envolve um pouco de emoção, <span className='font-semibold'>e se for pro seu cliente lembrar de você, que seja com as melhores emoções possíveis!</span>
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-6.png'>
        <Container newClasses='pt-24 pb-44'>
          <h1 className='lg:col-span-3 col-span-4 lg:col-start-5 font-bold text-5xl text-white lg:text-left text-center uppercase'>Nossos</h1>
          <h1 className='lg:col-span-3 col-span-4 lg:col-start-6 font-bold text-5xl text-gold lg:text-left text-center uppercase'>Serviços</h1>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-1 col-span-4 lg:col-start-3 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Serviço de portaria'
              height={103}
              quality={100}
              src='/service-reception.svg'
              width={103}
            />  
          </div>
          <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
            <p className='text-3xl text-white w-full'>
              Serviço de portaria e recepção com controle de acesso às áreas comuns.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-1 col-span-4 lg:col-start-3 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Ponto de acesso'
              height={103}
              quality={100}
              src='/service-wifi.svg'
              width={103}
            />  
          </div>
          <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
            <p className='text-3xl text-white w-full'>
              Ponto de acesso a serviço de internet básico.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-1 col-span-4 lg:col-start-3 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Despesas acessórias'
              height={92}
              quality={100}
              src='/service-taxes.svg'
              width={92}
            />  
          </div>
          <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
            <p className='text-3xl text-white w-full'>
              Despesas acessórias do espaço privativo, tais como: IPTU, energia elétrica e água/esgoto.
            </p>
          </div>
        </Container>
        <Container newClasses='py-12'>
          <div className='lg:col-span-1 col-span-4 lg:col-start-3 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Serviço de conservação'
              height={92}
              quality={100}
              src='/service-cleanup.svg'
              width={92}
            />  
          </div>
          <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
            <p className='text-3xl text-white w-full'>
              Serviço de conservação e limpeza das áreas comuns.
            </p>
          </div>
        </Container>
        <Container newClasses='pt-12 pb-96'>
          <div className='lg:col-span-1 col-span-4 lg:col-start-3 flex lg:flex-row flex-col items-center'>
            <Image
              alt='Serviço de portaria'
              height={92}
              quality={100}
              src='/service-parking.svg'
              width={92}
            />  
          </div>
          <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
            <p className='text-3xl text-white w-full'>
              Estacionamento privativo.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-7.png'>
        <Container newClasses='py-20'>
          <h1 className='col-span-4 lg:col-start-4 font-bold text-5xl text-white lg:text-left text-center uppercase'>Depoimento de</h1>
          <h1 className='lg:col-span-5 col-span-4 lg:col-start-6 font-bold text-5xl text-gold lg:text-left text-center uppercase'>Clientes ativos</h1>
        </Container>
        <Container newClasses='pb-20'>
          <div className='border border-white lg:col-span-3 col-span-4 flex flex-col items-start p-12 rounded'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                className='rounded-full'
                height={255}
                quality={100}
                src='/solaris.png'
                width={255}
              />
            </div>
            <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
            <p className='font-light mb-6 text-lg text-white'>
              O ambiente do Esfera nos proporciona um <span className='font-semibold'>atendimento único com experiências e possibilidades de negócios</span> que não encontramos em outros centros empresariais de Brasília.
            </p>
            <p className='font-semibold text-lg text-white'>Solaris</p>
          </div>
          <div className='border border-white lg:col-span-3 col-span-4 flex flex-col items-start p-12 rounded'>
            <div className='flex items justify-center w-full'>
              <Image
                alt='Lotus'
                className='rounded-full'
                height={255}
                quality={100}
                src='/lotus.png'
                width={255}
              />
            </div>
            <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
            <p className='font-light mb-6 text-lg text-white'>
              A Esfera passa uma <span className='font-semibold'>experiência incrível aos nossos funcionários e clientes</span>, além de oferecer um atendimento especializado, rápido e muito profissional.
            </p>
            <p className='font-semibold text-lg text-white'>Lotus</p>
          </div>
          <div className='border border-white lg:col-span-3 col-span-4 flex flex-col items-start p-12 rounded'>
            <div className='flex justify-center w-full'>
              <Image
                alt='B2'
                className='rounded-full'
                height={255}
                quality={100}
                src='/b2.png'
                width={255}
              />
            </div>
            <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
            <p className='font-light mb-6 text-lg text-white'>
              O <span className='font-semibold'>networking e a estrutura</span> foram os principais motivos que nos fizeram trazer o escritório para a Esfera. Todo o projeto apresentado comprova que é um ambiente para negócios muito excepcional!
            </p>
            <p className='font-semibold text-lg text-white'>B2</p>
          </div>
          <div className='border border-white lg:col-span-3 col-span-4 flex flex-col items-start p-12 rounded'>
            <div className='flex justify-center w-full'>
              <Image
                alt='HLA'
                className='rounded-full'
                height={255}
                quality={100}
                src='/hla.png'
                width={255}
              />
            </div>
            <div className='bg-gold h-8 mb-4 rounded-full w-8'></div>
            <p className='font-light mb-6 text-lg text-white'>
              Além do <span className='font-semibold'>atendimento extremamente eficiente que recebemos desde o início,</span> o networking garantido pela Esfera foi um dos benefícios que mais nos chamou a atenção.
            </p>
            <p className='font-semibold text-lg text-white'>HLA</p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-8.png'>
        <Container newClasses='py-20'>
          <h1 className='lg:col-span-6 col-span-4 lg:col-start-3 font-bold text-5xl lg:text-left text-center uppercase'>Vamos criar negócios,</h1>
          <h1 className='lg:col-span-7 col-span-4 lg:col-start-5 font-bold text-5xl text-soft-gray lg:text-left text-center uppercase'>conexões e experiências?</h1>
        </Container>
        <Container>
          <div className='lg:col-span-8 col-span-4 lg:col-start-3'>
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
                setFormLoader(true);
                fetch('/api/mail', {
                  method: 'POST',
                  body: JSON.stringify(values)
                }).then(res => {
                  res.status === 200 ? setSuccessMessage(true) : setFailMessage(true);
                  setFormLoader(false);
                })
              }}
            >
              {({ errors, values }) => (
                <Form>
                  <ul className='flex mb-12'>
                    <li className='w-full'>
                      {errors.nome && <p className='mt-2 text-soft-gray'>{errors.nome}</p>}
                      <Field
                        className={`${errors.nome ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray px-8 py-6 text-xl text-dark-blue w-full`}
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
                        className={`${errors.telefone ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray px-8 py-6 text-xl text-dark-blue w-full`} 
                        name='telefone' 
                        placeholder='TELEFONE PARA CONTATO:' 
                        type='text' 
                        value={maskPhoneNumber(values.telefone)} 
                      />
                    </li>
                    <li className='lg:ml-6 lg:w-1/2 w-full'>
                      {errors.email && <p className='mt-2 text-soft-gray'>{errors.email}</p>}
                      <Field 
                        className={`${errors.email ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray px-8 py-6 text-xl text-dark-blue w-full`} 
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
                        className={`${errors.mensagem ? 'bg-baby-gray' : 'bg-white'} font-medium h-56 placeholder:text-soft-gray px-8 py-6 text-xl text-dark-blue w-full`} 
                        name='mensagem' 
                        placeholder='MENSAGEM:' 
                        value={values.mensagem} 
                      />
                    </li>
                  </ul>
                  {successMessage &&
                    <ul className='flex pb-8'>
                      <li>
                        <p>Mensagem enviada com sucesso!</p>
                      </li>
                    </ul>
                  }
                  {failMessage &&
                    <ul className='flex pb-8'>
                      <li>
                        <p>Houve um erro em sua tentativa, tente novamente mais tarde!</p>
                      </li>
                    </ul>
                  }
                  <ul className='flex pb-20'>
                    <li className='flex justify-center w-full'>
                      <button 
                        className='cursor-pointer bg-gold py-6 flex justify-center items-center rounded-md text-lg text-white uppercase lg:w-2/6 w-3/4'
                        type='submit'
                      >
                        {formLoader &&
                          <Image
                            alt='Carregando'
                            height={50}
                            quality={100}
                            src='/loader.svg'
                            width={50}
                          />
                        }
                        <span>Enviar</span>
                      </button>
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
