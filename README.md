react form v-modal

#### 经过 vModal 包装的控件，表单控件会自动添加 value（或 valuePropName 指定的其他属性）、onChange 属性，数据同步将被 Form 接管，这会导致以下结果：

1、你不再需要 onChange 来做数据同步，但还是可以继续监听 onChange 等事件。
2、你不能用控件的 value 来设置表单域的值。
3、如果要修改 modal 中的值，请使用 setFieldsValue 来改动。
