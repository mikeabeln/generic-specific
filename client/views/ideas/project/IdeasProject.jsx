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
        console.log(this.props.match.params.idea)
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps.match.params.idea, this.props.match.params.idea)
    }

    render() {
        return (
            <p className='paragraph'>Ideas Project</p>
        )
    }
}

export default IdeasProject
