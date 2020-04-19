import propTypes from "prop-types";

import React from "react";

function vModal(key, config) {
	const { initialValue, valuePropName = "value", rules } = config;
	return (Component) => {
		class HOC extends React.PureComponent {
			static contextTypes = {
				modal: propTypes.object,
				modalChange: propTypes.func,
			};

			constructor(props, context) {
				super(props, context);
			}

			componentDidMount() {
				const { modalChange } = this.context;
				modalChange(key, initialValue);
			}

			render() {
				const { children } = this.props,
					{ onChange } = children.props,
					{ modal, modalChange } = this.context;
				console.log(modal);
				const renderForm = () => {
					return React.cloneElement(children, {
						onChange: (e) => {
							modalChange(key, e.target[valuePropName]);
							onChange && onChange(e);
						},
						[valuePropName]: modal[key],
					});
				};
      return <div className='form-item'>{renderForm()}</div>
			}
		}
		return <HOC>{Component}</HOC>;
	};
}

export default vModal;
