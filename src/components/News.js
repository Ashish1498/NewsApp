import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'

export class News extends PureComponent {
    articles = [
        {
            "source": {
            "id": null,
            "name": "Hackaday"
            },
            "author": "Jenny List",
            "title": "Voyager 1 Talks Some Nonsense, But Is Still Working - Hackaday",
            "description": "The Voyager 1 interplanetary probe was launched in 1977 and has now reached interstellar space where it is the furthest-traveled man-made object. It’s hugely exceeded its original mission and…",
            "url": "https://hackaday.com/2022/05/21/voyager-1-talks-some-nonsense-but-is-still-working/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2022/05/voyager-featured.jpg",
            "publishedAt": "2022-05-21T23:00:00Z",
            "content": "The Voyager 1 interplanetary probe was launched in 1977 and has now reached interstellar space where it is the furthest-traveled man-made object. It’s hugely exceeded its original mission and continu… [+1209 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Fox Business"
            },
            "author": "Adam Sabes",
            "title": "Jif issues voluntary recall of certain peanut butter products due to potential Salmonella contamination - Fox Business",
            "description": "The J.M. Smucker Company is recalling multiple Jif peanut butter products because of potential Salmonella contamination that has caused at least 14 people to become sick so far.",
            "url": "https://www.foxbusiness.com/retail/jif-recall-peanut-butter-salmonella",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/0/0/Untitled-design-188.png?ve=1&tl=1",
            "publishedAt": "2022-05-21T22:59:01Z",
            "content": "The J.M. Smucker Company issued a voluntary recall on Friday for select Jif peanut butter products that are sold in the United States because of potential Salmonella contamination.\r\nAccording to the … [+1771 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "What to know about monkeypox - Washington Post",
            "description": "The Centers for Disease Control and Prevention issued an alert on May 20 urging doctors and state health departments to be vigilant for cases of monkeypox as...",
            "url": "https://www.youtube.com/watch?v=PezaEEEmgII",
            "urlToImage": "https://i.ytimg.com/vi/PezaEEEmgII/hqdefault.jpg",
            "publishedAt": "2022-05-21T22:37:08Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "ATP Tour"
            },
            "author": "ATP Tour",
            "title": "Day 1 Preview: Carlos Alcaraz, Alexander Zverev, Felix Auger-Aliassime Open Roland Garros Campaigns - ATP Tour",
            "description": "Day 1 Preview: Alcaraz, Zverev, Felix Open Roland Garros Campaigns",
            "url": "https://www.atptour.com/en/news/roland-garros-day-1-sunday-preview",
            "urlToImage": "https://www.atptour.com/-/media/images/news/2022/05/21/22/29/alcaraz-roland-garros-day-1-preview.jpg",
            "publishedAt": "2022-05-21T22:34:28Z",
            "content": "The Sunday start of Roland Garros includes opening-round matches for Carlos Alcaraz, Alexander Zverev and Felix Auger-Aliassime in Paris. The year's second Grand Slam begins exclusively with singles … [+4952 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Eonline.com"
            },
            "author": "Ashley Joy Parker",
            "title": "What Scott Disick Did During Kourtney Kardashian and Travis Barker’s Wedding Weekend - E! NEWS",
            "description": "As Kourtney Kardashian and Travis Barker prepare for their Italian wedding celebration, Scott Disick hung back in Los Angeles, hitting up LAVO Ristorante with the longtime friends.",
            "url": "https://www.eonline.com/news/1331912/what-scott-disick-did-during-kourtney-kardashian-and-travis-barkers-wedding-weekend",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022421/rs_1200x1200-220521114649-1200.disick1.jpg?fit=around%7C1080:566&output-quality=90&crop=1080:566;center,top",
            "publishedAt": "2022-05-21T22:03:00Z",
            "content": "The lord remains stateside.\r\nScott Disick was spotted back in California as his his Kourtney Kardashian prepares to wed Travis Barker for the third time this weekend in Italy.\r\nOn May 19, the 38-year… [+1174 chars]"
            }
    ]
    //runs at first after this render() runs
    constructor(){
        super();
        console.log("Hello i am a cosntructor from News Component")
        this.state ={
            articles: this.articles,
            loading: false
        }
    }

    //runs after render()
    //aysnc means it will wait for fetch to run. data here is the promsie
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f062fdeec1a24126a27184fc4dc09657"
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }

  render() {
    return (
      <div className='container my-3'>
          <h2><center>News App - Top Headlines</center></h2>
          <div className='row'>
          {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>  {/* BootStrap has 12 column grid */}
              <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
              
          </div>
      </div>
      
    )
  }
}

export default News