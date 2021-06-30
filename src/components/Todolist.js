import React from "react"


class Todolist extends React.Component{


    handleInputChange = (event) => {
        this.setState({
            inputValue : event.target.value
        })
    }

    state = {
        inputValue: ""
    }

    handleClick = () =>{
        let url = "https://jsonplaceholder.typicode.com/todos?userId=";
        url += this.state.Value;
        fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
    }

    render(){
        return(
            <div>

                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}></input>
                <button onClick={this.handleClick}>Filter</button>

            </div>
        )
    }
}

export default Todolist

