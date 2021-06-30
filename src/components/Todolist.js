import React from "react"


class Todolist extends React.Component{

    render(){
        return(
            <div>

                <input type="text"></input>
                <button onClick={this.handleClick}>Filter</button>

            </div>
        )
    }
}

export default Todolist