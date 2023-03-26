// React tools
import { useEffect, useState } from 'react';

// Helpers
import { formatTimeElapsed } from './helpers/FormatTimeElapsed';

// Components
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { Card } from './components/Card';

// Data
import { items } from './data/items';

// Types
import type { CardType } from './types/Card';

// Styles / Assets
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg';

function App() {
    // Data States
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [cards, setCards] = useState<CardType[]>([]);

    // Created Efects 
    useEffect(() => reset(), []);

    // Watch Efects
    useEffect(() => {
        const interval = setInterval(() => { if(playing) setTimeElapsed(timeElapsed + 1) }, 1000);
        return () => clearInterval(interval);
    }, [playing, timeElapsed]);

    useEffect(() => {
        if(shownCount === 2) {
            const opened = cards.filter(card => card.shown)
            console.log(opened);
            if(opened.length === 2) {
                if(opened[0].index === opened[1].index) {
                    for(let i in cards) {
                        if(cards[i].shown) {
                            cards[i].shown = false;
                            cards[i].match = true;
                        }
                    }

                    setCards(cards);
                    setShownCount(0);

                } else {
                    setTimeout(() => {
                        for(let i in cards) {
                            if(cards[i].shown) {
                                cards[i].shown = false; 
                            }
                        }

                        setCards(cards);
                        setShownCount(0);
                    }, 1000)
                    
                } 
            }
            setMoveCount(moveCount + 1);
        }
    }, [shownCount, cards]);

    useEffect(() => {
        if(moveCount > 0 && cards.every(card => card.match)) setPlaying(false)
    }, [moveCount, cards])

    // Methods
    const reset = () => {
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        let newCards: CardType[] = []; 
        for(let i = 0; i < (items.length * 2); i++) 
            newCards.push({
                index: null, shown: false, match: false,
            });

        for(let w = 0; w < 2; w++) {
            for(let i = 0; i < items.length; i++) {
                console.log(i)
                let pos = Math.floor(Math.random() * (items.length * 2));
                while(newCards[pos].index !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                newCards[pos].index = i;
                console.log(newCards[pos]);
            }
        }

        setCards(newCards);
        setPlaying(true);
    };

    const handleCardClick = (index: number) => {
        if(playing && shownCount < 2) {
            if(!cards[index].match && !cards[index].shown) {
                cards[index].shown = true;
                console.log(shownCount)
                setShownCount(shownCount + 1);
                console.log(shownCount)
                setCards(cards);
            }

        }
    }

    return (
        <C.Container>
            <C.Info>
                <C.LogoLink href="">
                    <img src={logoImage} width={200} alt="" />
                </C.LogoLink>
                
                <C.InfoArea>
                    <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
                    <InfoItem label="Movimentos" value={moveCount.toString()} />
                </C.InfoArea>

                <Button label='Reiniciar' icon={restartIcon} onClick={reset} />
            </C.Info>
            <C.GridArea>
                <C.Grid>
                    {
                        cards.map((card, index) => 
                            <Card 
                                key={index}
                                card={card}
                                click={ () => handleCardClick(index) }
                            />
                        )
                    }
                </C.Grid>
            </C.GridArea>
        </C.Container>
    )
}

export default App;