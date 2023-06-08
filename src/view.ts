import {ClassName, View, ViewProps} from '@tweakpane/core';

interface Config {
	colors: Array<string>;
	viewProps: ViewProps;
}

const className = ClassName('chrom');

export class PluginView implements View {
	public readonly element: HTMLElement;

	constructor(doc: Document, config: Config) {
		this.element = doc.createElement('div');
		this.element.classList.add(className());
		config.viewProps.bindClassModifiers(this.element);

		config.colors.forEach((color) => {
			const colorElem = doc.createElement('div');
			colorElem.classList.add(className('col'));
			colorElem.style.backgroundColor = color;
			this.element.appendChild(colorElem);
		});

		config.viewProps.handleDispose(() => {
			// Called when the view is disposing
		});
	}
}
