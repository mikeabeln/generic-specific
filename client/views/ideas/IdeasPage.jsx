import * as React from 'react'
import { Link } from 'react-router-dom'
import './IdeasPage.scss'

class IdeasPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        return (
            <div className='Landing_Container'>
                {/* put landing page content here */}
                <p className='paragraph'>Ideas Page</p>
                <Link to='/test'>Test</Link>
                <Link to='/'>Landing</Link>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default IdeasPage
