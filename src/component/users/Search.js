import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <div>
                <form className="form"><input type="text" name="text" placeholder="Search Users..."/></form>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </div>
        )
    }
}

export default Search
