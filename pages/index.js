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
import Paragraph from '@/components/Paragraph'

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
    titolo: 'Il nostro menu',
    descrizione: 'Il nostro fantastico menu 100% con ingredienti spagnoli ',
    immagine: 'https://static.vecteezy.com/ti/vettori-gratis/p3/13612649-spagnolo-cibo-cucina-menu-ristorante-con-vario-di-tradizionale-piatto-ricetta-su-piatto-cartone-animato-mano-disegnato-modelli-illustrazione-vettoriale.jpg'
  },
  {
    titolo: 'Attrazione del mese ',
    descrizione: "Vieni a provare la nuovissima  migliore attrazione del mese ",
    immagine: 'https://www.cinematographe.it/wp-content/uploads/2022/06/Divertical_1_Mirabilandia.jpg'
  },
  {
    titolo: 'Evento della settimana',
    descrizione: "Il nostro fantastico evento",
    immagine: 'https://www.riminidamare.it/it/blog/wp-content/uploads/BeachVillage.jpg'
  },
]



// Il nostro team
let members = [
 
  {
    name: "Finotto Alessio",
    role: "DIRETTORE",
    description: "And I love you like Kanye",
    description1: "loves Kanye. We need to restart the human foundation",
    imageUrl: "https://www.essenzashop.it/wp-content/uploads/2022/01/A1-4.jpg",
    email: "afinottoparco@gmail.com",
    phone: '+39 387 2346 446',
  },
  {
    name: "Thiago Alves Rodrigues",
    role: "VICE-DIRETTORE",
    description1: "Sono il vice direttore di questo parco acquatico e ogni anno ci da un sacco di soddisfazioni ",
    imageUrl: "https://www.ginobaudino.it/abbigliamento/wp-content/uploads/2017/11/Digel-Smoking-Torino.jpg",
    email: "alvesrodriguesparco@gmail.com",
    phone: '+39 569 468 473',
  },
  {
    name: "Enrico dalla Bella",
    role: "SEGRETARIO",
    description: "Sono il segretario di questo fantastico parco ",
    imageUrl: "https://www.dhresource.com/0x0/f2/albu/g9/M00/BC/8F/rBVaVV62AzyAUyw5AADalmFo_jg898.jpg",
    email: "enricodallaparco@gmail.com",
    phone: '0421 338 950',
  },
  {
    name: "Manuel Trevisan",
    role: "GESTIONE ANIMATORI",
    description1: "io gestisco gli animatori di questo fantastico parco",
    imageUrl: "https://www.dailyman.it/wp-content/uploads/2019/02/Tendenze-moda-costumi-da-bagno-fantasia-militare.jpg",
    email: "manueltreviparco@gmail.com",
    phone: '0421 338 950',
  },
]

let settori = [
  {
    title: " OPEN 1 GIORNO",
    category: "Massima flessibilità : acquista ed entra Dreams-Island",
    description: "Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
    immagineUrl: "https://www.acquaticapark.it/wp-content/uploads/2017/04/Foto-Acquatica-2016-Videoclip-044_foam-600x403.jpg",
    
  },
  {
    title: "OPEN 2 GIORNI ",
    category: "Raddoppia il divertimento e risparmia ! ",
    description: "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl: "https://www.campingsalon.com/wp-content/uploads/2017/05/la-marina-3.jpg",
   
  },
  {
    title: "SPECIAL LIMITED",
    category: "Miglior prezzo garantito ! ",
    description: "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl: "https://www.camping-bellaitalia.it/inc/scripts/source/www.camping-bellaitalia.it/crp767x450-sf-acquapark.jpg?v=1681827398",
   
  },
  
]



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
    imageUrl: "https://static8.depositphotos.com/1593170/1055/i/450/depositphotos_10557263-stock-photo-young-beautiful-girl.jpg",
    name: "Aurora rodrigues ",
    text: "Dreams Island è uno dei migliori parchi acquatici in cui sono stato! L'atmosfera è divertente e rilassante allo stesso tempo, con un'ampia varietà di scivoli, piscine e zone relax. Abbiamo particolarmente apprezzato la zona per bambini, che è stata ben progettata e sicura per l'utilizzo dei nostri figli. Il personale era anche molto cordiale e accogliente. Non vediamo l'ora di tornare! ",
    social: "Recensioni Google "
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
        
        Creiamo ricordi magici insieme a #DreamsIsland.________ COMPONENTI DEL GRUPPO: Alves Thiago; Sara Di Dio, Manuel Trevisan; Dalla Bella Enrico, Finotto Alessio. 
        
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
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23578.915703478204!2d-8.9342121!3d42.3773818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f44afad207c8b%3A0x299878e0962187e5!2sOns%20Island!5e0!3m2!1sen!2sit!4v1682073738353!5m2!1sen!2si"
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