import { reactive } from 'vue';

const cardsDate = reactive({

    personaggi: [
        //vuoto, i dati li inserisco al mounted di App.vue grazie ad axios
        {
            name: "\"A\" Cell Breeding Device",
            type: "Spell Card",
            frameType: "spell",
            desc: "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
            race: "Continuous",
            archetype: "Alien",
            ygoprodeck_url: "https://ygoprodeck.com/card/a-cell-breeding-device-9766",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/34541863.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/34541863.jpg",
                    },
                ],
        },
        {
            name: '"A" Cell Incubator',
            type: "Spell Card",
            frameType: "spell",
            desc: "Each time an A-Counter(s) is removed from play by a card effect, place 1 A-Counter on this card. When this card is destroyed, distribute the A-Counters on this card among face-up monsters.",
            race: "Continuous",
            archetype: "Alien",
            ygoprodeck_url: "https://ygoprodeck.com/card/a-cell-incubator-8856",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/64163367.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/64163367.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/64163367.jpg",
                    },
                ],
        },
        {
            name: '"A" Cell Recombination Device',
            type: "Spell Card",
            frameType: "spell",
            desc: 'Target 1 face-up monster on the field; send 1 "Alien" monster from your Deck to the Graveyard, and if you do, place A-Counters on that monster equal to the Level of the sent monster. During your Main Phase, except the turn this card was sent to the Graveyard: You can banish this card from your Graveyard; add 1 "Alien" monster from your Deck to your hand.',
            race: "Quick-Play",
            archetype: "Alien",
            ygoprodeck_url: "https://ygoprodeck.com/card/a-cell-recombination-device-7614",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/91231901.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/91231901.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/91231901.jpg",
                    },
                ],
        },
        {
            name: '"A" Cell Scatter Burst',
            type: "Spell Card",
            frameType: "spell",
            desc: 'Select 1 face-up "Alien" monster you control. Destroy it and distribute new A-Counters equal to its Level among your opponent\'s face-up monsters.',
            race: "Quick-Play",
            archetype: "Alien",
            ygoprodeck_url: "https://ygoprodeck.com/card/a-cell-scatter-burst-9737",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/73262676.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/73262676.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/73262676.jpg",
                    },
                ],
        },
        {
            name: '"Infernoble Arms - Almace"',
            type: "Spell Card",
            frameType: "spell",
            desc: 'While this card is equipped to a monster: You can equip 1 "Infernoble Arms" Equip Spell from your Deck or GY, except ""Infernoble Arms - Almace"", to 1 appropriate monster you control, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 of your FIRE Warrior monsters that is banished or in your GY; add it to your hand. You can only use 1 ""Infernoble Arms - Almace"" effect per turn, and only once that turn.',
            race: "Equip",
            archetype: "Infernoble Arms",
            ygoprodeck_url: "https://ygoprodeck.com/card/infernoble-arms-almace-13794",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/98319530.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/98319530.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/98319530.jpg",
                    },
                ],
        },
        {
            name: '"Infernoble Arms - Durendal"',
            type: "Spell Card",
            frameType: "spell",
            desc: 'While this card is equipped to a monster: You can add 1 Level 5 or lower FIRE Warrior monster from your Deck to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 Level 5 or lower FIRE Warrior monster in your GY; Special Summon it, also you cannot Special Summon monsters for the rest of the turn, except Warrior monsters. You can only use 1 ""Infernoble Arms - Durendal"" effect per turn, and only once that turn.',
            race: "Equip",
            archetype: "Noble Knight",
            ygoprodeck_url: "https://ygoprodeck.com/card/infernoble-arms-durendal-10991",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/37478723.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/37478723.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/37478723.jpg",
                    },
                ],
        },
        {
            name: '"Infernoble Arms - Hauteclere"',
            type: "Spell Card",
            frameType: "spell",
            desc: 'While this card is equipped to a monster: You can target 1 face-up monster you control; this turn, you cannot declare attacks, except with that monster, also it gains the ability this turn to make a second attack during each Battle Phase, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 face-up monster on the field; destroy it. You can only use 1 ""Infernoble Arms - Hauteclere"" effect per turn, and only once that turn.',
            race: "Equip",
            archetype: "Noble Knight",
            ygoprodeck_url: "https://ygoprodeck.com/card/infernoble-arms-hauteclere-10990",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/64867422.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/64867422.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/64867422.jpg",
                    },
                ],
        },
        {
            name: '"Infernoble Arms - Joyeuse"',
            type: "Spell Card",
            frameType: "spell",
            desc: 'While this card is equipped to a monster: You can target 1 FIRE Warrior monster in your GY; add it to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can Special Summon 1 FIRE Warrior monster from your hand. You can only use 1 ""Infernoble Arms - Joyeuse"" effect per turn, and only once that turn.',
            race: "Equip",
            archetype: "Noble Knight",
            ygoprodeck_url: "https://ygoprodeck.com/card/infernoble-arms-joyeuse-10989",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/90861137.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/90861137.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/90861137.jpg",
                    },
                ],
        },
        {
            name: "1st Movement Solo",
            type: "Spell Card",
            frameType: "spell",
            desc: 'If you control no monsters: Special Summon 1 Level 4 or lower "Melodious" monster from your hand or Deck. You can only activate 1 "1st Movement Solo" per turn. You cannot Special Summon monsters during the turn you activate this card, except "Melodious" monsters.',
            race: "Normal",
            archetype: "Melodious",
            ygoprodeck_url: "https://ygoprodeck.com/card/1st-movement-solo-3775",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/44256816.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/44256816.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/44256816.jpg",
                    },
                ],
        },
        {
            name: "3-Hump Lacooda",
            type: "Effect Monster",
            frameType: "effect",
            desc: 'If there are 3 face-up "3-Hump Lacooda" cards on your side of the field, Tribute 2 of them to draw 3 cards.',
            race: "Beast",
            attribute: "EARTH",
            ygoprodeck_url: "https://ygoprodeck.com/card/3-hump-lacooda-7280",
            card_images:
                [
                    {
                        image_url: "https://images.ygoprodeck.com/images/cards/86988864.jpg",
                        image_url_small: "https://images.ygoprodeck.com/images/cards_small/86988864.jpg",
                        image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/86988864.jpg",
                    },
                ],
        }
    ]
});

export default cardsDate;