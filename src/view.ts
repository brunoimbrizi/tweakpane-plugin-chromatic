import {
	bindValueMap,
	ClassName,
	isEmpty,
	removeChildNodes,
	ValueMap,
	View,
	ViewProps,
} from '@tweakpane/core';

export type PluginPropsObject = {
	colors: Array<string>;
};

export type PluginProps = ValueMap<PluginPropsObject>;

interface Config {
	props: PluginProps;
	viewProps: ViewProps;
}

const className = ClassName('chrom');

export class PluginView implements View {
	public readonly element: HTMLElement;

	constructor(doc: Document, config: Config) {
		this.element = doc.createElement('div');
		this.element.classList.add(className());
		config.viewProps.bindClassModifiers(this.element);

		bindValueMap(config.props, 'colors', (value: Array<string>) => {
			if (isEmpty(value)) {
				removeChildNodes(this.element);
			} else {
				removeChildNodes(this.element);

				const colors = config.props.value('colors');

				colors.rawValue.forEach((color: string) => {
					const colorElem = doc.createElement('div');
					colorElem.classList.add(className('col'));
					colorElem.style.backgroundColor = color;
					this.element.appendChild(colorElem);
				});
			}
		});

		config.viewProps.handleDispose(() => {
			// Called when the view is disposing
		});
	}
}
