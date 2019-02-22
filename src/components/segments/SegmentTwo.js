import React from 'react'
import baconIpsum from '../../api/baconIpsum'


class SegmentTwo extends React.Component {
    state = { paragraphs: [] }
    getParagraphs = async () => {
        const response = await baconIpsum
            .get('/api/?type=all-meat&paras=2&start-with-lorem=1')
        this.setState({
            paragraphs: response.data[0]
        })
    }
    remParagraphs = () => {
        // remove paragraphs
    }
    render () {
        return (
            <div className="description">
                <div className="ui item">
                    <button
                        onClick={this.getParagraphs} 
                        className="ui primary button"
                    >
                        Add Paragraph
                    </button>
                    <button
                        onClick={this.remParagraphs} 
                        className="ui negative button"
                    >
                        Remove Paragraph
                    </button>
                </div>
                <div 
                    className="ui item"
                    style={{ marginTop: 10 }}
                >
                    {this.state.paragraphs}
                </div>
            </div>
        )
    }
}

export default SegmentTwo