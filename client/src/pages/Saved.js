import React, {Component} from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import DeleteButton from "../components/DeleteButton";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";

class Saved extends Component {
    state = {
        books:[]
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks({}).then(res => {
            console.log(res);
            this.setState({books: res.data})
        })
        .catch(err => console.log(err));
    };

    handleDelete = id => {
        API.deleteBook(id).then(res => {
            this.loadBooks();
        }).catch(err => console.log(err))
    };

    render() {
        return(
            <Container fluid>
            <Jumbotron>
            {"Saved Books"}
            </Jumbotron>
                {this.state.books.length ? (
                    <ResultsContainer fluid>
                        {this.state.books.map(book => {
                            return (<div className="col-sm-12 col-md-4 col-lg-4 col-xl-3"><Card 
                            key={book._id}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            link={book.link}
                            image={book.image}
                            />
                            <DeleteButton onClick={() => this.handleDelete(book._id)}>
                            {book.title}
                            </DeleteButton>
                            </div>
                            );
                        })}
                    </ResultsContainer>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </Container>
        );
    };

}

export default Saved;