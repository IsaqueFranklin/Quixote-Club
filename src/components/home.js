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

        <div className="bg-white text-black">
            <Container>
            <div className='lg:flex py-12 gap-x-8'>
                  <div className='py-8 lg:py-0 px-8 lg:px-0'>
                    <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 rounded rounded-2xl" style={{alignItems: 'center'}} src="../img/cover3.jpg" alt="lâmpada" />
                  </div>
                  <div className='my-auto items-center mx-8'>
                    <h2 className="text-2xl lg:text-4xl font-semibold" style={{}}>Uma assinatura para o empreendedor digital</h2>
                        <p className="" style={{marginTop: '20px', marginBottom: '0px', textAlign: 'left'}}>Do plebeu ao rei, essa é a Quixote Club, uma comunidade que vai te ensinar desde mentalidade e livros grandiosos até como fazer dinheiro do absoluto zero com a internet sendo jovem e perdido na vida.</p>
                        <br></br>
                    <a className='rounded-md px-3.5 py-2.5 text-sm shadow-sm font-semibold bg-[#08A142] text-white hover:bg-gray-800 hover:scale-110' href="https://pay.kiwify.com.br/FUsEqyr">Fazer parte agora</a>
                  </div>
            </div>
            </Container>      
        </div>

        <div className="pitch" id="#pitch">
            <Container style={{alignItems: 'center'}}>
                <Row style={{marginTop: '50px', marginBottom: '30px'}} className="">
                    <Col>
                    <br></br>
                    <h4 className="titulo3" style={{}} align="left">Aprenda a criar um negócio online</h4>
                    <br></br>
                    <p className="paragraph3">Tornar homens jovens comuns em grandes líderes e empreendedores inovadores, pensantes por conta própria.</p>
                    <p className="paragraph3">A Quixote Club te ensina como pensar da forma que grandes sujeitos da humanidade pensavam e a sair do absoluto zero e encontrar uma área e um negócio que vai te gerar 10k de faturamento mensal.</p>
                    <p className="paragraph3"></p>
                    <br></br>
                    <a href="https://pay.kiwify.com.br/FUsEqyr"><button className="buttonSale2" style={{marginTop: '10px', marginBottom: '30px'}}>Assinar Quixote Club</button></a>
                    </Col>
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/cover.jpg" alt="lâmpada" />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="bg-white text-gray-800">
            <Container style={{alignItems: 'center'}}>
                <Row style={{marginTop: '50px', marginBottom: '30px'}} className="">
                    <Col>
                    <br></br>
                    <h4 className="" style={{}} align="left">Aprenda a criar um negócio online</h4>
                    <br></br>
                    <p className="">Tornar homens jovens comuns em grandes líderes e empreendedores inovadores, pensantes por conta própria.</p>
                    <p className="">A Quixote Club te ensina como pensar da forma que grandes sujeitos da humanidade pensavam e a sair do absoluto zero e encontrar uma área e um negócio que vai te gerar 10k de faturamento mensal.</p>
                    <p className=""></p>
                    <br></br>
                    <a href="https://pay.kiwify.com.br/FUsEqyr"><button className="buttonSale2" style={{marginTop: '10px', marginBottom: '30px'}}>Assinar Quixote Club</button></a>
                    </Col>
                    <Col>
                        <img className="pics pointo" style={{alignItems: 'center'}} src="../img/cover.jpg" alt="lâmpada" />
                    </Col>
                </Row>
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

        <div className="frontbanne">
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
        </div>           

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