import React, { Component } from 'react'
import ArticleCard from '../ArticleCard'

export default class ArticleListContainer extends Component {

  generateArticleCards = () => {
    return this.props.articles.map(individualCard => {
      return (
        <ArticleCard 
          key={individualCard.id}
          id={individualCard.id}
          title={individualCard.title}  
          thumbnail_url={individualCard.thumbnail_url}
          handleCardClick={this.props.handleCardClick}
        />
      )
    });
  } 

  render() {
    // console.log("props in article list container", this.props)
    return (
      <div className="article-list-container">
        {this.generateArticleCards()} 
     
      </div>
    )
  }
}
