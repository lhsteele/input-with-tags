import React, { Component } from 'react'
import Tag from './Tag'

export default class TagInInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagList: [],
      newTag: ''
    }
  }

  handleInput = ev => {
    this.setState({ newTag: ev.target.value })
  }

  addTag = () => {
    const tag = this.state.newTag
    this.setState(prevState => ({
      tagList: !prevState.tagList.includes(tag) ? prevState.tagList.push(tag) : prevState.tagList,
      newTag: ''
    }));
  };

  handleEnterKeyPress = ev => {
    if (ev.keyCode === 13) {
      this.addTag()
    }
  };

  removeTag = tag => {
    this.setState(prevState => ({
      tagList: prevState.tagList.filter(existingTag => existingTag !== tag)
    }));
  };

  renderTags = () => {
    return this.state.tagList.map((tag, i) => {
      return <Tag key={i} value={tag} removeTag={() => this.removeTag(tag)} inInput={true}/>
    });
  };

  render() {
    return (
      <div className="tag-in-input-container">
        <div className="in-input-tag-list">
          {this.renderTags()}
        </div>
        <input
          type="input"
          className="input"
          onKeyDown={ev => this.handleEnterKeyPress(ev)}
          onChange={ev => this.handleInput(ev)}
          value={this.state.newTag} />
      </div>
    )
  }
}
