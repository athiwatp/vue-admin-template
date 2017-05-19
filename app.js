Vue.use(VueCharts) // vue-charts Charts

Vue.use(VueGoogleMaps, { // Vue google maps
    load: {
        key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw'
    }
});

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
                title: 'Sample Link',
                group: '/company',
                icon: 'pie_chart',
                items: [{
                        title: 'Child',
                        icon: 'check'
                    },
                    {
                        title: 'Child',
                        icon: 'check'
                    },
                    {
                        title: 'Child',
                        icon: 'check'
                    }
                ]
            },
            {
                title: 'Settings',
                icon: 'settings_applications',
            },
            {
                title: 'Ethernet',
                icon: 'settings_ethernet',
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
        },
        info_box: [{
                title: 'CPU TRAFFIC',
                count: '90%',
                color: 'light-blue lighten-2',
                icon: 'settings'
            },
            {
                title: 'LIKES',
                count: '41,410',
                color: 'red lighten-1',
                icon: 'thumb_up'
            },
            {
                title: 'SALES',
                count: '760',
                color: 'green darken-1',
                icon: 'shopping_cart'
            },
            {
                title: 'NEW MEMBERS',
                count: '2,000',
                color: 'yellow darken-3',
                icon: 'supervisor_account'
            }
        ],
        orders: [{
                id: 'OR6969',
                item: 'Batman V Superman',
                status: 'Shipped',
                date: '11-12-2017'
            },
            {
                id: 'OR1848',
                item: 'Samsung Smart TV',
                status: 'Pending',
                date: '10-12-2017'
            },
            {
                id: 'OR7429',
                item: '	iPhone 6 Plus',
                status: 'Delivered',
                date: '09-12-2017'
            },
            {
                id: 'OR7429',
                item: 'Samsung Smart TV',
                status: 'Processing',
                date: '08-12-2017'
            },
            {
                id: 'OR1848',
                item: 'Samsung Smart TV',
                status: 'Delivered',
                date: '07-12-2017'
            }
        ],
        products: [{
                title: 'Samsung TV',
                subtitle: 'Samsung 32" 1080p 60Hz LED Smart HDTV..'
            },
            {
                title: 'Bicycle',
                subtitle: 'This is just another sample text...'
            },
            {
                title: 'Xbox One',
                subtitle: 'Xbox One Console Bundle with Halo Ma..'
            },
            {
                title: 'PlayStation 4',
                subtitle: 'PlayStation 4 500GB Console (PS4).'
            }
        ],
        markers: [
            {
                position: {
                    lat: 14.599512,
                    lng: 120.984219
                }
            },
            {
                position: {
                    lat: 14.851356,
                    lng: 104.537109
                }
            },
            {
                position: {
                    lat: 28.605744,
                    lng: 102.779296
                }
            },
            {
                position: {
                    lat: 17.886751,
                    lng: 99.615234
                }
            },
            {
                position: {
                    lat: 11.600585,
                    lng: 124.400390
                }
            },
            {
                position: {
                    lat: 31.271039,
                    lng: 43.716794
                }
            },
            {
                position: {
                    lat: 18.804398,
                    lng: 28.951169
                }
            },
            {
                position: {
                    lat: 55.870381,
                    lng: 58.48241
                }
            }
        ]
    }
})