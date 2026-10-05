# Output Components

formkit-openvue can also be used to output data.

Different types of data can be handled.

::: warning
Some outputs depend on vue-i18n e.g. **OutputNumber** or **OutputDate**.

numberFormats / datetimeFormats from vue-i18n are used to display the values accordingly to the selected format.
:::

## Examples

### OutputNumber

```ts
const formkitItem = {
  $formkit: 'formOutputNumber',
  name: 'number',
  format: 'decimal', // vue-i18n format
}
```

## Naming in FormKit
Outputs are used in schema with **form** as prefix and the **output name** as suffix.

E.g. OutputText -> formOutputText

## Supported Outputs

Below is a list of all supported OpenVue output components. Click on a component name to view its full documentation and usage examples. For live examples, see the [OpenVue Outputs Demo](https://formkit-openvue.netlify.app/outputs/).

- [FormOutputBoolean](../component/FormOutputBoolean.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputboolean))
- [FormOutputDate](../component/FormOutputDate.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputdate))
- [FormOutputDuration](../component/FormOutputDuration.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputduration))
- [FormOutputLink](../component/FormOutputLink.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputlink))
- [FormOutputList](../component/FormOutputList.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputlist))
- [FormOutputNumber](../component/FormOutputNumber.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputnumber))
- [FormOutputReference](../component/FormOutputReference.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputreference))
- [FormOutputText](../component/FormOutputText.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputtext))
