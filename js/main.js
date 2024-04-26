new Vue({
    el: "#app",
    data: {
        columns: [
            {title: 'New tasks', maxCards: 3, tasks: []},
            {title: 'Half completed tasks', maxCards: 5, tasks: []},
            {title: 'Completed tasks', maxCards: Infinity, tasks: []},
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
                taskTitle: this.newCardTitle || 'Новая задача',
                items: this.newCardItems
                    .map(text => text.trim())
                    .filter(text => text !== '')
                    .map(text => ({text, completed: false})),

            };
            this.columns[0].tasks.push(newCard);
            this.newCardTitle = '';
            this.newCardItems = ['', '', '', '', ''];
        },


        completeTask(task, column) {
            let completeCount = task.items.filter(item => item.completed).length
            let totalItems = task.items.length
            let total = totalItems / completeCount
            if (column.title === 'New tasks') {
                if (Math.round(total) === 2) {
                    this.moveCard(task, column, this.columns[1])
                }
            }
            else if (column.title === 'Half completed tasks' && completeCount === 0) {
                this.moveCard(task, column, this.columns[0])
            }
            else if (column.title === 'Half completed tasks' && totalItems === completeCount) {
                this.moveCard(task, column, this.columns[2])
            }
        },

        moveCard(task, delColumn, addColumn) {
            if (addColumn.tasks.length < addColumn.maxCards) {
                delColumn.tasks.splice(delColumn.tasks.indexOf(task), 1);
                addColumn.tasks.push(task);
            }
        }
    },
})