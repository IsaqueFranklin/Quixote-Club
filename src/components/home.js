import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Carousel } from 'react-bootstrap'
import {Helmet} from "react-helmet";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const seo = {
    title: 'Quixote Club',
    description: 'Do plebeu ao rei, essa é a Quixote Club, uma comunidade que vai te ensinar desde mentalidade e livros grandiosos até como fazer dinheiro do absoluto zero com a internet sendo jovem e perdido na vida.',
    url: '',
    image: 'https://images.unsplash.com/photo-1501761095094-94d36f57edbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
}

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
        <Helmet
            title={`${seo.title}`}
            meta={[
                { name: 'description', property: 'og:description', content: seo.description },
                { property: 'og:title', content: `${seo.title}` },
                { property: 'og:url', content: seo.url },
                { property: 'og:image', content: seo.image },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'twitter:image:src', content: seo.image },
                { property: 'twitter:title', content: `${seo.title}` },
                { property: 'twitter:description', content: seo.description },
        ]} />

<div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('https://images.unsplash.com/photo-1496150458551-140441714f2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-500 hover:ring-gray-800">
              Nós somos a melhor comunidade de empreendedores digitais.{' '}
              <a href="#" className="font-semibold text-blue">
                <span className="absolute inset-0" aria-hidden="true" />
                Saiba mais <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Quixote Club
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://pay.kiwify.com.br/FUsEqyr"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Fazer parte
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Saber mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="bg-white text-black py-8">
            <Container>
            <div className='lg:flex py-12 gap-x-8'>
                  <div className='py-8 lg:py-0 px-8 lg:px-0'>
                    <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded rounded-2xl" style={{alignItems: 'center'}} src="../img/cover3.jpg" alt="lâmpada" />
                  </div>
                  <div className='my-auto items-center mx-8'>
                    <h2 className="text-2xl lg:text-4xl font-semibold" style={{}}>Uma assinatura para o empreendedor digital</h2>
                        <p className="" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Do plebeu ao rei, essa é a Quixote Club, uma comunidade que vai te ensinar desde mentalidade e livros grandiosos até como fazer dinheiro do absoluto zero com a internet sendo jovem e perdido na vida.</p>
                        <br></br>
                    <a className='rounded-sm mt-8 px-8 py-3 text-sm shadow-sm font-semibold bg-[#08A142] text-white hover:bg-gray-800 hover:scale-110' href="https://pay.kiwify.com.br/FUsEqyr">Fazer parte agora</a>
                  </div>
            </div>
            </Container>      
        </div>

        <div className="bg-black text-white py-8">
            <Container className=''>
                <div className='lg:flex py-12 gap-x-8'>
                    <div className='my-auto items-center mx-8'>
                        <h4 className="font-semibold text-4xl mb-4" style={{}} align="left">Aprenda a criar um negócio online</h4>
                        <p className="mb-4">Tornar homens jovens comuns em grandes líderes e empreendedores inovadores, pensantes por conta própria.</p>
                        <p className="mb-8">A Quixote Club te ensina como pensar da forma que grandes sujeitos da humanidade pensavam e a sair do absoluto zero e encontrar uma área e um negócio que vai te gerar 10k de faturamento mensal.</p>
                        <a href="https://pay.kiwify.com.br/FUsEqyr"><button className="buttonSale2" style={{marginTop: '10px', marginBottom: '30px'}}>Assinar Quixote Club</button></a>
                    </div>
                    <div className='py-8 lg:py-0 px-8 lg:px-0'>
                        <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded rounded-2xl" style={{alignItems: 'center'}} src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lâmpada" />
                    </div>
                </div>
            </Container>
        </div>

        <div className='bg-black text-white'>
        <Container className="py-16">
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-8 text-center'>
                <div className='mx-auto my-auto justify-center items-center'>
                    <svg class="w-24 h-24 text-gray-800 dark:text-white mx-auto my-auto justify-center mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"/>
                    </svg>

                    <h2 className='text-lg lg:text-xl lg:font-semibold'>Grupo de networking</h2>
                    <p></p>
                </div>
                <div className='mx-auto my-auto justify-center items-center'>
                    <svg class="w-24 h-24 text-gray-800 dark:text-white mx-auto my-auto justify-center mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                    </svg>

                    <h2 className='text-lg lg:text-xl lg:font-semibold'>Aulas e tutoriais em vídeo</h2>
                    <p></p>
                </div>
                <div className='mx-auto my-auto justify-center items-center'>
                    <svg class="w-24 h-24 text-gray-800 dark:text-white mx-auto my-auto justify-center mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                    </svg>

                    <h2 className='text-lg lg:text-xl lg:font-semibold'>Ebooks, planilhas e outros.</h2>
                    <p></p>
                </div>
                <div className='mx-auto my-auto justify-center items-center'>
                    <svg class="w-24 h-24 text-gray-800 dark:text-white mx-auto my-auto justify-center mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>

                    <h2 className='text-lg lg:text-xl lg:font-semibold'>Assinatura gratuita de softwares.</h2>
                    <p></p>
                </div>
            </div>
        </Container>
    </div>

    <div className="bg-white text-black py-8">
            <Container>
            <div className='lg:flex py-12 gap-x-8'>
                  <div className='my-auto items-center mx-8'>
                    <h2 className="text-2xl lg:text-4xl font-semibold" style={{}}>Aprenda a fazer dinheiro online com os melhores</h2>
                        <p className="" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Do plebeu ao rei, essa é a Quixote Club, uma comunidade que vai te ensinar desde mentalidade e livros grandiosos até como fazer dinheiro do absoluto zero com a internet sendo jovem e perdido na vida.</p>
                        <br></br>
                  </div>
                  <div className='py-8 lg:py-0 px-8 lg:px-0'>
                    <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded rounded-2xl" style={{alignItems: 'center'}} src="https://images.unsplash.com/photo-1592495989226-03f88104f8cc?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lâmpada" />
                  </div>
            </div>
            </Container>      
        </div>

        <div className="bg-white text-black py-8">
            <Container>
            <div className='pb-12 mx-auto justify-center max-w-5xl'>
              
                  <div className='my-auto lg:text-center items-center mx-8'>
                    <h2 className="text-2xl lg:text-4xl font-semibold" style={{}}>Softwares desenvolvidos para ajudar o empreendedor digital.</h2>
                        <p className="" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Do plebeu ao rei, essa é a Quixote Club, uma comunidade que vai te ensinar desde mentalidade e livros grandiosos até como fazer dinheiro do absoluto zero com a internet sendo jovem e perdido na vida.</p>
                        <br></br>
                        <a href="https://pay.kiwify.com.br/FUsEqyr"><button className="buttonSale2" style={{marginTop: '10px', marginBottom: '30px'}}>Assinar Quixote Club</button></a>

                  </div>
            </div>
            </Container>      
        </div>


        <div className="services" id="#services">
            <Container style={{marginTop: '70px', marginBottom: '70px'}}>
                <h2 className="titulo1" style={{marginBottom: '30px'}}>Conteúdos Exclusivos da Quixote Club</h2>
                <br></br>
                <Row style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/1.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Curso completo do 0 aos 5k/Mês com dropshipping</p>
                    </Col>
                        
                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/2.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Curso o grande plano para sair do zero e ganhar dinheiro online</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/3.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Curso Facebook Ads 3.0</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/4.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Grupo de whatsapp e telegram exclusivo para membros.</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/5.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Lives toda semana para membros da comunidade</p>
                    </Col>

                    <Col style={{marginLeft: '30px', marginRight: '30px', marginTop: '30px'}}>
                        <img className="pics" style={{width: '30vh', height: '30vh', marginBottom: '30px', marginTop: '0px'}} src="../img/6.png" />
                        <p style={{marginLeft: '50px'}} className="paragraph3">Diversos outros cursos produzidos durante a validade da sua assinatura.</p>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <h1 className='titulo1'>Tudo isso por apenas R$29,90 por mês.</h1>
                <br></br>
                <a href="https://pay.kiwify.com.br/FUsEqyr"><button className="buttonSale2">Assinar Quixote Club</button></a>
            </Container>
        </div>
        
        <div className="about" id="#about">
            <Container>
                <Row style={{marginBottom: '100px', marginTop: '50px', alignItems: 'center'}}>
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/cover9.jpg" alt="lâmpada" />
                    </Col>
                    <Col>
                        <h2 className="titulo1" style={{}}>Aprenda a criar valor a ganhar dinheiro na internet</h2>
                        <p className="paragraph3" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Sem enrolação, sem falsas promessas, na Quixote Club nos ensinamos o que não ensinam em nenhum outro lugar: a realidade como ela é. Desenvolva habilidades e se torne um jovem empreendedor, faça parte do grupo de networking e conheça sócios.</p>
                        <br></br>
                        <a href="/about"><button className='buttonSale2' style={{margin: '12px'}}>Quixote Club</button></a>
                    </Col>
                </Row>
            </Container>
        </div>

        {/*<div className="frontbanne">
        <Carousel style={{height: "90vh", width: "100%"}}>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/cover12.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo12" align="center">Networking</h1>
                                <h4 align="center" className="paragraph">Quixote Club Limited</h4>
                                <br></br>
                                <a href="https://pay.kiwify.com.br/FUsEqyr"><button align="center" style={{margin: '25px'}}>Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/cover.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo12" align="center">Estilo de vida</h1>
                                <h4 align="center" className="paragraph">Quixote Club Limited</h4>
                                <br></br>
                                <a href="https://pay.kiwify.com.br/FUsEqyr"><button align="center" className="" style={{margin: '25px'}}>Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="bob2"
                            src="../img/cover13.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <div className="frontWords2">
                                <h1 className="titulo12" align="center">Negócio online</h1>
                                <h4 align="center" className="paragraph">Quixote Club Limited</h4>
                                <br></br>
                                <a href="https://pay.kiwify.com.br/FUsEqyr"><button align="center" className="" style={{margin: '25px'}}>Fazer parte</button></a>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>           
                </div>   */}        

        <div className="packages" id="#packages">
            <Container style={{marginBottom: '90px'}}>
                <Row style={{marginTop: '200px', marginBottom: '40px'}} className="mar">
                    <Col sm>
                        <h2 className="titulo1" style={{}}>Ainda tem dúvidas sobre a Quixote Club?</h2>
                        <br></br>
                        <br></br>
                        <p className="paragraph3" style={{textAlign: 'center', margin: '12px'}}>Entre em contato conosco para tirar todas as suas dúvidas e entender melhor ainda como funciona a Quixote Club e todos os benefícios que você pode ter ao fazer a assinatura do plano limited.</p>
                        <br></br>
                    </Col>
                </Row>
                <a href="https://api.whatsapp.com/send?phone=5531975382592&text=Ol%C3%A1%20Horizon%20Labs%2C%20eu%20quero%20contratar%20um%20pacote%20da%20Horizon%20Labs%20para%20minha%20empresa."><button className="buttonSale2" style={{margin: '12px'}}>Conversar com a Quixote Club</button></a>
            </Container>
        </div>
        </>
    )
}

export default Home;