---
id: "UiControlClient"
title: "Class: UiControlClient"
sidebar_label: "UiControlClient"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `FluentCommand`

  ↳ **`UiControlClient`**

## Constructors

### constructor

• `Private` **new UiControlClient**(`httpClient`, `clientArgs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpClient` | `HttpClientGot` |
| `clientArgs` | `ClientArgsWithDefaults` |

#### Overrides

FluentCommand.constructor

#### Defined in

[execution/ui-control-client.ts:29](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L29)

## Properties

### \_params

• `Protected` **\_params**: `Map`<`string`, `unknown`\>

#### Inherited from

FluentCommand.\_params

#### Defined in

[execution/dsl.ts:28](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L28)

___

### \_textStr

• `Protected` **\_textStr**: `string` = `''`

#### Inherited from

FluentCommand.\_textStr

#### Defined in

[execution/dsl.ts:26](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L26)

___

### \_uiControllerClient

• `Private` `Optional` **\_uiControllerClient**: `UiControllerClient`

#### Defined in

[execution/ui-control-client.ts:27](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L27)

___

### prev

• `Protected` `Optional` **prev**: `FluentBase`

#### Inherited from

FluentCommand.prev

___

### secretText

• `Private` **secretText**: `undefined` \| `string` = `undefined`

#### Defined in

[execution/ui-control-client.ts:132](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L132)

## Accessors

### executionRuntime

• `Private` `get` **executionRuntime**(): `ExecutionRuntime`

#### Returns

`ExecutionRuntime`

#### Defined in

[execution/ui-control-client.ts:60](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L60)

___

### inferenceClient

• `Private` `get` **inferenceClient**(): `InferenceClient`

#### Returns

`InferenceClient`

#### Defined in

[execution/ui-control-client.ts:56](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L56)

___

### params

• `Protected` `get` **params**(): `Map`<`string`, `unknown`\>

#### Returns

`Map`<`string`, `unknown`\>

#### Inherited from

FluentCommand.params

#### Defined in

[execution/dsl.ts:68](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L68)

___

### textStr

• `Protected` `get` **textStr**(): `string`

#### Returns

`string`

#### Inherited from

FluentCommand.textStr

#### Defined in

[execution/dsl.ts:66](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L66)

___

### uiControllerClient

• `Private` `get` **uiControllerClient**(): `UiControllerClient`

#### Returns

`UiControllerClient`

#### Defined in

[execution/ui-control-client.ts:47](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L47)

## Methods

### annotate

▸ **annotate**(`annotationRequest?`): `Promise`<`Annotation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationRequest` | `AnnotationRequest` |

#### Returns

`Promise`<`Annotation`\>

#### Defined in

[execution/ui-control-client.ts:87](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L87)

___

### annotateByDefault

▸ `Private` **annotateByDefault**(`testStepState`, `customElements?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `testStepState` | `TestStepState` | `undefined` |
| `customElements` | `CustomElement`[] | `[]` |

#### Returns

`Promise`<`void`\>

#### Defined in

[execution/ui-control-client.ts:64](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L64)

___

### annotateInteractively

▸ **annotateInteractively**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[execution/ui-control-client.ts:102](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L102)

___

### click

▸ **click**(): `FluentFilters`

Clicks on the filtered element.

#### Returns

`FluentFilters`

#### Inherited from

FluentCommand.click

#### Defined in

[execution/dsl.ts:2214](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2214)

___

### close

▸ **close**(): `void`

closes the connection to the controlui-server`.

#### Returns

`void`

#### Defined in

[execution/ui-control-client.ts:191](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L191)

___

### commandStringBuilder

▸ `Protected` **commandStringBuilder**(`currentInstruction?`, `paramsList?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `currentInstruction` | `string` | `''` |
| `paramsList` | `Map`<`string`, `unknown`[]\> | `undefined` |

#### Returns

`Promise`<`void`\>

#### Inherited from

FluentCommand.commandStringBuilder

#### Defined in

[execution/dsl.ts:43](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L43)

___

### connect

▸ **connect**(): `Promise`<`UiControllerClientConnectionState`\>

#### Returns

`Promise`<`UiControllerClientConnectionState`\>

#### Defined in

[execution/ui-control-client.ts:82](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L82)

___

### exec

▸ **exec**(`instruction`, `customElementJson?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `instruction` | `string` | `undefined` |
| `customElementJson` | `CustomElementJson`[] | `[]` |

#### Returns

`Promise`<`void`\>

#### Overrides

FluentCommand.exec

#### Defined in

[execution/ui-control-client.ts:110](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L110)

___

### execOnShell

▸ **execOnShell**(`shell_command`): `Exec`

Executes a shell command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shell_command` | `string` | A shell command which is executed. |

#### Returns

`Exec`

#### Inherited from

FluentCommand.execOnShell

#### Defined in

[execution/dsl.ts:2365](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2365)

___

### expect

▸ **expect**(): `FluentFiltersCondition`

Expects a condition, e.g., `exists()` or `notExits()`,
 e.g., `...expect().text().withText('Login').exists()`.

#### Returns

`FluentFiltersCondition`

#### Inherited from

FluentCommand.expect

#### Defined in

[execution/dsl.ts:2203](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2203)

___

### mouseDoubleLeftClick

▸ **mouseDoubleLeftClick**(): `Exec`

Double-clicks with left mouse key.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseDoubleLeftClick

#### Defined in

[execution/dsl.ts:2409](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2409)

___

### mouseDoubleMiddleClick

▸ **mouseDoubleMiddleClick**(): `Exec`

Double-clicks with middle mouse key.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseDoubleMiddleClick

#### Defined in

[execution/dsl.ts:2431](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2431)

___

### mouseDoubleRightClick

▸ **mouseDoubleRightClick**(): `Exec`

Double-clicks with right mouse key.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseDoubleRightClick

#### Defined in

[execution/dsl.ts:2420](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2420)

___

### mouseLeftClick

▸ **mouseLeftClick**(): `Exec`

Clicks with left mouse key.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseLeftClick

#### Defined in

[execution/dsl.ts:2376](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2376)

___

### mouseMiddleClick

▸ **mouseMiddleClick**(): `Exec`

Clicks with middle mouse key.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseMiddleClick

#### Defined in

[execution/dsl.ts:2398](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2398)

___

### mouseRightClick

▸ **mouseRightClick**(): `Exec`

Clicks with right mouse key.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseRightClick

#### Defined in

[execution/dsl.ts:2387](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2387)

___

### mouseToggleDown

▸ **mouseToggleDown**(): `Exec`

Toggles mouse down.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseToggleDown

#### Defined in

[execution/dsl.ts:2442](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2442)

___

### mouseToggleUp

▸ **mouseToggleUp**(): `Exec`

Toggles mouse up.

#### Returns

`Exec`

#### Inherited from

FluentCommand.mouseToggleUp

#### Defined in

[execution/dsl.ts:2453](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2453)

___

### moveMouse

▸ **moveMouse**(`x_coordinate`, `y_coordinate`): `Exec`

Moves the mouse to the absolute x and y coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_coordinate` | `number` | A (positive/negative) x coordinate. |
| `y_coordinate` | `number` | A (positive/negative) y coordinate. |

#### Returns

`Exec`

#### Inherited from

FluentCommand.moveMouse

#### Defined in

[execution/dsl.ts:2336](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2336)

___

### moveMouseRelatively

▸ **moveMouseRelatively**(`x_offset`, `y_offset`): `Exec`

Moves the mouse from the current position (relative) in x and y direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_offset` | `number` | A (positive/negative) x direction. |
| `y_offset` | `number` | A (positive/negative) y direction. |

#### Returns

`Exec`

#### Inherited from

FluentCommand.moveMouseRelatively

#### Defined in

[execution/dsl.ts:2322](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2322)

___

### moveMouseRelativelyTo

▸ **moveMouseRelativelyTo**(`x_offset`, `y_offset`): `FluentFilters`

Moves the mouse relatively to an element in the direction.
This can be used when the mouse should not hover over on an element anymore.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_offset` | `number` | A (positive/negative) x direction. |
| `y_offset` | `number` | A (positive/negative) y direction. |

#### Returns

`FluentFilters`

#### Inherited from

FluentCommand.moveMouseRelativelyTo

#### Defined in

[execution/dsl.ts:2267](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2267)

___

### moveMouseTo

▸ **moveMouseTo**(): `FluentFilters`

Move mouse over the filtered element.

#### Returns

`FluentFilters`

#### Inherited from

FluentCommand.moveMouseTo

#### Defined in

[execution/dsl.ts:2225](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2225)

___

### pressAndroidKey

▸ **pressAndroidKey**(`key`): `Exec`

Press one Android keys like `DEL`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `ANDROID_KEY` | A Android key |

#### Returns

`Exec`

#### Inherited from

FluentCommand.pressAndroidKey

#### Defined in

[execution/dsl.ts:2541](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2541)

___

### pressAndroidThirdKey

▸ **pressAndroidThirdKey**(`first_key`, `second_key`, `third_key`): `Exec`

Press three Android keys like `CTRL+ALT+DEL`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first_key` | `ANDROID_KEY` | A Android key |
| `second_key` | `ANDROID_KEY` | A Android key |
| `third_key` | `ANDROID_KEY` | A Android key |

#### Returns

`Exec`

#### Inherited from

FluentCommand.pressAndroidThirdKey

#### Defined in

[execution/dsl.ts:2510](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2510)

___

### pressAndroidTwoKey

▸ **pressAndroidTwoKey**(`first_key`, `second_key`): `Exec`

Press two Android keys like `ALT+F4`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first_key` | `ANDROID_KEY` | A Android key |
| `second_key` | `ANDROID_KEY` | A Android key |

#### Returns

`Exec`

#### Inherited from

FluentCommand.pressAndroidTwoKey

#### Defined in

[execution/dsl.ts:2528](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2528)

___

### pressKey

▸ **pressKey**(`key`): `Exec`

Press one keys like `DEL`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `PC_AND_MODIFIER_KEY` | A key |

#### Returns

`Exec`

#### Inherited from

FluentCommand.pressKey

#### Defined in

[execution/dsl.ts:2495](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2495)

___

### pressThreeKeys

▸ **pressThreeKeys**(`first_key`, `second_key`, `third_key`): `Exec`

Press three keys like `CTRL+ALT+DEL`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first_key` | `MODIFIER_KEY` | A modifier key |
| `second_key` | `MODIFIER_KEY` | A modifier key |
| `third_key` | `PC_KEY` | A key |

#### Returns

`Exec`

#### Inherited from

FluentCommand.pressThreeKeys

#### Defined in

[execution/dsl.ts:2468](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2468)

___

### pressTwoKeys

▸ **pressTwoKeys**(`first_key`, `second_key`): `Exec`

Press two keys like `ALT+F4`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first_key` | `MODIFIER_KEY` | A modifier key |
| `second_key` | `PC_KEY` | A key |

#### Returns

`Exec`

#### Inherited from

FluentCommand.pressTwoKeys

#### Defined in

[execution/dsl.ts:2482](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2482)

___

### scroll

▸ **scroll**(`x_offset`, `y_offset`): `Exec`

Scrolls based on the current mouse position in the x and y direction.

**Important**: Mouse must be positioned in a scrollable area.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_offset` | `number` | A (positive/negative) x direction. |
| `y_offset` | `number` | A (positive/negative) y direction. |

#### Returns

`Exec`

#### Inherited from

FluentCommand.scroll

#### Defined in

[execution/dsl.ts:2352](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2352)

___

### scrollInside

▸ **scrollInside**(`x_offset`, `y_offset`): `FluentFilters`

Moves mouse to the filtered element and scrolls in the x and y direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_offset` | `number` | A (positive/negative) x direction. |
| `y_offset` | `number` | A (positive/negative) y direction. |

#### Returns

`FluentFilters`

#### Inherited from

FluentCommand.scrollInside

#### Defined in

[execution/dsl.ts:2252](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2252)

___

### swipe

▸ **swipe**(`x_offset`, `y_offset`): `FluentFilters`

Swipe an element in the x and y direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_offset` | `number` | A x direction. positive an negative values are accepted |
| `y_offset` | `number` | A y direction. positive an negative values are accepted |

#### Returns

`FluentFilters`

#### Inherited from

FluentCommand.swipe

#### Defined in

[execution/dsl.ts:2281](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2281)

___

### type

▸ **type**(`text`, `options?`): `Exec`

Types a text at the current position.

By default, the `text` is included in the logs and sent over to the askui Inference server to
predict in which context the typing has to occur. You can exclude the `text` from the logs
and the request to the askui Inference server setting `options.isSecret` to `true`.
This should not change the quality of the prediction of the askui Inference server. In this
case, `options.secretMask` is included in logs and sent over instead of the `text`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | A text to type. |
| `options` | `Object` |  |
| `options.isSecret` | `undefined` \| `boolean` | - |
| `options.secretMask` | `undefined` \| `string` | - |

#### Returns

`Exec`

#### Overrides

FluentCommand.type

#### Defined in

[execution/ui-control-client.ts:179](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L179)

___

### typeIn

▸ **typeIn**(`text`, `[options]?`): `FluentFilters`

Types a text inside the filtered element.

By default, the `text` is included in the logs and sent over to the askui Inference server to
predict in which context the typing has to occur. You can exclude the `text` from the logs
and the request to the askui Inference server setting `options.isSecret` to `true`.
This should not change the quality of the prediction of the askui Inference server. In this
case, `options.secretMask` is included in logs and sent over instead of the `text`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | A text to type. |
| `[options]` | `Object` |  |
| `[options].isSecret` | `undefined` \| `boolean` | - |
| `[options].secretMask` | `undefined` \| `string` | - |

#### Returns

`FluentFilters`

#### Overrides

FluentCommand.typeIn

#### Defined in

[execution/ui-control-client.ts:152](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L152)

___

### waitFor

▸ **waitFor**(`timeValue`, `timeUnit`): `Exec`

Waits for `<timeValue> <timeUnit>`, e.g., 10 seconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeValue` | `number` | A number of time unit, e.g., ms or min, to wait for. |
| `timeUnit` | `TimeUnit` | A time unit, e.g., ms, s or min. |

#### Returns

`Exec`

#### Inherited from

FluentCommand.waitFor

#### Defined in

[execution/dsl.ts:2308](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L2308)

___

### addParams

▸ `Static` `Protected` **addParams**(`paramsList`, `params`): `Map`<`string`, `unknown`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paramsList` | `Map`<`string`, `unknown`[]\> |
| `params` | `Map`<`string`, `unknown`\> |

#### Returns

`Map`<`string`, `unknown`[]\>

#### Inherited from

FluentCommand.addParams

#### Defined in

[execution/dsl.ts:30](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/dsl.ts#L30)

___

### build

▸ `Static` **build**(`clientArgs?`): `Promise`<[`UiControlClient`](UiControlClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientArgs?` | `ClientArgs` |

#### Returns

`Promise`<[`UiControlClient`](UiControlClient.md)\>

#### Defined in

[execution/ui-control-client.ts:36](https://github.com/askui/askui/blob/4120833/packages/askui-nodejs/src/execution/ui-control-client.ts#L36)
