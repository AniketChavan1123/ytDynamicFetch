import React, {Component} from 'react';
//=> const Component =React.component or use above syntax which says same thing as line no 2

class SearchBar extends Component{    // give all functionality that react.component has

    constructor(props)    // this is how we define state in class component ...functional component do not have state
    {
        super(props);
        this.state={SearchTerm:''}; //Whenever we use state,
                              //we initialize it by creating a new object AND assigning it to this.state
                              //The object we pass will also contain properties that we want to record on the state
                              // for that we have used property term:
                              //whenever user updates search input,term is the property we want to update that record
        // In constructor we use this.state and everywhere else in component tochange state we use this.setState
    }

    render() {      // when we use a Class_based method, we still have to give it the ability to render itself
            // somehow to return some JSX...So we called render method
            // every react component that is class based must have render function
            return(
            <div className="search-bar">
            <input 
            value={this.state.SearchTerm}
            onChange={event => {
                return(
                    this.setState({SearchTerm:event.target.value}),
                    this.props.onSearchTermChange(event.target.value));
            
            }} /> 
            </div>);

            /* <input onChange={this.onInputChange}/>;  */

        // whenever we call this.setState, it causes our component to automatically re render and push all those 
        // all the updated information from the render method into the DOM because our render method makes reference 
        // to this.state term...Every time the component unstable_renderSubtreeIntoContainer, we get the updated 
        // this.dot term in the DOM
            // whenever we use JS variable in JSX, we wrap it with curly braces inside of JSX
            //this.onInputChange is Event Handler
        // onChange is event Handler of input...when change run this.onInputchange function
    }
    // onInputChange(term) {
    //     this.setState({SearchTerm:term});
    //     this.props.onSearchTermChange(term);
    //   }
    // onInputChange(event){    // whenever the input changes runs the inside code
    //     //console.log(event);    // event handler are called with it's event object
    //     SearchBar.setState({SearchTerm: event.target.value})

    // }

}


// const SearchBar=()=>{       // this is a functional component 
//     return <input />
// }

export default SearchBar;
// let foo=5;
// export default foo;
// if this is written SearchBar in index.js will be = 5 not the component