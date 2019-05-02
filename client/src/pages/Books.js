import React, {Component} from "react";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";
import API from "..utils/API";
import ViewButton from "../components/ViewButton";
import SaveButton from "../components/SaveButton";
import FormButton from "../components/FormButton";
import Card from "../components/Card";

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

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks().then(res => this.setState({
            books: res.data, 
            title: "",
            authors: "",
            description: "",
            image: "",
            link: "",
            saved: false
        })).catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchAPI({
            title: this.state.title
        }).then(res => this.loadBooks())
        .catch(err => console.log(err));
    };

    handleView = id => {
        
    };

    handleSave = id => {

    };

    render() {
        return(
            <Container>
                <form>
                    <SearchBar
                        value={this.state.title}
                        onchange={this.handleInputChange}
                        name="title"
                        placeholder="Enter a book title here!"
                        />
                    <FormButton
                        onClick={this.handleFormSubmit}
                    >Search Book
                    </FormButton>
                </form>
                {this.state.books.length ? (
                    <ResultsContainer fluid>
                        {this.state.books.map(book => (
                            <Card key={book._id}>
                            {book.title}
                            {book.description}
                            {book.authors}
                            {book.image}
                            {book.link}
                            <ViewButton onClick={() => this.handleView(book._id)}/>
                            <SaveButton onClick={() => this.handleSave(book._id)}/>
                            </Card>
                        ))}
                    </ResultsContainer>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </Container>
        );
    };
}

export default Books;