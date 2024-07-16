const { createApp } = Vue;

createApp({
    data() {
        return {
            vueSaluta: 'Hello World!',
            bonus: {
                img: 'https://picsum.photos/200',
                name: 'Lorem Picsum'
            }
        }
    }
}).mount('#app')

