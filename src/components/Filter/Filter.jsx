import { Component } from "react";

class Filter extends Component {
    render() {
        const {title} = this.props
        return ( 
            <>
                <label htmlFor="#">{title}: </label>
                <input type="text" name="filter"/>
            </>
        )
    }
}

export default Filter