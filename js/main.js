new Vue({
    el: "#app",
    data: {
        columns: [
            { title: 'New tasks', maxCards: 3, tasks: [] },
            { title: 'Half completed tasks', maxCards: 5, tasks: [] },
            { title: 'Completed tasks', maxCards: Infinity, tasks: [] },
        ],
        newTaskText: '',
        columnBlock: false,
        columnFull: false,
        newCardTitle: '',
        newCardItems: ['', '', '', '', ''],
    },
    methods: {
        addCard() {
            let totalItems = this.newCardItems.filter(card => card.trim() !== '').length;
            if (totalItems < 3) {
                alert('Добавьте еще пункты. Минмальное количество пунктов для создания задачи 3')
            }

            let newCard = {
                title: this.newCardTitle || 'Новая задача',
                items: this.newCardItems
                    .map(text => text.trim())
                    .filter(text => text !== '')
                    .map(text => ({ text, completed: false })),
            };
            this.columns[0].tasks.push(newCard);
            this.newCardTitle = '';
            this.newCardItems = ['', '', '', '', ''];
        },
    }

})