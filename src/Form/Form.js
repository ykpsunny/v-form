import React from "react";

import propTypes from "prop-types";

class Form extends React.PureComponent {
	static childContextTypes = {
		modal: propTypes.object,
		modalChange: propTypes.func,
	};
	constructor(props, context) {
		super(props, context);
		this.state = {
			modal: props.modal || {},
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.modal) {
			this.setState({
				modal: nextProps.modal,
			});
		}
	}
	modalChange = (name, value) => {
		const { onFieldsChange } = this.props;
		this.setState(
			{
				modal: {
					...this.state.modal,
					[name]: value,
				},
			},
			() => {
				onFieldsChange({ [name]: value }, this.state.modal);
			}
		);
	};
	getChildContext() {
		return {
			modalChange: this.modalChange,
			modal: this.props.modal || this.state.modal,
		};
	}
	render() {
		return <div className="v-form">{this.props.children}</div>;
	}
}

Form.defaultProps = {
	onFieldsChange: (changedFields, allFields) => {},
};

Form.propTypes = {
	onFieldsChange: propTypes.func, // 当表单字段更新时触发的回调函数, 参数 changedFields, allFields
};

export default Form;
