import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'

import { getDatiArticoli } from '/lib/articoli'

// I punti di forza
const features = [
  {
    title: "Progetto educativo",
    imageUrl: "https://www.donboscosandona.it/img/ck/77e8fb59e0a23151c46936b674e3c9620c64ff3a.png",
    description: "Un progetto chiaro e affidabile per far crescere e diventare uomini. "
  },
  {
    title: "Didattica attiva",
    imageUrl: "https://www.donboscosandona.it/img/ck/c46d55012c575d41c5a23c8fa606cb0a5f67337f.png",
    description: "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti."
  },
  {
    title: "Laboratori",
    imageUrl: "https://www.donboscosandona.it/img/ck/1ecf12eb29bb3b57b1629de8376a3288d31c0f4a.png",
    description: "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro."
  },
  {
    title: "Servizi al lavoro",
    imageUrl: "https://www.donboscosandona.it/img/ck/d7e68e6fd443ca3d7573c81ae780ff8e6783ad99.png",
    description: "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore."
  }
]


// slides per il carousel
let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine: '/images/news/virtual-tour.jpeg'
  },
  {
    titolo: 'Progetto GIVE',
    descrizione: "Il 15 e 16 maggio il nostro Centro ospiterà l'edizione 2023 di GIVE (GROHE Installer Vocational Training and Education), il programma di formazione dedicato ai giovani installatori idraulici: un ambiente dedicato al training pratico proposto dai professionisti di GROHE.",
    immagine: '/images/news/2023/grohe.jpeg'
  },
  {
    titolo: 'Concorso nazionale settore elettrico',
    descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: '/images/news/2023/concorso-nazionale-elettrico.jpg'
  },
]

let slides2 = [
  {
    titolo: 'Acqua della settimana',
    descrizione: 'Argomento nel buongiorno della settimana',
    immagine: '/images/news/2023/acqua-della-sett.jpg'
  },
  {
    titolo: 'Gita a Torino delle classi prime e seconde',
    descrizione: "In questa gita si visiterà tutta la città di Torino e l'oratorio Don Bosco",
    immagine: '/images/news/2023/gita-torino.png'
  },
  {
    titolo: 'Gita scolastica a Roma',
    descrizione: "Con i nostri ragazzi più grandi visiteremo alcuni importanti posti nella magnifica città di Roma",
    immagine: '/images/news/2023/gita-roma.jpg'
  },
]

// Il nostro team
let members = [
  {
    name: "don Nicola Munari",
    role: "DIRETTORE / CATECHISTA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://media.gamerbrain.net/wp-content/uploads/2019/11/27094442/anima.jpg",
    email: "c.coso@donboscosandona.it",
    phone: '0421 3388949874950',
  },
  {
    name: "Alessandro Cappelletto",
    role: "PRESIDE",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://preview.redd.it/6ymh125pcra71.jpg?auto=webp&s=d0ec0c4112ca7a2a8f8228be3dfda0645091ac02",
    email: "c.ciaoooo@donboscosandona.it",
    phone: '123456',
  },
  {
    name: "Alessandro Ferro",
    role: "VICE-PRESIDE / TUTOR DIGITALE",
    description1: "Vicepreside, gestione organizzazione scolastica e pastorale, insegnamento area scientifica ",
    imageUrl: "/images/team/A_Ferro.png",

    email: "a.ferro@donboscosandona.it",
    phone: '0421 111 222',
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: "RESPONSABILE DELLA DISCIPLINA",
    description1: "Gestione disciplina,organizzazione scolastica e insegnamento are cultura",
    imageUrl: "/images/team/A_dambrosio.png",
    email: "l.hdggfd@donboscosandona.it",
    phone: '12365598445',
  },
  {
    name: "Roberta Toffoletto e Alessia Zanin",
    role: "SEGRETERIA DIDATTICA",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "/images/team/segretarie.png",
    email: "c.cosocoso@donboscosandona.it",
    phone: '0421 123456338 950',
  },
  {
    name: "Andrea Pasqualetto",
    role: "ORIENTAMENTO IN ENTRATA / SOSTEGNO",
    description1: "Orientatore tutor, seguo la promozione e l’entrata dalla terza media alla classe prima superiore e monitoraggio allivi che incontrano difficoltà",
    imageUrl: "/images/team/Pasqualetto.png",
    email: "c.cosinocoso@donboscosandona.it",
    phone: '123456 338 950',
  },
  {
    name: "Francesco Cicogna",
    role: "COORDINATORE STAGE / CORSI PER ADULTI",
    description: "gestione delle attività con le aziende “stage ” e formazione continua si",
    
    imageUrl: "/images/team/cicogna.png",
    email: "hhh.coso@donboscosandona.it",
    phone: '0421 338 950',
  },
  {
    name: "Martina Dianese",
    role: "ORIENTAMENTO IN USCITA / SERVIZI AL LAVORO",
    description1: "Orientamento e acompagniamento individuale, sportellò servizio al lavoro",
    imageUrl: "/images/team/martina.png",
    email: "c.coso@donboscosandona.it",
    phone: '0421 338 950',
  },
]

