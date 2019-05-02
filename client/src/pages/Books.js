import React, {Component} from "react";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
// import SaveButton from "../components/SaveButton";
import FormButton from "../components/FormButton";
import Card from "../components/Card";
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

    componentDidMount() {
        // this.loadBooks();
    };

    checkState() {
        console.log(this.state.books);
    }

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
            // console.log("Title:" + res.data.items[0].volumeInfo.title);
            // console.log("Authors:" + res.data.items[0].volumeInfo.authors);
            // console.log("Description:" + res.data.items[0].volumeInfo.description);
            // console.log("Image:" + res.data.items[0].volumeInfo.imageLinks.smallThumbnail);
            // console.log("link:" + res.data.items[0].volumeInfo.infoLink);
            this.checkState();
            this.setState({
                books: res.data.items
            })
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
                {this.state.books.length ? (
                    <ResultsContainer fluid>
                        {this.state.books.map(book => {
                            return (<Card key={book._id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            // image={book.volumeInfo.imageLinks.smallThumbnail}
                            /* <SaveButton onClick={() => this.handleSave(book._id)}/> */
                            />
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

export default Books;