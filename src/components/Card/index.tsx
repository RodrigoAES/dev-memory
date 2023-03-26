// Data
import { items } from '../../data/items';

// Types
import type { CardType } from '../../types/Card';

// Styles / Assets
import * as C from './styles';
import b7WebIcon from '../../svgs/b7.svg';

type Props = {
    card: CardType;
    click: () => void;
}

export function Card({ card, click }: Props) {
    return (
        <C.Container 
            blueBackground={card.match || card.shown}
            onClick={click}
        >
            {!card.match && !card.shown && 
                <C.Icon src={b7WebIcon} opacity={.1} alt="" />
            }
            {(card.match || card.shown) && card.index &&
                <C.Icon src={items[card.index].icon} alt="" />
            }
        </C.Container>
    )
}