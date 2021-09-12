/**
 * Monokai Theme
 */

class MonokaiTheme {
  constructor(props) {
    this.createdBy = props.createdBy,
    this.name = props.name
  }
}

const monokaiTheme = new MonokaiTheme({ 
  name: 'Monokai Theme', 
  createdBy: 'carlossantos74', 
})