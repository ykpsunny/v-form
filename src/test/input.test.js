import React, { useState } from "react";

import Form from '../Form'

import Input from './components/Input'

function InputTest() {
  function onFieldsChange (fileds, allFileds){
    console.log(fileds, allFileds)
  }
	return (
		<Form onFieldsChange={onFieldsChange}>
			{Form.vModal("name", {
				rules: [
					{
						validator: () => {},
						message: "",
					},
				],
			})(
				<Input
					onChange={(e) => {
						console.log(e);
					}}
					defaultValue="name"
				/>
			)}
			{Form.vModal("age", {
				rules: [
					{
						validator: () => {},
						message: "",
					},
				],
			})(
				<Input
					onChange={(e) => {
						console.log(e);
					}}
					defaultValue="age"
				/>
			)}
		</Form>
	);
}


export default InputTest;
