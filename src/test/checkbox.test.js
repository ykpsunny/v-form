import React from "react";

import Form from "../Form";

import Checkbox from "./components/Checkbox";

function CheckboxTest() {
	function onFieldsChange(fileds, allFileds) {
		// console.log(fileds);
	}
	return (
		<Form onFieldsChange={onFieldsChange}>
			{Form.vModal("hobby", {
				initialValue: true,
				valuePropName: "checked",
				rules: [
					{
						validator: () => {},
						message: "",
					},
				],
			})(
				<Checkbox
					onChange={(e) => {
						console.log(e);
					}}
				/>
			)}
			{Form.vModal("va", {
        valuePropName: "checked",
        initialValue: true,
				rules: [
					{
						validator: () => {},
						message: "",
					},
				],
			})(
				<Checkbox
					onChange={(e) => {
						console.log(e);
					}}
				/>
			)}
		</Form>
	);
}

export default CheckboxTest;
