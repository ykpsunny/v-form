import propTypes from "prop-types"

import React from "react"

function vModal(key, rules) {
	return (Component) => {
    class HOC extends React.PureComponent {
			static contextTypes = {
				modal: propTypes.object,
				modalChange: propTypes.func
      }
      render () {
        let { children } = this.props,
            { onChange } = children.props,
            { modal, modalChange } = this.context
        return React.cloneElement(children, {
          onChange: (e) => {
            modalChange(key, e.target.value)
            onChange && onChange(e)
          },
          value: modal[key]
        })
      }
    }
    return <HOC>{Component}</HOC>
  }
}

export default vModal
