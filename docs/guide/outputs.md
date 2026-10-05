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
  $formkit: 'primeOutputNumber',
  name: 'number',
  format: 'decimal', // vue-i18n format
}
```

## Naming in FormKit
Outputs are used in schema with **prime** as prefix and the **output name** as suffix.

E.g. OutputText -> primeOutputText

## Supported Outputs

Below is a list of all supported OpenVue output components. Click on a component name to view its full documentation and usage examples. For live examples, see the [OpenVue Outputs Demo](https://formkit-openvue.netlify.app/outputs/).

- [PrimeOutputBoolean](../component/PrimeOutputBoolean.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputboolean))
- [PrimeOutputDate](../component/PrimeOutputDate.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputdate))
- [PrimeOutputDuration](../component/PrimeOutputDuration.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputduration))
- [PrimeOutputLink](../component/PrimeOutputLink.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputlink))
- [PrimeOutputList](../component/PrimeOutputList.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputlist))
- [PrimeOutputNumber](../component/PrimeOutputNumber.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputnumber))
- [PrimeOutputReference](../component/PrimeOutputReference.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputreference))
- [PrimeOutputText](../component/PrimeOutputText.md) ([Live Example](https://formkit-openvue.netlify.app/outputs/outputtext))
