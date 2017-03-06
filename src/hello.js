// @flow

class Hello {
  name: string

  constructor(name: string) {
    this.name = name
  }

  display() {
    return `Hello ${this.name}`
  }
}

export default Hello
