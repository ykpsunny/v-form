import React from "react";

import Form from "../Form";

import Input from "./components/Input";

function InputTest() {
	function onFieldsChange(fileds, allFileds) {
		// console.log(fileds)
	}
	return (
		<Form onFieldsChange={onFieldsChange}>
			{Form.vModal("name", {
				initialValue: "zs",
				rules: [
					{
						validator: () => {},
						message: "",
					},
				],
			})(<Input />)}
			{Form.vModal("age", {
				initialValue: 18,
				rules: [
					{
						validator: () => {},
						message: "",
					},
				],
			})(<Input />)}
		</Form>
	);
}

export default InputTest;
