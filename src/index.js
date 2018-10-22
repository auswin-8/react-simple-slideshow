import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import range from 'lodash/range';
import './index.css';

// Assets
import arrowLeft from './images/left-arrow.png';
import arrowRight from './images/right-arrow.png';

export default class Slider extends React.Component {
    constructor() {
        super();

        this.state = {
            index: 0,
            count: 0,
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    componentDidMount() {
        const { initialIndex, children } = this.props;
        this.setState({
            count: children ? children.length : 0,
            index: initialIndex,
        })
    }

    next() {
        const { index, count } = this.state;

        if (index < count - 1) {
            this.setState({
                index: index + 1,
            });
        }
        else {
            this.setState({
                index: 0,
            });
        }
    }

    previous() {
        const { index, count } = this.state;

        if (index > 0) {
            this.setState({
                index: index - 1,
            });
        }
        else {
            this.setState({
                index: count - 1,
            });
        }
    }

    render() {
        const { width, height } = this.props;
        const { index, count } = this.state;
        return (
            <div className="wrapper" style={{ height: height, width: width }}>
                <div className="content">
                    <div className="arrow left" onClick={this.previous}>
                        <img alt="previous" src={arrowLeft} />
                    </div>
                    <div className="element-wrapper">
                        {count !== 0 && this.props.children[index]}
                    </div>
                    <div className="arrow right" onClick={this.next}>
                        <img alt="next" src={arrowRight} />
                    </div>
                </div>
                <div className="footer">
                    {range(count).map((item) => (
                        <div
                            key={shortid.generate()}
                            className={"dot  " + (item === index ? 'selected' : '')}
                            onClick={() => this.setState({ index: item })}
                        ></div>
                    ))}
                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    initialIndex: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.array,
};

Slider.defaultProps = {
    initialIndex: 0,
    width: '500px',
    height: '400px',
};