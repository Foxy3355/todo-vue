new Vue({
    el: "#app",
    data: {
        currentTask: '',
        tasks: [
            {
                name: 'Выполнить',
                isCompleted: false
            },
            {
                name: 'Выполнилось',
                isCompleted: false
            },
            {
                name: 'Выполнено',
                isCompleted: false
            }
        ]
    },
    methods: {
        addTask: function () {
            this.tasks.push({
                name:this.currentTask,
                isCompleted: false
            });
            this.currentTask = '';
        },
    }

})