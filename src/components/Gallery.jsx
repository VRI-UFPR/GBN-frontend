import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'
import imagem1 from '../assets/1.png'
import imagem2 from '../assets/2.png'
import imagem3 from '../assets/3.png'
import imagem4 from '../assets/4.png'
import imagem5 from '../assets/5.png'
import imagem6 from '../assets/6.png'
import imagem7 from '../assets/7.png'
import imagem8 from '../assets/8.png'

const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'imagem 1',
            url: imagem1
        },
        {
            alt: 'imagem 2',
            url: imagem2
        },
        {
            alt: "imagem 3",
            url: imagem3
        },
        {
            alt: "imagem 4",
            url: imagem4
        },
        {
            alt: 'imagem 5',
            url: imagem5
        },
        {
            alt: 'imagem 6',
            url: imagem6
        },
        {
            alt: "imagem 7",
            url: imagem7
        },
        {
            alt: "imagem 8",
            url: imagem8
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            paddingTop: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Tutorial'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Como funciona a Leseolympiade
                </Typography>
                <Paragraph text={
                    'Autentifique-se com o e-mail que usou para cadastrar-se no início da Olimpíada e inicie o desafio escolhendo sua língua de preferência (1).\
                    Corrija a transcrição do conteúdo do jornal.\
                    Para isso, você pode utilizar o teclado para digitar caracteres especiais (2) e conferir o Alfabeto das Fontes Góticas, se escolheu alemão, caso tenha alguma dúvida (3). Há uns poucos textos nos alfabetos tipicamente alemães, mas eles conferem pontos a mais para você vencer!\
                    Caso queira realizar o desafio com outra imagem, clique em TROCAR (4).\
                    Assim que finalizar a transcrição, clique em PROSSEGUIR (5).\
                    Você sempre pode retornar a sua transcrição clicando em VOLTAR (6).\
                    Realize a interpretação do texto que você acabou de transcrever e pronto! Ao clicar em ENVIAR você finaliza uma tarefa da Olimpíada e seus pontos vão sendo registrados (7)!\
                    Você pode realizar quantas tarefas quiser e então retornar para as demais páginas do site (8).\
                    Retorne na Leseolympiade sempre que quiser continuar transcrevendo e interpretando jornais para ganhar pontos até a data limite da Olimpíada, dia 12 de dezembro de 2024, quinta-feira, às 22h. Ou até você ter realizado todas as tarefas disponíveis.\
                    Não esqueça de sempre se registrar com o mesmo e-mail, para todas as participações somarem pontos em sua conta.\
                    Sucesso, bom desempenho! E boa sorte!\
                    '
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'justify'}
                
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 450,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={140}
                dynamicHeight={false}
                centerMode={false}
                showArrows={true}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery