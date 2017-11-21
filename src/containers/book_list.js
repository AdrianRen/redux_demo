import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map(book => {
      return(
        <li key={ book.title } className="list-group-item">
          { book.title }
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state){
  // whatever is returned will be available as props inside of BookList
  return {
    books: state.books
  }
}
// connect takes a function (mapStateToProps) and a component (BookList)
// and produces a container
export default connect(mapStateToProps)(BookList);
