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

    }

})