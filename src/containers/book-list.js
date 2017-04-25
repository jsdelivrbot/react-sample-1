import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//this import statement is used to ensure the action that is created by the action creator successfully flows to all of the reducers


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render() {
    return(
      <ul clasName = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//take app state as argument and whatever gets returned will show up as props inside of book-list
//whatever is returned from this will be set to this.props above
function mapStateToProps(state) {

  return {
    books: state.books
  };
}

//anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers

  //bindActionCreators and dispatch receives these actions and spits them back out to all of our reducers
  return bindActionCreators({ selectBook: selectBook },
   dispatch)
   //whatever we pass in here will be available as props to our container
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function (mapStateToProps) and a component (BookList) and  forms container