let settori = [
  {
    title: " OPEN 1 GIORNO",
    category: "Massima flessibilità : acquista ed entra Dreams-Island",
    description: "Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
    immagineUrl: "https://www.acquaticapark.it/wp-content/uploads/2017/04/Foto-Acquatica-2016-Videoclip-044_foam-600x403.jpg",
    url: "/elettrico"
  },
  {
    title: "OPEN 2 GIORNI ",
    category: "Raddoppia il divertimento e risparmia ! ",
    description: "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl: "https://www.campingsalon.com/wp-content/uploads/2017/05/la-marina-3.jpg",
    url: "/energia"
  },
  {
    title: "SPECIAL LIMITED",
    category: "Miglior prezzo garantito ! ",
    description: "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl: "https://www.camping-bellaitalia.it/inc/scripts/source/www.camping-bellaitalia.it/crp767x450-sf-acquapark.jpg?v=1681827398",
    url: "/informatico"
  },
  
]

let postInEvidenza = {
  titolo: 'Le folli notti di Bilal',
  descrizione: 'Il dott. Bilal, noto migliardario pieno di schèi, passa le sue notti tra belle ragazze e partite a poker. Come inviati di donboscosandona siamo riusciti ad accedere a questo mondo esclusivo per raccontarvelo in prima persona...',
  immagineUrl: 'https://media.istockphoto.com/id/522728130/it/foto/amici-divertirsi-giocando-a-poker.jpg?s=612x612&w=is&k=20&c=w2_p0SHrR_-cmURmZY9-dHXu3-qqVqN9QkdiZrgJpfc=',
  testoimmagineUrl: 'Bilal seduto su un divanetto in mezzo a due tipe.',
  testoUrl: 'Continua a leggere e scopri la cosa pazzesca che hanno fatto...',
}

const testimonials = [
  {
    name: "Roberta Carletti",
    imageUrl: "https://st.depositphotos.com/1000686/3738/i/950/depositphotos_37383675-stock-photo-portrait-of-a-young-beautiful.jpg",
    text: "Siamo appena tornati da Dreams Island e abbiamo trascorso una giornata fantastica! Il parco acquatico è molto ben tenuto e pulito, con una vasta gamma di scivoli e giochi acquatici per tutte le età. Il personale è stato molto gentile e disponibile, rendendo l'esperienza ancora più piacevole. Consiglio vivamente questo parco acquatico a chiunque cerchi una giornata divertente sotto il sole!",
    social: " Recensioni Google"
  },
  {
    imageUrl: "https://archzine.it/wp-content/uploads/2018/02/idea-tagli-uomo-corto-lati-ciuffo-lungo-camicia-bianca-giacca-scura-orologio.jpg",
    name: "Mirco Dalla",
    text: "Ho portato la mia famiglia a Dreams Island per il compleanno di mio figlio e siamo stati tutti entusiasti. Ci sono molti scivoli divertenti a cui siamo riusciti a saltare la fila grazie alla prenotazione anticipata. Anche i servizi del parco erano eccellenti, con spogliatoi puliti e grandi collocazioni per le borse. Il cibo disponibile era anche buono e abbiamo apprezzato molto la vasta selezione. Dreams Island è sicuramente un parco acquatico da visitare quando si è nella zona.",
    social: "Recensioni Google"
  },
  {
    imageUrl: "https://i.ibb.co/dpQrpNt/img3.jpg",
    name: "Pino West",
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: "@PINOWEST"
  },
]

let certifications = [
  {
    logoUrl: '/images/certification/iso.png',
    text1: 'ISO 9001:2015',
    text2: 'Reg. n. 2593-A - Settore EA: 37'
  },
  {
    logoUrl: '/images/certification/kiwa.png',
    text1: 'Progettazione ed erogazione di attività formative e di orientamento'
  },
  {
    logoUrl: '/images/certification/knx.png',
    text1: 'Authorised Training Center'
  },
  {
    logoUrl: '/images/certification/regioneveneto.png',
    text1: 'Cod. A033 - Formazione Iniziale,',
    text2: 'Superiore e Orientamento'
  },
]

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <LandingHero
        opacity={0.5}
        title="Dreams Island"
        description="Dalle giostre emozionanti agli spettacoli accattivanti, il nostro parco divertimenti è il luogo perfetto per realizzare i tuoi sogni. 🎢🎡

        Vieni a esplorare Ons Island e preparati per una giornata indimenticabile di divertimento e avventura. 🤩⁣⁣
        
        Creiamo ricordi magici insieme a #DreamsIsland. Tagga un amico e inizia a pianificare il tuo prossimo viaggio oggi stesso!
        
        "
        imageUrl="https://static.secureholiday.net/static/CMS/photos/000/023/000023989.jpg?format=webp"
      />
      <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <Grid container spacing={4}>
          {
            datiArticoli.map(
              (post) => (
                <Post post={post} />
              )
            )
          }
        </Grid>
      </Container>
      <Carousel slides={slides} />
      <Products
        title="OFFERTE DELLA SETTIMANA"
        description="Le nostre offerte della settimana per puntare al risparmio !"
        cardWidth={4}
        products={settori}
      />
      <Carousel slides={slides2} />
      <Features
        title="I nostri punti di forza"
        description="Scopri perché il CFP DON BOSCO è davvero la scuola che fa al caso tuo!"
        features={features}
        cardWidth={3}
      />
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl="https://images8.alphacoders.com/948/948649.jpg"
      />
      <Team
        title="Contatti"
        description="Formatori che ti aiutano a crescere con il cuore di don Bosco"
        members={members}
        cardWidth={3}
      />
      <Maps
        maxWidth='100%'
        maxHeight='550px'
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.05343317009!2d12.5710658!3d45.6301996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956fe076b4157%3A0x29fb231d47465883!2sCnos%20Fap%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1680507660807!5m2!1sit!2sit"
      />
      <Certifications
        cardWidth={3}
        certifications={certifications}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  return {
    props: {
      datiArticoli,
    },
  }
}