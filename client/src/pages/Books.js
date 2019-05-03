import React, {Component} from "react";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import SaveButton from "../components/SaveButton";
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
        // for (var i = 0; i < this.state.books.length; i++) {
            // if(this.state.books.volumeInfo.imageLinks) {
            // console.log(this.state.books[i].volumeInfo.imageLinks);
            // }
        // }
    }


    handleSave = book => {
        // console.log(book.volumeInfo.title + 
        //     book.volumeInfo.authors +
        //     book.volumeInfo.description +
        //     book.volumeInfo.infoLink);
            API.saveBook({
                title:book.volumeInfo.title,
                description: book.volumeInfo.description,
                link: book.volumeInfo.infoLink,
                authors: book.volumeInfo.authors,
                image: book.volumeInfo.imageLinks.smallThumbnail
            }).then(res => console.log("Returned from DB")).catch(err => console.log(err));
    };

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
            // console.log("Image:" + res.data.items[1].volumeInfo.imageLinks.smallThumbnail);
            // console.log("link:" + res.data.items[0].volumeInfo.infoLink);
            for(var i = 0; i < res.data.items.length; i++) {
                console.log("Image:" + res.data.items[1].volumeInfo.imageLinks.smallThumbnail);
                // if(res.data.items[i].volumeInfo.imageLinks !== "undefined" ||
                // res.data.items[i].volumeInfo !== "undefined" ||
                // res.data.items[i] !== "undefined" || 
                // res.data !=="undefined" || 
                // res !=="undefined" || 
                // res.data.items[i].volumeInfo.imageLink.smallThumbnail !== "undefined") {
                if(res.data.items[i].volumeInfo.imageLinks) {
                    this.setState({
                        books: res.data.items
                    })
                }
                // }
            }
            this.checkState();
        })
        .catch(err => console.log(err));
    };


    render() {
        return(
            <Container fluid>
            <Jumbotron>
            {"Google Book Search"}
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
                            return (<div className="col-sm-12 col-md-4 col-lg-4 col-xl-3"><Card key={book._id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            // image={book.volumeInfo.imageLinks.smallThumbnail}
                            image={book.volumeInfo.imageLinks !== undefined ? 
                            book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/100"}
                            />
                            <SaveButton onClick={() => this.handleSave(book)}>
                            {book.volumeInfo.title}
                            </SaveButton>
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

export default Books;