function initVue() {

    new Vue({

        el: '#app',
        data: {

            apiKey: 'f64a77b6bcffaceefba175225998a0d4',
            searchBarTxt: '',
            filmsToShow: []
        },
        methods: {

            searchTxt: function() {

                axios.get('https://api.themoviedb.org/3/search/movie', {

                    params: {
                        'api_key': this.apiKey,
                        'query': this.searchBarTxt
                    }
                })
                .then((data) => {

                    const matchingFilms = data.data.results;
                    this.filmsToShow = matchingFilms
                    console.log(this.filmsToShow);
                })
                .catch(() => {

                    console.log('error');
                });
            },
        },
    });
};

function init() {

    initVue()
};

document.addEventListener('DOMContentLoaded', init);
