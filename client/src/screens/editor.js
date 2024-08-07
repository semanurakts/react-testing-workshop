<<<<<<< HEAD
import React, {Component} from 'react'
import * as api from '../utils/api'
import Form from '../components/form'
import {Input, TextArea} from '../components/inputs'

class Editor extends Component {
  static defaultProps = {
    api,
  }
  handleSubmit = e => {
    e.preventDefault()
    const {title, content, tags} = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
      date: new Date().toISOString(),
      authorId: this.props.user.id,
    }
    this.props.api.posts.create(newPost).then(() => {
      this.props.history.push('/')
    })
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label style={{justifySelf: 'right'}} htmlFor="title-input">
            Title
          </label>
          <Input id="title-input" placeholder="Title" name="title" />
          <label
            style={{justifySelf: 'right', alignSelf: 'baseline'}}
            htmlFor="content-input"
          >
            Content
          </label>
          <TextArea id="content-input" placeholder="Content" name="content" />
          <label style={{justifySelf: 'right'}} htmlFor="tags-input">
            Tags
          </label>
          <Input id="tags-input" placeholder="tags" name="tags" />
        </Form>
      </div>
    )
  }
}

=======
import React, {Component} from 'react'
import * as api from '../utils/api'
import Form from '../components/form'
import {Input, TextArea} from '../components/inputs'

class Editor extends Component {
  static defaultProps = {
    api,
  }
  handleSubmit = e => {
    e.preventDefault()
    const {title, content, tags} = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
      date: new Date().toISOString(),
      authorId: this.props.user.id,
    }
    this.props.api.posts.create(newPost).then(() => {
      this.props.history.push('/')
    })
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label style={{justifySelf: 'right'}} htmlFor="title-input">
            Title
          </label>
          <Input id="title-input" placeholder="Title" name="title" />
          <label
            style={{justifySelf: 'right', alignSelf: 'baseline'}}
            htmlFor="content-input"
          >
            Content
          </label>
          <TextArea id="content-input" placeholder="Content" name="content" />
          <label style={{justifySelf: 'right'}} htmlFor="tags-input">
            Tags
          </label>
          <Input id="tags-input" placeholder="tags" name="tags" />
        </Form>
      </div>
    )
  }
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export default Editor