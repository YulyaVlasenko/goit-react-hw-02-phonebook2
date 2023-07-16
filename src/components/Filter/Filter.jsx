import { Component } from "react";
import PropTypes from 'prop-types';

class Filter extends Component {
    render() {
        const {title, value, handleChangeFilter} = this.props
        return ( 
            <form>
                <label htmlFor="#">{title}: </label>
                <input type="text" name="filter" onChange={handleChangeFilter} value={value}/>
            </form>
        )
    }
}

export default Filter

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChangeFilter: PropTypes.func.isRequired,
}