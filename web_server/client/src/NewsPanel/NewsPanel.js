import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsPanel.css';
import _ from 'lodash';

class NewsPanel extends React.Component {
    constructor() {
        super();
        this.state = {news: null};
        this.handleScroll = this.handleScroll.bind(this);
    }

    //didmount is a function in React.Component library, it will be executed right after the constructor
    componentDidMount() {
        this.loadMoreNews();
        this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
          console.log('Loading more news.');
          this.loadMoreNews();
        }
    }

    loadMoreNews() {
        //const news_url = 'http://' + window.location.host + '/news';
        const news_url = 'http://localhost:3000/news';
        const request = new Request(news_url, {method: 'GET'});
    
        fetch(request)
          .then((res) => res.json())
          .then((news) => {
            this.setState({
              news: this.state.news ? this.state.news.concat(news) : news,
            });
          });
    }
// print state news to a html list
    renderNews() {
        const news_list = this.state.news.map(function(news) {
            return (
                <a className='list-group-item' key={news.digest}>
                    <NewsCard news={news} />
                </a>
            );
        });

        return (
            <div className='container-fluid'>
                <div className='list-group'>
                    '{news_list}'
                </div>

            </div>
        )
    }

    render() {
        if (this.state.news) {
            return ( 
                <div>
                    '{this.renderNews()}'
                </div>
            );
        } else {
            return (
                <div id='msg-app-loading'>
                    Loading...
                </div>
            );
        }
    }
}

export default NewsPanel;