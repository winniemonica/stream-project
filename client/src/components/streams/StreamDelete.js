import React, { Component } from 'react';
import Modal from '../Modal';
import { connect } from "react-redux";
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';
import { Link } from 'react-router-dom';

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui negative button">Delete</button>
                <Link to='/' className="ui button">Cancel</Link >
            </React.Fragment >
        )
    }
    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure want to delete the stream with title :'
        }
        return `Are you sure want to delete the stream with title : ${this.props.stream.title}?`

    }
    render() {
        return (
            <Modal
                title='Delete Stream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
