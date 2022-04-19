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
      <div id='quemsomos'>
        <ContainerWithBackgroundImage uri='/bg-section-2.png'>
          <Container newClasses='pb-52 pt-20'>
            <h1 className='lg:col-span-8 col-span-4 lg:col-start-3 font-light text-3xl text-center text-white'>O seu escritório dentro de<br />um <span className='font-bold'>monumento</span> da cidade</h1>
            <div className='lg:col-span-8 col-span-4 lg:col-start-3 flex lg:flex-row flex-col lg:justify-between items-center mt-8 lg:space-y-0 space-y-8'>
              <div className='bg-dark-gray flex h-52 items-center justify-center rounded-full w-52'>
                <p className='text-xs text-center text-white px-8'>
                  Nosso modelo de negócio, <span className='font-semibold'>além de entregar um escritório privativo nas áreas de camarote do Estádio Nacional...</span>  
                </p>  
              </div>
              <div className='bg-soft-brown flex h-52 items-center justify-center rounded-full w-52'>
                <p className='text-xs text-center text-gray px-8'>
                  E a experiência de administração e <span className='font-semibold'>gestão de ativos imobiliários</span> da TRK imóveis
                </p>  
              </div>
              <div className='bg-white flex h-52 items-center justify-center rounded-full w-52'>
                <p className='text-xs text-center text-gray px-8'>
                  Contando ainda, com a expertise do Grupo R2, <span className='font-semibold'>que proporciona todo o suporte necessário na criação de experiências únicas</span> (para você, seus clientes e colaboradores)
                </p>  
              </div>
            </div>
          </Container>
        </ContainerWithBackgroundImage>
      </div>
      <ContainerWithBackgroundImage uri='/bg-section-3.png'>
        <div className='container hidden lg:grid lg:grid-cols-12 lg:gap-4 lg:mx-auto lg:py-32'>
          <div className='lg:col-span-2 lg:col-start-3 p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_1.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
            </p>
          </div>
          <div className='lg:col-span-2 p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_2.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              O <span className='font-semibold'>Estádio Nacional Mané Garrincha</span> é um dos maiores ícones da arquitetura brasileira e por si só, um cartão postal a céu aberto. Aqui, você viverá suas maiores e mais importantes experiências de trabalho e de relacionamento...
            </p>
          </div>
          <div className='lg:col-span-2 p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_3.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              <span className='font-semibold'>Além disso, você pode assistir a grandes shows e eventos esportivos do seu escritório com uma vista única para arena e com total privacidade.</span>
            </p>
          </div>
          <div className='lg:col-span-2 p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_4.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              Iremos te ajudar a realizar todas essas possibilidades com o <span className='font-semibold'>profissionalismo, capacidade de realização</span> e gestão que a sua empresa precisa.
            </p>
          </div>
        </div>
        <div className='flex lg:hidden hide-scroll-bar overflow-x-auto gap-6 snap-mandatory snap-x p-20'>
          <div className='p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_1.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              <span className='font-semibold'>Imagine ter o seu escritório privativo na localização mais privilegiada da cidade</span> seja por todas as possíveis vias de acesso, por estar no coração da cidade, ou por estar ao lado do setor hoteleiro, principais monumentos e restaurantes?
            </p>
          </div>
          <div className='p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_2.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              O <span className='font-semibold'>Estádio Nacional Mané Garrincha</span> é um dos maiores ícones da arquitetura brasileira e por si só, um cartão postal a céu aberto. Aqui, você viverá suas maiores e mais importantes experiências de trabalho e de relacionamento...
            </p>
          </div>
          <div className='p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_3.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              <span className='font-semibold'>Além disso, você pode assistir a grandes shows e eventos esportivos do seu escritório com uma vista única para arena e com total privacidade.</span>
            </p>
          </div>
          <div className='p-6 rounded-lg'>
            <div className='flex justify-center w-full'>
              <Image
                alt='Solaris - Comunicação Multimídia'
                height={203}
                quality={100}
                src='/comment_4.png'
                width={203}
              />
            </div>
            <p className='font-light mt-8 text-white w-52'>
              Iremos te ajudar a realizar todas essas possibilidades com o <span className='font-semibold'>profissionalismo, capacidade de realização</span> e gestão que a sua empresa precisa.
            </p>
          </div>                   
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-4.jpg'>
        <Container>
          <div className='lg:col-span-5 lg:col-start-3 col-span-4 pb-40 pt-64'>
            <p className='text-lg text-white lg:text-left text-center mt-24'>
              Temos como vizinhança o <span className='font-semibold'>Mané Mercado Gastrônomico</span>, que atua com 17 operações culinárias ativas de domingo a domingo, com menus assinados por renomados chefs de cozinha da cidade.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-section-5.png'>
        <Container>
          <div className='lg:col-span-5 col-span-4 lg:col-end-12 py-64'>
            <h1 className='text-lg lg:text-right text-center text-white'>É nisso que acreditamos...</h1>
            <p className='font-light mt-8 text-lg lg:text-right text-center text-white'>
              <span className='font-semibold'>Trabalhar sem sentir que está trabalhando</span> e, por consequência, <span className='font-semibold'>fechar os melhores negócios da sua vida.</span>
            </p>
            <p className='font-light text-lg lg:text-right text-center text-white'>
              Afinal de contas, toda grande decisão também envolve um pouco de emoção, <span className='font-semibold'>e se for pro seu cliente lembrar de você, que seja com as melhores emoções possíveis!</span>
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <div id='servicos'>
        <ContainerWithBackgroundImage uri='/bg-section-6.png'>
          <div className='flex flex-col py-44 space-y-8'>
            <Container>
              <h1 className='lg:col-span-3 col-span-4 lg:col-start-6 font-light text-3xl text-gold lg:text-left text-center uppercase'><span className='font-bold'>Nossos</span> Serviços</h1>
            </Container>
            <Container>
              <div className='lg:col-span-1 col-span-4 lg:col-start-4 flex lg:flex-row flex-col items-center'>
                <Image
                  alt='Serviço de portaria'
                  height={33}
                  quality={100}
                  src='/service-reception.svg'
                  width={35}
                />  
              </div>
              <div className='lg:col-span-5 col-span-4 flex items-center lg:text-left text-center'>
                <p className='text-gray w-full'>
                  Serviço de portaria e recepção com controle de acesso às áreas comuns.
                </p>
              </div>
            </Container>
            <Container>
              <div className='lg:col-span-1 col-span-4 lg:col-start-4 flex lg:flex-row flex-col items-center'>
                <Image
                  alt='Ponto de acesso'
                  height={29}
                  quality={100}
                  src='/service-wifi.svg'
                  width={39}
                />  
              </div>
              <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
                <p className='text-gray w-full'>
                  Ponto de acesso a serviço de internet básico.
                </p>
              </div>
            </Container>
            <Container>
              <div className='lg:col-span-1 col-span-4 lg:col-start-4 flex lg:flex-row flex-col items-center'>
                <Image
                  alt='Despesas acessórias'
                  height={38}
                  quality={100}
                  src='/service-taxes.svg'
                  width={30}
                />  
              </div>
              <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
                <p className='text-gray w-full'>
                  Despesas acessórias do espaço privativo, tais como: IPTU, energia elétrica e água/esgoto.
                </p>
              </div>
            </Container>
            <Container>
              <div className='lg:col-span-1 col-span-4 lg:col-start-4 flex lg:flex-row flex-col items-center'>
                <Image
                  alt='Serviço de conservação'
                  height={37}
                  quality={100}
                  src='/service-cleanup.svg'
                  width={33}
                />  
              </div>
              <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
                <p className='text-gray w-full'>
                  Serviço de conservação e limpeza das áreas comuns.
                </p>
              </div>
            </Container>
            <Container>
              <div className='lg:col-span-1 col-span-4 lg:col-start-4 flex lg:flex-row flex-col items-center'>
                <Image
                  alt='Serviço de portaria'
                  height={24}
                  quality={100}
                  src='/service-parking.svg'
                  width={37}
                />  
              </div>
              <div className='lg:col-span-6 col-span-4 flex items-center lg:text-left text-center'>
                <p className='text-gray w-full'>
                  Estacionamento privativo.
                </p>
              </div>
            </Container>
          </div>
        </ContainerWithBackgroundImage>
      </div>
      <div id='depoimentos'>
        <ContainerWithBackgroundImage uri='/bg-section-7.png'>
          <Container newClasses='py-20'>
            <h1 className='col-span-4 lg:col-start-5 font-light text-3xl text-center text-white uppercase'><span className='font-bold'>Depoimentos</span> de clientes ativos</h1>
          </Container>
          <div className='flex lg:hidden gap-6 hide-scroll-bar overflow-x-auto pb-20 px-20 snap-mandatory snap-x'>
            <div className='flex flex-col items-start p-4 rounded space-y-4'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  height={135}
                  quality={100}
                  src='/solaris.png'
                  width={135}
                />
              </div>
              <p className='font-light text-white w-60'>
                O ambiente do Esfera nos proporciona um <span className='font-semibold'>atendimento único com experiências e possibilidades de negócios</span> que não encontramos em outros centros empresariais de Brasília.
              </p>
              <p className='font-semibold text-white'>Solaris</p>
            </div>
            <div className='flex flex-col items-start p-4 rounded space-y-4'>
              <div className='flex items justify-center w-full'>
                <Image
                  alt='Lotus'
                  height={135}
                  quality={100}
                  src='/lotus.png'
                  width={135}
                />
              </div>
              <p className='font-light text-white w-56'>
                A Esfera passa uma <span className='font-semibold'>experiência incrível aos nossos funcionários e clientes</span>, além de oferecer um atendimento especializado, rápido e muito profissional.
              </p>
              <p className='font-semibold text-white'>Lotus</p>
            </div>
            <div className='flex flex-col items-start p-4 rounded space-y-4'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='B2'
                  height={135}
                  quality={100}
                  src='/b2.png'
                  width={135}
                />
              </div>
              <p className='font-light text-white w-56'>
                O <span className='font-semibold'>networking e a estrutura</span> foram os principais motivos que nos fizeram trazer o escritório para a Esfera. Todo o projeto apresentado comprova que é um ambiente para negócios muito excepcional!
              </p>
              <p className='font-semibold text-white'>B2</p>
            </div>
            <div className='flex flex-col items-start p-4 rounded space-y-4'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='HLA'
                  height={135}
                  quality={100}
                  src='/hla.png'
                  width={135}
                />
              </div>
              <p className='font-light text-white w-56'>
                Além do <span className='font-semibold'>atendimento extremamente eficiente que recebemos desde o início,</span> o networking garantido pela Esfera foi um dos benefícios que mais nos chamou a atenção.
              </p>
              <p className='font-semibold text-white'>HLA</p>
            </div>
          </div>
          <div className='container hidden lg:grid lg:grid-cols-12 lg:gap-4 lg:mx-auto lg:pb-20 lg:px-4'>
            <div className='lg:col-span-2 lg:col-start-3 col-span-4 flex flex-col items-start p-4 rounded space-y-4 text-xs'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='Solaris - Comunicação Multimídia'
                  height={135}
                  quality={100}
                  src='/solaris.png'
                  width={135}
                />
              </div>
              <p className='font-light h-32 text-white'>
                O ambiente do Esfera nos proporciona um <span className='font-semibold'>atendimento único com experiências e possibilidades de negócios</span> que não encontramos em outros centros empresariais de Brasília.
              </p>
              <p className='font-semibold text-white'>Solaris</p>
            </div>
            <div className='lg:col-span-2 col-span-4 flex flex-col items-start p-4 rounded space-y-4 text-xs'>
              <div className='flex items justify-center w-full'>
                <Image
                  alt='Lotus'
                  height={135}
                  quality={100}
                  src='/lotus.png'
                  width={135}
                />
              </div>
              <p className='font-light h-32 text-white'>
                A Esfera passa uma <span className='font-semibold'>experiência incrível aos nossos funcionários e clientes</span>, além de oferecer um atendimento especializado, rápido e muito profissional.
              </p>
              <p className='font-semibold text-white'>Lotus</p>
            </div>
            <div className='lg:col-span-2 col-span-4 flex flex-col items-start p-4 rounded space-y-4 text-xs'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='B2'
                  height={135}
                  quality={100}
                  src='/b2.png'
                  width={135}
                />
              </div>
              <p className='font-light h-32 text-white'>
                O <span className='font-semibold'>networking e a estrutura</span> foram os principais motivos que nos fizeram trazer o escritório para a Esfera. Todo o projeto apresentado comprova que é um ambiente para negócios muito excepcional!
              </p>
              <p className='font-semibold text-white'>B2</p>
            </div>
            <div className='lg:col-span-2 col-span-4 flex flex-col items-start p-4 rounded space-y-4 text-xs'>
              <div className='flex justify-center w-full'>
                <Image
                  alt='HLA'
                  height={135}
                  quality={100}
                  src='/hla.png'
                  width={135}
                />
              </div>
              <p className='font-light h-32 text-white'>
                Além do <span className='font-semibold'>atendimento extremamente eficiente que recebemos desde o início,</span> o networking garantido pela Esfera foi um dos benefícios que mais nos chamou a atenção.
              </p>
              <p className='font-semibold text-white'>HLA</p>
            </div>
          </div>
        </ContainerWithBackgroundImage>
      </div>
      <div id='contato'>
        <ContainerWithBackgroundImage uri='/bg-section-8.png'>
          <Container newClasses='mb-8 pt-20'>
            <h1 className='lg:col-span-6 col-span-4 lg:col-start-4 font-bold text-3xl text-center text-gray uppercase'>Vamos criar negócios,<br /><span className='text-soft-gray'>conexões e experiências?</span></h1>
          </Container>
          <Container>
            <div className='lg:col-span-6 col-span-4 lg:col-start-4'>
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
                    <ul className='flex mb-4'>
                      <li className='w-full'>
                        {errors.nome && <p className='text-soft-gray text-xs'>{errors.nome}</p>}
                        <Field
                          className={`${errors.nome ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray px-6 py-4 text-xs text-dark-blue w-full`}
                          name='nome'
                          placeholder='NOME COMPLETO:'
                          type='text'
                          value={values.nome}
                        />
                      </li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row mb-4'>
                      <li className='lg:mr-6 lg:w-1/2 w-full mb-12 lg:mb-0'>
                        {errors.telefone && <p className='text-soft-gray text-xs'>{errors.telefone}</p>}
                        <Field 
                          className={`${errors.telefone ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray px-6 py-4 text-xs text-dark-blue w-full`} 
                          name='telefone' 
                          placeholder='TELEFONE PARA CONTATO:' 
                          type='text' 
                          value={maskPhoneNumber(values.telefone)} 
                        />
                      </li>
                      <li className='lg:ml-6 lg:w-1/2 w-full'>
                        {errors.email && <p className='text-soft-gray text-xs'>{errors.email}</p>}
                        <Field 
                          className={`${errors.email ? 'bg-baby-gray' : 'bg-white'} font-medium placeholder:text-soft-gray px-6 py-4 text-xs text-dark-blue w-full`} 
                          name='email' 
                          placeholder='E-MAIL:' 
                          type='email' 
                          value={values.email} 
                        />
                      </li>
                    </ul>
                    <ul className='flex mb-4'>
                      <li className='w-full'>
                        {errors.mensagem && <p className='text-soft-gray text-xs'>{errors.mensagem}</p>}
                        <Field 
                          as='textarea' 
                          className={`${errors.mensagem ? 'bg-baby-gray' : 'bg-white'} font-medium h-56 placeholder:text-soft-gray px-6 py-4 text-xs text-dark-blue w-full`} 
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
                          className='cursor-pointer bg-gold py-4 flex justify-center items-center rounded-md text-white uppercase lg:w-2/6 w-3/4'
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
      </div>
      <Footer />
    </>
  )
}
