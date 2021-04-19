function initVue() {

    new Vue({

        el: '#app',
        data: {

            apiKey: 'f64a77b6bcffaceefba175225998a0d4',
            searchBarTxt: '',
            filmsToDisplay: [],
            showsToDisplay: [],
        },
        methods: {

            searchTxt: function() {

                this.searchFilms();
                this.searchTvShows();
            },
            searchFilms: function() {

                axios.get('https://api.themoviedb.org/3/search/movie', {

                    params: {
                        'api_key': this.apiKey,
                        'query': this.searchBarTxt
                    }
                })
                .then((data) => {

                    const matchingFilms = data.data.results;
                    this.filmsToDisplay = matchingFilms;
                })
                .catch(() => {

                    console.log('error');
                });
            },
            searchTvShows: function() {

                axios.get('https://api.themoviedb.org/3/search/tv', {

                    params: {
                        'api_key': this.apiKey,
                        'query': this.searchBarTxt
                    }
                })
                .then((data) => {

                    const matchingShows = data.data.results;
                    this.showsToDisplay = matchingShows
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
