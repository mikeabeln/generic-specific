import * as React from 'react'
import './IdeasProject.scss'

class IdeasProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        console.log(this.props)

    }

    render() {
        return (
            <div className='Landing_Container'>
                {/* put landing page content here */}
                <p className='paragraph'>Ideas Project</p>
            </div>
        )
    }
}

export default IdeasProject
