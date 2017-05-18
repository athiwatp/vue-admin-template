Vue.use(VueCharts)

const app = new Vue({
    el: "#adminApp",
    data: {
        sidebar: true,
        itemGroup: [{
                header: 'Main Navigation'
            },
            {
                title: 'Dashboard',
                icon: 'dashboard'
            },
            {
                title: 'Parent',
                group: '/company',
                items: [{
                        title: 'Child'
                    },
                    {
                        title: 'Child'
                    },
                    {
                        title: 'Child'
                    }
                ]
            },
            {
                title: 'Link'
            },
            {
                title: 'Link'
            },
            {
                divider: true
            },
            {
                header: 'Another Header'
            },
            {
                title: 'Link'
            }
        ],
        dropdown_items: [{
                title: 'My Account'
            },
            {
                title: 'Invite Friends'
            },
            {
                title: 'Log Out'
            }
        ],
        chart: {
            horizontal_bar: {
                labels: ['Vue', 'Angular', 'React', 'jQuery'],
                data: ['80', '71', '75', '73']
            },
            line: {
                labels: ['Codeigniter', 'Laravel', 'Slim', 'Phalcon', 'CakePHP'],
                data: ['60', '80', '63', '60', '59']
            }
        }
    }
})