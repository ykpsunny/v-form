import React from "react";

import propTypes from "prop-types";

class Form extends React.PureComponent {
	static childContextTypes = {
		modal: propTypes.object,
		modalChange: propTypes.func,
	};

	static defaultProps = {
		onFieldsChange: (changedFields, allFields) => {}
	}

	constructor(props, context) {
		super(props, context);
		this.state = {
			modal: {}
		};
	}

	modalChange = (key, value) => {
		const { onFieldsChange } = this.props;
		this.setState(
			{
				modal: {
					...this.state.modal,
					[key]: value,
				},
			},
			() => {
				onFieldsChange({ [key]: value }, this.state.modal);
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
		return <form className="v-form">{this.props.children}</form>;
	}
}

Form.propTypes = {
	onFieldsChange: propTypes.func, // 当表单字段更新时触发的回调函数, 参数 changedFields, allFields
};

export default Form;
