const { createApp } = Vue;

createApp({
    data() {
        return {
            currentChat: 0,
            newMessage: '', 
            lettersIncluded: '',
            optionsDropDown: [
                'Check info',
                'Delete message'
            ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        setCurrentChat: function (index) {
            this.currentChat = index;
        },
        addNewMessage: function () {
            const activeContact = this.contacts[this.currentChat];

            if (this.newMessage.trim().length > 0) {
                let newObj = {
                    date: this.dateOfNow() , /* data di oggi */
                    message: this.newMessage,
                    status: 'sent'
                };
                activeContact.messages.push(newObj);
                this.newMessage = ''
                setTimeout(()=>{
                    let messageOkay = {
                        date: this.dateOfNow(), /* data di oggi */
                        message: 'Okay!',
                        status: 'received'
                    };
                    activeContact.messages.push(messageOkay);
                }, 1000);
            };
        },
        searchContact: function(){
            // console.log(this.searchcontact);
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.lettersIncluded.toLowerCase().trim())){
                    contact.visible = true;
                }else{
                    contact.visible = false;
                }    
            });
        },
        dateOfNow: function (){
            let finalDate = '';
            const now = new Date ();

            finalDate += now.getDate().toString().padStart(2, '0');
            finalDate += '/';
            finalDate += (now.getMonth() + 1).toString().padStart(2, '0'); /* nowMonth + 1 perchè mesi partono da 0 */ 
            finalDate += '/';
            finalDate += now.getFullYear();

            finalDate += ' '; 

            finalDate += now.getHours().toString().padStart(2, '0');
            finalDate += ':';
            finalDate += now.getMinutes().toString().padStart(2, '0');
            finalDate += ':';
            finalDate += now.getSeconds().toString().padStart(2, '0');

            return finalDate;
        },
        dropDown: function (){
            this.optionsDropDown
            

        }
    }
}).mount('#app')


            /* for su contacts */
            /* se contacts[i].name == lettersIncluded
            /* il suo visible diventa true
            /* altrimenti diventa false */

            // let nome = 'marti';
            // let array = ['m','a','r','t','i']
            // console.log(nome[2]);
            // for (let i = 0; i < contacts.length; i++) {
            //     if (contacts[i].name == contacts.includes(contacts.length)){
            //         visible == true;
            //     }else{
            //         visible == false;
            //     }    
            // }  



            /* getCurrentDateTime() {
                const oggi = new Date();
                const giorno = oggi.getDate().toString().padStart(2, '0');
                const mese = (oggi.getMonth() + 1).toString().padStart(2, '0');
                const anno = oggi.getFullYear();
                const ore = oggi.getHours().toString().padStart(2, '0');
                const minuti = oggi.getMinutes().toString().padStart(2, '0');
                const secondi = oggi.getSeconds().toString().padStart(2, '0');
            
                const orarioFinale = `${giorno}/${mese}/${anno} ${ore}:${minuti}:${secondi}`;
    
                return orarioFinale;
            }, */
