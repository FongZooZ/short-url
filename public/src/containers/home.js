import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<form onSubmit={(e) => this._handleSubmit(e)}>
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Shortify it!" aria-label="Shortify it!" autoComplete="off" onBlur={(e) => this._handleBlur(e)} />
							<span className="input-group-btn">
								<button className="btn btn-danger btn-submit" type="submit">Shortify it!</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		);
	}

	_handleBlur(e) {
		this.setState({urlInput: e.target.value});
	}

	_handleSubmit(e) {
		e.preventDefault();
	}
}

const ConnectedHome = connect()(Home);

export default ConnectedHome;