import React, { Component } from 'react'
import Tag from './Tag';

export default class Input extends Component {
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
      return <Tag key={i} value={tag} removeTag={() => this.removeTag(tag)} inInput={false}/>
    });
  };

  renderTagsInInput = inInputField => {
    return inInputField &&
      <div className="in-input-tag-list">
        {this.renderTags()}
      </div>
  }

  renderTagsBelowInput = inInputField => {
    return !inInputField && 
      <div className="tag-list">
        {this.renderTags()}
      </div>
  }

  render() {
    const { inInputField } = this.props
    return (
      <div className={inInputField ? 'tag-in-input-container' : 'input-container'}> 
        {this.renderTagsInInput(inInputField)}
        <input
          type="input"
          className="input"
          onKeyDown={ev => this.handleEnterKeyPress(ev)}
          onChange={ev => this.handleInput(ev)}
          value={this.state.newTag}/>
        {this.renderTagsBelowInput(inInputField)}
      </div>
    )
  }
}
