import React, {Component} from "react";
import SearchBar from "../components/SearchBar";
// import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
// import ViewButton from "../components/ViewButton";
// import SaveButton from "../components/SaveButton";
import FormButton from "../components/FormButton";
// import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";

class Books extends Component {
    state = {
        books: [],
        title: "",
        authors: [],
        description: "",
        image: "",
        link: "",
        saved: false
    };

    // componentDidMount() {
    //     this.loadBooks();
    // };

    // loadBooks = () => {
    //     API.getBooks().then(res => this.setState({
    //         books: res.data, 
    //         title: "",
    //         authors: "",
    //         description: "",
    //         image: "",
    //         link: "",
    //         saved: false
    //     })).catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.title);
        API.searchAPI({
            title: this.state.title
        }).then(res => {
            console.log(res);
            this.loadBooks();
        })
        .catch(err => console.log(err));
    };

    // handleSave = id => {

    // };

    render() {
        return(
            <Container fluid>
            <Jumbotron>

            </Jumbotron>
                <form>
                    <SearchBar
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Enter a book title here!"
                        />
                    <FormButton
                        onClick={this.handleFormSubmit}
                    >Search Book
                    </FormButton>
                </form>
                {/* {this.state.books.length ? (
                    <ResultsContainer fluid>
                        {this.state.books.map(book => (
                            <Card key={book._id}>
                            {book.title}
                            {book.description}
                            {book.authors.each(author => (
                                {author}
                            ))}
                            {book.image}
                            <ViewButton href={book.link}/>
                            <SaveButton onClick={() => this.handleSave(book._id)}/>
                            </Card>
                        ))}
                    </ResultsContainer>
                ) : (
                    <h3>No Results to Display</h3>
                )} */}
            </Container>
        );
    };
}

export default Books;