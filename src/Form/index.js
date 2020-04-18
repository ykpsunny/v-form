import React from "react"

import propTypes from "prop-types"

class Form extends React.PureComponent {
	static childContextTypes = {
		modal: propTypes.object,
		modalChange: propTypes.func
	}
	constructor(props, context) {
		super(props, context)
		this.state = {
			modal: props.modal || {}
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.modal) {
			this.setState({
				modal: nextProps.modal
			})
		}
	}
	modalChange = (name, value) => {
		this.setState({
			modal: {
				...this.state.modal,
				[name]: value
			}
		})
	}
	getChildContext() {
		return {
			modalChange: this.modalChange,
			modal: this.props.modal || this.state.modal
		}
	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default Form
