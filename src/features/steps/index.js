'use strict'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {expect, assert} from 'chai'
import {mount} from 'enzyme'

export default function() {
  this.When('I open the site', function() {
    const App = this.container.get('App')
    this.context.currentPage = mount(App)
  })

  this.Then('I see the "$text" text on the page', function(text) {
    const strings = this.context.currentPage.text()
    assert.include(
      strings,
      text,
      `Could not find the text "${text}" on the page (${this.context.currentPage})`
    )
  })

  this.Then('I see "$count" tasks on the page', function(count, cb) {
    expect(this.context.currentPage.find('p').length).to.eql(2) 
    cb()
  })
}
